"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./lik.plugins");
const lik_objectmap_1 = require("./lik.objectmap");
/**
 * manages observables by making sure that only one observable is regsitered per event
 */
class Observablemap {
    constructor() {
        this.ObservableEmitterBundleObjectmap = new lik_objectmap_1.Objectmap();
    }
    /**
     * creates a new observable if not yet registered for the same event.
     * In case event has been registered before the same observable is returned.
     */
    getObservableForEmitterEvent(emitterArg, eventArg) {
        let existingBundle = this.ObservableEmitterBundleObjectmap.find((bundleArg) => {
            return (bundleArg.emitter === emitterArg && bundleArg.event === eventArg);
        });
        if (existingBundle) {
            return existingBundle.observable;
        }
        else {
            let emitterObservable = plugins.rx.Observable.fromEvent(emitterArg, eventArg);
            this.ObservableEmitterBundleObjectmap.add({
                observable: emitterObservable,
                emitter: emitterArg,
                event: eventArg
            });
            return emitterObservable;
        }
    }
}
exports.Observablemap = Observablemap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLm9ic2VydmFibGVtYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9saWsub2JzZXJ2YWJsZW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF3QztBQUN4QyxtREFBMkM7QUFhM0M7O0dBRUc7QUFDSDtJQUFBO1FBQ0UscUNBQWdDLEdBQUcsSUFBSSx5QkFBUyxFQUEyQixDQUFBO0lBc0I3RSxDQUFDO0lBcEJDOzs7T0FHRztJQUNILDRCQUE0QixDQUFFLFVBQXVDLEVBQUUsUUFBZ0I7UUFDckYsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVM7WUFDeEUsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sS0FBSyxVQUFVLElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQTtRQUMzRSxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUE7UUFDbEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQzdFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hDLFVBQVUsRUFBRSxpQkFBaUI7Z0JBQzdCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixLQUFLLEVBQUUsUUFBUTthQUNoQixDQUFDLENBQUE7WUFDRixNQUFNLENBQUMsaUJBQWlCLENBQUE7UUFDMUIsQ0FBQztJQUNILENBQUM7Q0FDRjtBQXZCRCxzQ0F1QkMifQ==