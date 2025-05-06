import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from "aws-cdk-lib/aws-apigateway";

export class FunctionsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'FunctionsQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    const helloFn=new lambda.Function(this, 'HelloFunction', {
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: 'hello.handler',
      code: lambda.Code.fromAsset('lib/lambda'),
    });
    new apigateway.LambdaRestApi(this, 'APIEndpoint', {
      handler: helloFn,
    })
  }
}
