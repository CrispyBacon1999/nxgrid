import * as React from "react";

export enum Position {
  START = "start",
  END = "end",
  CENTER = "center",
  STRETCH = "stretch",
}

export enum CellMethod {
  /** Leave space at the end of the cells */
  FIT = "auto-fit",
  /** Fill the entire row */
  FILL = "auto-fill",
}

// TODO Allow for grid areas to be used.
export interface IGridProps {
  /** The style of the component. Will overwrite any other styles that are dynamically generated */
  style?: React.CSSProperties;
  /** The number of columns to explicitly add to the grid. Defaults to `12`.
   * When this number of columns is reached, the cells will wrap to the next line.
   * If `direction` is set to column, more columns will be added implicitly on the right.
   */
  cols?: number;
  /** The number of rows to explicitly add to the grid.
   * When this number of rows is reached, more rows will be added implicitly on the bottom.
   * If `direction` is set to column, instead of adding more rows, the cells will begin wrapping at the end of the rows.
   */
  rows?: number;
  /** The number of pixels between grid cells. Defaults to `0`
   * Used to add spacing between cells to make things not super packed together.
   * Values don't add together, so `20px` would be truly 20px between cells, not 40px.
   */
  gap?: number;
  /** Used to have a responsive design. Sets the minimum width an element can get to before wrapping.
   * When this minimum width is reached, the last element will wrap to the next line and the remaining elements will stretch to their maximum width.
   */
  minWidth?: string;
  /** Used to have a responsive design. Sets the maximum width an element can get to before wrapping. Defaults to `1fr`.
   * Typically, this can remain at `1fr` and you will have a consistently justified layout.
   */
  maxWidth?: string;
  /** The height to make the rows, if explicit.
   * Defaults to 1fr, so it will fit to the container size. You probably want to change this.
   * Requires `rows` to be set to have any effect.
   */
  rowHeight?: string;
  /** Used to have a responsive design. Do you want auto-fit or auto-fill?
   * This method will only make a difference if there aren't enough cells to fill the entire first row.
   * `CellMethod.FIT` will not expand all the way to the end of the columns and will fit the row into only the used space.
   * `CellMethod.FILL` will expand all the way to the end of the explicitly defined columns and stretch all the elements to this space (assuming fr units are being used).
   */
  method?: CellMethod;
  /** Design your own custom column widths.
   * Use space seperated column widths to give a different sized grid.
   * Using `1fr` will split the remaining space after explicit measurements up evenly between all of the elements that have a fr size.
   * If you're familiar with CSS Grid already, this value is just shorthand for the `grid-template-columns` css property.
   */
  customCols?: string;
  /** Design your own custom row heights.
   * Use space seperated row heights to give a different sized grid.
   * Using `1fr` will split the remaining space after explicit measurements up evenly between all of the elements that have a fr size.
   * If you're familiar with CSS Grid already, this value is just shorthand for the `grid-template-rows` css property.
   */
  customRows?: string;
  /** Should the grid try to fill in any gaps that show up from odd sized components?
   * This uses an algorithm that will attempt to place elements into any free spaces that appear earlier in the grid.
   * It will likely make your grid appear out of order as elements will be placed where they fit, so don't rely on this for a grid that needs to be perfectly fit.
   */
  dense?: boolean;
  /**
   * Should the grid automatically stack based on columns instead of rows when it hits the max number?
   * Use `row` to add more rows on to the bottom of the grid when the max number of rows is hit.
   * Use `column` to add more columns to the right of the grid when the max number of columns is hit.
   */
  direction?: string;
}

export interface IGridState {}

const defaultCols = 12;

export class Grid extends React.Component<IGridProps, IGridState> {
  constructor(props: IGridProps) {
    super(props);
  }

  render(): any {
    // TODO Change styles based on gridAutoFlow direction
    var style = {
      display: "grid",
      gridTemplateColumns: this.props.method
        ? `repeat(${this.props.method}, minmax(${this.props.minWidth ||
            "0px"}, ${this.props.maxWidth || "1fr"}))`
        : this.props.customCols ||
          `repeat(${this.props.cols || defaultCols}, 1fr)`,
      gridGap: `${this.props.gap}px`,
      gridTemplateRows: this.props.customRows
        ? this.props.customRows
        : this.props.rows
        ? `repeat(${this.props.rows}, ${this.props.rowHeight || "1fr"})`
        : "",
      gridAutoFlow: this.props.dense ? "dense" : "",
    };

    Object.assign(style, this.props.style);

    return <div style={style}>{this.props.children}</div>;
  }
}

export interface ICellProps {
  /** The style of the component. Will overwrite any other styles that are dynamically generated */
  style?: React.CSSProperties;
  /** How many lines to span the element. Can be a number or a string of "full" */
  span?: string | number;
  /** Where to start the element. Can be a number, or a string of "start" */
  start?: string | number;
  /** Will set the grid-area to this property so it can be used for responsive layouts */
  name?: string;
}

export interface ICellState {}

export class Cell extends React.Component<ICellProps, ICellState> {
  render() {
    var style = {
      gridColumn:
        this.props.start && this.props.span
          ? `${this.props.start != "start" ? this.props.start : 1} / ${
              this.props.span != "full" ? `span ${this.props.span}` : -1
            }`
          : this.props.start && !this.props.span
          ? `${this.props.start} / span 1`
          : this.props.span && !this.props.start
          ? `span ${this.props.span}`
          : "span 1",
      gridArea: this.props.name,
    };

    Object.assign(style, this.props.style);

    return <div style={style}>{this.props.children}</div>;
  }
}
