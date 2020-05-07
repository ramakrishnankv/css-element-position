let link1;

window.onload = (e) => {

  link1 = document.getElementById('link1');
  // link1.addEventListener('click', () => {
  //   console.log('link clicked')
  //   let item = document.getElementById('link1-d');
  //   const statContent = 'This is a static positioned element, clicking the above link this will changed to absolute positioned element. Try!';
  //   const absContent = 'This is an absolute positioned element, clicking the link this will changed to static positioned element. When scrolled the absolute positioned element will move accordingly. Try!';
  //   item.className = (item.className === 'staticItem') ? 'absItem' : 'staticItem';
  //   item.innerHTML = (item.className === 'staticItem') ? statContent : absContent;
  // });

  createAgents();
}

const ramki = {};

ramki.positionable = class {
  constructor(elem) {
    this.toggleLink = elem.querySelector('[data-name="toggleLink"]');
    this.toggleContent = elem.querySelector('[data-name="toggleContent"]');
    this.props = JSON.parse(elem.getAttribute('data-props'));
    this.initClass = this.props['initClass'];
    this.replClass = this.props['replClass'];
    this.initText = this.props['initText'];
    this.replText = this.props['replText'];
    this.setInitContent();
    this.toggleLink.addEventListener('click', this.clickHandler);
  };

  setInitContent = () => {
    const item = this.toggleContent;
    item.innerHTML = this.initText;
  }

  clickHandler = () => {
    const item = this.toggleContent;
    item.className = (item.className === 'staticItem') ? this.replClass : this.initClass;
    item.innerHTML = (item.className === 'staticItem') ? this.initText : this.replText;
    window.scrollTo(0, item.offsetTop)
  }
};

const createAgents = () => {
  const agents = document.querySelectorAll('[data-agent]');
  agents.forEach((elem) => {
    const agentAttr = elem.getAttribute('data-agent');
    elem = new ramki[agentAttr](elem);
  })
};



