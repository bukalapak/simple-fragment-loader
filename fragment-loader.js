class FragmentLoader extends HTMLElement {
  async connectedCallback() {
    const fragment = await this.loadFragment()
    this.renderFragment(fragment)
  }

  async loadFragment() {
    const url = this.getAttribute('href')
    const response = await fetch(url)
    return response.text()
  }

  renderFragment(fragment) {
    const node = document.createElement('div')
    node.innerHTML = fragment
    this.appendChild(node)
  }
}

window.customElements.define('fragment-loader', FragmentLoader)
