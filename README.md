# @schedule-x/canideploy

A GitHub-action for failing production builds on Fridays.

## Usage

```yaml
name: Your production build
on:
  push:
  branches:
    - main

jobs:
  test:
    name: Build + ship
    runs-on: ubuntu-latest
    steps:
      - name: Checkout ✅
        uses: actions/checkout@v4
      - name: Can I deploy?
        uses: schedule-x/canideploy@v1.0
        with:
          timezone: 'Europe/Berlin'
      # ... your build steps
```

## Setting your time zone

To ensure that the action knows when it's Friday for you, you need to configure your timezone as in
the example above. Available timezones and their offset to UTC are the following:

> [!NOTE]
> All time zone offsets are in standard time. Daylight saving time is not considered,
> which might cause a small offset if you're located anywhere that uses daylight saving time.


- US/Hawaii: -10
- US/Alaska: -9
- US/Pacific: -8
- US/Mountain: -7
- US/Central: -6
- US/Eastern: -5
- America/Argentina/Buenos_Aires: -3
- Atlantic/Cape_Verde: -1
- Etc/UTC: 0
- Europe/Berlin: 1
- Europe/Athens: 2
- Asia/Damascus: 3
- Asia/Dubai: 4
- Asia/Kabul: 4.5
- Asia/Kolkata: 5.5
- Asia/Kathmandu: 5.75
- Asia/Dhaka: 6
- Asia/Rangoon: 6.5
- Asia/Bangkok: 7
- Asia/Shanghai: 8
- Asia/Tokyo: 9
- Australia/Sydney: 10
- Pacific/Auckland: 12