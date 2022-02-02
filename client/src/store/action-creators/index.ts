import * as UserActionCreators from './user'
import * as FileActionCreators from './file'

export default {
    ...UserActionCreators,
    ...FileActionCreators
}