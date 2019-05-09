import { Component, Element, Prop, State } from '@stencil/core';

import { Item } from '../../models/Item';

@Component({
  tag: 'ajonp-item-grid',
  styleUrl: 'ajonp-item-grid.css'
})
export class AjonpItemGrid {
  // Incoming Property elements
  @Prop() defaultColor: string;
  @Prop() defaultSrc: string;
  @Prop() defaultLabelText: string;
  @Prop() defaultButtonText: string;
  @Prop() buttonType?: string;

  // State to track inside of the component
  @State() items: Item[] = [];

  //Host Element to access the form data instead of looking at entire document
  @Element() el: HTMLElement;

  addItem() {
    const item = new Item();
    item.src = (this.el.querySelector('#src') as HTMLInputElement).value;
    item.labelText = (this.el.querySelector(
      '#labelText'
    ) as HTMLInputElement).value;
    item.color = (this.el.querySelector('#color') as HTMLInputElement).value;
    item.buttonText = (this.el.querySelector(
      '#buttonText'
    ) as HTMLInputElement).value;
    //Add newly created Item to array non-mutated
    this.items = [...this.items, item];
  }
  scratchItem(key: number) {
    //Remove newly created Item to array non-mutated
    this.items = [...this.items.slice(0, key), ...this.items.slice(key + 1)]; //Return an array from before the key and after the key.
  }

  render() {
    return (
      <div>
        <h3>Grid Items {this.items.length}</h3>
        <hr />
        Avatar
        <input type="text" id="src" value={this.defaultSrc} />
        <br />
        Label
        <input type="text" id="labelText" value={this.defaultLabelText} />
        <br />
        Color
        <input type="text" id="color" value={this.defaultColor} />
        <br />
        Button
        <input type="text" id="buttonText" value={this.defaultButtonText} />
        <br />
        <ajonp-button onClick={this.addItem.bind(this)}>Add Item</ajonp-button>
        {this.items.map((item: Item, key: number) => {
          return (
            <ajonp-item
              src={item.src}
              color={item.color}
              label-text={item.labelText}
              button-text={item.buttonText}
              button-type={this.buttonType}
              onClick={this.scratchItem.bind(this, key)}
            />
          );
        })}
      </div>
    );
  }
}
