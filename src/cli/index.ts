#!/usr/bin/env node
import cac from "cac";
import { registerTransformCommand } from "./transform";

async function main(): Promise<void> {
    const cli = cac("flipt-node");

    registerTransformCommand(cli);

    cli.help();
    cli.parse(process.argv, { run: false });

    try {
        if (!cli.matchedCommand && !cli.options.help) {
            throw new Error(`Failed to match command "${process.argv.slice(2).join(" ")}"`);
        } else {
            await cli.runMatchedCommand();
        }
    } catch (error: unknown) {
        console.error("Error:", error instanceof Error ? error.message : error);
        process.exit(1);
    }

    process.exit(0);
}

main();
