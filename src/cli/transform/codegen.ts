import ts from "typescript";

export type Document = {
    namespace: string;
    flags: { key: string; variants?: { key: string }[] }[];
    segments?: {
        constraints?: {
            property: string;
            type: "STRING_COMPARISON_TYPE" | "BOOLEAN_COMPARISON_TYPE" | "NUMBER_COMPARISON_TYPE";
        }[];
    }[];
};

function comparisonTypeToSyntaxKind(value: string): ts.KeywordTypeSyntaxKind {
    switch (value) {
        case "NUMBER_COMPARISON_TYPE":
            return ts.SyntaxKind.NumberKeyword;
        case "BOOLEAN_COMPARISON_TYPE":
            return ts.SyntaxKind.BooleanKeyword;
        default:
            return ts.SyntaxKind.StringKeyword;
    }
}

function getAstNodes(document: Document) {
    const factory = ts.factory;
    const flags = factory.createTypeAliasDeclaration(
        [factory.createToken(ts.SyntaxKind.ExportKeyword)],
        factory.createIdentifier("Flags"),
        undefined,
        factory.createUnionTypeNode(
            document.flags.map((flag) =>
                factory.createTypeLiteralNode([
                    factory.createPropertySignature(
                        undefined,
                        factory.createIdentifier("key"),
                        undefined,
                        factory.createLiteralTypeNode(factory.createStringLiteral(flag.key))
                    ),
                    factory.createPropertySignature(
                        undefined,
                        factory.createIdentifier("value"),
                        undefined,
                        flag.variants
                            ? factory.createUnionTypeNode(
                                  flag.variants?.map((variant) =>
                                      factory.createLiteralTypeNode(factory.createStringLiteral(variant.key))
                                  )
                              )
                            : factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword)
                    ),
                ])
            )
        )
    );
    const context = factory.createTypeAliasDeclaration(
        [factory.createToken(ts.SyntaxKind.ExportKeyword)],
        factory.createIdentifier("Context"),
        undefined,
        factory.createTypeLiteralNode(
            document.segments?.flatMap(
                (segment) =>
                    segment.constraints?.map((constraint) =>
                        factory.createPropertySignature(
                            undefined,
                            factory.createIdentifier(constraint.property),
                            undefined,
                            factory.createKeywordTypeNode(comparisonTypeToSyntaxKind(constraint.type))
                        )
                    ) ?? []
            )
        )
    );
    return factory.createNodeArray([flags, context]);
}

export function codegen(document: Document) {
    const resultFile = ts.createSourceFile(
        "flipt.ts",
        "",
        ts.ScriptTarget.Latest,
        /*setParentNodes*/ false,
        ts.ScriptKind.TS
    );
    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
    return printer.printList(ts.ListFormat.MultiLine, getAstNodes(document), resultFile);
}
