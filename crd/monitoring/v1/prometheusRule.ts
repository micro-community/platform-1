// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

import {ObjectMeta} from "../../meta/v1";

/**
 * PrometheusRule defines alerting rules for a Prometheus instance
 */
export class PrometheusRule extends pulumi.CustomResource {
    /**
     * Get an existing PrometheusRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrometheusRule {
        return new PrometheusRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:monitoring.coreos.com/v1:PrometheusRule';

    /**
     * Returns true if the given object is an instance of PrometheusRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrometheusRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrometheusRule.__pulumiType;
    }

    public readonly apiVersion!: pulumi.Output<"monitoring.coreos.com/v1" | undefined>;
    public readonly kind!: pulumi.Output<"PrometheusRule" | undefined>;
    public readonly metadata!: pulumi.Output<ObjectMeta | undefined>;
    /**
     * Specification of desired alerting rule definitions for Prometheus.
     */
    public readonly spec!: pulumi.Output<outputs.monitoring.v1.PrometheusRuleSpec>;

    /**
     * Create a PrometheusRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PrometheusRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            inputs["apiVersion"] = "monitoring.coreos.com/v1";
            inputs["kind"] = "PrometheusRule";
            inputs["metadata"] = args ? args.metadata : undefined;
            inputs["spec"] = args ? args.spec : undefined;
        } else {
            inputs["apiVersion"] = undefined /*out*/;
            inputs["kind"] = undefined /*out*/;
            inputs["metadata"] = undefined /*out*/;
            inputs["spec"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(PrometheusRule.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrometheusRule resource.
 */
export interface PrometheusRuleArgs {
    readonly apiVersion?: pulumi.Input<"monitoring.coreos.com/v1">;
    readonly kind?: pulumi.Input<"PrometheusRule">;
    readonly metadata?: pulumi.Input<ObjectMeta>;
    /**
     * Specification of desired alerting rule definitions for Prometheus.
     */
    readonly spec?: pulumi.Input<inputs.monitoring.v1.PrometheusRuleSpec>;
}
