export type SqipOptions = {
    input: string | Buffer;
    outputFileName?: string;
    output?: string;
    silent?: boolean;
    parseableOutput?: boolean;
    plugins?: PluginOption[];
    width?: number;
};

export type PluginOption = PluginObject | string;

export type PluginObject =
    | {
          name: "sqip-plugin-primitive";
          options?: Partial<PrimitiveOptions>;
      }
    | {
          name: "sqip-plugin-potrace";
          options?: Partial<PotraceOptions>;
      }
    | {
          name: "sqip-plugin-blur";
          options?: Partial<BlurOptions>;
      }
    | {
          name: "sqip-plugin-pixels";
          options?: Partial<PixelsOptions>;
      }
    | {
          name: "sqip-plugin-svgo";
          options?: Partial<SvgoOptions>;
      }
    | {
          name: "sqip-plugin-data-uri";
      };

export type PotraceOptions = {
    color: string;
    background: string;
    posterize: boolean;
    steps: string[];
    turnPolicy: string;
    turdSize: number;
    alphaMax: number;
    optCurve: boolean;
    optTolerance: number;
    threshold: number;
    blackOnWhite: boolean;
};

export enum PrimitiveMode {
    Combo,
    Triangle,
    Rect,
    Ellipse,
    Circle,
    Rotatedrect,
    Beziers,
    Rotatedellipse,
    Polygon,
}

export type PrimitiveOptions = {
    numberOfPrimitives: number;
    mode: PrimitiveMode;
    rep: number;
    alpha?: number;
    background?: string;
    cores?: number;
    nth?: number;
};

export type SvgoOptions = {
    multipass: boolean;
    floatPrecision: number;
};

export type PixelsOptions = {
    width: number;
    pixelSize: number;
};

export type BlurOptions = {
    blur: number;
};
