# Purpose Mode

Purpose Mode is an extension for Chromium-based browsers
that allows you to browse the Web with purpose,
free from distractions.

## Example

<img width="1196" alt="image" src="https://github.com/NullHypothesis/purpose-mode/assets/1316283/e0f3008b-7297-4efc-832a-bef2e34786fb">

## Installation

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create the directory ./build/chrome-mv3-prod.
Next, go to your browser's extension page
(open [brave://extensions](brave://extensions)),
activate "Developer mode" in the top right corner,
and click on "Load unpacked" in the top left corner.
Select the directory "chrome-mv3-prod" that you just built.
That's it!

## Development

Start a development server like this:

```bash
pnpm dev
# or
npm run dev
```
