#!/usr/bin/env python3

from cloudformation_deploy import get_outputs_values
from aws_utils import s3_sync, invalidate_cloudfront_cache
from time import time
import boto3
import botostubs
import sys
import getopt
import os
import subprocess


def main(argv):
    dist_folder = ''
    try:
        opts, args = getopt.getopt(
            argv, "hd:", ["dist-folder="])
    except getopt.GetoptError:
        print('install.py -d <dist-folder>')
        sys.exit(2)

    for opt, arg in opts:
        if opt == '-h':
            print(
                'install.py -d <dist-folder>')
            sys.exit()
        elif opt in ("-d", "--dist-folder"):
            dist_folder = arg

    outputs = get_outputs_values('EmDiaPortalWebStack', ['B2bBucketName', 'DistributionId'])
    bucket_name = outputs['B2bBucketName']
    distribution_id = outputs['DistributionId']

    s3_sync(bucket_name, dist_folder)

    invalidate_cloudfront_cache(distribution_id, ['/*'])


if __name__ == "__main__":
    main(sys.argv[1:])
