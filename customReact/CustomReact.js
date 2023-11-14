// Here we inject it
function customRender(customElement, container) {
  /* version little improvement in version 
  // create element
  const domELement = document.createElement(customElement.type);

  // now insert something in newly created element
  domELement.innerHTML = customElement.children;

  // Here insert the attribute of the element in it
  domELement.setAttribute("href", customElement.props.href);
  domELement.setAttribute("target", customElement.props.target);
    
   
  // now append the created element to container
  container.appendChild(domELement);
  */
  const domELement = document.createElement(customElement.type);
  domELement.innerHTML = customElement.children;

  for (const prop in customElement.props) {
    // safety check in early days
    if (prop === "children") continue;
    domELement.setAttribute(prop, customElement.props[prop]);
  }

  container.appendChild(domELement);
}

// Here we create own custom Element
const customElement = {
  type: "a",
  props: {
    href: "https://www.google.co",
    target: "__blank",
  },
  children: "Click Here to visit Google version 2",
};

// get the element where you want to render your component
const container = document.getElementById("root");

// render custom Element but creat this element first
customRender(customElement, container);
