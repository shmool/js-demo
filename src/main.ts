import './style.scss'
// keep the line above and write your code below.

// DOMContentLoaded is the event that's fired when the DOM is ready
// and we can then search for elements

window.addEventListener('DOMContentLoaded', onDOMLoaded);


function onDOMLoaded(event: Event) {
  console.log(event);

  const graphObj = createGraphElement('My Awesome Graph');

  const myRoot = document.getElementById('root-elem');
  myRoot && myRoot.appendChild(graphObj.graphContainer);

  // this is the same as lines 16+17
  document.getElementById('root-elem')?.appendChild(graphObj.graphContainer);

/*  myRoot.innerHTML = `
  <h2>This is inner HTML</h2>
  <input id="my-input">
  <button id="my-button">Click Here</button>
  
  `;*/

  function doSomething(x, y) {

  }

  const doSomething2 = (x, y) => {
    return x + y;
  };


  [2, 3, 4, 5, 6].forEach((item, index, array) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.innerText = '' + item;
    bar.setAttribute('style', `height: ${item * 20}px`);
    graphObj.graphElement.appendChild(bar);
  });

}


function createGraphElement(graphTitleText: string) {
  const graphContainer = document.createElement('div');
  graphContainer.classList.add('graph-container');
  const graphTitle = document.createElement('div');
  graphContainer.appendChild(graphTitle);
  graphTitle.classList.add('graph-title');
  graphTitle.textContent = graphTitleText;
  const graphElement = document.createElement('div');
  graphElement.classList.add('graph');
  graphContainer.appendChild(graphElement);
  const graphFooter = document.createElement('div');
  graphContainer.appendChild(graphFooter);
  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].forEach(day => {
    const span = document.createElement('span');
    span.textContent = day;
    span.classList.add('bar-label');
    graphFooter.appendChild(span);
  });

  return { graphContainer, graphElement };
}