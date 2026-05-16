Run a full project health check for the TwoApps website. Execute these steps in order and report results:

1. Run `npm run typecheck` — list every TypeScript error with file path and message.
2. Run `npm run lint` — list any ESLint errors or warnings.
3. Run `npm run build` to catch build-time errors. Show any errors in the output.

After all three steps, provide a summary:
- PASS / FAIL for each check
- Total number of errors found
- If all pass: confirm the project is ready to deploy
- If there are errors: list the most important ones to fix first (prioritise TypeScript errors over lint warnings, lint errors over warnings)

Do not auto-fix anything. This command is for reporting only.
