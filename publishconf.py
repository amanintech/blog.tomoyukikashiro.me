#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

RELATIVE_URLS = False
SITEURL = 'https://blog.tomoyukikashiro.me'

DELETE_OUTPUT_DIRECTORY = True
OUTPUT_RETENTION = [".git"]

