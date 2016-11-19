"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLm9ic2VydmFibGVtYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9saWsub2JzZXJ2YWJsZW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseUNBQXdDO0FBQ3hDLG1EQUEyQztBQWMzQzs7R0FFRztBQUNIO0lBQUE7UUFDSSxxQ0FBZ0MsR0FBRyxJQUFJLHlCQUFTLEVBQTJCLENBQUE7SUFzQi9FLENBQUM7SUFwQkc7OztPQUdHO0lBQ0gsNEJBQTRCLENBQUMsVUFBdUMsRUFBRSxRQUFnQjtRQUNsRixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUztZQUN0RSxNQUFNLENBQUEsQ0FBQyxTQUFTLENBQUMsT0FBTyxLQUFLLFVBQVUsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFBO1FBQzVFLENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQTtRQUNwQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUE7WUFDN0UsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLEdBQUcsQ0FBQztnQkFDdEMsVUFBVSxFQUFFLGlCQUFpQjtnQkFDN0IsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLEtBQUssRUFBRSxRQUFRO2FBQ2xCLENBQUMsQ0FBQTtZQUNGLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQTtRQUM1QixDQUFDO0lBQ0wsQ0FBQztDQUNKO0FBdkJELHNDQXVCQyJ9