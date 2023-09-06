import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'contador-component',
  styleUrl: 'contador-component.css',
  shadow: true,
})
export class ContadorComponent {
  @Prop() initValue: number;
  @State() count: number;
  
  componentWillLoad() {
    console.log('Componente contador-componente será renderizado');
    this.count = this.initValue || 0;
}


  incrementCount = () => {
    this.count += 1;
  }

  decrementCount = () => {
    if (this.count > 0) {
      this.count -= 1;
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <p>Count: {this.count}</p>
      </div>
    );
  }
}
