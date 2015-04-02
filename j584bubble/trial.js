$(function(){ // on dom ready

var cy = cytoscape({
  container: document.getElementById('cy'),
  
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 1,
        'text-outline-color': '#bdebf6',
        'shape': 'square',
        'width': 'mapData(weight, 10, 10, 10, 10)',
        'background-size': '100%',
        'font-color': '#111519',
        'font-family': 'Montserrat'
      })
    .selector('edge')
      .css({
        'target-arrow-shape': 'triangle',
        'width': 3,
        'line-color': '#6e757a',
        'target-arrow-color': '#6e757a'
      })
    .selector('.highlighted')
      .css({
        'background-color': '#f28a61',
        'line-color': '#f28a61',
        'target-arrow-color': '#f28a61',
        'transition-property': 'background-color, line-color, target-arrow-color',
        'transition-duration': '0.015s'
      })
    .selector('edge.static')
      .css({
        'target-arrow-shape': 'none',
        'line-style': 'dashed',
        'line-color': '#6e757a'
      })
    .selector('#a')
      .css({
        'background-color': '#bdebf6',
        'width': 150,
        'height': 45,
        //'background-image': 'https://farm6.staticflickr.com/5109/5817854163_eaccd688f5_b.jpg',
        'text-valign': 'none'
      })
    .selector('#b, #h, #t, #k, #p')
      .css({
        'background-color': '#99d7e7',
        'text-outline-color': '#99d7e7',
        'width': 160,
        'height': 45,
      })
    .selector('#c, #d3, #i, #j, #l, #m, #r, #q')
      .css({
        'background-color': '#5092a2',
        'text-outline-color': '#5092a2',
        'width': 150,
        'height': 45
      }),

  
  elements: {
      nodes: [
        { data: { id: 'a', name: 'Kennedy Impedi' } },
        { data: { id: 'b', name: 'Family'  } },
        { data: { id: 'c', name: 'Wife'  } },
        //{ data: { id: 'd', name: 'Daughter 1'  } },
        //{ data: { id: 'e', name: 'Daughter 2'  } },
        //{ data: { id: 'f', name: 'Daughter 3'  } },
        //{ data: { id: 'g', name: 'In Laws'  } },
        { data: { id: 'd3', name: 'Daughters', weight: 100 } },
        { data: { id: 'h', name: 'School Community', weight: 100  } },
        { data: { id: 'i', name: 'Teachers'  } },
        { data: { id: 'j', name: 'Students'  } },
        { data: { id: 'k', name: 'CARE'  } },
        { data: { id: 'l', name: 'Mothers Group'  } },
        { data: { id: 'm', name: 'Youth Club'  } },
        //{ data: { id: 'n', name: 'Girls'  } },
        //{ data: { id: 'o', name: 'Boys'  } },
        { data: { id: 'p', name: 'Champiti FC'  } },
        { data: { id: 'q', name: 'Boys'  } },
        { data: { id: 'r', name: 'Secret Men'  } },
        //{ data: { id: 's', name: 'Community Families'  } },
        { data: { id: 't', name: 'Health Care Center'  } } 
      ], 
      
      edges: [
        //first level
        { data: { id: 'a"b', weight: 1, source: 'a', target: 'b' }, classes: 'first-level'  }, //start to family
        { data: { id: 'ah', weight: 1, source: 'a', target: 'h' }, classes: 'first-level'  }, //start to school
        { data: { id: 'ap', weight: 7, source: 'a', target: 'p' }, classes: 'first-level'  }, //ken to soccer team
        { data: { id: 'at', weight: 7, source: 'a', target: 't' }, classes: 'first-level'  }, //ken to health care center
        { data: { id: 'ak', weight: 7, source: 'a', target: 'k' }, classes: 'first-level'  }, //ken to care
        
        //second level
          //care connections (k)
          { data: { id: 'kl', weight: 7, source: 'k', target: 'l' } }, //ken to mothers
          { data: { id: 'km', weight: 7, source: 'k', target: 'm' } }, //ken to youth club
          { data: { id: 'kr', weight: 7, source: 'k', target: 'r' } }, //ken to secret men
        
          //family connections (b)
          { data: { id: 'bc', weight: 3, source: 'b', target: 'c' } }, //family to wife
          { data: { id: 'bd3', weight: 4, source: 'b', target: 'd3' } }, //family to daughters
          { data: { id: 'bg', weight: 2, source: 'b', target: 'g' } }, //family to inlaws
          { data: { id: 'd3d', weight: 5, source: 'd3', target: 'd' } }, //daughters to daughter
          { data: { id: 'd3e', weight: 5, source: 'd3', target: 'e' } }, //daughters to daughter
          { data: { id: 'd3f', weight: 6, source: 'd3', target: 'f' } }, //daughters to daughter

          //school connections
          { data: { id: 'hi', weight: 7, source: 'h', target: 'i' } }, //school to teachers
          { data: { id: 'hj', weight: 7, source: 'h', target: 'j' } }, //school to students

        //third level
          { data: { id: 'mn', weight: 7, source: 'm', target: 'n' } }, //youth club to girls
          { data: { id: 'mo', weight: 7, source: 'm', target: 'o' } }, //youth club to boys
          { data: { id: 'pq', weight: 7, source: 'p', target: 'q' } }, //soccer team to boys
          { data: { id: 'rs', weight: 7, source: 'r', target: 's' } }, //secret men to community families
        
        
        //static transitions
        { data: { id: 'kl', weight: 1, source: 'k', target: 'l' }, classes: 'static' },
        { data: { id: 'ij', weight: 1, source: 'i', target: 'j' }, classes: 'static' },
        { data: { id: 'lt', weight: 1, source: 'l', target: 't' }, classes: 'static' },
        { data: { id: 'd3h', weight: 1, source: 'd3', target: 'h' }, classes: 'static' },
        { data: { id: 'jp', weight: 1, source: 'j', target: 'p' }, classes: 'static' }
      ]
    },
  
  layout: {
    name: 'breadthfirst',
    directed: true,
    roots: '#a',
    padding: 10
  }
});
  
var bfs = cy.elements().bfs('#a', function(){}, true);

var i = 0;
var highlightNextEle = function(){
  bfs.path[i].addClass('highlighted');
  if( i < bfs.path.length ){
    i++;
    setTimeout(highlightNextEle, 200);
  }
};

// kick off first highlight
highlightNextEle();


//TOOLTIPS
cy.$('#a').qtip({
  content: 'Kennedy !',
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#d3').qtip({
  content: 'Kennedy has three daughters: Elisa, BLANK AND BLANK.',
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#c').qtip({
  content: 'His wife takes care of the children and works hard everyday. Impedi focuses on providing enough food for the family throughout the year by working on the farm.',
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#r').qtip({
  content: 'Impedi is an active member of the Secret Men, a group of males who encourage each other to discuss the topic of maternal health. The group builds allies and provides resources to men in the community.',
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#h').qtip({
  content: 'Impedi serves is a chair of the school committee. He also currently serves as the vice secretary for the group. Through this group he networks with teachers and speaks to students about his passions.',
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#p').qtip({
  content: 'He serves as the coach of Champiti FC, a local football team of over eleven teenage boys. Impedi coaches the boys both through life and in the sport.',
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#t').qtip({
  content: 'Although Impedi is not directly related to the health care center, he visits to gain valuable information to spread to his community.',
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#k').qtip({
  content: 'The Champiti Community Action Group was created by the CARE Maternal Health Alliance Project. It is a collection of community members who work towards safer motherhood through open conversation.',
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

}); // on dom ready