// Code generated by xgen. DO NOT EDIT.

// MyType1 ...
export type MyType1 = Uint8Array;

// MyType2 ...
export class MyType2 {
	LengthAttr: number | null;
	Value: Uint8Array;
}

// MyType3 ...
export class MyType3 {
	LengthAttr: number | null;
	Value: string;
}

// MyType4 ...
export class MyType4 {
	Title: string;
	Blob: Uint8Array;
	Timestamp: string;
}

// MyType5 ...
export type MyType5 = string;

// MyType6 ...
export class MyType6 {
	CodeAttr: string | null;
	IdentifierAttr: number | null;
}

// MyType7 ...
export class MyType7 {
	OriginAttr: string;
	Value: string;
}

// TopLevel ...
export class TopLevel extends MyType6  {
	CostAttr: number | null;
	Nested: MyType7;
}
