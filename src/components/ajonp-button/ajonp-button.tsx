import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ajonp-button',
  styleUrl: 'ajonp-button.css',
  shadow: true
})
export class AjonpButton {
  @Prop() buttonType?: string;

  render() {
    return (
      <span>
        {this.buttonType ? (
          <button class="secondary">
            <slot />
          </button>
        ) : (
          <button class="primary">
            <slot />
          </button>
        )}
      </span>
    );
  }
}
