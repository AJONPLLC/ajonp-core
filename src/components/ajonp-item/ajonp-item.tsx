import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ajonp-item',
  styleUrl: 'ajonp-item.css',
  shadow: true
})
export class AjonpItem {
  @Prop() color: string;
  @Prop() src: string;
  @Prop() labelText: string;
  @Prop() buttonText: string;
  @Prop() buttonType?: string;
  render() {
    return (
      <span>
        <div>
          <ajonp-avatar src={this.src} />
          <ajonp-label color={this.color}>{this.labelText}</ajonp-label>
          <ajonp-button button-type={this.buttonType}>
            {this.buttonText}
          </ajonp-button>
        </div>
      </span>
    );
  }
}
