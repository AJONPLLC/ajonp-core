import { Component, Prop } from '@stencil/core';

import { DataSourceConfiguration } from '../../data/DataSource/DataSource';

@Component({
  tag: 'ajonp-grid',
  styleUrl: 'grid.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() columns: string;

  /**
   * The middle name
   */
  @Prop() dataSource: DataSourceConfiguration;

  render() {
    return <span>this is the grid</span>;
  }
}
