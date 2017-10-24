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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLm9ic2VydmFibGVtYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9saWsub2JzZXJ2YWJsZW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF3QztBQUN4QyxtREFBMkM7QUFhM0M7O0dBRUc7QUFDSDtJQUFBO1FBQ0UscUNBQWdDLEdBQUcsSUFBSSx5QkFBUyxFQUEyQixDQUFBO0lBc0I3RSxDQUFDO0lBcEJDOzs7T0FHRztJQUNILDRCQUE0QixDQUFFLFVBQXVDLEVBQUUsUUFBZ0I7UUFDckYsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzVFLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEtBQUssVUFBVSxJQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUE7UUFDM0UsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFBO1FBQ2xDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksaUJBQWlCLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQTtZQUM3RSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsR0FBRyxDQUFDO2dCQUN4QyxVQUFVLEVBQUUsaUJBQWlCO2dCQUM3QixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsS0FBSyxFQUFFLFFBQVE7YUFDaEIsQ0FBQyxDQUFBO1lBQ0YsTUFBTSxDQUFDLGlCQUFpQixDQUFBO1FBQzFCLENBQUM7SUFDSCxDQUFDO0NBQ0Y7QUF2QkQsc0NBdUJDIn0=