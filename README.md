# Shut The Tab

## Description

Extension to auto close tab by pattern matching URL.

## Usage

Use regexp as an input.

Example input: `google`

Translates into: `/google/i`

Result: any tab that triggers `chrome.tabs.onUpdated` and its url matches pattern will be closed

## Installation

Clone this repo

Open chrome://extensions/ in your Chrome browser

Enable `Developer mode`

Click `Load unpacked extension...` and select the repo directory