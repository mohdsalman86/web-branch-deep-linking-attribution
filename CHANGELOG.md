# Change Log
All notable changes to the Branch Web SDK will be documented here.
The Branch Web SDK adheres to [Semantic Versioning](http://semver.org/).

## [VERSION] - unreleased

## [2.59.0] - 2021-10-14
- Separates custom and event data on logged custom events
- Ensures banner insertion and manipulation order

## [2.58.3] - 2021-08-19
- Supports null values in logEvent custom data

## [2.58.2] - 2021-05-24
– Added css to prevent scroll for sticky full page interstitial

## [2.58.1] - 2021-05-10
- [INTENG-11986][JRNYS-2] Avoid using document.write() to modify the DOM for Journeys (flagged by Google PageSpeed)
- Improvements to deployment automation

## [2.58.0] - 2021-03-04
– [CORE-1657] Support for INITIATE_STREAM & COMPLETE_STREAM
– Adding support for private beta qrCode() API

## [2.57.1] - 2020-11-19
- [INTENG-11512] Support SMS when tracking disabled
- [INTENG-11551] Support link generation when tracking disabled

## [2.57.0] - 2020-11-04
- [INTENG-11098] Corrected handling of developer identity in /v1/open and elsewhere.
- [CORE-1417] Corrected behavior of `branch.first()` (also added to example.html).

## [2.56.2] - 2020-10-20
- Remove more usage of unsafe JSON parse

## [2.56.1] - 2020-08-26
- [CORE-1134 | Stop calling /_r in WKWebView]

## [2.56.0] - 2020-08-11
- [DASH-3022] Add support for $journeys_cta
- [INTENG-10487] Add global callback for all API traffic

## [2.55.0] - 2020-07-27
- [INTENG-9671] Detect animation state in Journeys
- [INTENG-9975] Add support for _open_delay_ms

## [2.54.5] - 2020-07-23
- [INTENG-10563][INTENG-10570] Add support for all standard v2 events (thanks in part to @ssg-luke for the contribution)

## [2.54.4] - 2020-07-16
- [INTENG-10184] Allow disableTracking() and setBranchViewData() before init()

## [2.54.3] - 2020-07-07
- [APPSEC-264] Fix template responsible for bad deploy of example.html.

## [2.54.2] - 2020-07-01
- [INTENG-9846] Clear developer identity on logout. This was not previously working because it was not deleted from storage.

## [2.54.1] - 2020-05-26
- Fix example.html, not properly deployed in last release

## [2.54.0] - 2020-05-26
- Support customer_event_alias and content_items in v2 events
- Include identity in /v1/open and /v1/pageview requests
- Prevent XSS in deployed example.html

## [2.53.2] - 2020-04-17
- Fix missing build.min.js in NPM release.

## [2.53.1] - 2020-04-06
- Fixes bug in branch.init() where has_app value is not being returned if it is false

## [2.53.0] - 2020-03-26
- Adding local/session storage encoding
- Persist developer identity in local/session storage
- Journey dismissal change for ads postbacks

## [2.52.7] - 2020-03-12
- Decode html symbols in /v1/dismiss api requests before sending

## [2.52.6] - 2020-03-04
- Push dismissal metadata to /v1/dismiss
- Remove branch fingerprint docs

## [2.52.5] - 2020-02-04
– introducing dismissal analytics
– modifying API validation

## [2.52.4] - 2020-01-23
- JOUR-3755: Adding metadata to v1/open request

## [2.52.3] - 2019-12-11
- Adding SUBSCRIBE to BRANCH_STANDARD_EVENT list

## [2.52.2] - 2019-10-29
- Fixes a bug with a type validation function that is used in logEvent()
- Adds the ability to identify an iPad running iOS 13 in Safari

## [2.52.1] - 2019-10-22
- Surfaces error in callback for .link() call
- Fixes a bug associated to passing in a 0 attribution window for .lastAttributedTouchData()

## [2.52.0] - 2019-09-26
- Introduces CPID/Last Attributed Touch Data functions

## [2.51.0] - 2019-09-10
- Adds ability to pass customer_event_alias when logging standard events

## [2.50.2] - 2019-07-09
- DOMException Fix PR #646

## [2.50.1] - 2019-07-03
- Bugfix Update to API for Auto-Branchify Deep Linking

## [2.50.0] - 2019-06-26
- Introduces the ability to style a Journeys iFrame

## [2.49.1] - 2019-04-15
- INTENG-4678: Adding support for Journey bottom banners for iPhone X browsers with safe areas

## [2.49.0] - 2019-01-30
- Reads journey_link_data property from /v1/pageview response versus reading it from Journeys template.

## [2.48.0] - 2018-12-19
- Fixes og:type scraping bug in Journeys CTA
- Re-adds api2 support
- Adds support for Auto-Branchify Deep Linking

## [2.47.1] - 2018-12-03
- Reverting back to using api.branch.io for requests

## [2.47.0] - 2018-12-03
- Scrapes og:type tag and makes it available on Journeys CTA link

## [2.46.0] - 2018-09-18
- Fixes a bug with feature detection for window.performance api

## [2.45.0] - 2018-09-07
- Introduces circle-ci 2 deploy process

## [2.44.0] - 2018-08-31
- Allows screen readers to be able to detect and read Journeys iFrame

## [2.43.0] - 2018-08-29
- Introduces Journeys dismissal functionality

## [2.42.0] - 2018-08-07
- Bug fix for publishing willNotShowJourney

## [2.41.0] - 2018-07-26
- Refactored Journeys to improve performance.

## [2.40.0] - 2018-07-18
- Introduces "init-began-at" metric within instrumentation object.

## [2.39.0] - 2018-07-16
- Introduces a getBrowserFingerprintId() function which returns the current user's browser-fingerprint-id.

## [2.37.0] - 2018-06-27
- Adds referring link to branchview data

## [2.36.0] - 2018-06-06
- Added journey-load-time metric to instrumentation object

## [2.35.1] - 2018-06-04
- No new changes introduced. This release addresses a build process failure from v2.35.0.

## [v2.35.0] - 2018-06-04
- `instrumentation` object added to v1/url and v1/has-app requests
- `willShowJourney` now published at a later point in Journey flow
- `nonce` support added to WebSDK

## [2.34.0] - 2018-05-19
- Introduces a disableTracking() function to allow your customers to remain private when surfing your site with the WebSDK integrated. It includes the ability to show Journeys without personally identifiable information associated to it.
- Fixes a bug where the WebSDK stops working when calling branch.deepviewCta() if branch.deepview() was not called previously.

## [2.33.1] - 2018-03-12
- No new changes introduced. This release addresses a build process failure from v2.33.0.

## [2.32.0] - 2018-01-30
- Fixes bug where WebSDK deepviews do not show URI scheme popup on initial page load when open_app is true in Safari on iOS 11

## [2.31.0] - 2017-12-20
- Pass metadata into branch.init() for Journeys targeting
- Fixes bug related to listening for all events in Smart Banner and Journeys
- Fixes bug related to showing different languages in Journeys

## [2.30.0] - 2017-11-17
- Adds ability to register commerce events, content events, user lifecycle events and custom events via logEvent()

## [2.29.0] - 2017-10-17
- Adds retries, retry_delay and timeout options to .init()
- Automatically generates $ios_deeplink_path, $android_deeplink_path, $deeplink_path from twitter:app:url:iphone and twitter:app:url:googleplay Meta tags
- Fixes cookie storage bug for users in Safari private mode

## [2.28.0] - 2017-09-27
- Adds support for iFrames and SafeFrames
- Fixes a deep linking bug with Journeys in test mode
- Adds hosted deep link data to request parameters when firing a 'pageview' event

## [2.27.1] - 2017-09-15
- Removes an additional xmlns attribute from SVG tag

## [2.27.0] - 2017-09-08
- Removes eval() call from compiled SDK
- Removes xmlns attribute from SVG tags

## [2.26.1] - 2017-08-31
- added check to ensure Journey link data is valid JSON

## [2.26.0] - 2017-08-30
- adds Journey Link data to event listeners

## [v2.25.2] - 2017-08-11
- Adds additional error logging

## [v2.25.1] - 2017-08-07
- Sends additional page metadata as part of pageview event

## [v2.25.0] - 2017-08-03
- Preparation for safari 11 browser updates

## [v2.24.3] - 2017-07-28
- Allows user to control auto opening of the app through Journeys. Defaults to false (reverts behavior of v2.24.2).

## [v2.24.2] - 2017-07-28
- Journeys automatically opens the app if installed
- The SDK sends up additional information as part of 'pageview' event in .init()

## [v2.24.1] - 2017-07-25
- Includes data_parsed key as part of branch.data() response
- Fixes body margin issues related to hiding and showing a Journey
- Provides the ability to pass _branch_match_id through branch.init() options dictionary
- Removes leftover CTA script after hiding a Journey
- Resets session data when _branch_match_id is not available
- Provides the ability to pass a custom "url" as part of branch.init() options dictionary to trigger a Journey's filter
- Ensures that the referring Branch link is passed through Journey CTA by default

## [v2.24.0] - 2017-06-26
- allow no animation for journeys
- fix table of contents

## [v2.23.0] - 2017-05-03
- remove is_referrable flag
- send branch_key and screen dimensions
- fix journeys dismiss bug

## [v2.22.1] - 2017-04-05
- event listener minification fix

## [v2.22.0] - 2017-04-04
- prevent multiple journeys
- add data in listener callback
- v1/credits fix
- security/bug fixes

## [v2.21.0] - 2017-03-29
- fix branch.credits() bug
- fix null session data bug

## [v2.20.0] - 2017-03-16
- no scroll class for full page fixed journeys

## [v2.19.0] - 2017-03-07
- add ability to track commerce events
- fix for 'no_journeys' not being respected when passed in as an option to branch.init()
- other minor bug fixes

## [v2.18.0] - 2017-02-10
- add closeJourney method
- add ability to initialize a new journey without page change
- remove branch css with delay
- refactor journeys initialization

## [v2.17.0] - 2017-01-23
- Allow no_journeys option
- Remove document.body CSS when banner is closed

## [v2.16.1] - 2017-01-10
- fix bug in floating button support

## [v2.16.0] - 2017-01-10
- support floating button journeys banner
- fix init bug when banner is hidden
- publish journeys events

## [v2.15.0] - 2016-12-22
- journeys support multiple branch-journeys-top divs

## [v2.14.0] - 2016-12-15
- add creation source to link payload
- support partial height smart banners
- remove goog.json references

## [v2.13.0] - 2016-12-05
- Adding autoAppIndex() to allow dynamic insertion of App Indexing tags

## [v2.12.0] - 2016-11-30
- Remove goog.json.parse which uses eval

## [v2.11.0] - 2016-10-20
- Update journeys test url behavior
- Fix private browsing localStorage bug
- Replay deepview call

## [v2.10.0] - 2016-09-29
- Include applinks in scraper
- Minor bug fixes

## [v2.9.0] - 2016-09-22
- Add hosted data scraper
- Allow callbacks for all public methods
- Silently fail and log when init fails
- Fallback if no data in banner call
- Stop caching click_id on sendSMS call

## [v2.8.0] - 2016-09-12
- Support journeys iframes
- pass banner options for smartbanner migration
- check for existence of document head

## [v2.7.0] - 2016-08-19
- Journeys dimiss banner
- Add observability for init failures
- Distinguish between deepview and banner calls

## [v2.6.0] - 2016-08-01
- Added data merging for Journeys migration
- Updated the build process to allow for the latest Google Closure

## [v2.5.2] - 2016-07-18
- Attempt to recreate documentation

## [v2.5.1] - 2016-07-14
- Add journeys top banner functionality

## [v2.4.0] - 2016-07-08
- dynamically generated call to action buttons for journeys
- open_app flag no longer set to true
- updated unit tests

## [v2.3.0] - 2016-06-24
- 'options' sent in branch.init()
- tag injection
- page view events are no longer asynchronous

## [v2.2.1] - 2016-05-31
- Getting npm and bower back in sync
- Fix for single page applications which force routing changes during a banner click
- Documentation typo

## [v2.2.0] - 2016-05-05
- Fix for sendSMS issues with subdomains
- Fix for custom banner styling issues
- Added ability for custom Branch View display through events

## [v2.1.6] - 2016-04-27
- Option for whether to respect 'Do Not Track'

## [v2.1.5] - 2016-04-20
- Fixed an error on some browsers when script tags were cleaned up after jsonp calls

## [v2.1.4] - 2016-04-20
- Disable banner when a user chooses 'Do Not Track'
- Persist data through 3rd party calls

## [v2.1.3] - 2016-04-12
- Use new https://app.link by default

## [v2.1.2] - 2016-03-29
- Clean up script tags once a jsonp call completes
- No longer forces append_deeplink_path to true
- Pulls in default og info when none is supplied
- Updates / fixes to documentation

## [v2.1.1] - 2016-03-10
- Doc fixes
- Deeplink path fix

## [v2.1.0] - 2016-03-09
- Append deeplink path for iOS

## [v2.0.3] - 2016-03-02
- Adjusted sizing / colors on stars

## [v2.0.2] - 2016-03-01
- Updated ratings "stars" to use SVG (to fix an issue with Android)

## [v2.0.1] - 2016-02-16
- Avoid using eval while parsing JSON, if able
- Documentation cleanup
- Allow for a constant url for updated SDK usage

## [v2.0.0] - 2016-01-28
- Locking to a stable build

## [v1.8.8] - 2016-01-15
- Banner hiding data should be n local, not session, storage

## [v1.8.7] - 2016-01-13
- Fixed an issue where passing a number of days when using forgetHide on banner() was not working

## [v1.8.6] - 2016-01-12
- Reverted an earlier fix for url path checks which prevented correct webhook data in some cases

## [v1.8.5] - 2016-01-12
- Fix for referring link data not being kept when query string parameters are removed
- Fix for users of webpack not finding module 'branch'
- Fix for banners always showing 'Download', even when a user had the app
- Updated testing system for CircleCI
- Documentation updates

## [v1.8.4] - 2015-12-21
- Remove referral functions
- Support App Links on Android
- Fixed issues for private browsing on iOS
- New Deep View example page

## [1.8.3] - 2015-12-08
- Fixes banner call to use deepview logic even if there is a referring link
- Updated banner layout, including themes
- Added additional fields for banner
- Use Branch Keys instead of API Key for example
- Updated license

## [v1.8.2] - 2015-11-30
- Fixed gracefully handle local and session storage unavailability

## [v1.8.1] - 2015-11-19
- Fixed bug with banner on mobile

## [v1.8.0] - 2015-11-17
- Added deepview functionality!
- Fixed an edge case where the queue was throwing errors.

## [v1.7.1] - 2015-10-23
- Fixed error in `branch.banner()` that caused the option `make_new_link` to be ignored.

## [v1.7.0] - 2015-09-25
- Fixed error in network failure handling that caused subsequent calls to fail once an early network connection failure has occurred.

## [v1.6.11] - 2015-09-17
- Fixed error in `branch.init()` that failed to send `browser_fingerprint_id` to API when checking for `has_app`

## [v1.6.10] - 2015-09-04
- Fixed error that prevented branch.setIdentity() to function after branch.logout() had been called

## [v1.6.9] - 2015-08-26
- Fixed error that prevented metadata from being passed to the server correctly in branch.track() for the min.js version
## [v1.6.8] - 2015-08-25
- Fixed error that prevented referring_link from persisting through sessions
- Fixed error that prevented metadata from being passed to the server correctly in branch.track()

## [v1.6.7] - 2015-08-14
### New Functionality
- The `has_app` property in the session, and the mobile device action text automatically updates when a user installs the app - without reloading the page!

## [v1.6.6] - 2015-08-02
- Fixed bower path

## [v1.6.5] - 2015-07-28
- Fix error that prevented subsequent APi calls after logging out on Cordova and Titanium
- Remove Cordova SDK from the Web SDK repo, and move to it's own repo

## [v1.6.4] - 2015-07-21
- Adds Code creating, applying, validating to web testbed
- Fixes undefined function `a.L()` with minified build in `addListener()` method
- Fixes setIdentity() and logout() functions failing to manage Cordova sessions properly

## [v1.6.3] - 2015-07-20
- Fixed an issue that only loaded the first link click data the user ever clicked on
- Adds the `.first()` method to the Web SDK, from Titanium and Cordova
- Fixes the Titanium and Cordova `.first()` methods

## [v1.6.2] - 2015-07-17
- Fixes an issue that failed to logout sessions

## [v1.6.1] - 2015-07-07
- Fixed an issue with certain requests not working in IE10 and IE11

## [v1.6.0] - 2015-07-06
- Fixes mobile saucelab tests and issue with silent failures
- Fixes issue with Cordova SDK not loading previous session if present
- Fixes issue with Cordova SDK which caused the close method to fail

## [v1.5.8] - 2015-06-25
- Fixes bug with JSON parsing from stored session

## [v1.5.7] - 2015-06-24
### New Functionality
- Adds Appcelerator Titanium Module
- Adds a simple event listener, with events for `branch.banner()`
### Improvements
- Refactors session storage to make use of sessionStorage, localStorage, cookies, JavaScript objects, and Titanium properties

## [v1.5.6] - 2015-06-01
### New Functionality
- Adds Smart Banner Option to specifiy if the banner will show on an iPad

## [v1.5.5] - 2015-05-26
### New Functionality
- Adds previously Cordova only functions to Web: `creditHistory()`, `getCode()`, `validateCode()`, and `applyCode()`

## [v1.5.4] - 2015-05-21
- Fixes bug with iOS and Android app banner not opening
### Improvements
- Behind the scenes improvement to retry all XHR and JSONP requests 3 times if they fail or timeout

## [v1.5.3] - 2015-05-21
### New Functionality
- Adds `referring_link` property to both `init()` and `data()` methods that returns the referring link, if available.

## [v1.5.2] - 2015-05-18
### New Functionality
- Specify whether the app banner is "sticky" (position: fixed) on desktop and mobile
- Set the app banner to either never show a second time, or wait a specified number of days before showing again
- Adds `customCSS` property to banner to allow custom styles
### Fixed
- Fixes body element position when banner is shown with `body { position: relative; }` or `body { position: absolute; }`
- Fixes body background image position when banner is shown

## [v1.5.1] - 2015-05-13
- Fixes IE11 bug with XHRRequests that caused an InvalidState error

## [v1.5.0] - 2015-05-11
### New Functionality
- Integration tests
- Adds smart banner position option, with possible values: 'top', or 'bottom'
- Adds data_parsed to branch.init() and referring_data_parsed to branch.setIdentity()
- Adds a `branch-banner-is-active` class to the body element when the smart banner is open, and removes it when the banner is closed
- Fixes issue with Cordova open method

## [1.4.2] - 2015-05-06
- Fixes bug in link creation without data
- Adds option to customize "Send Link" text in banner

## [1.4.1] - 2015-04-29
- Fixes bug with dead-code elimination

## [1.4.0] - 2015-04-25
- Add Cordova version of SDK! Add Cordova guide and add upgrade guide
- Fixes bug with app banner that caused the SMS waiting indicator to be misplaced
- Correctly implement queue
- Switches Web SDK to using Branch Key rather than App ID
- Adds `closeBanner()` method

## [v1.3.4] - 2015-04-10
- Fixes bug that caused errors to not be thrown
- Adds PhantomJS tests on CircleCI

## [v1.3.3] - 2015-03-31
### Fixed
- Add app id to sms sending

## [v1.3.2] - 2015-03-30
### Fixed
- Fixes and adds tests link_identifier not passing through to session

## [v1.3.1] - 2015-03-24
### Fixed
- Line break and wrap long app titles and descriptions in app banner

## [v1.3.0] - 2015-03-23
### New Functionality
- Much more consistent error handling - we always pass errors to callbacks, unless there is no callback specified, in which case we always throw them.
- Added a ton of tests!

### Fixed
- Preserve existing body classes - thanks @IsaiahJTurner!

## [v1.2.1] - 2015-03-19
### Fixed
- An issue with the app banner when `iframe: false`

## [v1.2.0] - 2015-03-06
### New Functionality
- Added **disableHide** option to banner, allows you to control if the banner lets the user disable (close) the banner.
- Added **showiOS** option to banner, replaces **showMobile**, allows you to control if the banner shows on iOS devices.
- Added **showAndroid** option to banner, replaces **showMobile**, allows you to control if the banner shows on Android devices.
- Added **makeNewLink** option to banner. If set to true, forces the creation of a new link, even if one already exists.

### Fixed
- JSONP requests on white-labelled domain links (fixes app banner for apps with white-labelled domains in IE9/10).

## [v1.1.1] - 2015-03-05
### New Functionality
- Added **forgetHide** option to banner, allowing you to show the banner even if the user has disabled it.

## [v1.1.0] - 2015-03-05
### New Functionality
- **bower** and **npm**: you can now `bower install branch-web-sdk` or `npm install branch-sdk` to get the Branch SDK!
- **RequireJS** and **CommonJS**: you can now use the Branch library in both RequireJS and CommonJS contexts; just `require('branch')` or `define(['branch'], function(branch) { ... });`!

### Fixed
- **sendSMS()** Incorrect URL path for link clicks when using whitelabeled domains

## [v1.0.1] - 2015-03-03
### Fixed
- **sendSMS()** Undefined method when sending SMS with minified Web SDK
- **banner()** Uncaught TypeError on iOS and Android app banner
- **banner()** Width of banner slightly more than 100% width on iOS Safari
- Fallback when sessionStorage is not available, i.e. on Mobile Safari Private mode.

## [v1.0.0] - 2015-03-02
### Changed
- **identify()** changed to **setIdentity()**. **setIdentity()** now accepts a single string `identity` and callback, rather than an object `{ identity: "string" }` and a callback.
- **appBanner()** changed to **banner()**. The banner still accepts a link data parameter, but now includes an options parameter. This allows custom Download and Open text: `openAppButtonText` or `downloadAppButtonText`, and the banner can be selectively disabled on either mobile or desktop. The banner will display the relevant text, dependent on whether the user has the app installed. The banner is now also embeded, by default, in an iFrame in order to isolate the CSS. This can optionally be turned off by setting `iframe: true` in the options parameters.
- **createLink()** changed to **link()**.
- **createLinkClick()** removed.
- **showReferrals()** changed to **referrals()**.
- **showCredits()** changed to **credits()**.
- **redeemCredits()** changed to **redeem()**.
- **SMSLink()** changed to **sendSMS()**. Additional parameter added: Now accepts, `metadata`, `callback`, and a third boolean value `make_new_link` which forces the creation of a new link, even if one already exists.

### Fixed
- Error with IE10 when hosting on http
- Numerous bugs, errors, and typos

### Added
- **Smart app sharing banner improvements**: The app banner has been significantly improved both stylistically, and functionally. The banner now mimics the style and animations of the native iOS 8 Smart App Banner on iOS devices, and has a beautiful material design look and feel on Android devices. Additionally, the banner has several contextual awareness features: 1. The banner stores in the session if the user has closed it, and it will stay closed on future page reloads. 2. The banner will show Download text if they user does not have the app installed, or if Branch has a record of the user installing the mobile app, it will instead show Open text.
- gzip compression
- Closure compiler Unit tests

## [0.1.1] - 2014-11-19

### Fixed
- Numerous bugs
- https
- Overall code cleanup and reorganization
