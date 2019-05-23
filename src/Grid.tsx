import * as React from "react";

export enum Position {
  START = "start",
  END = "end",
  CENTER = "center",
  STRETCH = "stretch"
}

export enum CellMethod {
  /** Leave space at the end of the cells */
  FIT = "auto-fit",
  /** Fill the entire row */
  FILL = "auto-fill"
}

export interface IGridProps {
  /** The style of the component. Will overwrite any other styles that are dynamically generated */
  style?: React.CSSProperties;
  /** The number of columns to add to the grid. Defaults to `12` */
  cols?: number;
  /** The gap between grid cells. Defaults to `0px` */
  gap?: number;
  /** Used to have a responsive design. Sets the minimum width an element can get to before wrapping. */
  minWidth?: string;
  /** Used to have a responsive design. Sets the maximum width an element can get to before wrapping. Defaults to `1fr` */
  maxWidth?: string;
  /** Used to have a responsive design. Do you want auto-fit or auto-fill?  */
  method?: CellMethod;
  /** Design your own custom column widths. */
  customCols?: string;
}

export interface IGridState {}

const defaultCols = 12;

export class Grid extends React.Component<IGridProps, IGridState> {
  constructor(props: IGridProps) {
    super(props);
  }

  render(): any {
    var style = {
      display: "grid",
      gridTemplateColumns: this.props.method
        ? `repeat(${this.props.method}, minmax(${this.props.minWidth}, ${this
            .props.maxWidth || "1fr"}))`
        : this.props.customCols ||
          `repeat(${this.props.cols || defaultCols}, 1fr)`,
      gridGap: `${this.props.gap}px`
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
}

export interface ICellState {}

export class Cell extends React.Component<ICellProps, ICellState> {
  render() {
    var style: React.CSSProperties = {
      gridColumn:
        this.props.start && this.props.span
          ? `${this.props.start == "start" ? this.props.start : 1} / ${
              this.props.span == "full" ? this.props.span : "-1"
            }`
          : this.props.start && !this.props.span ? `${this.props.start} / span 1`
          : this.props.span && !this.props.start ? `span ${this.props.span}`
    };

    Object.assign(style, this.props.style);

    return <div>{this.props.children}</div>;
  }
}
