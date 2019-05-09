import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ajonp-avatar',
  styleUrl: 'ajonp-avatar.css',
  shadow: true
})
export class AjonpAvatar {
  @Prop() src: any;
  render() {
    return <img src={this.src} />;
  }
}
