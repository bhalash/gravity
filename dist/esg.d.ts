export declare class ESG {
    G: number;
    ESG_EARTH: number;
    precision(value: number, precision?: number): number;
    gravity(mass: number, radius: number): number;
    relative(mass: number, radius: number): number;
    escape(mass: number, radius: number): number;
    orbit(mass: number, radius: number): number;
}
