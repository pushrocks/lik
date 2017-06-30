import 'typings-global'
export import q = require('q')
export import events = require('events')
export import lodash = require('lodash')
export import minimatch = require('minimatch')
export import rx = require('rxjs/Rx')

// workaround
import {Operator} from 'rxjs/Operator';
import {Observable} from 'rxjs/Observable';
declare module 'rxjs/Subject' {
  interface Subject<T> {
    lift<R>(operator: Operator<T, R>): Observable<R>;
  }
}
