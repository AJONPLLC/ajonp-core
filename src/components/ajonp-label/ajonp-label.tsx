import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ajonp-label',
  styleUrl: 'ajonp-label.css',
  shadow: true
})
export class AjonpLabel {
  @Prop() color: any;
  render() {
    return (
      <p style={{ color: this.color }}>
        <slot />
      </p>
    );
  }
}
