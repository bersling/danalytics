import {getFrontendErrors} from './errors/errors';
import {asyncCloudFunctionFactory} from './cloudfunction-utils';

exports.danalyticsFrontendErrors = asyncCloudFunctionFactory(getFrontendErrors);
