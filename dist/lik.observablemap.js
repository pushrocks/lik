"use strict";
const plugins = require("./lik.plugins");
const lik_objectmap_1 = require("./lik.objectmap");
class Observablemap {
    constructor() {
        this.ObservableEmitterBundleObjectmap = new lik_objectmap_1.Objectmap();
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLm9ic2VydmFibGVtYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9saWsub2JzZXJ2YWJsZW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseUNBQXdDO0FBQ3hDLG1EQUEyQztBQWMzQztJQUFBO1FBQ0kscUNBQWdDLEdBQUcsSUFBSSx5QkFBUyxFQUEyQixDQUFBO0lBa0IvRSxDQUFDO0lBaEJHLDRCQUE0QixDQUFDLFVBQXVDLEVBQUUsUUFBZ0I7UUFDbEYsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVM7WUFDdEUsTUFBTSxDQUFBLENBQUMsU0FBUyxDQUFDLE9BQU8sS0FBSyxVQUFVLElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQTtRQUM1RSxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUE7UUFDcEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQzdFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLENBQUM7Z0JBQ3RDLFVBQVUsRUFBRSxpQkFBaUI7Z0JBQzdCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixLQUFLLEVBQUUsUUFBUTthQUNsQixDQUFDLENBQUE7WUFDRixNQUFNLENBQUMsaUJBQWlCLENBQUE7UUFDNUIsQ0FBQztJQUNMLENBQUM7Q0FDSjtBQW5CRCxzQ0FtQkMifQ==