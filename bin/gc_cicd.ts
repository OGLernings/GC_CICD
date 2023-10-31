#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { GcCicdStack } from '../lib/gc_cicd-stack';

const app = new cdk.App();
new GcCicdStack(app, 'GcCicdStack', {
  env: { account: '862165548342', region: 'us-east-1'},
});