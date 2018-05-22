(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 33
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgKB7QgVgRAAgUIABgCIADgFIgBAAIABAAQANgQASgLIANgIIAbgPIABgCIAAAAIgCgCIAAgBIgBAAIgFgEIgDgBIgCAAIgKgBIgHgCIAAAAIgPgEIgSgGIgTgEIgngIIgngMIgWgNIgGgEQgIAAgHgVQgEgSADgGIAAAAIABgBIAAgBIACgCIAIgHIAIgEIAFgKIAAAAIACgDQgGALAIAXQADAKANAIQAKAFAZAKQAZAKAsADQAZACAggLQAggMAKgZQAKgagLgQIAHAJQAJAOAEAUIADAVIAMABIAZAJQALAFADAHIABADQAAAHgMARQgPATgMAAIgIgBIAAAAIgCgBIgLgLIgBACIAAABIgCAEIgCADIgFAJIgEAFIgDADIgBAAQgEAGACAFQAGAKADAOQACALgBAUIAAACIAAAGIAAADIAAABIgEAOIAAAAIgDAGIgPAJIgcADQgeAAgWgRgAiCiAIAEgHIABAAIAAgBIAFgDQgJAHgDAOg");
	this.shape.setTransform(16.1,20.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 32
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF530F").s().p("AglATIgugNIAfAFQAtAJAfgKQAggJAGgGIARgTQALgLgMAgQgMAegiAAg");
	this.shape_1.setTransform(13.7,17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 31
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#38100C").s().p("AgqBQQA8gBAYgdQAFgHACgKIABgQQgBgIACgPIABgaQgBgNgFgOIACABIABACIADADIABABIADAOQACAOgCAPIgBAJQgBAIAAARQABAYgVAOQgOAKgQAFIgsADgAg2BMIgCgBIAagBIgVADgAgMBIIgSACgAAsATIAAgEQACAFgCAKQgCAMgHAHQgPAOgUAHIgMACQAzgLAFgqgAAkgqQgCgNgFgKIgIgPIABABIAIAFQALAWAAAYg");
	this.shape_2.setTransform(18.9,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0D0D0").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQABgKgCgEQACgYgFgUQABgXgLgXIAJAIIAHAHIAAAAQAFAOABANIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_3.setTransform(18.9,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#47180E").s().p("AAAAAIAAgBIADAEgAgCgCIACABg");
	this.shape_4.setTransform(23.8,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 30
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCABIgBgBQAAAAAAgBQAAAAABAAQAAAAABgBQABAAAAABIAFABIgBACIgEABg");
	this.shape_5.setTransform(6.1,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 29
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FD751C").s().p("AANAJIgSgGQgLgEAAgFQgBgFAOAFQAOAFAEAFQAEAGgEAAIgCgBg");
	this.shape_6.setTransform(7.6,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 28
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AgoAPQgFgFAAgHQAAgNAPgHQAMgGASABQASABANAGQAOAGAAAJQAAAHgRAIQgSAJgUAAQgXAAgHgJg");
	this.shape_7.setTransform(13,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 27
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#47180E").s().p("AgbARQAGAFAIAAQAMAAANgUQAPgTgDgHIABgBIACAEQADAHgOATQgPAUgLAAIgBABQgJAAgHgJg");
	this.shape_8.setTransform(29.5,19.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBgBIADACIgCABg");
	this.shape_9.setTransform(31.9,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer 26
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C12702").s().p("AgHAhQgEgLAEALgAgUAVIgNgYQgFgNAAgGQAAgHALgDIAbAAIAYAJQALAFADAHIABACQgegVgfAFQgFACAxAdIgugVQgNgEAcA0g");
	this.shape_10.setTransform(28.4,18.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 25
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#38100C").s().p("AgmANQgVgQAAgUIADgGQABAUAVAPQAWARAeAAQAjAAAHgMIgDAHQgIAMgjAAQgdAAgXgRg");
	this.shape_11.setTransform(18.9,31.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAAIAAAAg");
	this.shape_12.setTransform(25,32.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 24
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E32F02").s().p("AgUAUIgNgYQgFgMAAgHQAAgHALgDIAbAAIAYAJQALAFADAHQADAHgOATQgPAUgMAAQgLAAgJgOg");
	this.shape_13.setTransform(28.4,18.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 23
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#47180E").s().p("AgpBQQA8gBAYgdQAGgHACgKIAAgQQgBgIADgPIABgaIgHgcIAHAIIADAOQADAOgDAPIgBAJQgBAIABARQAAAYgUAOQgPAKgPAFIgsADgAg5BKQA9AAAbgZIABgCIAHgJQAGgPgEgHQgHgJACgNQAGgkgLgXIgJgPIAJAGQANAagCAbIgCAVQABAIAEAGQADAFgCALQgCAMgIAHQgOAOgUAHIgzAHg");
	this.shape_14.setTransform(18.7,12.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQACgLgDgEQgEgHAAgHIABgWQADgbgNgaIAQAPIAGAbIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_15.setTransform(18.9,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer 22
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#38100C").s().p("AgNAXIgCgDIAAAAIgBgBIAZACQAOgBAIgJQAJgJACgJIACAFIgEAHIgCADIgBACIgDAFQgHAIgPACgAgrALIAAAAIAFgCIAggDQAOAAALgGQAMgHABgOIABgDIACAFQgCARgOAGQgNAGgNAAIgdADg");
	this.shape_16.setTransform(22,20.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D0D0D0").s().p("AgSATIgFgEIgDgBIgCAAIgKgCIAdgDQAMABAOgHQANgFADgRIAAAAIAFAJIABACQgBAJgJAKQgIAJgPAAg");
	this.shape_17.setTransform(22.2,20.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAOAEIAAABgAgOgDIABgBIAAABg");
	this.shape_18.setTransform(19,22.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAAIAAAAg");
	this.shape_19.setTransform(25.5,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Layer 21
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D12C03").s().p("AAJBjQgHgNgHgBIgOgCIgUgFIgTgHIgLgEQBeABAGg5QAGg4gggfQgagbgYgEQAwAGAhAlQAlApgEAzQgDA0gZATQgNAKgIAAQgIAAgDgKgAg0hsIADAAIAEABg");
	this.shape_20.setTransform(20.1,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 20
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C12702").s().p("AgNABIAAgFIAaAAQgTAEAAAFg");
	this.shape_21.setTransform(22.4,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer 19
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C12702").s().p("AgMABIAAgFIAaAAQgVAEABAFg");
	this.shape_22.setTransform(21.5,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer 18
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#913711").s().p("AAGAPQgNgMgKgDQgKgEgNgBIgTgEQgFgEACgGQADgHAEADQAEACgDAGQABAGAGABIAOABIAQADIAVANQAPALAPAAQAPAAADgFIAHgEQAFgBgBAGQAAAGgVADIgGAAQgRAAgNgKg");
	this.shape_23.setTransform(9.8,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 17
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAEIgBgEIABgEIAEgBIAEABIACAEIgCAEIgEACg");
	this.shape_24.setTransform(6.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 16
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAFIgCgFIACgFIAFgCIAFACIADAFIgDAFIgFADg");
	this.shape_25.setTransform(16.5,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 15
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#470E0E").s().p("AgFAHIgDgHIADgFQACgDADAAQAEAAACADIADAFIgDAHIgGACg");
	this.shape_26.setTransform(6.3,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 14
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#792B17").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEIgDAIIgJAEQgEAAgDgEg");
	this.shape_27.setTransform(6.1,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 13
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9F4E3").s().p("AgQATQgGgHgBgIIAAgFIACgJIAFgGQAIgIAIgBQAIAAAIAEIADADIAEAHIABAIIAAAFQgBAJgIAHQgHAIgJAAQgJAAgGgHg");
	this.shape_28.setTransform(5.8,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 12
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#470E0E").s().p("AgGAHIgDgHQAAgDADgDQADgEADAAQAFAAADAEIADAGIgDAHQgDAEgFAAQgDAAgDgEg");
	this.shape_29.setTransform(15.5,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 11
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#792B17").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAg");
	this.shape_30.setTransform(15.7,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 10
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9F4E3").s().p("AgVAaQgMgIgCgNQgCgMAJgLQAJgKAPgCQAOgCAMAHQAMAIACANQACAMgJAKQgJAMgPACIgFAAQgLAAgKgGg");
	this.shape_31.setTransform(17,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 9
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F93E0F").s().p("AgYAgQgPgJgDgRQgDgPAMgNQAKgNASgDQAQgCAPAJQAOAKADAQIAAAAQADAPgLAOIgBAAQgKAMgSADIgHAAQgNAAgKgHg");
	this.shape_32.setTransform(17.3,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 8
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F93E0F").s().p("AgUAWQgGgIgCgJIAAgGQAAgGADgFIAFgIIABAAQAKgJAJAAQAJgBAJAGIAEACIAAABIAFAIIACAKIgBAFQgBALgIAIQgJAJgLAAQgLAAgIgIg");
	this.shape_33.setTransform(5.8,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	// Layer 7
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF530F").s().p("ABGBjQgHgNgIgBQgcgDgmgQIglgGQgdgGgYgMQgYgLgDgNQgEgNAEgLQACgMAGgJIAEgKQAMgTAOgOQAWgUAdgKQAYgJAaABQA0AFAiAnQAlApgDAzQgEA0gZATQgNAKgIAAQgIAAgDgKg");
	this.shape_34.setTransform(14,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

	// Layer 6
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#38100C").s().p("AgIAFQgEgRADgFIAGgIIgDAEQgDAGAFAQQAFAWAJgBIABAAIgFAEQgHAAgHgVg");
	this.shape_35.setTransform(1.1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 5
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#47180E").s().p("AAxAbQAEgFgDgIQgCgLgPgLQgPgNgUgBIgnABIgPADQACgEASgDIAngBQAUACAPAMQAPAMADALQADALgKAFg");
	this.shape_36.setTransform(21.2,5.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAAIABAAIgBAAg");
	this.shape_37.setTransform(26.1,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	// Layer 4
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C12702").s().p("AAagBQgBgQgIAHIgVAVIgYAaQAQghAMgNQAMgPgIAAQgRAEgZARIgWAMQAOgQATgKIANgIIAagQIABgBIACgCIApABQgIAIACAHQAGAKADAOQADAMgCAdQgGglgKgLQgJgLAAANQgBAWgGAPIgHARQAHgegCgQg");
	this.shape_38.setTransform(19.3,27.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

	// Layer 3
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E32F02").s().p("AAYAdQgOgBgagaIgRgQQgIgHgDAAIgGACIgFABIAAAAIgBgCQAAgFAUgCIAngBQAUABAPANQAPAMADAKQADALgKAFQgIAFgMAAIgFAAg");
	this.shape_39.setTransform(21.2,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// Layer 2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DB2D02").s().p("AgPALQgEgRADgGQADgGAIgFQAHgFAJgCQAJgDgBAQQgBAPgHAPQgHATgEAAQgIAAgHgVg");
	this.shape_40.setTransform(1.8,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1));

	// Layer 1
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E32F02").s().p("AgoAgQgVgQAAgTQAAgDAFgGQAFgGAagRQAZgRAaAEQAVAGAJASQAIAPgCAZQgBAMgHAKQgHAMgjAAQgdAAgXgSg");
	this.shape_41.setTransform(19.1,29.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.7,32.3,31.5);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 33
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgKB7QgVgRAAgUIABgCIADgFIgBAAIABAAQANgQASgLIANgIIAbgPIABgCIAAAAIgCgCIAAgBIgBAAIgFgEIgDgBIgCAAIgKgBIgHgCIAAAAIgPgEIgSgGIgTgEIgngIIgngMIgWgNIgGgEQgIAAgHgVQgEgSADgGIAAAAIABgBIAAgBIACgCIAIgHIAIgEIADgHQgJAMAPgWIgCASQAAAMAMAPQAMAPA2AJQA1AIAkgJQAkgJALgXQALgYgHgTIAJANIAAgBQAJAOAEAUIADAVIAMABIAZAJQALAFADAHIABADQAAAHgMARQgPATgMAAIgIgBIAAAAIgCgBIgLgLIgBACIAAABIgCAEIgCADIgFAJIgEAFIgDADIgBAAQgEAGACAFQAGAKADAOQACALgBAUIAAACIAAAGIAAADIAAABIgEAOIAAAAIgDAGIgPAJIgcADQgeAAgWgRgAiCiAIAEgHIABAAIAAgBIAFgDQgJAHgDAOg");
	this.shape.setTransform(16.1,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 32
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF530F").s().p("AglATIgugNIAfAFQAtAJAfgKQAggJAGgGIARgTQALgLgMAgQgMAegiAAg");
	this.shape_1.setTransform(13.7,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 31
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#38100C").s().p("AgqBQQA8gBAYgdQAFgHACgKIABgQQgBgIACgPIABgaQgBgNgFgOIACABIABACIADADIABABIADAOQACAOgCAPIgBAJQgBAIAAARQABAYgVAOQgOAKgQAFIgsADgAg2BMIgCgBIAagBIgVADgAgMBIIgSACgAAsATIAAgEQACAFgCAKQgCAMgHAHQgPAOgUAHIgMACQAzgLAFgqgAAkgqQgCgNgFgKIgIgPIABABIAIAFQALAWAAAYg");
	this.shape_2.setTransform(18.9,13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0D0D0").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQABgKgCgEQACgYgFgUQABgXgLgXIAJAIIAHAHIAAAAQAFAOABANIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_3.setTransform(18.9,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#47180E").s().p("AAAAAIAAgBIADAEgAgCgCIACABg");
	this.shape_4.setTransform(23.8,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 30
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCABIgBgBQAAAAAAgBQAAAAABAAQAAAAABgBQABAAAAABIAFABIgBACIgEABg");
	this.shape_5.setTransform(6.1,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 29
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FD751C").s().p("AANAJIgSgGQgLgEAAgFQgBgFAOAFQAOAFAEAFQAEAGgEAAIgCgBg");
	this.shape_6.setTransform(7.6,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 28
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AgoAPQgFgFAAgHQAAgNAPgHQAMgGASABQASABANAGQAOAGAAAJQAAAHgRAIQgSAJgUAAQgXAAgHgJg");
	this.shape_7.setTransform(13,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 27
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#47180E").s().p("AgbARQAGAFAIAAQAMAAANgUQAPgTgDgHIABgBIACAEQADAHgOATQgPAUgLAAIgBABQgJAAgHgJg");
	this.shape_8.setTransform(29.5,20.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBgBIADACIgCABg");
	this.shape_9.setTransform(31.9,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer 26
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C12702").s().p("AgHAhQgEgLAEALgAgUAVIgNgYQgFgNAAgGQAAgHALgDIAbAAIAYAJQALAFADAHIABACQgegVgfAFQgFACAxAdIgugVQgNgEAcA0g");
	this.shape_10.setTransform(28.4,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 25
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#38100C").s().p("AgmANQgVgQAAgUIADgGQABAUAVAPQAWARAeAAQAjAAAHgMIgDAHQgIAMgjAAQgdAAgXgRg");
	this.shape_11.setTransform(18.9,32.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAAIAAAAg");
	this.shape_12.setTransform(25,33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 24
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E32F02").s().p("AgUAUIgNgYQgFgMAAgHQAAgHALgDIAbAAIAYAJQALAFADAHQADAHgOATQgPAUgMAAQgLAAgJgOg");
	this.shape_13.setTransform(28.4,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 23
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#47180E").s().p("AgpBQQA8gBAYgdQAGgHACgKIAAgQQgBgIADgPIABgaIgHgcIAHAIIADAOQADAOgDAPIgBAJQgBAIABARQAAAYgUAOQgPAKgPAFIgsADgAg5BKQA9AAAbgZIABgCIAHgJQAGgPgEgHQgHgJACgNQAGgkgLgXIgJgPIAJAGQANAagCAbIgCAVQABAIAEAGQADAFgCALQgCAMgIAHQgOAOgUAHIgzAHg");
	this.shape_14.setTransform(18.7,13.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQACgLgDgEQgEgHAAgHIABgWQADgbgNgaIAQAPIAGAbIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_15.setTransform(18.9,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer 22
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#38100C").s().p("AgNAXIgCgDIAAAAIgBgBIAZACQAOgBAIgJQAJgJACgJIACAFIgEAHIgCADIgBACIgDAFQgHAIgPACgAgrALIAAAAIAFgCIAggDQAOAAALgGQAMgHABgOIABgDIACAFQgCARgOAGQgNAGgNAAIgdADg");
	this.shape_16.setTransform(22,21.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D0D0D0").s().p("AgSATIgFgEIgDgBIgCAAIgKgCIAdgDQAMABAOgHQANgFADgRIAAAAIAFAJIABACQgBAJgJAKQgIAJgPAAg");
	this.shape_17.setTransform(22.2,21.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAOAEIAAABgAgOgDIABgBIAAABg");
	this.shape_18.setTransform(19,23.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAAIAAAAg");
	this.shape_19.setTransform(25.5,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Layer 21
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D12C03").s().p("AAJBjQgHgNgHgBIgOgCIgUgFIgTgHIgLgEQBeABAGg5QAGg4gggfQgagbgYgEQAwAGAhAlQAlApgEAzQgDA0gZATQgNAKgIAAQgIAAgDgKgAg0hsIADAAIAEABg");
	this.shape_20.setTransform(20.1,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 20
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C12702").s().p("AgNABIAAgFIAaAAQgTAEAAAFg");
	this.shape_21.setTransform(22.4,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer 19
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C12702").s().p("AgMABIAAgFIAaAAQgVAEABAFg");
	this.shape_22.setTransform(21.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer 18
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#913711").s().p("AAGAPQgNgMgKgDQgKgEgNgBIgTgEQgFgEACgGQADgHAEADQAEACgDAGQABAGAGABIAOABIAQADIAVANQAPALAPAAQAPAAADgFIAHgEQAFgBgBAGQAAAGgVADIgGAAQgRAAgNgKg");
	this.shape_23.setTransform(9.8,16);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 17
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAEIgBgEIABgEIAEgBIAEABIACAEIgCAEIgEACg");
	this.shape_24.setTransform(6.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 16
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAFIgCgFIACgFIAFgCIAFACIADAFIgDAFIgFADg");
	this.shape_25.setTransform(16.5,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 15
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#470E0E").s().p("AgFAHIgDgHIADgFQACgDADAAQAEAAACADIADAFIgDAHIgGACg");
	this.shape_26.setTransform(6.3,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 14
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#792B17").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEIgDAIIgJAEQgEAAgDgEg");
	this.shape_27.setTransform(6.1,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 13
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9F4E3").s().p("AgQATQgGgHgBgIIAAgFIACgJIAFgGQAIgIAIgBQAIAAAIAEIADADIAEAHIABAIIAAAFQgBAJgIAHQgHAIgJAAQgJAAgGgHg");
	this.shape_28.setTransform(5.8,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 12
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#470E0E").s().p("AgGAHIgDgHQAAgDADgDQADgDADgBQAFABADADIADAGIgDAHQgDADgFABQgDgBgDgDg");
	this.shape_29.setTransform(15.5,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 11
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#792B17").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAg");
	this.shape_30.setTransform(15.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 10
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9F4E3").s().p("AgVAaQgMgIgCgNQgCgMAJgLQAJgKAPgCQAOgCAMAHQAMAIACANQACAMgJAKQgJAMgPACIgFAAQgLAAgKgGg");
	this.shape_31.setTransform(17,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 9
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F93E0F").s().p("AgYAgQgPgJgDgRQgDgPAMgNQAKgNASgDQAQgCAPAJQAOAKADAQIAAAAQADAPgLAOIgBAAQgKAMgSADIgHAAQgNAAgKgHg");
	this.shape_32.setTransform(17.3,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 8
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F93E0F").s().p("AgUAWQgGgIgCgJIAAgGQAAgGADgFIAFgIIABAAQAKgJAJAAQAJgBAJAGIAEACIAAABIAFAIIACAKIgBAFQgBALgIAIQgJAJgLAAQgLAAgIgIg");
	this.shape_33.setTransform(5.8,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	// Layer 7
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF530F").s().p("ABGBjQgHgNgIgBQgcgDgmgQIglgGQgdgGgYgMQgYgLgDgNQgEgNAEgLQACgMAGgJIAEgKQAMgTAOgOQAWgUAdgKQAYgJAaABQA0AFAiAnQAlApgDAzQgEA0gZATQgNAKgIAAQgIAAgDgKg");
	this.shape_34.setTransform(14,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

	// Layer 6
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#38100C").s().p("AgIAFQgEgRADgFIAGgIIgDAEQgDAGAFAQQAFAWAJAAIABAAIgFADQgHAAgHgVg");
	this.shape_35.setTransform(1.1,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 5
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#47180E").s().p("AAxAbQAEgFgDgIQgCgLgPgLQgPgNgUgBIgnABIgPADQACgEASgDIAngBQAUACAPAMQAPAMADALQADALgKAFg");
	this.shape_36.setTransform(21.2,6.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAAIABAAIgBAAg");
	this.shape_37.setTransform(26.1,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	// Layer 4
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C12702").s().p("AAagBQgBgQgIAHIgVAVIgYAaQAQghAMgNQAMgPgIAAQgRAEgZARIgWAMQAOgQATgKIANgIIAagQIABgBIACgCIApABQgIAIACAHQAGAKADAOQADAMgCAdQgGglgKgLQgJgLAAANQgBAWgGAPIgHARQAHgegCgQg");
	this.shape_38.setTransform(19.3,28.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

	// Layer 3
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E32F02").s().p("AAYAdQgOgBgagaIgRgQQgIgHgDAAIgGACIgFABIAAAAIgBgCQAAgFAUgCIAngBQAUABAPANQAPAMADAKQADALgKAFQgIAFgMAAIgFAAg");
	this.shape_39.setTransform(21.2,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// Layer 2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DB2D02").s().p("AgPALQgEgRADgGQADgGAIgFQAHgFAJgCQAJgDgBAQQgBAPgHAPQgHATgEAAQgIAAgHgVg");
	this.shape_40.setTransform(1.8,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1));

	// Layer 1
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E32F02").s().p("AgoAgQgVgQAAgTQAAgDAFgGQAFgGAagRQAZgRAaAEQAVAGAJASQAIAPgCAZQgBAMgHAKQgHAMgjAAQgdAAgXgSg");
	this.shape_41.setTransform(19.1,30.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.7,32.3,31.5);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 30
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgKB7QgVgRAAgUIABgCIADgFIgBAAIABAAQANgQASgLIANgIIAbgPIABgCIAAAAIgCgCIAAgBIgBAAIgFgEIgDgBIgCAAIgKgBIgHgCIAAAAIgPgEIgSgGIgTgEIgngIIgngMIgWgNIgGgEQgIAAgHgVQgEgSADgGIAAAAIABgBIAAgBIACgCIAIgHIAIgEIADgHQgFAGALgQQgEAYAKARQAJASBAAGQA/AFAggWQAggXADgQIACgTIgDgIQAPASACAGIAAgBQAJAOAEAUIADAVIAMABIAZAJQALAFADAHIABADQAAAHgMARQgPATgMAAIgIgBIAAAAIgCgBIgLgLIgBACIAAABIgCAEIgCADIgFAJIgEAFIgDADIgBAAQgEAGACAFQAGAKADAOQACALgBAUIAAACIAAAGIAAADIAAABIgEAOIAAAAIgDAGIgPAJIgcADQgeAAgWgRgAiCiAIAEgHIABAAIAAgBIAFgDQgJAHgDAOg");
	this.shape.setTransform(16.1,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 29
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#470E0E").s().p("AgGALQgSgFgFgGQgEgFAMgCIAbgFIAYABQAHACguALIAJAFIAIAGg");
	this.shape_1.setTransform(16.9,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 28
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#470E0E").s().p("AABACQgLgDgCgDIASAAQAIADgBADIgBACIAAABg");
	this.shape_2.setTransform(6,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 27
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#470E0E").s().p("AAAAFIgPgXQAAgIAPAUIAQAXIgDAEQgDAAgKgQg");
	this.shape_3.setTransform(5.8,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 26
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF530F").s().p("AglATIgugNIAfAFQAtAJAfgKQAggJAGgGIARgTQALgLgMAgQgMAegiAAg");
	this.shape_4.setTransform(13.7,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 25
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#38100C").s().p("AgqBQQA8gBAYgdQAFgHACgKIABgQQgBgIACgPIABgaQgBgNgFgOIACABIABACIADADIABABIADAOQACAOgCAPIgBAJQgBAIAAARQABAYgVAOQgOAKgQAFIgsADgAg2BMIgCgBIAagBIgVADgAgMBIIgSACgAAsATIAAgEQACAFgCAKQgCAMgHAHQgPAOgUAHIgMACQAzgLAFgqgAAkgqQgCgNgFgKIgIgPIABABIAIAFQALAWAAAYg");
	this.shape_5.setTransform(18.9,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D0D0D0").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQABgKgCgEQACgYgFgUQABgXgLgXIAJAIIAHAHIAAAAQAFAOABANIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_6.setTransform(18.9,15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#47180E").s().p("AAAAAIAAgBIADAEgAgCgCIACABg");
	this.shape_7.setTransform(23.8,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Layer 24
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCABIgBgBQAAAAAAgBQAAAAABAAQAAAAABgBQABAAAAABIAFABIgBACIgEABg");
	this.shape_8.setTransform(6.1,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer 23
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FD751C").s().p("AANAJIgSgGQgLgEAAgFQgBgFAOAFQAOAFAEAFQAEAGgEAAIgCgBg");
	this.shape_9.setTransform(7.6,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer 22
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6A09").s().p("AgoAPQgFgFAAgHQAAgNAPgHQAMgGASABQASABANAGQAOAGAAAJQAAAHgRAIQgSAJgUAAQgXAAgHgJg");
	this.shape_10.setTransform(13,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 21
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#47180E").s().p("AgbARQAGAFAIAAQAMAAANgUQAPgTgDgHIABgBIACAEQADAHgOATQgPAUgLAAIgBABQgJAAgHgJg");
	this.shape_11.setTransform(29.5,21.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBgBIADACIgCABg");
	this.shape_12.setTransform(31.9,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 20
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C12702").s().p("AgHAhQgEgLAEALgAgUAVIgNgYQgFgNAAgGQAAgHALgDIAbAAIAYAJQALAFADAHIABACQgegVgfAFQgFACAxAdIgugVQgNgEAcA0g");
	this.shape_13.setTransform(28.4,20.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 19
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#38100C").s().p("AgmANQgVgQAAgUIADgGQABAUAVAPQAWARAeAAQAjAAAHgMIgDAHQgIAMgjAAQgdAAgXgRg");
	this.shape_14.setTransform(18.9,33.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAAAAIAAAAg");
	this.shape_15.setTransform(25,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer 18
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E32F02").s().p("AgUAUIgNgYQgFgMAAgHQAAgHALgDIAbAAIAYAJQALAFADAHQADAHgOATQgPAUgMAAQgLAAgJgOg");
	this.shape_16.setTransform(28.4,20.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	// Layer 17
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#47180E").s().p("AgpBQQA8gBAYgdQAGgHACgKIAAgQQgBgIADgPIABgaIgHgcIAHAIIADAOQADAOgDAPIgBAJQgBAIABARQAAAYgUAOQgPAKgPAFIgsADgAg5BKQA9AAAbgZIABgCIAHgJQAGgPgEgHQgHgJACgNQAGgkgLgXIgJgPIAJAGQANAagCAbIgCAVQABAIAEAGQADAFgCALQgCAMgIAHQgOAOgUAHIgzAHg");
	this.shape_17.setTransform(18.7,14.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQACgLgDgEQgEgHAAgHIABgWQADgbgNgaIAQAPIAGAbIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_18.setTransform(18.9,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// Layer 16
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#38100C").s().p("AgNAXIgCgDIAAAAIgBgBIAZACQAOgBAIgJQAJgJACgJIACAFIgEAHIgCADIgBACIgDAFQgHAIgPACgAgrALIAAAAIAFgCIAggDQAOAAALgGQAMgHABgOIABgDIACAFQgCARgOAGQgNAGgNAAIgdADg");
	this.shape_19.setTransform(22,22.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D0D0D0").s().p("AgSATIgFgEIgDgBIgCAAIgKgCIAdgDQAMABAOgHQANgFADgRIAAAAIAFAJIABACQgBAJgJAKQgIAJgPAAg");
	this.shape_20.setTransform(22.2,22.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAOAEIAAABgAgOgDIABgBIAAABg");
	this.shape_21.setTransform(19,24.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAAAIAAAAg");
	this.shape_22.setTransform(25.5,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// Layer 15
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D12C03").s().p("AAJBjQgHgNgHgBIgOgCIgUgFIgTgHIgLgEQBeABAGg5QAGg4gggfQgagbgYgEQAwAGAhAlQAlApgEAzQgDA0gZATQgNAKgIAAQgIAAgDgKgAg0hsIADAAIAEABg");
	this.shape_23.setTransform(20.1,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 14
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C12702").s().p("AgNABIAAgFIAaAAQgTAEAAAFg");
	this.shape_24.setTransform(22.4,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 13
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C12702").s().p("AgMABIAAgFIAaAAQgVAEABAFg");
	this.shape_25.setTransform(21.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 12
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#913711").s().p("AAGAPQgNgMgKgDQgKgEgNgBIgTgEQgFgEACgGQADgHAEADQAEACgDAGQABAGAGABIAOABIAQADIAVANQAPALAPAAQAPAAADgFIAHgEQAFgBgBAGQAAAGgVADIgGAAQgRAAgNgKg");
	this.shape_26.setTransform(9.8,17);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 11
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D12C03").s().p("AgQATQgGgHgBgIIAAgFIACgJIAFgGQAIgIAIgBQAIAAAIAEIADADIAEAHIABAIIAAAFQgBAJgIAHQgHAIgJAAQgJAAgGgHg");
	this.shape_27.setTransform(5.8,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 10
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D12C03").s().p("AgVAaQgMgIgCgNQgCgMAJgLQAJgKAPgCQAOgCAMAHQAMAIACANQACAMgJAKQgJAMgPACIgFAAQgLAAgKgGg");
	this.shape_28.setTransform(17,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 9
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F93E0F").s().p("AgYAgQgPgJgDgRQgDgPAMgNQAKgNASgDQAQgCAPAJQAOAKADAQIAAAAQADAPgLAOIgBAAQgKAMgSADIgHAAQgNAAgKgHg");
	this.shape_29.setTransform(17.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 8
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F93E0F").s().p("AgUAWQgGgIgCgJIAAgGQAAgGADgFIAFgIIABAAQAKgJAJAAQAJgBAJAGIAEACIAAABIAFAIIACAKIgBAFQgBALgIAIQgJAJgLAAQgLAAgIgIg");
	this.shape_30.setTransform(5.8,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 7
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF530F").s().p("ABGBjQgHgNgIgBQgcgDgmgQIglgGQgdgGgYgMQgYgLgDgNQgEgNAEgLQACgMAGgJIAEgKQAMgTAOgOQAWgUAdgKQAYgJAaABQA0AFAiAnQAlApgDAzQgEA0gZATQgNAKgIAAQgIAAgDgKg");
	this.shape_31.setTransform(14,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 6
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#38100C").s().p("AgIAFQgEgQADgHIAGgHIgDAEQgDAGAFAQQAFAWAJAAIABAAIgFADQgHAAgHgVg");
	this.shape_32.setTransform(1.1,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 5
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#47180E").s().p("AAxAbQAEgFgDgIQgCgLgPgLQgPgNgUgBIgnABIgPADQACgEASgDIAngBQAUACAPAMQAPAMADALQADALgKAFg");
	this.shape_33.setTransform(21.2,7.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAAAAIABAAIgBAAg");
	this.shape_34.setTransform(26.1,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33}]}).wait(1));

	// Layer 4
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C12702").s().p("AAagBQgBgQgIAHIgVAVIgYAaQAQghAMgNQAMgPgIAAQgRAEgZARIgWAMQAOgQATgKIANgIIAagQIABgBIACgCIApABQgIAIACAHQAGAKADAOQADAMgCAdQgGglgKgLQgJgLAAANQgBAWgGAPIgHARQAHgegCgQg");
	this.shape_35.setTransform(19.3,29.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 3
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E32F02").s().p("AAYAdQgOgBgagaIgRgQQgIgHgDAAIgGACIgFABIAAAAIgBgCQAAgFAUgCIAngBQAUABAPANQAPAMADAKQADALgKAFQgIAFgMAAIgFAAg");
	this.shape_36.setTransform(21.2,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(1));

	// Layer 2
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DB2D02").s().p("AgPALQgEgRADgGQADgGAIgFQAHgFAJgCQAJgDgBAQQgBAPgHAPQgHATgEAAQgIAAgHgVg");
	this.shape_37.setTransform(1.8,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(1));

	// Layer 1
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E32F02").s().p("AgoAgQgVgQAAgTQAAgDAFgGQAFgGAagRQAZgRAaAEQAVAGAJASQAIAPgCAZQgBAMgHAKQgHAMgjAAQgdAAgXgSg");
	this.shape_38.setTransform(19.1,31.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4.7,32.3,31.5);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 33
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgKB7QgVgRAAgUIABgCIADgFIgBAAIABAAQANgQASgLIANgIIAbgPIABgCIAAAAIgCgCIAAgBIgBAAIgFgEIgDgBIgCAAIgKgBIgHgCIAAAAIgPgEIgSgGIgTgEIgngIIgngMIgWgNIgGgEQgIAAgHgVQgEgSADgGIAAAAIABgBIAAgBIACgCIAIgHIAIgEQABgJANgQQgJANALAaQALAaA2AJQA2AIAkgIQAkgIANgbQAMgagMgSIAOATIAAgBQAJAOAEAUIADAVIAMABIAZAJQALAFADAHIABADQAAAHgMARQgPATgMAAIgIgBIAAAAIgCgBIgLgLIgBACIAAABIgCAEIgCADIgFAJIgEAFIgDADIgBAAQgEAGACAFQAGAKADAOQACALgBAUIAAACIAAAGIAAADIAAABIgEAOIAAAAIgDAGIgPAJIgcADQgeAAgWgRgAiCiAIAEgHIABAAIAAgBIAFgDQgJAHgDAOg");
	this.shape.setTransform(16.1,21.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 32
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF530F").s().p("AglATIgugNIAfAFQAtAJAfgKQAggJAGgGIARgTQALgLgMAgQgMAegiAAg");
	this.shape_1.setTransform(13.7,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 31
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#38100C").s().p("AgqBQQA8gBAYgdQAFgHACgKIABgQQgBgIACgPIABgaQgBgNgFgOIACABIABACIADADIABABIADAOQACAOgCAPIgBAJQgBAIAAARQABAYgVAOQgOAKgQAFIgsADgAg2BMIgCgBIAagBIgVADgAgMBIIgSACgAAsATIAAgEQACAFgCAKQgCAMgHAHQgPAOgUAHIgMACQAzgLAFgqgAAkgqQgCgNgFgKIgIgPIABABIAIAFQALAWAAAYg");
	this.shape_2.setTransform(18.9,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0D0D0").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQABgKgCgEQACgYgFgUQABgXgLgXIAJAIIAHAHIAAAAQAFAOABANIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_3.setTransform(18.9,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#47180E").s().p("AAAAAIAAgBIADAEgAgCgCIACABg");
	this.shape_4.setTransform(23.8,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 30
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCABIgBgBQAAAAAAgBQAAAAABAAQAAAAABgBQABAAAAABIAFABIgBACIgEABg");
	this.shape_5.setTransform(6.1,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 29
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FD751C").s().p("AANAJIgSgGQgLgEAAgFQgBgFAOAFQAOAFAEAFQAEAGgEAAIgCgBg");
	this.shape_6.setTransform(7.6,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 28
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AgoAPQgFgFAAgHQAAgNAPgHQAMgGASABQASABANAGQAOAGAAAJQAAAHgRAIQgSAJgUAAQgXAAgHgJg");
	this.shape_7.setTransform(13,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 27
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#47180E").s().p("AgbARQAGAFAIAAQAMAAANgUQAPgTgDgHIABgBIACAEQADAHgOATQgPAUgLAAIgBABQgJAAgHgJg");
	this.shape_8.setTransform(29.5,20.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBgBIADACIgCABg");
	this.shape_9.setTransform(31.9,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer 26
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C12702").s().p("AgHAhQgEgLAEALgAgUAVIgNgYQgFgNAAgGQAAgHALgDIAbAAIAYAJQALAFADAHIABACQgegVgfAFQgFACAxAdIgugVQgNgEAcA0g");
	this.shape_10.setTransform(28.4,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 25
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#38100C").s().p("AgmANQgVgQAAgUIADgGQABAUAVAPQAWARAeAAQAjAAAHgMIgDAHQgIAMgjAAQgdAAgXgRg");
	this.shape_11.setTransform(18.9,32.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAAIAAAAg");
	this.shape_12.setTransform(25,33.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 24
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E32F02").s().p("AgUAUIgNgYQgFgMAAgHQAAgHALgDIAbAAIAYAJQALAFADAHQADAHgOATQgPAUgMAAQgLAAgJgOg");
	this.shape_13.setTransform(28.4,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 23
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#47180E").s().p("AgpBQQA8gBAYgdQAGgHACgKIAAgQQgBgIADgPIABgaIgHgcIAHAIIADAOQADAOgDAPIgBAJQgBAIABARQAAAYgUAOQgPAKgPAFIgsADgAg5BKQA9AAAbgZIABgCIAHgJQAGgPgEgHQgHgJACgNQAGgkgLgXIgJgPIAJAGQANAagCAbIgCAVQABAIAEAGQADAFgCALQgCAMgIAHQgOAOgUAHIgzAHg");
	this.shape_14.setTransform(18.7,14.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQACgLgDgEQgEgHAAgHIABgWQADgbgNgaIAQAPIAGAbIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_15.setTransform(18.9,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer 22
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#38100C").s().p("AgNAXIgCgDIAAAAIgBgBIAZACQAOgBAIgJQAJgJACgJIACAFIgEAHIgCADIgBACIgDAFQgHAIgPACgAgrALIAAAAIAFgCIAggDQAOAAALgGQAMgHABgOIABgDIACAFQgCARgOAGQgNAGgNAAIgdADg");
	this.shape_16.setTransform(22,22.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D0D0D0").s().p("AgSATIgFgEIgDgBIgCAAIgKgCIAdgDQAMABAOgHQANgFADgRIAAAAIAFAJIABACQgBAJgJAKQgIAJgPAAg");
	this.shape_17.setTransform(22.2,22.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAOAEIAAABgAgOgDIABgBIAAABg");
	this.shape_18.setTransform(19,23.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAAIAAAAg");
	this.shape_19.setTransform(25.5,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Layer 21
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D12C03").s().p("AAJBjQgHgNgHgBIgOgCIgUgFIgTgHIgLgEQBeABAGg5QAGg4gggfQgagbgYgEQAwAGAhAlQAlApgEAzQgDA0gZATQgNAKgIAAQgIAAgDgKgAg0hsIADAAIAEABg");
	this.shape_20.setTransform(20.1,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 20
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C12702").s().p("AgNABIAAgFIAaAAQgTAEAAAFg");
	this.shape_21.setTransform(22.4,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer 19
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C12702").s().p("AgMABIAAgFIAaAAQgVAEABAFg");
	this.shape_22.setTransform(21.5,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer 18
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#913711").s().p("AAGAPQgNgMgKgDQgKgEgNgBIgTgEQgFgEACgGQADgHAEADQAEACgDAGQABAGAGABIAOABIAQADIAVANQAPALAPAAQAPAAADgFIAHgEQAFgBgBAGQAAAGgVADIgGAAQgRAAgNgKg");
	this.shape_23.setTransform(9.8,16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 17
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAEIgBgEIABgEIAEgBIAEABIACAEIgCAEIgEACg");
	this.shape_24.setTransform(6.5,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 16
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAFIgCgFIACgFIAFgCIAFACIADAFIgDAFIgFADg");
	this.shape_25.setTransform(16.5,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 15
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#470E0E").s().p("AgFAHIgDgHIADgFQACgDADAAQAEAAACADIADAFIgDAHIgGACg");
	this.shape_26.setTransform(6.3,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 14
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#792B17").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEIgDAIIgJAEQgEAAgDgEg");
	this.shape_27.setTransform(6.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 13
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9F4E3").s().p("AgQATQgGgHgBgIIAAgFIACgJIAFgGQAIgIAIgBQAIAAAIAEIADADIAEAHIABAIIAAAFQgBAJgIAHQgHAIgJAAQgJAAgGgHg");
	this.shape_28.setTransform(5.8,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 12
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#470E0E").s().p("AgGAHIgDgHQAAgDADgDQADgDADgBQAFABADADIADAGIgDAHQgDADgFABQgDgBgDgDg");
	this.shape_29.setTransform(15.5,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 11
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#792B17").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAg");
	this.shape_30.setTransform(15.7,13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 10
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9F4E3").s().p("AgVAaQgMgIgCgNQgCgMAJgLQAJgKAPgCQAOgCAMAHQAMAIACANQACAMgJAKQgJAMgPACIgFAAQgLAAgKgGg");
	this.shape_31.setTransform(17,13);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 9
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F93E0F").s().p("AgYAgQgPgJgDgRQgDgPAMgNQAKgNASgDQAQgCAPAJQAOAKADAQIAAAAQADAPgLAOIgBAAQgKAMgSADIgHAAQgNAAgKgHg");
	this.shape_32.setTransform(17.3,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 8
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F93E0F").s().p("AgUAWQgGgIgCgJIAAgGQAAgGADgFIAFgIIABAAQAKgJAJAAQAJgBAJAGIAEACIAAABIAFAIIACAKIgBAFQgBALgIAIQgJAJgLAAQgLAAgIgIg");
	this.shape_33.setTransform(5.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	// Layer 7
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF530F").s().p("ABGBjQgHgNgIgBQgcgDgmgQIglgGQgdgGgYgMQgYgLgDgNQgEgNAEgLQACgMAGgJIAEgKQAMgTAOgOQAWgUAdgKQAYgJAaABQA0AFAiAnQAlApgDAzQgEA0gZATQgNAKgIAAQgIAAgDgKg");
	this.shape_34.setTransform(14,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

	// Layer 6
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#38100C").s().p("AgIAFQgEgRADgFIAGgIIgDAEQgDAGAFAQQAFAWAJAAIABAAIgFADQgHAAgHgVg");
	this.shape_35.setTransform(1.1,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 5
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#47180E").s().p("AAxAbQAEgFgDgIQgCgLgPgLQgPgNgUgBIgnABIgPADQACgEASgDIAngBQAUACAPAMQAPAMADALQADALgKAFg");
	this.shape_36.setTransform(21.2,6.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAAIABAAIgBAAg");
	this.shape_37.setTransform(26.1,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	// Layer 4
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C12702").s().p("AAagBQgBgQgIAHIgVAVIgYAaQAQghAMgNQAMgPgIAAQgRAEgZARIgWAMQAOgQATgKIANgIIAagQIABgBIACgCIApABQgIAIACAHQAGAKADAOQADAMgCAdQgGglgKgLQgJgLAAANQgBAWgGAPIgHARQAHgegCgQg");
	this.shape_38.setTransform(19.3,28.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

	// Layer 3
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E32F02").s().p("AAYAdQgOgBgagaIgRgQQgIgHgDAAIgGACIgFABIAAAAIgBgCQAAgFAUgCIAngBQAUABAPANQAPAMADAKQADALgKAFQgIAFgMAAIgFAAg");
	this.shape_39.setTransform(21.2,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// Layer 2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DB2D02").s().p("AgPALQgEgRADgGQADgGAIgFQAHgFAJgCQAJgDgBAQQgBAPgHAPQgHATgEAAQgIAAgHgVg");
	this.shape_40.setTransform(1.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1));

	// Layer 1
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E32F02").s().p("AgoAgQgVgQAAgTQAAgDAFgGQAFgGAagRQAZgRAaAEQAVAGAJASQAIAPgCAZQgBAMgHAKQgHAMgjAAQgdAAgXgSg");
	this.shape_41.setTransform(19.1,30.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4.2,32.3,31.5);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 33
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgKB7QgVgRAAgUIABgCIADgFIgBAAIABAAQANgQASgLIANgIIAbgPIABgCIAAAAIgCgCIAAgBIgBAAIgFgEIgDgBIgCAAIgKgBIgHgCIAAAAIgPgEIgSgGIgTgEIgngIIgngMIgWgNIgGgEQgIAAgHgVQgEgSADgGIAAAAIABgBIAAgBIACgCIAIgHIAGgDIACgBIAAgCIAHgNIAAACIABgBIgCAIQgHAVANANQAUATAuAJQAoAHAygJQAhgGARgWQAQgXgJgbIAJANIAAgBQAJAOAEAUIADAVIAMABIAZAJQALAFADAHIABADQAAAHgMARQgPATgMAAIgIgBIAAAAIgCgBIgLgLIgBACIAAABIgCAEIgCADIgFAJIgEAFIgDADIgBAAQgEAGACAFQAGAKADAOQACALgBAUIAAACIAAAGIAAADIAAABIgEAOIAAAAIgDAGIgPAJIgcADQgeAAgWgRgAiCiAIAEgHIABAAIAAgBIAFgDQgJAHgDAOg");
	this.shape.setTransform(16.1,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 32
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF530F").s().p("AglATIgugNIAfAFQAtAJAfgKQAggJAGgGIARgTQALgLgMAgQgMAegiAAg");
	this.shape_1.setTransform(13.7,18.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 31
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#38100C").s().p("AgqBQQA8gBAYgdQAFgHACgKIABgQQgBgIACgPIABgaQgBgNgFgOIACABIABACIADADIABABIADAOQACAOgCAPIgBAJQgBAIAAARQABAYgVAOQgOAKgQAFIgsADgAg2BMIgCgBIAagBIgVADgAgMBIIgSACgAAsATIAAgEQACAFgCAKQgCAMgHAHQgPAOgUAHIgMACQAzgLAFgqgAAkgqQgCgNgFgKIgIgPIABABIAIAFQALAWAAAYg");
	this.shape_2.setTransform(18.9,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0D0D0").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQABgKgCgEQACgYgFgUQABgXgLgXIAJAIIAHAHIAAAAQAFAOABANIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_3.setTransform(18.9,13.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#47180E").s().p("AAAAAIAAgBIADAEgAgCgCIACABg");
	this.shape_4.setTransform(23.8,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 30
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCABIgBgBQAAAAAAgBQAAAAABAAQAAAAABgBQABAAAAABIAFABIgBACIgEABg");
	this.shape_5.setTransform(6.1,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 29
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FD751C").s().p("AANAJIgSgGQgLgEAAgFQgBgFAOAFQAOAFAEAFQAEAGgEAAIgCgBg");
	this.shape_6.setTransform(7.6,16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 28
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AgoAPQgFgFAAgHQAAgNAPgHQAMgGASABQASABANAGQAOAGAAAJQAAAHgRAIQgSAJgUAAQgXAAgHgJg");
	this.shape_7.setTransform(13,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 27
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#47180E").s().p("AgbARQAGAFAIAAQAMAAANgUQAPgTgDgHIABgBIACAEQADAHgOATQgPAUgLAAIgBABQgJAAgHgJg");
	this.shape_8.setTransform(29.5,20.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBgBIADACIgCABg");
	this.shape_9.setTransform(31.9,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer 26
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C12702").s().p("AgHAhQgEgLAEALgAgUAVIgNgYQgFgNAAgGQAAgHALgDIAbAAIAYAJQALAFADAHIABACQgegVgfAFQgFACAxAdIgugVQgNgEAcA0g");
	this.shape_10.setTransform(28.4,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 25
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#38100C").s().p("AgmANQgVgQAAgUIADgGQABAUAVAPQAWARAeAAQAjAAAHgMIgDAHQgIAMgjAAQgdAAgXgRg");
	this.shape_11.setTransform(18.9,32);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAAIAAAAg");
	this.shape_12.setTransform(25,33.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 24
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E32F02").s().p("AgUAUIgNgYQgFgMAAgHQAAgHALgDIAbAAIAYAJQALAFADAHQADAHgOATQgPAUgMAAQgLAAgJgOg");
	this.shape_13.setTransform(28.4,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 23
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#47180E").s().p("AgpBQQA8gBAYgdQAGgHACgKIAAgQQgBgIADgPIABgaIgHgcIAHAIIADAOQADAOgDAPIgBAJQgBAIABARQAAAYgUAOQgPAKgPAFIgsADgAg5BKQA9AAAbgZIABgCIAHgJQAGgPgEgHQgHgJACgNQAGgkgLgXIgJgPIAJAGQANAagCAbIgCAVQABAIAEAGQADAFgCALQgCAMgIAHQgOAOgUAHIgzAHg");
	this.shape_14.setTransform(18.7,13.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQACgLgDgEQgEgHAAgHIABgWQADgbgNgaIAQAPIAGAbIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_15.setTransform(18.9,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer 22
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#38100C").s().p("AgNAXIgCgDIAAAAIgBgBIAZACQAOgBAIgJQAJgJACgJIACAFIgEAHIgCADIgBACIgDAFQgHAIgPACgAgrALIAAAAIAFgCIAggDQAOAAALgGQAMgHABgOIABgDIACAFQgCARgOAGQgNAGgNAAIgdADg");
	this.shape_16.setTransform(22,21.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D0D0D0").s().p("AgSATIgFgEIgDgBIgCAAIgKgCIAdgDQAMABAOgHQANgFADgRIAAAAIAFAJIABACQgBAJgJAKQgIAJgPAAg");
	this.shape_17.setTransform(22.2,21.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAOAEIAAABgAgOgDIABgBIAAABg");
	this.shape_18.setTransform(19,23);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAAIAAAAg");
	this.shape_19.setTransform(25.5,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Layer 21
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D12C03").s().p("AAJBjQgHgNgHgBIgOgCIgUgFIgTgHIgLgEQBeABAGg5QAGg4gggfQgagbgYgEQAwAGAhAlQAlApgEAzQgDA0gZATQgNAKgIAAQgIAAgDgKgAg0hsIADAAIAEABg");
	this.shape_20.setTransform(20.1,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 20
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C12702").s().p("AgNABIAAgFIAaAAQgTAEAAAFg");
	this.shape_21.setTransform(22.4,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer 19
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C12702").s().p("AgMABIAAgFIAaAAQgVAEABAFg");
	this.shape_22.setTransform(21.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer 18
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#913711").s().p("AAGAPQgNgMgKgDQgKgEgNgBIgTgEQgFgEACgGQADgHAEADQAEACgDAGQABAGAGABIAOABIAQADIAVANQAPALAPAAQAPAAADgFIAHgEQAFgBgBAGQAAAGgVADIgGAAQgRAAgNgKg");
	this.shape_23.setTransform(9.8,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 17
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAEIgBgEIABgEIAEgBIAEABIACAEIgCAEIgEACg");
	this.shape_24.setTransform(6.5,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 16
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAFIgCgFIACgFIAFgCIAFACIADAFIgDAFIgFADg");
	this.shape_25.setTransform(16.5,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 15
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#470E0E").s().p("AgFAHIgDgHIADgFQACgDADAAQAEAAACADIADAFIgDAHIgGACg");
	this.shape_26.setTransform(6.3,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 14
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#792B17").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEIgDAJIgJADQgEAAgDgDg");
	this.shape_27.setTransform(6.1,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 13
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9F4E3").s().p("AgQATQgGgHgBgIIAAgFIACgJIAFgGQAIgIAIgBQAIAAAIAEIADADIAEAHIABAIIAAAFQgBAJgIAHQgHAIgJAAQgJAAgGgHg");
	this.shape_28.setTransform(5.8,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 12
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#470E0E").s().p("AgGAHIgDgHQAAgEADgDQADgCADAAQAFAAADACIADAHIgDAHQgDADgFAAQgDAAgDgDg");
	this.shape_29.setTransform(15.5,13);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 11
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#792B17").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAg");
	this.shape_30.setTransform(15.7,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 10
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9F4E3").s().p("AgVAaQgMgIgCgNQgCgMAJgLQAJgKAPgCQAOgCAMAHQAMAIACANQACAMgJAKQgJAMgPACIgFAAQgLAAgKgGg");
	this.shape_31.setTransform(17,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 9
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F93E0F").s().p("AgYAgQgPgJgDgRQgDgPAMgNQAKgNASgDQAQgCAPAJQAOAKADAQIAAAAQADAPgLAOIgBAAQgKAMgSADIgHAAQgNAAgKgHg");
	this.shape_32.setTransform(17.3,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 8
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F93E0F").s().p("AgUAWQgGgIgCgJIAAgGQAAgGADgFIAFgIIABAAQAKgJAJAAQAJgBAJAGIAEACIAAABIAFAIIACAKIgBAFQgBALgIAIQgJAJgLAAQgLAAgIgIg");
	this.shape_33.setTransform(5.8,9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	// Layer 7
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF530F").s().p("ABGBjQgHgNgIgBQgcgDgmgQIglgGQgdgGgYgMQgYgLgDgNQgEgNAEgLQACgMAGgJIAEgKQAMgTAOgOQAWgUAdgKQAYgJAaABQA0AFAiAnQAlApgDAzQgEA0gZATQgNAKgIAAQgIAAgDgKg");
	this.shape_34.setTransform(14,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

	// Layer 6
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#38100C").s().p("AgIAFQgEgQADgHIAGgHIgDAEQgDAGAFARQAFAUAJABIABAAIgFADQgHAAgHgVg");
	this.shape_35.setTransform(1.1,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 5
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#47180E").s().p("AAxAbQAEgFgDgIQgCgLgPgLQgPgNgUgBIgnABIgPADQACgEASgDIAngBQAUACAPAMQAPAMADALQADALgKAFg");
	this.shape_36.setTransform(21.2,6.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAAIABAAIgBABg");
	this.shape_37.setTransform(26.1,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	// Layer 4
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C12702").s().p("AAagBQgBgQgIAHIgVAVIgYAaQAQghAMgNQAMgPgIAAQgRAEgZARIgWAMQAOgQATgKIANgIIAagQIABgBIACgCIApABQgIAIACAHQAGAKADAOQADAMgCAdQgGglgKgLQgJgLAAANQgBAWgGAPIgHARQAHgegCgQg");
	this.shape_38.setTransform(19.3,28);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

	// Layer 3
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E32F02").s().p("AAYAdQgOgBgagaIgRgQQgIgHgDAAIgGACIgFABIAAAAIgBgCQAAgFAUgCIAngBQAUABAPANQAPAMADAKQADALgKAFQgIAFgMAAIgFAAg");
	this.shape_39.setTransform(21.2,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// Layer 2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DB2D02").s().p("AgPALQgEgRADgGQADgGAIgFQAHgFAJgCQAJgDgBAQQgBAPgHAPQgHATgEAAQgIAAgHgVg");
	this.shape_40.setTransform(1.8,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1));

	// Layer 1
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E32F02").s().p("AgoAgQgVgQAAgTQAAgDAFgGQAFgGAagRQAZgRAaAEQAVAGAJASQAIAPgCAZQgBAMgHAKQgHAMgjAAQgdAAgXgSg");
	this.shape_41.setTransform(19.1,30);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.6,32.3,31.5);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 33
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgKB7QgVgRAAgUIABgCIADgFIgBAAIABAAQANgQASgLIANgIIAbgPIABgCIAAAAIgCgCIAAgBIgBAAIgFgEIgDgBIgCAAIgKgBIgHgCIAAAAIgPgEIgSgGIgTgEIgngIIgngMIgWgNIgGgEQgIAAgHgVQgEgSADgGIAAAAIABgBIAAgBIACgCIAIgHIAIgEIAFgKQgGALAJAXQAJAXA7ALQA7ALAlgLQAngMAKgVQAKgWAAgSIADADQAJAOAEAUIADAVIAMABIAZAJQALAFADAHIABADQAAAHgMARQgPATgMAAIgIgBIAAAAIgCgBIgLgLIgBACIAAABIgCAEIgCADIgFAJIgEAFIgDADIgBAAQgEAGACAFQAGAKADAOQACALgBAUIAAACIAAAGIAAADIAAABIgEAOIAAAAIgDAGIgPAJIgcADQgeAAgWgRgAiCiAIAEgHIABAAIAAgBIAFgDQgJAHgDAOg");
	this.shape.setTransform(16.1,20.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 32
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF530F").s().p("AglATIgugNIAfAFQAtAJAfgKQAggJAGgGIARgTQALgLgMAgQgMAegiAAg");
	this.shape_1.setTransform(13.7,18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 31
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#38100C").s().p("AgqBQQA8gBAYgdQAFgHACgKIABgQQgBgIACgPIABgaQgBgNgFgOIACABIABACIADADIABABIADAOQACAOgCAPIgBAJQgBAIAAARQABAYgVAOQgOAKgQAFIgsADgAg2BMIgCgBIAagBIgVADgAgMBIIgSACgAAsATIAAgEQACAFgCAKQgCAMgHAHQgPAOgUAHIgMACQAzgLAFgqgAAkgqQgCgNgFgKIgIgPIABABIAIAFQALAWAAAYg");
	this.shape_2.setTransform(18.9,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0D0D0").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQABgKgCgEQACgYgFgUQABgXgLgXIAJAIIAHAHIAAAAQAFAOABANIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_3.setTransform(18.9,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#47180E").s().p("AAAAAIAAgBIADAEgAgCgCIACABg");
	this.shape_4.setTransform(23.8,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 30
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCABIgBgBQAAAAAAgBQAAAAABAAQAAAAABgBQABAAAAABIAFABIgBACIgEABg");
	this.shape_5.setTransform(6.1,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 29
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FD751C").s().p("AANAJIgSgGQgLgEAAgFQgBgFAOAFQAOAFAEAFQAEAGgEAAIgCgBg");
	this.shape_6.setTransform(7.6,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 28
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AgoAPQgFgFAAgHQAAgNAPgHQAMgGASABQASABANAGQAOAGAAAJQAAAHgRAIQgSAJgUAAQgXAAgHgJg");
	this.shape_7.setTransform(13,6);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 27
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#47180E").s().p("AgbARQAGAFAIAAQAMAAANgUQAPgTgDgHIABgBIACAEQADAHgOATQgPAUgLAAIgBABQgJAAgHgJg");
	this.shape_8.setTransform(29.5,19.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBgBIADACIgCABg");
	this.shape_9.setTransform(31.9,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer 26
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C12702").s().p("AgHAhQgEgLAEALgAgUAVIgNgYQgFgNAAgGQAAgHALgDIAbAAIAYAJQALAFADAHIABACQgegVgfAFQgFACAxAdIgugVQgNgEAcA0g");
	this.shape_10.setTransform(28.4,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 25
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#38100C").s().p("AgmANQgVgQAAgUIADgGQABAUAVAPQAWARAeAAQAjAAAHgMIgDAHQgIAMgjAAQgdAAgXgRg");
	this.shape_11.setTransform(18.9,31.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAAIAAAAg");
	this.shape_12.setTransform(25,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 24
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E32F02").s().p("AgUAUIgNgYQgFgMAAgHQAAgHALgDIAbAAIAYAJQALAFADAHQADAHgOATQgPAUgMAAQgLAAgJgOg");
	this.shape_13.setTransform(28.4,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 23
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#47180E").s().p("AgpBQQA8gBAYgdQAGgHACgKIAAgQQgBgIADgPIABgaIgHgcIAHAIIADAOQADAOgDAPIgBAJQgBAIABARQAAAYgUAOQgPAKgPAFIgsADgAg5BKQA9AAAbgZIABgCIAHgJQAGgPgEgHQgHgJACgNQAGgkgLgXIgJgPIAJAGQANAagCAbIgCAVQABAIAEAGQADAFgCALQgCAMgIAHQgOAOgUAHIgzAHg");
	this.shape_14.setTransform(18.7,13.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQACgLgDgEQgEgHAAgHIABgWQADgbgNgaIAQAPIAGAbIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_15.setTransform(18.9,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer 22
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#38100C").s().p("AgNAXIgCgDIAAAAIgBgBIAZACQAOgBAIgJQAJgJACgJIACAFIgEAHIgCADIgBACIgDAFQgHAIgPACgAgrALIAAAAIAFgCIAggDQAOAAALgGQAMgHABgOIABgDIACAFQgCARgOAGQgNAGgNAAIgdADg");
	this.shape_16.setTransform(22,20.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D0D0D0").s().p("AgSATIgFgEIgDgBIgCAAIgKgCIAdgDQAMABAOgHQANgFADgRIAAAAIAFAJIABACQgBAJgJAKQgIAJgPAAg");
	this.shape_17.setTransform(22.2,21);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAOAEIAAABgAgOgDIABgBIAAABg");
	this.shape_18.setTransform(19,22.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAAIAAAAg");
	this.shape_19.setTransform(25.5,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Layer 21
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D12C03").s().p("AAJBjQgHgNgHgBIgOgCIgUgFIgTgHIgLgEQBeABAGg5QAGg4gggfQgagbgYgEQAwAGAhAlQAlApgEAzQgDA0gZATQgNAKgIAAQgIAAgDgKgAg0hsIADAAIAEABg");
	this.shape_20.setTransform(20.1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 20
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C12702").s().p("AgNABIAAgFIAaAAQgTAEAAAFg");
	this.shape_21.setTransform(22.4,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer 19
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C12702").s().p("AgMABIAAgFIAaAAQgVAEABAFg");
	this.shape_22.setTransform(21.5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer 18
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#913711").s().p("AAGAPQgNgMgKgDQgKgEgNgBIgTgEQgFgEACgGQADgHAEADQAEACgDAGQABAGAGABIAOABIAQADIAVANQAPALAPAAQAPAAADgFIAHgEQAFgBgBAGQAAAGgVADIgGAAQgRAAgNgKg");
	this.shape_23.setTransform(9.8,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 17
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAEIgBgEIABgEIAEgBIAEABIACAEIgCAEIgEACg");
	this.shape_24.setTransform(6.5,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 16
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAFIgCgFIACgFIAFgCIAFACIADAFIgDAFIgFADg");
	this.shape_25.setTransform(16.5,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 15
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#470E0E").s().p("AgFAHIgDgHIADgFQACgDADAAQAEAAACADIADAFIgDAHIgGACg");
	this.shape_26.setTransform(6.3,9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 14
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#792B17").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEIgDAJIgJADQgEAAgDgDg");
	this.shape_27.setTransform(6.1,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 13
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9F4E3").s().p("AgQATQgGgHgBgIIAAgFIACgJIAFgGQAIgIAIgBQAIAAAIAEIADADIAEAHIABAIIAAAFQgBAJgIAHQgHAIgJAAQgJAAgGgHg");
	this.shape_28.setTransform(5.8,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 12
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#470E0E").s().p("AgGAHIgDgHQAAgEADgDQADgCADAAQAFAAADACIADAHIgDAHQgDADgFABQgDgBgDgDg");
	this.shape_29.setTransform(15.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 11
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#792B17").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAg");
	this.shape_30.setTransform(15.7,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 10
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9F4E3").s().p("AgVAaQgMgIgCgNQgCgMAJgLQAJgKAPgCQAOgCAMAHQAMAIACANQACAMgJAKQgJAMgPACIgFAAQgLAAgKgGg");
	this.shape_31.setTransform(17,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 9
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F93E0F").s().p("AgYAgQgPgJgDgRQgDgPAMgNQAKgNASgDQAQgCAPAJQAOAKADAQIAAAAQADAPgLAOIgBAAQgKAMgSADIgHAAQgNAAgKgHg");
	this.shape_32.setTransform(17.3,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 8
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F93E0F").s().p("AgUAWQgGgIgCgJIAAgGQAAgGADgFIAFgIIABAAQAKgJAJAAQAJgBAJAGIAEACIAAABIAFAIIACAKIgBAFQgBALgIAIQgJAJgLAAQgLAAgIgIg");
	this.shape_33.setTransform(5.8,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	// Layer 7
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF530F").s().p("ABGBjQgHgNgIgBQgcgDgmgQIglgGQgdgGgYgMQgYgLgDgNQgEgNAEgLQACgMAGgJIAEgKQAMgTAOgOQAWgUAdgKQAYgJAaABQA0AFAiAnQAlApgDAzQgEA0gZATQgNAKgIAAQgIAAgDgKg");
	this.shape_34.setTransform(14,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

	// Layer 6
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#38100C").s().p("AgIAFQgEgQADgHIAGgHIgDAEQgDAGAFAQQAFAWAJAAIABAAIgFADQgHAAgHgVg");
	this.shape_35.setTransform(1.1,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 5
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#47180E").s().p("AAxAbQAEgFgDgIQgCgLgPgLQgPgNgUgBIgnABIgPADQACgEASgDIAngBQAUACAPAMQAPAMADALQADALgKAFg");
	this.shape_36.setTransform(21.2,5.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAAIABAAIgBAAg");
	this.shape_37.setTransform(26.1,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	// Layer 4
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C12702").s().p("AAagBQgBgQgIAHIgVAVIgYAaQAQghAMgNQAMgPgIAAQgRAEgZARIgWAMQAOgQATgKIANgIIAagQIABgBIACgCIApABQgIAIACAHQAGAKADAOQADAMgCAdQgGglgKgLQgJgLAAANQgBAWgGAPIgHARQAHgegCgQg");
	this.shape_38.setTransform(19.3,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

	// Layer 3
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E32F02").s().p("AAYAdQgOgBgagaIgRgQQgIgHgDAAIgGACIgFABIAAAAIgBgCQAAgFAUgCIAngBQAUABAPANQAPAMADAKQADALgKAFQgIAFgMAAIgFAAg");
	this.shape_39.setTransform(21.2,6);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// Layer 2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DB2D02").s().p("AgPALQgEgRADgGQADgGAIgFQAHgFAJgCQAJgDgBAQQgBAPgHAPQgHATgEAAQgIAAgHgVg");
	this.shape_40.setTransform(1.8,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1));

	// Layer 1
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E32F02").s().p("AgoAgQgVgQAAgTQAAgDAFgGQAFgGAagRQAZgRAaAEQAVAGAJASQAIAPgCAZQgBAMgHAKQgHAMgjAAQgdAAgXgSg");
	this.shape_41.setTransform(19.1,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3,32.3,31.5);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 33
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgKB7QgVgRAAgUIABgCIADgFIgBAAIABAAQANgQASgLIANgIIAbgPIABgCIAAAAIgCgCIAAgBIgBAAIgFgEIgDgBIgCAAIgKgBIgHgCIAAAAIgPgEIgSgGIgTgEIgngIIgngMIgWgNIgGgEQgIAAgHgVQgEgSADgGIAAAAIABgBIAAgBIACgCIAIgHIAIgEIABgEQgCAHAFANQAEAOATAKQASALAzAOQAxANAmgPQAmgOAKgXQAKgXgHgOIAAgBQAJAOAEAUIADAVIAMABIAZAJQALAFADAHIABADQAAAHgMARQgPATgMAAIgIgBIAAAAIgCgBIgLgLIgBACIAAABIgCAEIgCADIgFAJIgEAFIgDADIgBAAQgEAGACAFQAGAKADAOQACALgBAUIAAACIAAAGIAAADIAAABIgEAOIAAAAIgDAGIgPAJIgcADQgeAAgWgRgAiCiAIAEgHIABAAIAAgBIAFgDQgJAHgDAOg");
	this.shape.setTransform(16.1,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 32
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF530F").s().p("AglATIgugNIAfAFQAtAJAfgKQAggJAGgGIARgTQALgLgMAgQgMAegiAAg");
	this.shape_1.setTransform(13.7,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 31
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#38100C").s().p("AgqBQQA8gBAYgdQAFgHACgKIABgQQgBgIACgPIABgaQgBgNgFgOIACABIABACIADADIABABIADAOQACAOgCAPIgBAJQgBAIAAARQABAYgVAOQgOAKgQAFIgsADgAg2BMIgCgBIAagBIgVADgAgMBIIgSACgAAsATIAAgEQACAFgCAKQgCAMgHAHQgPAOgUAHIgMACQAzgLAFgqgAAkgqQgCgNgFgKIgIgPIABABIAIAFQALAWAAAYg");
	this.shape_2.setTransform(18.9,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0D0D0").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQABgKgCgEQACgYgFgUQABgXgLgXIAJAIIAHAHIAAAAQAFAOABANIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_3.setTransform(18.9,12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#47180E").s().p("AAAAAIAAgBIADAEgAgCgCIACABg");
	this.shape_4.setTransform(23.8,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 30
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCABIgBgBQAAAAAAgBQAAAAABAAQAAAAABgBQABAAAAABIAFABIgBACIgEABg");
	this.shape_5.setTransform(6.1,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 29
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FD751C").s().p("AANAJIgSgGQgLgEAAgFQgBgFAOAFQAOAFAEAFQAEAGgEAAIgCgBg");
	this.shape_6.setTransform(7.6,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 28
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AgoAPQgFgFAAgHQAAgNAPgHQAMgGASABQASABANAGQAOAGAAAJQAAAHgRAIQgSAJgUAAQgXAAgHgJg");
	this.shape_7.setTransform(13,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 27
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#47180E").s().p("AgbARQAGAFAIAAQAMAAANgUQAPgTgDgHIABgBIACAEQADAHgOATQgPAUgLAAIgBABQgJAAgHgJg");
	this.shape_8.setTransform(29.5,18.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBgBIADACIgCABg");
	this.shape_9.setTransform(31.9,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer 26
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C12702").s().p("AgHAhQgEgLAEALgAgUAVIgNgYQgFgNAAgGQAAgHALgDIAbAAIAYAJQALAFADAHIABACQgegVgfAFQgFACAxAdIgugVQgNgEAcA0g");
	this.shape_10.setTransform(28.4,18);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 25
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#38100C").s().p("AgmANQgVgQAAgUIADgGQABAUAVAPQAWARAeAAQAjAAAHgMIgDAHQgIAMgjAAQgdAAgXgRg");
	this.shape_11.setTransform(18.9,30.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAAIAAAAg");
	this.shape_12.setTransform(25,31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 24
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E32F02").s().p("AgUAUIgNgYQgFgMAAgHQAAgHALgDIAbAAIAYAJQALAFADAHQADAHgOATQgPAUgMAAQgLAAgJgOg");
	this.shape_13.setTransform(28.4,18);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 23
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#47180E").s().p("AgpBQQA8gBAYgdQAGgHACgKIAAgQQgBgIADgPIABgaIgHgcIAHAIIADAOQADAOgDAPIgBAJQgBAIABARQAAAYgUAOQgPAKgPAFIgsADgAg5BKQA9AAAbgZIABgCIAHgJQAGgPgEgHQgHgJACgNQAGgkgLgXIgJgPIAJAGQANAagCAbIgCAVQABAIAEAGQADAFgCALQgCAMgIAHQgOAOgUAHIgzAHg");
	this.shape_14.setTransform(18.7,12.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQACgLgDgEQgEgHAAgHIABgWQADgbgNgaIAQAPIAGAbIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_15.setTransform(18.9,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer 22
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#38100C").s().p("AgNAXIgCgDIAAAAIgBgBIAZACQAOgBAIgJQAJgJACgJIACAFIgEAHIgCADIgBACIgDAFQgHAIgPACgAgrALIAAAAIAFgCIAggDQAOAAALgGQAMgHABgOIABgDIACAFQgCARgOAGQgNAGgNAAIgdADg");
	this.shape_16.setTransform(22,20.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D0D0D0").s().p("AgSATIgFgEIgDgBIgCAAIgKgCIAdgDQAMABAOgHQANgFADgRIAAAAIAFAJIABACQgBAJgJAKQgIAJgPAAg");
	this.shape_17.setTransform(22.2,20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAOAEIAAABgAgOgDIABgBIAAABg");
	this.shape_18.setTransform(19,21.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAAIAAAAg");
	this.shape_19.setTransform(25.5,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Layer 21
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D12C03").s().p("AAJBjQgHgNgHgBIgOgCIgUgFIgTgHIgLgEQBeABAGg5QAGg4gggfQgagbgYgEQAwAGAhAlQAlApgEAzQgDA0gZATQgNAKgIAAQgIAAgDgKgAg0hsIADAAIAEABg");
	this.shape_20.setTransform(20.1,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 20
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C12702").s().p("AgNABIAAgFIAaAAQgTAEAAAFg");
	this.shape_21.setTransform(22.4,5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer 19
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C12702").s().p("AgMABIAAgFIAaAAQgVAEABAFg");
	this.shape_22.setTransform(21.5,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer 18
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#913711").s().p("AAGAPQgNgMgKgDQgKgEgNgBIgTgEQgFgEACgGQADgHAEADQAEACgDAGQABAGAGABIAOABIAQADIAVANQAPALAPAAQAPAAADgFIAHgEQAFgBgBAGQAAAGgVADIgGAAQgRAAgNgKg");
	this.shape_23.setTransform(9.8,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 17
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAEIgBgEIABgEIAEgBIAEABIACAEIgCAEIgEACg");
	this.shape_24.setTransform(6.5,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 16
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAFIgCgFIACgFIAFgCIAFACIADAFIgDAFIgFADg");
	this.shape_25.setTransform(16.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 15
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#470E0E").s().p("AgFAGIgDgGIADgFQACgDADAAQAEAAACADIADAFIgDAGIgGADg");
	this.shape_26.setTransform(6.3,9);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 14
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#792B17").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEIgDAIIgJAEQgEAAgDgEg");
	this.shape_27.setTransform(6.1,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 13
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9F4E3").s().p("AgQATQgGgHgBgIIAAgFIACgJIAFgGQAIgIAIgBQAIAAAIAEIADADIAEAHIABAIIAAAFQgBAJgIAHQgHAIgJAAQgJAAgGgHg");
	this.shape_28.setTransform(5.8,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 12
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#470E0E").s().p("AgGAHIgDgHQAAgDADgEQADgDADABQAFgBADADIADAHIgDAHQgDAEgFgBQgDABgDgEg");
	this.shape_29.setTransform(15.5,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 11
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#792B17").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAg");
	this.shape_30.setTransform(15.7,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 10
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9F4E3").s().p("AgVAaQgMgIgCgNQgCgMAJgLQAJgKAPgCQAOgCAMAHQAMAIACANQACAMgJAKQgJAMgPACIgFAAQgLAAgKgGg");
	this.shape_31.setTransform(17,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 9
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F93E0F").s().p("AgYAgQgPgJgDgRQgDgPAMgNQAKgNASgDQAQgCAPAJQAOAKADAQIAAAAQADAPgLAOIgBAAQgKAMgSADIgHAAQgNAAgKgHg");
	this.shape_32.setTransform(17.3,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 8
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F93E0F").s().p("AgUAWQgGgIgCgJIAAgGQAAgGADgFIAFgIIABAAQAKgJAJAAQAJgBAJAGIAEACIAAABIAFAIIACAKIgBAFQgBALgIAIQgJAJgLAAQgLAAgIgIg");
	this.shape_33.setTransform(5.8,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	// Layer 7
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF530F").s().p("ABGBjQgHgNgIgBQgcgDgmgQIglgGQgdgGgYgMQgYgLgDgNQgEgNAEgLQACgMAGgJIAEgKQAMgTAOgOQAWgUAdgKQAYgJAaABQA0AFAiAnQAlApgDAzQgEA0gZATQgNAKgIAAQgIAAgDgKg");
	this.shape_34.setTransform(14,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

	// Layer 6
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#38100C").s().p("AgIAFQgEgRADgFIAGgIIgDAEQgDAGAFARQAFAUAJAAIABAAIgFAEQgHAAgHgVg");
	this.shape_35.setTransform(1.1,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 5
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#47180E").s().p("AAxAbQAEgFgDgIQgCgLgPgLQgPgNgUgBIgnABIgPADQACgEASgDIAngBQAUACAPAMQAPAMADALQADALgKAFg");
	this.shape_36.setTransform(21.2,5.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAAIABAAIgBABg");
	this.shape_37.setTransform(26.1,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	// Layer 4
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C12702").s().p("AAagBQgBgQgIAHIgVAVIgYAaQAQghAMgNQAMgPgIAAQgRAEgZARIgWAMQAOgQATgKIANgIIAagQIABgBIACgCIApABQgIAIACAHQAGAKADAOQADAMgCAdQgGglgKgLQgJgLAAANQgBAWgGAPIgHARQAHgegCgQg");
	this.shape_38.setTransform(19.3,26.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

	// Layer 3
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E32F02").s().p("AAYAdQgOgBgagaIgRgQQgIgHgDAAIgGACIgFABIAAAAIgBgCQAAgFAUgCIAngBQAUABAPANQAPAMADAKQADALgKAFQgIAFgMAAIgFAAg");
	this.shape_39.setTransform(21.2,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// Layer 2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DB2D02").s().p("AgPALQgEgRADgGQADgGAIgFQAHgFAJgCQAJgDgBAQQgBAPgHAPQgHATgEAAQgIAAgHgVg");
	this.shape_40.setTransform(1.8,13);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1));

	// Layer 1
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E32F02").s().p("AgoAgQgVgQAAgTQAAgDAFgGQAFgGAagRQAZgRAaAEQAVAGAJASQAIAPgCAZQgBAMgHAKQgHAMgjAAQgdAAgXgSg");
	this.shape_41.setTransform(19.1,28.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.4,32.3,31.5);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 33
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgKB7QgVgRAAgUIABgCIADgFIgBAAIABAAQANgQASgLIANgIIAbgPIABgCIAAAAIgCgCIAAgBIgBAAIgFgEIgDgBIgCAAIgKgBIgHgCIAAAAIgPgEIgSgGIgTgEIgngIIgngMIgWgNIgGgEQgIAAgHgVQgEgSADgGIAAAAIABgBIAAgBIACgCIAIgHIAIgEIADgHIAAgBIACgCIgCADQgHARALAXQAKAWA8APQA8APApgQQApgQALgWQALgXgHgTIAAgBQAJAOAEAUIADAVIAMABIAZAJQALAFADAHIABADQAAAHgMARQgPATgMAAIgIgBIAAAAIgCgBIgLgLIgBACIAAABIgCAEIgCADIgFAJIgEAFIgDADIgBAAQgEAGACAFQAGAKADAOQACALgBAUIAAACIAAAGIAAADIAAABIgEAOIAAgBIAAABIAAAAIgDAGIgPAJIgcADQgeAAgWgRgAiCiAIAEgHIABAAIAAgBIAFgDQgJAHgDAOg");
	this.shape.setTransform(16.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 32
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF530F").s().p("AglATIgugNIAfAFQAtAJAfgKQAggJAGgGIARgTQALgLgMAgQgMAegiAAg");
	this.shape_1.setTransform(13.7,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 31
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#38100C").s().p("AgqBQQA8gBAYgdQAFgHACgKIABgQQgBgIACgPIABgaQgBgNgFgOIACABIABACIADADIABABIADAOQACAOgCAPIgBAJQgBAIAAARQABAYgVAOQgOAKgQAFIgsADgAg2BMIgCgBIAagBIgVADgAgMBIIgSACgAAsATIAAgEQACAFgCAKQgCAMgHAHQgPAOgUAHIgMACQAzgLAFgqgAAkgqQgCgNgFgKIgIgPIABABIAIAFQALAWAAAYg");
	this.shape_2.setTransform(18.9,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0D0D0").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQABgKgCgEQACgYgFgUQABgXgLgXIAJAIIAHAHIAAAAQAFAOABANIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_3.setTransform(18.9,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#47180E").s().p("AAAAAIAAgBIADAEgAgCgCIACABg");
	this.shape_4.setTransform(23.8,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 30
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCABIgBgBQAAAAAAgBQAAAAABAAQAAAAABgBQABAAAAABIAFABIgBACIgEABg");
	this.shape_5.setTransform(6.1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 29
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FD751C").s().p("AANAJIgSgGQgLgEAAgFQgBgFAOAFQAOAFAEAFQAEAGgEAAIgCgBg");
	this.shape_6.setTransform(7.6,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 28
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AgoAPQgFgFAAgHQAAgNAPgHQAMgGASABQASABANAGQAOAGAAAJQAAAHgRAIQgSAJgUAAQgXAAgHgJg");
	this.shape_7.setTransform(13,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 27
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#47180E").s().p("AgbARQAGAFAIAAQAMAAANgUQAPgTgDgHIABgBIACAEQADAHgOATQgPAUgLAAIgBABQgJAAgHgJg");
	this.shape_8.setTransform(29.5,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBgBIADACIgCABg");
	this.shape_9.setTransform(31.9,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer 26
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C12702").s().p("AgHAhQgEgLAEALgAgUAVIgNgYQgFgNAAgGQAAgHALgDIAbAAIAYAJQALAFADAHIABACQgegVgfAFQgFACAxAdIgugVQgNgEAcA0g");
	this.shape_10.setTransform(28.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 25
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#38100C").s().p("AgmANQgVgQAAgUIADgGQABAUAVAPQAWARAeAAQAjAAAHgMIgDAHQgIAMgjAAQgdAAgXgRg");
	this.shape_11.setTransform(18.9,30.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAAIAAAAg");
	this.shape_12.setTransform(25,31.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 24
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E32F02").s().p("AgUAUIgNgYQgFgMAAgHQAAgHALgDIAbAAIAYAJQALAFADAHQADAHgOATQgPAUgMAAQgLAAgJgOg");
	this.shape_13.setTransform(28.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 23
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#47180E").s().p("AgpBQQA8gBAYgdQAGgHACgKIAAgQQgBgIADgPIABgaIgHgcIAHAIIADAOQADAOgDAPIgBAJQgBAIABARQAAAYgUAOQgPAKgPAFIgsADgAg5BKQA9AAAbgZIABgCIAHgJQAGgPgEgHQgHgJACgNQAGgkgLgXIgJgPIAJAGQANAagCAbIgCAVQABAIAEAGQADAFgCALQgCAMgIAHQgOAOgUAHIgzAHg");
	this.shape_14.setTransform(18.7,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQACgLgDgEQgEgHAAgHIABgWQADgbgNgaIAQAPIAGAbIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_15.setTransform(18.9,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer 22
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#38100C").s().p("AgNAXIgCgDIAAAAIgBgBIAZACQAOgBAIgJQAJgJACgJIACAFIgEAHIgCADIgBACIgDAFQgHAIgPACgAgrALIAAAAIAFgCIAggDQAOAAALgGQAMgHABgOIABgDIACAFQgCARgOAGQgNAGgNAAIgdADg");
	this.shape_16.setTransform(22,19.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D0D0D0").s().p("AgSATIgFgEIgDgBIgCAAIgKgCIAdgDQAMABAOgHQANgFADgRIAAAAIAFAJIABACQgBAJgJAKQgIAJgPAAg");
	this.shape_17.setTransform(22.2,19.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAOAEIAAABgAgOgDIABgBIAAABg");
	this.shape_18.setTransform(19,21.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAAIAAAAg");
	this.shape_19.setTransform(25.5,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Layer 21
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D12C03").s().p("AAJBjQgHgNgHgBIgOgCIgUgFIgTgHIgLgEQBeABAGg5QAGg4gggfQgagbgYgEQAwAGAhAlQAlApgEAzQgDA0gZATQgNAKgIAAQgIAAgDgKgAg0hsIADAAIAEABg");
	this.shape_20.setTransform(20.1,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 20
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C12702").s().p("AgNABIAAgFIAaAAQgTAEAAAFg");
	this.shape_21.setTransform(22.4,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer 19
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C12702").s().p("AgMABIAAgFIAaAAQgVAEABAFg");
	this.shape_22.setTransform(21.5,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer 18
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#913711").s().p("AAGAPQgNgMgKgDQgKgEgNgBIgTgEQgFgEACgGQADgHAEADQAEACgDAGQABAGAGABIAOABIAQADIAVANQAPALAPAAQAPAAADgFIAHgEQAFgBgBAGQAAAGgVADIgGAAQgRAAgNgKg");
	this.shape_23.setTransform(9.8,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 17
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAEIgBgEIABgEIAEgBIAEABIACAEIgCAEIgEACg");
	this.shape_24.setTransform(6.5,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 16
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAFIgCgFIACgFIAFgCIAFACIADAFIgDAFIgFADg");
	this.shape_25.setTransform(16.5,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 15
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#470E0E").s().p("AgFAHIgDgHIADgFQACgDADAAQAEAAACADIADAFIgDAHIgGACg");
	this.shape_26.setTransform(6.3,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 14
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#792B17").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEIgDAIIgJAEQgEAAgDgEg");
	this.shape_27.setTransform(6.1,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 13
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9F4E3").s().p("AgQATQgGgHgBgIIAAgFIACgJIAFgGQAIgIAIgBQAIAAAIAEIADADIAEAHIABAIIAAAFQgBAJgIAHQgHAIgJAAQgJAAgGgHg");
	this.shape_28.setTransform(5.8,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 12
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#470E0E").s().p("AgGAHIgDgHQAAgDADgDQADgEADAAQAFAAADAEIADAGIgDAHQgDAEgFAAQgDAAgDgEg");
	this.shape_29.setTransform(15.5,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 11
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#792B17").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAg");
	this.shape_30.setTransform(15.7,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 10
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9F4E3").s().p("AgVAaQgMgIgCgNQgCgMAJgLQAJgKAPgCQAOgCAMAHQAMAIACANQACAMgJAKQgJAMgPACIgFAAQgLAAgKgGg");
	this.shape_31.setTransform(17,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 9
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F93E0F").s().p("AgYAgQgPgJgDgRQgDgPAMgNQAKgNASgDQAQgCAPAJQAOAKADAQIAAAAQADAPgLAOIgBAAQgKAMgSADIgHAAQgNAAgKgHg");
	this.shape_32.setTransform(17.3,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 8
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F93E0F").s().p("AgUAWQgGgIgCgJIAAgGQAAgGADgFIAFgIIABAAQAKgJAJAAQAJgBAJAGIAEACIAAABIAFAIIACAKIgBAFQgBALgIAIQgJAJgLAAQgLAAgIgIg");
	this.shape_33.setTransform(5.8,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	// Layer 7
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF530F").s().p("ABGBjQgHgNgIgBQgcgDgmgQIglgGQgdgGgYgMQgYgLgDgNQgEgNAEgLQACgMAGgJIAEgKQAMgTAOgOQAWgUAdgKQAYgJAaABQA0AFAiAnQAlApgDAzQgEA0gZATQgNAKgIAAQgIAAgDgKg");
	this.shape_34.setTransform(14,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

	// Layer 6
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#38100C").s().p("AgIAFQgEgRADgFIAGgIIgDAEQgDAGAFAQQAFAWAJgBIABAAIgFAEQgHAAgHgVg");
	this.shape_35.setTransform(1.1,13);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 5
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#47180E").s().p("AAxAbQAEgFgDgIQgCgLgPgLQgPgNgUgBIgnABIgPADQACgEASgDIAngBQAUACAPAMQAPAMADALQADALgKAFg");
	this.shape_36.setTransform(21.2,4.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAAIABAAIgBAAg");
	this.shape_37.setTransform(26.1,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	// Layer 4
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C12702").s().p("AAagBQgBgQgIAHIgVAVIgYAaQAQghAMgNQAMgPgIAAQgRAEgZARIgWAMQAOgQATgKIANgIIAagQIABgBIACgCIApABQgIAIACAHQAGAKADAOQADAMgCAdQgGglgKgLQgJgLAAANQgBAWgGAPIgHARQAHgegCgQg");
	this.shape_38.setTransform(19.3,26.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

	// Layer 3
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E32F02").s().p("AAYAdQgOgBgagaIgRgQQgIgHgDAAIgGACIgFABIAAAAIgBgCQAAgFAUgCIAngBQAUABAPANQAPAMADAKQADALgKAFQgIAFgMAAIgFAAg");
	this.shape_39.setTransform(21.2,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// Layer 2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DB2D02").s().p("AgPALQgEgRADgGQADgGAIgFQAHgFAJgCQAJgDgBAQQgBAPgHAPQgHATgEAAQgIAAgHgVg");
	this.shape_40.setTransform(1.8,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1));

	// Layer 1
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E32F02").s().p("AgoAgQgVgQAAgTQAAgDAFgGQAFgGAagRQAZgRAaAEQAVAGAJASQAIAPgCAZQgBAMgHAKQgHAMgjAAQgdAAgXgSg");
	this.shape_41.setTransform(19.1,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.8,32.3,31.5);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 33
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgKB7QgVgRAAgUIABgCIADgFIgBAAIABAAQANgQASgLIANgIIAbgPIABgCIAAAAIgCgCIAAgBIgBAAIgFgEIgDgBIgCAAIgKgBIgHgCIAAAAIgPgEIgSgGIgTgEIgngIIgngMIgWgNIgGgEQgIAAgHgVQgEgSADgGIAAAAIABgBIAAgBIACgCIAIgHIAHgEQgEAGgBALQgBALAHALQAHAKARAJQAQAJAVAHIBDAIQAsABAZgOQAOgHAPgQQANgLAEgQIACgIIACALIADAVIAMABIAZAJQALAFADAHIABADQAAAHgMARQgPATgMAAIgIgBIAAAAIgCgBIgLgLIgBACIAAABIgCAEIgCADIgFAJIgEAFIgDADIgBAAQgEAGACAFQAGAKADAOQACALgBAUIAAACIAAAGIAAADIAAABIgEAOIAAAAIgDAGIgPAJIgcADQgeAAgWgRgAiCiAIAEgHIABAAIAAgBIAFgDQgJAHgDAOg");
	this.shape.setTransform(16.1,18.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 32
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF530F").s().p("AglATIgugNIAfAFQAtAJAfgKQAggJAGgGIARgTQALgLgMAgQgMAegiAAg");
	this.shape_1.setTransform(13.7,16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 31
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#38100C").s().p("AgqBQQA8gBAYgdQAFgHACgKIABgQQgBgIACgPIABgaQgBgNgFgOIACABIABACIADADIABABIADAOQACAOgCAPIgBAJQgBAIAAARQABAYgVAOQgOAKgQAFIgsADgAg2BMIgCgBIAagBIgVADgAgMBIIgSACgAAsATIAAgEQACAFgCAKQgCAMgHAHQgPAOgUAHIgMACQAzgLAFgqgAAkgqQgCgNgFgKIgIgPIABABIAIAFQALAWAAAYg");
	this.shape_2.setTransform(18.9,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0D0D0").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQABgKgCgEQACgYgFgUQABgXgLgXIAJAIIAHAHIAAAAQAFAOABANIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_3.setTransform(18.9,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#47180E").s().p("AAAAAIAAgBIADAEgAgCgCIACABg");
	this.shape_4.setTransform(23.8,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 30
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCABIgBgBQAAAAAAgBQAAAAABAAQAAAAABgBQABAAAAABIAFABIgBACIgEABg");
	this.shape_5.setTransform(6.1,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 29
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FD751C").s().p("AANAJIgSgGQgLgEAAgFQgBgFAOAFQAOAFAEAFQAEAGgEAAIgCgBg");
	this.shape_6.setTransform(7.6,14);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 28
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AgoAPQgFgFAAgHQAAgNAPgHQAMgGASABQASABANAGQAOAGAAAJQAAAHgRAIQgSAJgUAAQgXAAgHgJg");
	this.shape_7.setTransform(13,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 27
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#47180E").s().p("AgbARQAGAFAIAAQAMAAANgUQAPgTgDgHIABgBIACAEQADAHgOATQgPAUgLAAIgBABQgJAAgHgJg");
	this.shape_8.setTransform(29.5,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBgBIADACIgCABg");
	this.shape_9.setTransform(31.9,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer 26
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C12702").s().p("AgHAhQgEgLAEALgAgUAVIgNgYQgFgNAAgGQAAgHALgDIAbAAIAYAJQALAFADAHIABACQgegVgfAFQgFACAxAdIgugVQgNgEAcA0g");
	this.shape_10.setTransform(28.4,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 25
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#38100C").s().p("AgmANQgVgQAAgUIADgGQABAUAVAPQAWARAeAAQAjAAAHgMIgDAHQgIAMgjAAQgdAAgXgRg");
	this.shape_11.setTransform(18.9,29.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAAIAAAAg");
	this.shape_12.setTransform(25,30.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 24
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E32F02").s().p("AgUAUIgNgYQgFgMAAgHQAAgHALgDIAbAAIAYAJQALAFADAHQADAHgOATQgPAUgMAAQgLAAgJgOg");
	this.shape_13.setTransform(28.4,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 23
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#47180E").s().p("AgpBQQA8gBAYgdQAGgHACgKIAAgQQgBgIADgPIABgaIgHgcIAHAIIADAOQADAOgDAPIgBAJQgBAIABARQAAAYgUAOQgPAKgPAFIgsADgAg5BKQA9AAAbgZIABgCIAHgJQAGgPgEgHQgHgJACgNQAGgkgLgXIgJgPIAJAGQANAagCAbIgCAVQABAIAEAGQADAFgCALQgCAMgIAHQgOAOgUAHIgzAHg");
	this.shape_14.setTransform(18.7,11.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQACgLgDgEQgEgHAAgHIABgWQADgbgNgaIAQAPIAGAbIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_15.setTransform(18.9,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer 22
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#38100C").s().p("AgNAXIgCgDIAAAAIgBgBIAZACQAOgBAIgJQAJgJACgJIACAFIgEAHIgCADIgBACIgDAFQgHAIgPACgAgrALIAAAAIAFgCIAggDQAOAAALgGQAMgHABgOIABgDIACAFQgCARgOAGQgNAGgNAAIgdADg");
	this.shape_16.setTransform(22,19.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D0D0D0").s().p("AgSATIgFgEIgDgBIgCAAIgKgCIAdgDQAMABAOgHQANgFADgRIAAAAIAFAJIABACQgBAJgJAKQgIAJgPAAg");
	this.shape_17.setTransform(22.2,19.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAOAEIAAABgAgOgDIABgBIAAABg");
	this.shape_18.setTransform(19,20.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAAIAAAAg");
	this.shape_19.setTransform(25.5,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Layer 21
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D12C03").s().p("AAJBjQgHgNgHgBIgOgCIgUgFIgTgHIgLgEQBeABAGg5QAGg4gggfQgagbgYgEQAwAGAhAlQAlApgEAzQgDA0gZATQgNAKgIAAQgIAAgDgKgAg0hsIADAAIAEABg");
	this.shape_20.setTransform(20.1,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 20
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C12702").s().p("AgNABIAAgFIAaAAQgTAEAAAFg");
	this.shape_21.setTransform(22.4,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer 19
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C12702").s().p("AgMABIAAgFIAaAAQgVAEABAFg");
	this.shape_22.setTransform(21.5,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer 18
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#913711").s().p("AAGAPQgNgMgKgDQgKgEgNgBIgTgEQgFgEACgGQADgHAEADQAEACgDAGQABAGAGABIAOABIAQADIAVANQAPALAPAAQAPAAADgFIAHgEQAFgBgBAGQAAAGgVADIgGAAQgRAAgNgKg");
	this.shape_23.setTransform(9.8,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 17
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAEIgBgEIABgEIAEgBIAEABIACAEIgCAEIgEACg");
	this.shape_24.setTransform(6.5,7);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 16
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAFIgCgFIACgFIAFgCIAFACIADAFIgDAFIgFADg");
	this.shape_25.setTransform(16.5,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 15
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#470E0E").s().p("AgFAHIgDgHIADgFQACgDADAAQAEAAACADIADAFIgDAHIgGACg");
	this.shape_26.setTransform(6.3,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 14
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#792B17").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEIgDAJIgJADQgEAAgDgDg");
	this.shape_27.setTransform(6.1,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 13
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9F4E3").s().p("AgQATQgGgHgBgIIAAgFIACgJIAFgGQAIgIAIgBQAIAAAIAEIADADIAEAHIABAIIAAAFQgBAJgIAHQgHAIgJAAQgJAAgGgHg");
	this.shape_28.setTransform(5.8,7);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 12
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#470E0E").s().p("AgGAHIgDgHQAAgEADgDQADgCADAAQAFAAADACIADAHIgDAHQgDADgFAAQgDAAgDgDg");
	this.shape_29.setTransform(15.5,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 11
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#792B17").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAg");
	this.shape_30.setTransform(15.7,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 10
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9F4E3").s().p("AgVAaQgMgIgCgNQgCgMAJgLQAJgKAPgCQAOgCAMAHQAMAIACANQACAMgJAKQgJAMgPACIgFAAQgLAAgKgGg");
	this.shape_31.setTransform(17,10);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 9
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F93E0F").s().p("AgYAgQgPgJgDgRQgDgPAMgNQAKgNASgDQAQgCAPAJQAOAKADAQIAAAAQADAPgLAOIgBAAQgKAMgSADIgHAAQgNAAgKgHg");
	this.shape_32.setTransform(17.3,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 8
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F93E0F").s().p("AgUAWQgGgIgCgJIAAgGQAAgGADgFIAFgIIABAAQAKgJAJAAQAJgBAJAGIAEACIAAABIAFAIIACAKIgBAFQgBALgIAIQgJAJgLAAQgLAAgIgIg");
	this.shape_33.setTransform(5.8,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	// Layer 7
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF530F").s().p("ABGBjQgHgNgIgBQgcgDgmgQIglgGQgdgGgYgMQgYgLgDgNQgEgNAEgLQACgMAGgJIAEgKQAMgTAOgOQAWgUAdgKQAYgJAaABQA0AFAiAnQAlApgDAzQgEA0gZATQgNAKgIAAQgIAAgDgKg");
	this.shape_34.setTransform(14,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

	// Layer 6
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#38100C").s().p("AgIAFQgEgQADgHIAGgHIgDAEQgDAGAFAQQAFAWAJAAIABAAIgFADQgHAAgHgVg");
	this.shape_35.setTransform(1.1,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 5
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#47180E").s().p("AAxAbQAEgFgDgIQgCgLgPgLQgPgNgUgBIgnABIgPADQACgEASgDIAngBQAUACAPAMQAPAMADALQADALgKAFg");
	this.shape_36.setTransform(21.2,3.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAAIABAAIgBAAg");
	this.shape_37.setTransform(26.1,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	// Layer 4
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C12702").s().p("AAagBQgBgQgIAHIgVAVIgYAaQAQghAMgNQAMgPgIAAQgRAEgZARIgWAMQAOgQATgKIANgIIAagQIABgBIACgCIApABQgIAIACAHQAGAKADAOQADAMgCAdQgGglgKgLQgJgLAAANQgBAWgGAPIgHARQAHgegCgQg");
	this.shape_38.setTransform(19.3,25.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

	// Layer 3
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E32F02").s().p("AAYAdQgOgBgagaIgRgQQgIgHgDAAIgGACIgFABIAAAAIgBgCQAAgFAUgCIAngBQAUABAPANQAPAMADAKQADALgKAFQgIAFgMAAIgFAAg");
	this.shape_39.setTransform(21.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// Layer 2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DB2D02").s().p("AgPALQgEgRADgGQADgGAIgFQAHgFAJgCQAJgDgBAQQgBAPgHAPQgHATgEAAQgIAAgHgVg");
	this.shape_40.setTransform(1.8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1));

	// Layer 1
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E32F02").s().p("AgoAgQgVgQAAgTQAAgDAFgGQAFgGAagRQAZgRAaAEQAVAGAJASQAIAPgCAZQgBAMgHAKQgHAMgjAAQgdAAgXgSg");
	this.shape_41.setTransform(19.1,27.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.2,32.3,31.5);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 33
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgKB7QgVgRAAgUIABgCIADgFIgBAAIABAAQANgQASgLIANgIIAbgPIABgCIAAAAIgCgCIAAgBIgBAAIgFgEIgDgBIgCAAIgKgBIgHgCIAAAAIgPgEIgSgGIgTgEIgngIIgngMIgWgNIgGgEQgIAAgHgVQgEgSADgGIAAAAIABgBIAAgBIACgCIAGABIADAAQgDAWASASQARASAcAHIA6AKIA5gDQAbgFAagPQAZgQAAgfIABAFIADAVIAMABIAZAJQALAFADAHIABADQAAAHgMARQgPATgMAAIgIgBIAAAAIgCgBIgLgLIgBACIAAABIgCAEIgCADIgFAJIgEAFIgDADIgBAAQgEAGACAFQAGAKADAOQACALgBAUIAAACIAAAGIAAADIAAABIgEAOIAAAAIgDAGIgPAJIgcADQgeAAgWgRgAiJhlIAAgBIAAgBIACgCIgCADIAAABgAiCiAIAEgHIABAAIAAgBIAFgDQgJAHgDAOg");
	this.shape.setTransform(16.1,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 32
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF530F").s().p("AglATIgugNIAfAFQAtAJAfgKQAggJAGgGIARgTQALgLgMAgQgMAegiAAg");
	this.shape_1.setTransform(13.7,15.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 31
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#38100C").s().p("AgqBQQA8gBAYgdQAFgHACgKIABgQQgBgIACgPIABgaQgBgNgFgOIACABIABACIADADIABABIADAOQACAOgCAPIgBAJQgBAIAAARQABAYgVAOQgOAKgQAFIgsADgAg2BMIgCgBIAagBIgVADgAgMBIIgSACgAAsATIAAgEQACAFgCAKQgCAMgHAHQgPAOgUAHIgMACQAzgLAFgqgAAkgqQgCgNgFgKIgIgPIABABIAIAFQALAWAAAYg");
	this.shape_2.setTransform(18.9,10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0D0D0").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQABgKgCgEQACgYgFgUQABgXgLgXIAJAIIAHAHIAAAAQAFAOABANIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_3.setTransform(18.9,10.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#47180E").s().p("AAAAAIAAgBIADAEgAgCgCIACABg");
	this.shape_4.setTransform(23.8,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 30
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCABIgBgBQAAAAAAgBQAAAAABAAQAAAAABgBQABAAAAABIAFABIgBACIgEABg");
	this.shape_5.setTransform(6.1,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 29
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FD751C").s().p("AANAJIgSgGQgLgEAAgFQgBgFAOAFQAOAFAEAFQAEAGgEAAIgCgBg");
	this.shape_6.setTransform(7.6,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 28
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AgoAPQgFgFAAgHQAAgNAPgHQAMgGASABQASABANAGQAOAGAAAJQAAAHgRAIQgSAJgUAAQgXAAgHgJg");
	this.shape_7.setTransform(13,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 27
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#47180E").s().p("AgbARQAGAFAIAAQAMAAANgUQAPgTgDgHIABgBIACAEQADAHgOATQgPAUgLAAIgBABQgJAAgHgJg");
	this.shape_8.setTransform(29.5,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBgBIADACIgCABg");
	this.shape_9.setTransform(31.9,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer 26
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C12702").s().p("AgHAhQgEgLAEALgAgUAVIgNgYQgFgNAAgGQAAgHALgDIAbAAIAYAJQALAFADAHIABACQgegVgfAFQgFACAxAdIgugVQgNgEAcA0g");
	this.shape_10.setTransform(28.4,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 25
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#38100C").s().p("AgmANQgVgQAAgUIADgGQABAUAVAPQAWARAeAAQAjAAAHgMIgDAHQgIAMgjAAQgdAAgXgRg");
	this.shape_11.setTransform(18.9,29);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAAIAAAAg");
	this.shape_12.setTransform(25,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 24
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E32F02").s().p("AgUAUIgNgYQgFgMAAgHQAAgHALgDIAbAAIAYAJQALAFADAHQADAHgOATQgPAUgMAAQgLAAgJgOg");
	this.shape_13.setTransform(28.4,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 23
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#47180E").s().p("AgpBQQA8gBAYgdQAGgHACgKIAAgQQgBgIADgPIABgaIgHgcIAHAIIADAOQADAOgDAPIgBAJQgBAIABARQAAAYgUAOQgPAKgPAFIgsADgAg5BKQA9AAAbgZIABgCIAHgJQAGgPgEgHQgHgJACgNQAGgkgLgXIgJgPIAJAGQANAagCAbIgCAVQABAIAEAGQADAFgCALQgCAMgIAHQgOAOgUAHIgzAHg");
	this.shape_14.setTransform(18.7,10.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQACgLgDgEQgEgHAAgHIABgWQADgbgNgaIAQAPIAGAbIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_15.setTransform(18.9,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer 22
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#38100C").s().p("AgNAXIgCgDIAAAAIgBgBIAZACQAOgBAIgJQAJgJACgJIACAFIgEAHIgCADIgBACIgDAFQgHAIgPACgAgrALIAAAAIAFgCIAggDQAOAAALgGQAMgHABgOIABgDIACAFQgCARgOAGQgNAGgNAAIgdADg");
	this.shape_16.setTransform(22,18.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D0D0D0").s().p("AgSATIgFgEIgDgBIgCAAIgKgCIAdgDQAMABAOgHQANgFADgRIAAAAIAFAJIABACQgBAJgJAKQgIAJgPAAg");
	this.shape_17.setTransform(22.2,18.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAOAEIAAABgAgOgDIABgBIAAABg");
	this.shape_18.setTransform(19,20.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAAIAAAAg");
	this.shape_19.setTransform(25.5,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Layer 21
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D12C03").s().p("AAJBjQgHgNgHgBIgOgCIgUgFIgTgHIgLgEQBeABAGg5QAGg4gggfQgagbgYgEQAwAGAhAlQAlApgEAzQgDA0gZATQgNAKgIAAQgIAAgDgKgAg0hsIADAAIAEABg");
	this.shape_20.setTransform(20.1,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 20
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C12702").s().p("AgNABIAAgFIAaAAQgTAEAAAFg");
	this.shape_21.setTransform(22.4,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer 19
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C12702").s().p("AgMABIAAgFIAaAAQgVAEABAFg");
	this.shape_22.setTransform(21.5,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer 18
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#913711").s().p("AAGAPQgNgMgKgDQgKgEgNgBIgTgEQgFgEACgGQADgHAEADQAEACgDAGQABAGAGABIAOABIAQADIAVANQAPALAPAAQAPAAADgFIAHgEQAFgBgBAGQAAAGgVADIgGAAQgRAAgNgKg");
	this.shape_23.setTransform(9.8,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 17
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAEIgBgEIABgEIAEgBIAEABIACAEIgCAEIgEACg");
	this.shape_24.setTransform(6.5,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 16
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAFIgCgFIACgFIAFgCIAFACIADAFIgDAFIgFADg");
	this.shape_25.setTransform(16.5,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 15
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#470E0E").s().p("AgFAGIgDgGIADgFQACgDADAAQAEAAACADIADAFIgDAGIgGADg");
	this.shape_26.setTransform(6.3,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 14
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#792B17").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEIgDAIIgJAEQgEAAgDgEg");
	this.shape_27.setTransform(6.1,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 13
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9F4E3").s().p("AgQATQgGgHgBgIIAAgFIACgJIAFgGQAIgIAIgBQAIAAAIAEIADADIAEAHIABAIIAAAFQgBAJgIAHQgHAIgJAAQgJAAgGgHg");
	this.shape_28.setTransform(5.8,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 12
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#470E0E").s().p("AgGAHIgDgHQAAgDADgEQADgDADAAQAFAAADADIADAHIgDAHQgDAEgFgBQgDABgDgEg");
	this.shape_29.setTransform(15.5,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 11
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#792B17").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAg");
	this.shape_30.setTransform(15.7,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 10
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9F4E3").s().p("AgVAaQgMgIgCgNQgCgMAJgLQAJgKAPgCQAOgCAMAHQAMAIACANQACAMgJAKQgJAMgPACIgFAAQgLAAgKgGg");
	this.shape_31.setTransform(17,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 9
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F93E0F").s().p("AgYAgQgPgJgDgRQgDgPAMgNQAKgNASgDQAQgCAPAJQAOAKADAQIAAAAQADAPgLAOIgBAAQgKAMgSADIgHAAQgNAAgKgHg");
	this.shape_32.setTransform(17.3,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 8
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F93E0F").s().p("AgUAWQgGgIgCgJIAAgGQAAgGADgFIAFgIIABAAQAKgJAJAAQAJgBAJAGIAEACIAAABIAFAIIACAKIgBAFQgBALgIAIQgJAJgLAAQgLAAgIgIg");
	this.shape_33.setTransform(5.8,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	// Layer 7
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF530F").s().p("ABGBjQgHgNgIgBQgcgDgmgQIglgGQgdgGgYgMQgYgLgDgNQgEgNAEgLQACgMAGgJIAEgKQAMgTAOgOQAWgUAdgKQAYgJAaABQA0AFAiAnQAlApgDAzQgEA0gZATQgNAKgIAAQgIAAgDgKg");
	this.shape_34.setTransform(14,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

	// Layer 6
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#38100C").s().p("AgIAFQgEgRADgFIAGgIIgDAEQgDAGAFARQAFAUAJAAIABAAIgFAEQgHAAgHgVg");
	this.shape_35.setTransform(1.1,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 5
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#47180E").s().p("AAxAbQAEgFgDgIQgCgLgPgLQgPgNgUgBIgnABIgPADQACgEASgDIAngBQAUACAPAMQAPAMADALQADALgKAFg");
	this.shape_36.setTransform(21.2,3.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAAIABAAIgBABg");
	this.shape_37.setTransform(26.1,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	// Layer 4
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C12702").s().p("AAagBQgBgQgIAHIgVAVIgYAaQAQghAMgNQAMgPgIAAQgRAEgZARIgWAMQAOgQATgKIANgIIAagQIABgBIACgCIApABQgIAIACAHQAGAKADAOQADAMgCAdQgGglgKgLQgJgLAAANQgBAWgGAPIgHARQAHgegCgQg");
	this.shape_38.setTransform(19.3,25.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

	// Layer 3
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E32F02").s().p("AAYAdQgOgBgagaIgRgQQgIgHgDAAIgGACIgFABIAAAAIgBgCQAAgFAUgCIAngBQAUABAPANQAPAMADAKQADALgKAFQgIAFgMAAIgFAAg");
	this.shape_39.setTransform(21.2,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// Layer 2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DB2D02").s().p("AgPALQgEgRADgGQADgGAIgFQAHgFAJgCQAJgDgBAQQgBAPgHAPQgHATgEAAQgIAAgHgVg");
	this.shape_40.setTransform(1.8,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1));

	// Layer 1
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E32F02").s().p("AgoAgQgVgQAAgTQAAgDAFgGQAFgGAagRQAZgRAaAEQAVAGAJASQAIAPgCAZQgBAMgHAKQgHAMgjAAQgdAAgXgSg");
	this.shape_41.setTransform(19.1,27.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.6,32.3,31.4);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 30
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgKB7QgVgRAAgUIABgCIADgFIgBAAIABAAQANgQASgLIANgIIAbgPIABgCIAAAAIgCgCIAAgBIgBAAIgFgEIgDgBIgCAAIgKgBIgHgCIAAAAIgPgEIgSgGIgTgEIgngIIgngMIgWgNIgGgEQgIAAgHgVQgEgSADgGIAAAAIABgBIAAgBIACgCIAEgEQgBAHAFAFQgEAPANAOQAOAPA/ATQA+ATA5gbQAzgZABgQIABAKIAMABIAZAJQALAFADAHIABADQAAAHgMARQgPATgMAAIgIgBIAAAAIgCgBIgLgLIgBACIAAABIgCAEIgCADIgFAJIgEAFIgDADIgBAAQgEAGACAFQAGAKADAOQACALgBAUIAAACIAAAGIAAADIAAABIgEAOIAAAAIgDAGIgPAJIgcADQgeAAgWgRgABehqIAAgBQAJAOAEAUIABAEgAiKhkIABgCIAAgBIACgCIgCADIAAACgAiCiAIAEgHIABAAIAAgBIAFgDQgJAHgDAOg");
	this.shape.setTransform(16.1,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 29
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#470E0E").s().p("AgGALQgSgFgFgGQgEgFAMgCIAbgFIAYAAQAHACguAMIAJAFIAIAGg");
	this.shape_1.setTransform(16.9,9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 28
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#470E0E").s().p("AABACQgLgEgCgCIASAAQAIACgBADIgBADIAAABIgBAAIgKgDg");
	this.shape_2.setTransform(5.9,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 27
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#470E0E").s().p("AAAAFQgLgOgEgJQAAgIAPAUIAQAXIgDAEQgDAAgKgQg");
	this.shape_3.setTransform(5.8,5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 26
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF530F").s().p("AglATIgugNIAfAFQAtAJAfgKQAggJAGgGIARgTQALgLgMAgQgMAegiAAg");
	this.shape_4.setTransform(13.7,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 25
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#38100C").s().p("AgqBQQA8gBAYgdQAFgHACgKIABgQQgBgIACgPIABgaQgBgNgFgOIACABIABACIADADIABABIADAOQACAOgCAPIgBAJQgBAIAAARQABAYgVAOQgOAKgQAFIgsADgAg2BMIgCgBIAagBIgVADgAgMBIIgSACgAAsATIAAgEQACAFgCAKQgCAMgHAHQgPAOgUAHIgMACQAzgLAFgqgAAkgqQgCgNgFgKIgIgPIABABIAIAFQALAWAAAYg");
	this.shape_5.setTransform(18.9,10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D0D0D0").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQABgKgCgEQACgYgFgUQABgXgLgXIAJAIIAHAHIAAAAQAFAOABANIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_6.setTransform(18.9,10.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#47180E").s().p("AAAAAIAAgBIADAEgAgCgCIACABg");
	this.shape_7.setTransform(23.8,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Layer 24
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCABIgBgBQAAAAAAgBQAAAAABAAQAAAAABgBQABAAAAABIAFABIgBACIgEABg");
	this.shape_8.setTransform(6.1,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer 23
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FD751C").s().p("AANAJIgSgGQgLgEAAgFQgBgFAOAFQAOAFAEAFQAEAGgEAAIgCgBg");
	this.shape_9.setTransform(7.6,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer 22
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6A09").s().p("AgoAPQgFgFAAgHQAAgNAPgHQAMgGASABQASABANAGQAOAGAAAJQAAAHgRAIQgSAJgUAAQgXAAgHgJg");
	this.shape_10.setTransform(13,3);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 21
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#47180E").s().p("AgbARQAGAFAIAAQAMAAANgUQAPgTgDgHIABgBIACAEQADAHgOATQgPAUgLAAIgBABQgJAAgHgJg");
	this.shape_11.setTransform(29.5,16.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBgBIADACIgCABg");
	this.shape_12.setTransform(31.9,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 20
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C12702").s().p("AgHAhQgEgLAEALgAgUAVIgNgYQgFgNAAgGQAAgHALgDIAbAAIAYAJQALAFADAHIABACQgegVgfAFQgFACAxAdIgugVQgNgEAcA0g");
	this.shape_13.setTransform(28.4,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 19
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#38100C").s().p("AgmANQgVgQAAgUIADgGQABAUAVAPQAWARAeAAQAjAAAHgMIgDAHQgIAMgjAAQgdAAgXgRg");
	this.shape_14.setTransform(18.9,28.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAAAAIAAAAg");
	this.shape_15.setTransform(25,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer 18
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E32F02").s().p("AgUAUIgNgYQgFgMAAgHQAAgHALgDIAbAAIAYAJQALAFADAHQADAHgOATQgPAUgMAAQgLAAgJgOg");
	this.shape_16.setTransform(28.4,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	// Layer 17
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#47180E").s().p("AgpBQQA8gBAYgdQAGgHACgKIAAgQQgBgIADgPIABgaIgHgcIAHAIIADAOQADAOgDAPIgBAJQgBAIABARQAAAYgUAOQgPAKgPAFIgsADgAg5BKQA9AAAbgZIABgCIAHgJQAGgPgEgHQgHgJACgNQAGgkgLgXIgJgPIAJAGQANAagCAbIgCAVQABAIAEAGQADAFgCALQgCAMgIAHQgOAOgUAHIgzAHg");
	this.shape_17.setTransform(18.7,10.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQACgLgDgEQgEgHAAgHIABgWQADgbgNgaIAQAPIAGAbIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_18.setTransform(18.9,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// Layer 16
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#38100C").s().p("AgNAXIgCgDIAAAAIgBgBIAZACQAOgBAIgJQAJgJACgJIACAFIgEAHIgCADIgBACIgDAFQgHAIgPACgAgrALIAAAAIAFgCIAggDQAOAAALgGQAMgHABgOIABgDIACAFQgCARgOAGQgNAGgNAAIgdADg");
	this.shape_19.setTransform(22,17.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D0D0D0").s().p("AgSATIgFgEIgDgBIgCAAIgKgCIAdgDQAMABAOgHQANgFADgRIAAAAIAFAJIABACQgBAJgJAKQgIAJgPAAg");
	this.shape_20.setTransform(22.2,18);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAOAEIAAABgAgOgDIABgBIAAABg");
	this.shape_21.setTransform(19,19.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAAAIAAAAg");
	this.shape_22.setTransform(25.5,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// Layer 15
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D12C03").s().p("AAJBjQgHgNgHgBIgOgCIgUgFIgTgHIgLgEQBeABAGg5QAGg4gggfQgagbgYgEQAwAGAhAlQAlApgEAzQgDA0gZATQgNAKgIAAQgIAAgDgKgAg0hsIADAAIAEABg");
	this.shape_23.setTransform(20.1,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 14
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C12702").s().p("AgNABIAAgFIAaAAQgTAEAAAFg");
	this.shape_24.setTransform(22.4,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 13
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C12702").s().p("AgMABIAAgFIAaAAQgVAEABAFg");
	this.shape_25.setTransform(21.5,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 12
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#913711").s().p("AAGAPQgNgMgKgDQgKgEgNgBIgTgEQgFgEACgGQADgHAEADQAEACgDAGQABAGAGABIAOABIAQADIAVANQAPALAPAAQAPAAADgFIAHgEQAFgBgBAGQAAAGgVADIgGAAQgRAAgNgKg");
	this.shape_26.setTransform(9.8,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 11
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D12C03").s().p("AgQATQgGgHgBgIIAAgFIACgJIAFgGQAIgIAIgBQAIAAAIAEIADADIAEAHIABAIIAAAFQgBAJgIAHQgHAIgJAAQgJAAgGgHg");
	this.shape_27.setTransform(5.8,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 10
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D12C03").s().p("AgVAaQgMgIgCgNQgCgMAJgLQAJgKAPgCQAOgCAMAHQAMAIACANQACAMgJAKQgJAMgPACIgFAAQgLAAgKgGg");
	this.shape_28.setTransform(17,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 9
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F93E0F").s().p("AgYAgQgPgJgDgRQgDgPAMgNQAKgNASgDQAQgCAPAJQAOAKADAQIAAAAQADAPgLAOIgBAAQgKAMgSADIgHAAQgNAAgKgHg");
	this.shape_29.setTransform(17.3,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 8
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F93E0F").s().p("AgUAWQgGgIgCgJIAAgGQAAgGADgFIAFgIIABAAQAKgJAJAAQAJgBAJAGIAEACIAAABIAFAIIACAKIgBAFQgBALgIAIQgJAJgLAAQgLAAgIgIg");
	this.shape_30.setTransform(5.8,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 7
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF530F").s().p("ABGBjQgHgNgIgBQgcgDgmgQIglgGQgdgGgYgMQgYgLgDgNQgEgNAEgLQACgMAGgJIAEgKQAMgTAOgOQAWgUAdgKQAYgJAaABQA0AFAiAnQAlApgDAzQgEA0gZATQgNAKgIAAQgIAAgDgKg");
	this.shape_31.setTransform(14,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 6
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#38100C").s().p("AgIAFQgEgRADgFIAGgIIgDAEQgDAGAFAQQAFAWAJgBIABAAIgFAEQgHAAgHgVg");
	this.shape_32.setTransform(1.1,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 5
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#47180E").s().p("AAxAbQAEgFgDgIQgCgLgPgLQgPgNgUgBIgnABIgPADQACgEASgDIAngBQAUACAPAMQAPAMADALQADALgKAFg");
	this.shape_33.setTransform(21.2,2.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAAAAIABAAIgBAAg");
	this.shape_34.setTransform(26.1,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33}]}).wait(1));

	// Layer 4
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C12702").s().p("AAagBQgBgQgIAHIgVAVIgYAaQAQghAMgNQAMgPgIAAQgRAEgZARIgWAMQAOgQATgKIANgIIAagQIABgBIACgCIApABQgIAIACAHQAGAKADAOQADAMgCAdQgGglgKgLQgJgLAAANQgBAWgGAPIgHARQAHgegCgQg");
	this.shape_35.setTransform(19.3,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 3
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E32F02").s().p("AAYAdQgOgBgagaIgRgQQgIgHgDAAIgGACIgFABIAAAAIgBgCQAAgFAUgCIAngBQAUABAPANQAPAMADAKQADALgKAFQgIAFgMAAIgFAAg");
	this.shape_36.setTransform(21.2,3);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(1));

	// Layer 2
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DB2D02").s().p("AgPALQgEgRADgGQADgGAIgFQAHgFAJgCQAJgDgBAQQgBAPgHAPQgHATgEAAQgIAAgHgVg");
	this.shape_37.setTransform(1.8,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(1));

	// Layer 1
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E32F02").s().p("AgoAgQgVgQAAgTQAAgDAFgGQAFgGAagRQAZgRAaAEQAVAGAJASQAIAPgCAZQgBAMgHAKQgHAMgjAAQgdAAgXgSg");
	this.shape_38.setTransform(19.1,26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.3,31.5);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 33
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgKB7QgVgRAAgUIABgCIADgFIgBAAIABAAQANgQASgLIANgIIAbgPIABgCIAAAAIgCgCIAAgBIgBAAIgFgEIgDgBIgCAAIgKgBIgHgCIAAAAIgPgEIgSgGIgTgEIgngIIgngMIgWgNIgGgEQgIAAgHgVQgEgSADgGIAAAAIABgBIAAgBIACgCIAGABIADAAQgDAWASASQARASAcAHIA6AKIA5gDQAbgFAagPQAZgQAAgfIABAFIADAVIAMABIAZAJQALAFADAHIABADQAAAHgMARQgPATgMAAIgIgBIAAAAIgCgBIgLgLIgBACIAAABIgCAEIgCADIgFAJIgEAFIgDADIgBAAQgEAGACAFQAGAKADAOQACALgBAUIAAACIAAAGIAAADIAAABIgEAOIAAAAIgDAGIgPAJIgcADQgeAAgWgRgAiJhlIAAgBIAAgBIACgCIgCADIAAABgAiCiAIAEgHIABAAIAAgBIAFgDQgJAHgDAOg");
	this.shape.setTransform(16.1,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 32
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF530F").s().p("AglATIgugNIAfAFQAtAJAfgKQAggJAGgGIARgTQALgLgMAgQgMAegiAAg");
	this.shape_1.setTransform(13.7,15.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 31
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#38100C").s().p("AgqBQQA8gBAYgdQAFgHACgKIABgQQgBgIACgPIABgaQgBgNgFgOIACABIABACIADADIABABIADAOQACAOgCAPIgBAJQgBAIAAARQABAYgVAOQgOAKgQAFIgsADgAg2BMIgCgBIAagBIgVADgAgMBIIgSACgAAsATIAAgEQACAFgCAKQgCAMgHAHQgPAOgUAHIgMACQAzgLAFgqgAAkgqQgCgNgFgKIgIgPIABABIAIAFQALAWAAAYg");
	this.shape_2.setTransform(18.9,10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0D0D0").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQABgKgCgEQACgYgFgUQABgXgLgXIAJAIIAHAHIAAAAQAFAOABANIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_3.setTransform(18.9,10.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#47180E").s().p("AAAAAIAAgBIADAEgAgCgCIACABg");
	this.shape_4.setTransform(23.8,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 30
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCABIgBgBQAAAAAAgBQAAAAABAAQAAAAABgBQABAAAAABIAFABIgBACIgEABg");
	this.shape_5.setTransform(6.1,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 29
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FD751C").s().p("AANAJIgSgGQgLgEAAgFQgBgFAOAFQAOAFAEAFQAEAGgEAAIgCgBg");
	this.shape_6.setTransform(7.6,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 28
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AgoAPQgFgFAAgHQAAgNAPgHQAMgGASABQASABANAGQAOAGAAAJQAAAHgRAIQgSAJgUAAQgXAAgHgJg");
	this.shape_7.setTransform(13,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 27
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#47180E").s().p("AgbARQAGAFAIAAQAMAAANgUQAPgTgDgHIABgBIACAEQADAHgOATQgPAUgLAAIgBABQgJAAgHgJg");
	this.shape_8.setTransform(29.5,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBgBIADACIgCABg");
	this.shape_9.setTransform(31.9,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer 26
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C12702").s().p("AgHAhQgEgLAEALgAgUAVIgNgYQgFgNAAgGQAAgHALgDIAbAAIAYAJQALAFADAHIABACQgegVgfAFQgFACAxAdIgugVQgNgEAcA0g");
	this.shape_10.setTransform(28.4,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 25
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#38100C").s().p("AgmANQgVgQAAgUIADgGQABAUAVAPQAWARAeAAQAjAAAHgMIgDAHQgIAMgjAAQgdAAgXgRg");
	this.shape_11.setTransform(18.9,29);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAAIAAAAg");
	this.shape_12.setTransform(25,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 24
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E32F02").s().p("AgUAUIgNgYQgFgMAAgHQAAgHALgDIAbAAIAYAJQALAFADAHQADAHgOATQgPAUgMAAQgLAAgJgOg");
	this.shape_13.setTransform(28.4,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 23
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#47180E").s().p("AgpBQQA8gBAYgdQAGgHACgKIAAgQQgBgIADgPIABgaIgHgcIAHAIIADAOQADAOgDAPIgBAJQgBAIABARQAAAYgUAOQgPAKgPAFIgsADgAg5BKQA9AAAbgZIABgCIAHgJQAGgPgEgHQgHgJACgNQAGgkgLgXIgJgPIAJAGQANAagCAbIgCAVQABAIAEAGQADAFgCALQgCAMgIAHQgOAOgUAHIgzAHg");
	this.shape_14.setTransform(18.7,10.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQACgLgDgEQgEgHAAgHIABgWQADgbgNgaIAQAPIAGAbIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_15.setTransform(18.9,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer 22
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#38100C").s().p("AgNAXIgCgDIAAAAIgBgBIAZACQAOgBAIgJQAJgJACgJIACAFIgEAHIgCADIgBACIgDAFQgHAIgPACgAgrALIAAAAIAFgCIAggDQAOAAALgGQAMgHABgOIABgDIACAFQgCARgOAGQgNAGgNAAIgdADg");
	this.shape_16.setTransform(22,18.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D0D0D0").s().p("AgSATIgFgEIgDgBIgCAAIgKgCIAdgDQAMABAOgHQANgFADgRIAAAAIAFAJIABACQgBAJgJAKQgIAJgPAAg");
	this.shape_17.setTransform(22.2,18.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAOAEIAAABgAgOgDIABgBIAAABg");
	this.shape_18.setTransform(19,20.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAAIAAAAg");
	this.shape_19.setTransform(25.5,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Layer 21
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D12C03").s().p("AAJBjQgHgNgHgBIgOgCIgUgFIgTgHIgLgEQBeABAGg5QAGg4gggfQgagbgYgEQAwAGAhAlQAlApgEAzQgDA0gZATQgNAKgIAAQgIAAgDgKgAg0hsIADAAIAEABg");
	this.shape_20.setTransform(20.1,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 20
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C12702").s().p("AgNABIAAgFIAaAAQgTAEAAAFg");
	this.shape_21.setTransform(22.4,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer 19
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C12702").s().p("AgMABIAAgFIAaAAQgVAEABAFg");
	this.shape_22.setTransform(21.5,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer 18
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#913711").s().p("AAGAPQgNgMgKgDQgKgEgNgBIgTgEQgFgEACgGQADgHAEADQAEACgDAGQABAGAGABIAOABIAQADIAVANQAPALAPAAQAPAAADgFIAHgEQAFgBgBAGQAAAGgVADIgGAAQgRAAgNgKg");
	this.shape_23.setTransform(9.8,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 17
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAEIgBgEIABgEIAEgBIAEABIACAEIgCAEIgEACg");
	this.shape_24.setTransform(6.5,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 16
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAFIgCgFIACgFIAFgCIAFACIADAFIgDAFIgFADg");
	this.shape_25.setTransform(16.5,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 15
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#470E0E").s().p("AgFAGIgDgGIADgFQACgDADAAQAEAAACADIADAFIgDAGIgGADg");
	this.shape_26.setTransform(6.3,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 14
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#792B17").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEIgDAIIgJAEQgEAAgDgEg");
	this.shape_27.setTransform(6.1,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 13
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9F4E3").s().p("AgQATQgGgHgBgIIAAgFIACgJIAFgGQAIgIAIgBQAIAAAIAEIADADIAEAHIABAIIAAAFQgBAJgIAHQgHAIgJAAQgJAAgGgHg");
	this.shape_28.setTransform(5.8,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 12
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#470E0E").s().p("AgGAHIgDgHQAAgDADgEQADgDADAAQAFAAADADIADAHIgDAHQgDAEgFgBQgDABgDgEg");
	this.shape_29.setTransform(15.5,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 11
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#792B17").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAg");
	this.shape_30.setTransform(15.7,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 10
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9F4E3").s().p("AgVAaQgMgIgCgNQgCgMAJgLQAJgKAPgCQAOgCAMAHQAMAIACANQACAMgJAKQgJAMgPACIgFAAQgLAAgKgGg");
	this.shape_31.setTransform(17,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 9
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F93E0F").s().p("AgYAgQgPgJgDgRQgDgPAMgNQAKgNASgDQAQgCAPAJQAOAKADAQIAAAAQADAPgLAOIgBAAQgKAMgSADIgHAAQgNAAgKgHg");
	this.shape_32.setTransform(17.3,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 8
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F93E0F").s().p("AgUAWQgGgIgCgJIAAgGQAAgGADgFIAFgIIABAAQAKgJAJAAQAJgBAJAGIAEACIAAABIAFAIIACAKIgBAFQgBALgIAIQgJAJgLAAQgLAAgIgIg");
	this.shape_33.setTransform(5.8,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	// Layer 7
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF530F").s().p("ABGBjQgHgNgIgBQgcgDgmgQIglgGQgdgGgYgMQgYgLgDgNQgEgNAEgLQACgMAGgJIAEgKQAMgTAOgOQAWgUAdgKQAYgJAaABQA0AFAiAnQAlApgDAzQgEA0gZATQgNAKgIAAQgIAAgDgKg");
	this.shape_34.setTransform(14,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

	// Layer 6
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#38100C").s().p("AgIAFQgEgRADgFIAGgIIgDAEQgDAGAFARQAFAUAJAAIABAAIgFAEQgHAAgHgVg");
	this.shape_35.setTransform(1.1,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 5
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#47180E").s().p("AAxAbQAEgFgDgIQgCgLgPgLQgPgNgUgBIgnABIgPADQACgEASgDIAngBQAUACAPAMQAPAMADALQADALgKAFg");
	this.shape_36.setTransform(21.2,3.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAAIABAAIgBABg");
	this.shape_37.setTransform(26.1,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	// Layer 4
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C12702").s().p("AAagBQgBgQgIAHIgVAVIgYAaQAQghAMgNQAMgPgIAAQgRAEgZARIgWAMQAOgQATgKIANgIIAagQIABgBIACgCIApABQgIAIACAHQAGAKADAOQADAMgCAdQgGglgKgLQgJgLAAANQgBAWgGAPIgHARQAHgegCgQg");
	this.shape_38.setTransform(19.3,25.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

	// Layer 3
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E32F02").s().p("AAYAdQgOgBgagaIgRgQQgIgHgDAAIgGACIgFABIAAAAIgBgCQAAgFAUgCIAngBQAUABAPANQAPAMADAKQADALgKAFQgIAFgMAAIgFAAg");
	this.shape_39.setTransform(21.2,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// Layer 2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DB2D02").s().p("AgPALQgEgRADgGQADgGAIgFQAHgFAJgCQAJgDgBAQQgBAPgHAPQgHATgEAAQgIAAgHgVg");
	this.shape_40.setTransform(1.8,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1));

	// Layer 1
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E32F02").s().p("AgoAgQgVgQAAgTQAAgDAFgGQAFgGAagRQAZgRAaAEQAVAGAJASQAIAPgCAZQgBAMgHAKQgHAMgjAAQgdAAgXgSg");
	this.shape_41.setTransform(19.1,27.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.6,32.3,31.4);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 33
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgKB7QgVgRAAgUIABgCIADgFIgBAAIABAAQANgQASgLIANgIIAbgPIABgCIAAAAIgCgCIAAgBIgBAAIgFgEIgDgBIgCAAIgKgBIgHgCIAAAAIgPgEIgSgGIgTgEIgngIIgngMIgWgNIgGgEQgIAAgHgVQgEgSADgGIAAAAIABgBIAAgBIACgCIAIgHIAHgEQgEAGgBALQgBALAHALQAHAKARAJQAQAJAVAHIBDAIQAsABAZgOQAOgHAPgQQANgLAEgQIACgIIACALIADAVIAMABIAZAJQALAFADAHIABADQAAAHgMARQgPATgMAAIgIgBIAAAAIgCgBIgLgLIgBACIAAABIgCAEIgCADIgFAJIgEAFIgDADIgBAAQgEAGACAFQAGAKADAOQACALgBAUIAAACIAAAGIAAADIAAABIgEAOIAAAAIgDAGIgPAJIgcADQgeAAgWgRgAiCiAIAEgHIABAAIAAgBIAFgDQgJAHgDAOg");
	this.shape.setTransform(16.1,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 32
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF530F").s().p("AglATIgugNIAfAFQAtAJAfgKQAggJAGgGIARgTQALgLgMAgQgMAegiAAg");
	this.shape_1.setTransform(13.7,16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 31
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#38100C").s().p("AgqBQQA8gBAYgdQAFgHACgKIABgQQgBgIACgPIABgaQgBgNgFgOIACABIABACIADADIABABIADAOQACAOgCAPIgBAJQgBAIAAARQABAYgVAOQgOAKgQAFIgsADgAg2BMIgCgBIAagBIgVADgAgMBIIgSACgAAsATIAAgEQACAFgCAKQgCAMgHAHQgPAOgUAHIgMACQAzgLAFgqgAAkgqQgCgNgFgKIgIgPIABABIAIAFQALAWAAAYg");
	this.shape_2.setTransform(18.9,11.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0D0D0").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQABgKgCgEQACgYgFgUQABgXgLgXIAJAIIAHAHIAAAAQAFAOABANIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_3.setTransform(18.9,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#47180E").s().p("AAAAAIAAgBIADAEgAgCgCIACABg");
	this.shape_4.setTransform(23.8,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 30
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCABIgBgBQAAAAAAgBQAAAAABAAQAAAAABgBQABAAAAABIAFABIgBACIgEABg");
	this.shape_5.setTransform(6.1,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 29
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FD751C").s().p("AANAJIgSgGQgLgEAAgFQgBgFAOAFQAOAFAEAFQAEAGgEAAIgCgBg");
	this.shape_6.setTransform(7.6,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 28
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AgoAPQgFgFAAgHQAAgNAPgHQAMgGASABQASABANAGQAOAGAAAJQAAAHgRAIQgSAJgUAAQgXAAgHgJg");
	this.shape_7.setTransform(13,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 27
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#47180E").s().p("AgbARQAGAFAIAAQAMAAANgUQAPgTgDgHIABgBIACAEQADAHgOATQgPAUgLAAIgBABQgJAAgHgJg");
	this.shape_8.setTransform(29.5,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBgBIADACIgCABg");
	this.shape_9.setTransform(31.9,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer 26
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C12702").s().p("AgHAhQgEgLAEALgAgUAVIgNgYQgFgNAAgGQAAgHALgDIAbAAIAYAJQALAFADAHIABACQgegVgfAFQgFACAxAdIgugVQgNgEAcA0g");
	this.shape_10.setTransform(28.4,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 25
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#38100C").s().p("AgmANQgVgQAAgUIADgGQABAUAVAPQAWARAeAAQAjAAAHgMIgDAHQgIAMgjAAQgdAAgXgRg");
	this.shape_11.setTransform(18.9,29.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAAIAAAAg");
	this.shape_12.setTransform(25,30.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 24
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E32F02").s().p("AgUAUIgNgYQgFgMAAgHQAAgHALgDIAbAAIAYAJQALAFADAHQADAHgOATQgPAUgMAAQgLAAgJgOg");
	this.shape_13.setTransform(28.4,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 23
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#47180E").s().p("AgpBQQA8gBAYgdQAGgHACgKIAAgQQgBgIADgPIABgaIgHgcIAHAIIADAOQADAOgDAPIgBAJQgBAIABARQAAAYgUAOQgPAKgPAFIgsADgAg5BKQA9AAAbgZIABgCIAHgJQAGgPgEgHQgHgJACgNQAGgkgLgXIgJgPIAJAGQANAagCAbIgCAVQABAIAEAGQADAFgCALQgCAMgIAHQgOAOgUAHIgzAHg");
	this.shape_14.setTransform(18.7,11.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQACgLgDgEQgEgHAAgHIABgWQADgbgNgaIAQAPIAGAbIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_15.setTransform(18.9,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer 22
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#38100C").s().p("AgNAXIgCgDIAAAAIgBgBIAZACQAOgBAIgJQAJgJACgJIACAFIgEAHIgCADIgBACIgDAFQgHAIgPACgAgrALIAAAAIAFgCIAggDQAOAAALgGQAMgHABgOIABgDIACAFQgCARgOAGQgNAGgNAAIgdADg");
	this.shape_16.setTransform(22,19.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D0D0D0").s().p("AgSATIgFgEIgDgBIgCAAIgKgCIAdgDQAMABAOgHQANgFADgRIAAAAIAFAJIABACQgBAJgJAKQgIAJgPAAg");
	this.shape_17.setTransform(22.2,19.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAOAEIAAABgAgOgDIABgBIAAABg");
	this.shape_18.setTransform(19,20.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAAIAAAAg");
	this.shape_19.setTransform(25.5,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Layer 21
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D12C03").s().p("AAJBjQgHgNgHgBIgOgCIgUgFIgTgHIgLgEQBeABAGg5QAGg4gggfQgagbgYgEQAwAGAhAlQAlApgEAzQgDA0gZATQgNAKgIAAQgIAAgDgKgAg0hsIADAAIAEABg");
	this.shape_20.setTransform(20.1,12);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 20
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C12702").s().p("AgNABIAAgFIAaAAQgTAEAAAFg");
	this.shape_21.setTransform(22.4,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer 19
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C12702").s().p("AgMABIAAgFIAaAAQgVAEABAFg");
	this.shape_22.setTransform(21.5,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer 18
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#913711").s().p("AAGAPQgNgMgKgDQgKgEgNgBIgTgEQgFgEACgGQADgHAEADQAEACgDAGQABAGAGABIAOABIAQADIAVANQAPALAPAAQAPAAADgFIAHgEQAFgBgBAGQAAAGgVADIgGAAQgRAAgNgKg");
	this.shape_23.setTransform(9.8,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 17
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAEIgBgEIABgEIAEgBIAEABIACAEIgCAEIgEACg");
	this.shape_24.setTransform(6.5,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 16
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAFIgCgFIACgFIAFgCIAFACIADAFIgDAFIgFADg");
	this.shape_25.setTransform(16.5,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 15
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#470E0E").s().p("AgFAGIgDgGIADgFQACgDADAAQAEAAACADIADAFIgDAGIgGADg");
	this.shape_26.setTransform(6.3,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 14
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#792B17").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEIgDAIIgJAEQgEAAgDgEg");
	this.shape_27.setTransform(6.1,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 13
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9F4E3").s().p("AgQATQgGgHgBgIIAAgFIACgJIAFgGQAIgIAIgBQAIAAAIAEIADADIAEAHIABAIIAAAFQgBAJgIAHQgHAIgJAAQgJAAgGgHg");
	this.shape_28.setTransform(5.8,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 12
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#470E0E").s().p("AgGAHIgDgHQAAgEADgDQADgDADAAQAFAAADADIADAHIgDAHQgDADgFAAQgDAAgDgDg");
	this.shape_29.setTransform(15.5,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 11
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#792B17").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAg");
	this.shape_30.setTransform(15.7,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 10
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9F4E3").s().p("AgVAaQgMgIgCgNQgCgMAJgLQAJgKAPgCQAOgCAMAHQAMAIACANQACAMgJAKQgJAMgPACIgFAAQgLAAgKgGg");
	this.shape_31.setTransform(17,10);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 9
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F93E0F").s().p("AgYAgQgPgJgDgRQgDgPAMgNQAKgNASgDQAQgCAPAJQAOAKADAQIAAAAQADAPgLAOIgBAAQgKAMgSADIgHAAQgNAAgKgHg");
	this.shape_32.setTransform(17.3,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 8
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F93E0F").s().p("AgUAWQgGgIgCgJIAAgGQAAgGADgFIAFgIIABAAQAKgJAJAAQAJgBAJAGIAEACIAAABIAFAIIACAKIgBAFQgBALgIAIQgJAJgLAAQgLAAgIgIg");
	this.shape_33.setTransform(5.8,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	// Layer 7
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF530F").s().p("ABGBjQgHgNgIgBQgcgDgmgQIglgGQgdgGgYgMQgYgLgDgNQgEgNAEgLQACgMAGgJIAEgKQAMgTAOgOQAWgUAdgKQAYgJAaABQA0AFAiAnQAlApgDAzQgEA0gZATQgNAKgIAAQgIAAgDgKg");
	this.shape_34.setTransform(14,12);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

	// Layer 6
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#38100C").s().p("AgIAFQgEgRADgFIAGgIIgDAEQgDAGAFARQAFAUAJAAIABAAIgFAEQgHAAgHgVg");
	this.shape_35.setTransform(1.1,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 5
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#47180E").s().p("AAxAbQAEgFgDgIQgCgLgPgLQgPgNgUgBIgnABIgPADQACgEASgDIAngBQAUACAPAMQAPAMADALQADALgKAFg");
	this.shape_36.setTransform(21.2,3.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAAIABAAIgBABg");
	this.shape_37.setTransform(26.1,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	// Layer 4
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C12702").s().p("AAagBQgBgQgIAHIgVAVIgYAaQAQghAMgNQAMgPgIAAQgRAEgZARIgWAMQAOgQATgKIANgIIAagQIABgBIACgCIApABQgIAIACAHQAGAKADAOQADAMgCAdQgGglgKgLQgJgLAAANQgBAWgGAPIgHARQAHgegCgQg");
	this.shape_38.setTransform(19.3,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

	// Layer 3
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E32F02").s().p("AAYAdQgOgBgagaIgRgQQgIgHgDAAIgGACIgFABIAAAAIgBgCQAAgFAUgCIAngBQAUABAPANQAPAMADAKQADALgKAFQgIAFgMAAIgFAAg");
	this.shape_39.setTransform(21.2,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// Layer 2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DB2D02").s().p("AgPALQgEgRADgGQADgGAIgFQAHgFAJgCQAJgDgBAQQgBAPgHAPQgHATgEAAQgIAAgHgVg");
	this.shape_40.setTransform(1.8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1));

	// Layer 1
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E32F02").s().p("AgoAgQgVgQAAgTQAAgDAFgGQAFgGAagRQAZgRAaAEQAVAGAJASQAIAPgCAZQgBAMgHAKQgHAMgjAAQgdAAgXgSg");
	this.shape_41.setTransform(19.1,27.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.2,32.3,31.5);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 33
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgKB7QgVgRAAgUIABgCIADgFIgBAAIABAAQANgQASgLIANgIIAbgPIABgCIAAAAIgCgCIAAgBIgBAAIgFgEIgDgBIgCAAIgKgBIgHgCIAAAAIgPgEIgSgGIgTgEIgngIIgngMIgWgNIgGgEQgIAAgHgVQgEgSADgGIAAAAIABgBIAAgBIACgCIAIgHIAIgEIADgHIAAgBIACgCIgCADQgHARALAXQAKAWA8APQA8APApgQQApgQALgWQALgXgHgTIAAgBQAJAOAEAUIADAVIAMABIAZAJQALAFADAHIABADQAAAHgMARQgPATgMAAIgIgBIAAAAIgCgBIgLgLIgBACIAAABIgCAEIgCADIgFAJIgEAFIgDADIgBAAQgEAGACAFQAGAKADAOQACALgBAUIAAACIAAAGIAAADIAAABIgEAOIAAAAIgDAGIgPAJIgcADQgeAAgWgRgAiCiAIAEgHIABAAIAAgBIAFgDQgJAHgDAOg");
	this.shape.setTransform(16.1,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 32
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF530F").s().p("AglATIgugNIAfAFQAtAJAfgKQAggJAGgGIARgTQALgLgMAgQgMAegiAAg");
	this.shape_1.setTransform(13.7,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 31
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#38100C").s().p("AgqBQQA8gBAYgdQAFgHACgKIABgQQgBgIACgPIABgaQgBgNgFgOIACABIABACIADADIABABIADAOQACAOgCAPIgBAJQgBAIAAARQABAYgVAOQgOAKgQAFIgsADgAg2BMIgCgBIAagBIgVADgAgMBIIgSACgAAsATIAAgEQACAFgCAKQgCAMgHAHQgPAOgUAHIgMACQAzgLAFgqgAAkgqQgCgNgFgKIgIgPIABABIAIAFQALAWAAAYg");
	this.shape_2.setTransform(18.9,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0D0D0").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQABgKgCgEQACgYgFgUQABgXgLgXIAJAIIAHAHIAAAAQAFAOABANIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_3.setTransform(18.9,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#47180E").s().p("AAAAAIAAgBIADAEgAgCgCIACABg");
	this.shape_4.setTransform(23.8,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 30
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCABIgBgBQAAAAAAgBQAAAAABAAQAAAAABgBQABAAAAABIAFABIgBACIgEABg");
	this.shape_5.setTransform(6.1,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 29
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FD751C").s().p("AANAJIgSgGQgLgEAAgFQgBgFAOAFQAOAFAEAFQAEAGgEAAIgCgBg");
	this.shape_6.setTransform(7.6,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 28
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AgoAPQgFgFAAgHQAAgNAPgHQAMgGASABQASABANAGQAOAGAAAJQAAAHgRAIQgSAJgUAAQgXAAgHgJg");
	this.shape_7.setTransform(13,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 27
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#47180E").s().p("AgbARQAGAFAIAAQAMAAANgUQAPgTgDgHIABgBIACAEQADAHgOATQgPAUgLAAIgBABQgJAAgHgJg");
	this.shape_8.setTransform(29.5,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBgBIADACIgCABg");
	this.shape_9.setTransform(31.9,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer 26
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C12702").s().p("AgHAhQgEgLAEALgAgUAVIgNgYQgFgNAAgGQAAgHALgDIAbAAIAYAJQALAFADAHIABACQgegVgfAFQgFACAxAdIgugVQgNgEAcA0g");
	this.shape_10.setTransform(28.4,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 25
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#38100C").s().p("AgmANQgVgQAAgUIADgGQABAUAVAPQAWARAeAAQAjAAAHgMIgDAHQgIAMgjAAQgdAAgXgRg");
	this.shape_11.setTransform(18.9,30.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAAIAAAAg");
	this.shape_12.setTransform(25,31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 24
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E32F02").s().p("AgUAUIgNgYQgFgMAAgHQAAgHALgDIAbAAIAYAJQALAFADAHQADAHgOATQgPAUgMAAQgLAAgJgOg");
	this.shape_13.setTransform(28.4,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 23
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#47180E").s().p("AgpBQQA8gBAYgdQAGgHACgKIAAgQQgBgIADgPIABgaIgHgcIAHAIIADAOQADAOgDAPIgBAJQgBAIABARQAAAYgUAOQgPAKgPAFIgsADgAg5BKQA9AAAbgZIABgCIAHgJQAGgPgEgHQgHgJACgNQAGgkgLgXIgJgPIAJAGQANAagCAbIgCAVQABAIAEAGQADAFgCALQgCAMgIAHQgOAOgUAHIgzAHg");
	this.shape_14.setTransform(18.7,11.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzBLIAzgIQAUgHAOgOQAIgHACgMQACgLgDgEQgEgHAAgHIABgWQADgbgNgaIAQAPIAGAbIgBAbQgDAPACAIIgBAPQgCALgGAGQgYAeg7ABg");
	this.shape_15.setTransform(18.9,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer 22
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#38100C").s().p("AgNAXIgCgDIgBgBIABABIgBgBIAZACQAOgBAIgJQAJgJACgJIACAFIgEAHIgCADIgBACIgDAFQgHAIgPACgAgQATgAgrALIAAAAIAFgCIAggDQAOAAALgGQAMgHABgOIABgDIACAFQgCARgOAGQgNAGgNAAIgdADg");
	this.shape_16.setTransform(22,19.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D0D0D0").s().p("AgSATIgFgEIgDgBIgCAAIgKgCIAdgDQAMABAOgHQANgFADgRIAAAAIAFAJIABACQgBAJgJAKQgIAJgPAAg");
	this.shape_17.setTransform(22.2,19.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAOAEIAAABgAgOgDIABgBIAAABg");
	this.shape_18.setTransform(19,21.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAAIAAAAg");
	this.shape_19.setTransform(25.5,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Layer 21
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D12C03").s().p("AAJBjQgHgNgHgBIgOgCIgUgFIgTgHIgLgEQBeABAGg5QAGg4gggfQgagbgYgEQAwAGAhAlQAlApgEAzQgDA0gZATQgNAKgIAAQgIAAgDgKgAg0hsIADAAIAEABg");
	this.shape_20.setTransform(20.1,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 20
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C12702").s().p("AgNABIAAgFIAaAAQgTAEAAAFg");
	this.shape_21.setTransform(22.4,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer 19
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C12702").s().p("AgMABIAAgFIAaAAQgVAEABAFg");
	this.shape_22.setTransform(21.5,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer 18
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#913711").s().p("AAGAPQgNgMgKgDQgKgEgNgBIgTgEQgFgEACgGQADgHAEADQAEACgDAGQABAGAGABIAOABIAQADIAVANQAPALAPAAQAPAAADgFIAHgEQAFgBgBAGQAAAGgVADIgGAAQgRAAgNgKg");
	this.shape_23.setTransform(9.8,14);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 17
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAEIgBgEIABgEIAEgBIAEABIACAEIgCAEIgEACg");
	this.shape_24.setTransform(6.5,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 16
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAFIgCgFIACgFIAFgCIAFACIADAFIgDAFIgFADg");
	this.shape_25.setTransform(16.5,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 15
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#470E0E").s().p("AgFAGIgDgGIADgFQACgDADAAQAEAAACADIADAFIgDAGIgGADg");
	this.shape_26.setTransform(6.3,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 14
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#792B17").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEIgDAIIgJAEQgEAAgDgEg");
	this.shape_27.setTransform(6.1,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 13
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9F4E3").s().p("AgQATQgGgHgBgIIAAgFIACgJIAFgGQAIgIAIgBQAIAAAIAEIADADIAEAHIABAIIAAAFQgBAJgIAHQgHAIgJAAQgJAAgGgHg");
	this.shape_28.setTransform(5.8,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 12
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#470E0E").s().p("AgGAHIgDgHQAAgDADgDQADgEADAAQAFAAADAEIADAGIgDAHQgDAEgFAAQgDAAgDgEg");
	this.shape_29.setTransform(15.5,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 11
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#792B17").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAg");
	this.shape_30.setTransform(15.7,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 10
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9F4E3").s().p("AgVAaQgMgIgCgNQgCgMAJgLQAJgKAPgCQAOgCAMAHQAMAIACANQACAMgJAKQgJAMgPACIgFAAQgLAAgKgGg");
	this.shape_31.setTransform(17,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 9
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F93E0F").s().p("AgYAgQgPgJgDgRQgDgPAMgNQAKgNASgDQAQgCAPAJQAOAKADAQIAAAAQADAPgLAOIgBAAQgKAMgSADIgHAAQgNAAgKgHg");
	this.shape_32.setTransform(17.3,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 8
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F93E0F").s().p("AgUAWQgGgIgCgJIAAgGQAAgGADgFIAFgIIABAAQAKgJAJAAQAJgBAJAGIAEACIAAABIAFAIIACAKIgBAFQgBALgIAIQgJAJgLAAQgLAAgIgIg");
	this.shape_33.setTransform(5.8,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	// Layer 7
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF530F").s().p("ABGBjQgHgNgIgBQgcgDgmgQIglgGQgdgGgYgMQgYgLgDgNQgEgNAEgLQACgMAGgJIAEgKQAMgTAOgOQAWgUAdgKQAYgJAaABQA0AFAiAnQAlApgDAzQgEA0gZATQgNAKgIAAQgIAAgDgKg");
	this.shape_34.setTransform(14,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

	// Layer 6
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#38100C").s().p("AgIAFQgEgQADgGIAGgIIgDAEQgDAGAFARQAFAVAJgBIABAAIgFAEQgHAAgHgVg");
	this.shape_35.setTransform(1.1,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 5
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#47180E").s().p("AAxAbQAEgFgDgIQgCgLgPgLQgPgNgUgBIgnABIgPADQACgEASgDIAngBQAUACAPAMQAPAMADALQADALgKAFg");
	this.shape_36.setTransform(21.2,4.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAAIABAAIgBAAg");
	this.shape_37.setTransform(26.1,7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	// Layer 4
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C12702").s().p("AAagBQgBgQgIAHIgVAVIgYAaQAQghAMgNQAMgPgIAAQgRAEgZARIgWAMQAOgQATgKIANgIIAagQIABgBIACgCIApABQgIAIACAHQAGAKADAOQADAMgCAdQgGglgKgLQgJgLAAANQgBAWgGAPIgHARQAHgegCgQg");
	this.shape_38.setTransform(19.3,26.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

	// Layer 3
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E32F02").s().p("AAYAdQgOgBgagaIgRgQQgIgHgDAAIgGACIgFABIAAAAIgBgCQAAgFAUgCIAngBQAUABAPANQAPAMADAKQADALgKAFQgIAFgMAAIgFAAg");
	this.shape_39.setTransform(21.2,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// Layer 2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DB2D02").s().p("AgPALQgEgRADgGQADgGAIgFQAHgFAJgCQAJgDgBAQQgBAPgHAPQgHATgEAAQgIAAgHgVg");
	this.shape_40.setTransform(1.8,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1));

	// Layer 1
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E32F02").s().p("AgoAgQgVgQAAgTQAAgDAFgGQAFgGAagRQAZgRAaAEQAVAGAJASQAIAPgCAZQgBAMgHAKQgHAMgjAAQgdAAgXgSg");
	this.shape_41.setTransform(19.1,28.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.7,32.3,31.5);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("Ag4A4QgbgOgDgSQgDgIAGgJQACAIAZAOQAZANARACIAbgDQALgEATgXIASgYIACgFIACgEIAAgCQADgOgFgKQARgKAHgLIgEAaQgFAPgOAIQgCANgGALQgDgBgDAGQgDAFAXAKQAOAHAEgCQAAAJgEAFQgEAGgIgCIgGgDIgLgJIgIgPIgDADIgHAJIgCACIgCACIAAABIgKAKQgLAKgJADIgRAEIgDAAQgSAAgVgLgAAXAyIABAAIgBABg");
	this.shape.setTransform(8.8,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB2D02").s().p("AAHAWIgDAAIgEgDIgLgKQgKgKAAgJQgBgLAWAAIABAAIAAAAIAEABQAGAAAEADIABAAIACABQAEAFAAAHQgBAPgDAGQgEAFgFAAg");
	this.shape_1.setTransform(15.5,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#913711").s().p("AADAIIgKgIIgIgCQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIAAAAIgJgDQgCgCABgDQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAIAAAEIADAEIAGABIAIADIAJAGQAGAGAHABIAJgBQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAIABADIgKACQgKAAgFgGg");
	this.shape_2.setTransform(4.2,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#470E0E").s().p("AASAQQgDgCAAgFIABgEIACgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABgBIACAAIABAAIADABIAAAAIgBABIgBAEIACAEQACADADAAIgCACQgDADgEAAQgEAAgCgDgAgdgGIgCgFQgBgDACgDIABgBIACACIAAAAIADACIADgDIABAAIAAABIAAAAIABADIAAABIAAACIgBACIgEAEIgDAAg");
	this.shape_3.setTransform(4.7,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#792B17").s().p("AAQATIgEgJQABgIADgBQAEgBAFgBQACABADABIgCAAIgBABIgDgBIgBAAIgCAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIgCABIgBAEQAAAFADACQADADADAAQAEAAADgDIACgCIABAAIAAAAIADgDIABAAQAAAFgEADQgDAEgFAAQgFAAgEgEgAgcgBIgFgCQgDgCgBgFIABgIQADgEAEAAIAAAAIAAADIAAABIgBABQgDADABADIACAFIACACIADAAIAEgEIACgCIAAgCIAAADIAAABIgBAEIgGADg");
	this.shape_4.setTransform(4.8,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAYIAAgBIgBgBIACgCIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABIAAAAIAAABIgCACgAAdAQIgBAAQgDAAgCgCIgBgFIAAgEIABAAIAAgBIABAAIACgBIACgBIAFACIACAFIgBAFIgBAAIgDACgAgfgOIgBAAIgBgCIAAgBIAAgDIABgBIADgCIACACIADADIAAACIAAABIAAABIgBgBIAAABIgDACg");
	this.shape_5.setTransform(5.1,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6A09").s().p("AgFArQgGgBgEgDIgDgEIAAgBIACABIACgDIAAAAQADAAAFADIAFAGQABABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgCgBgAgMgXIgCgJQAAgFAHgCIgCgBIACgBIADgBIAFgBQAGABAEADQAFACACAHIgBADIgBACIADgBQgFAKgMAAQgJAAgFgHg");
	this.shape_6.setTransform(4.1,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9F4E3").s().p("AAdAgQgIAAgHgGQgHgFgBgIQAAgHAFgGQAFgDAJAAIAGABIAJADQAHAGAAAIQABAHgFAFQgFAFgHAAgAAMAFQgDABgCAIIAFAJQADAEAGAAQAEAAAEgEQAEgEAAgEIABgEIgCgFIgFgCIgCABQgCgDgCAAQgGAAgDADgAgjAEQgGAAgDgGIgCgOQAAgHAFgFQAFgEAEABQAFABACAGQADAFAAAJQAAAIgEADQgDAEgEAAIgCgBgAgogPIgBAIQAAAFADACIAGACIACAAIAAAAIAFgCIABgDIAAgCIAAgEIAAgBIgBgCIAAgCIAAgDIgDgDIgCgCIgDADIgBABIAAAAQgEAAgCADg");
	this.shape_7.setTransform(5.2,12.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F93E0F").s().p("AAdAkQgKAAgIgHQgIgHgBgJQgBgJAGgFQAHgGAKAAIAFABIANAGQAIAGABAJQABAJgGAGQgGAGgIAAIgDAAgAAJAAQgFAFAAAHQABAIAHAFQAHAGAIAAIACAAQAHAAAFgFQAFgFgBgHQAAgIgHgGIgJgDIgGgBQgJAAgFAEgAgvAAIgBgEIgCgNQAAgHAGgHIAFgDIAHgBQAFACAEAHQADAGAAAKQAAAKgEAFQgFAEgHAAQgHAAgEgJgAgrgdQgFAFAAAHIACAOQADAGAGAAQAGABADgEQAEgDAAgIQAAgJgDgFQgCgGgFgBIgCAAQgEAAgDADg");
	this.shape_8.setTransform(5.4,12.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF530F").s().p("AgSA9QgMgCgPgIQgbgPgDgPQgDgKAHgJIABAFQAEAJAHABQAHAAAFgEQAEgGAAgJQAAgKgDgHQgEgHgFgBIgHABQAGgKANgIIADgBIAIgDIABgBIAEgBIAFgCIAXgFIAigEIAUACQARABAEANIABADIAAAEIAAAHIgCALIgEANIgDAGIgDAHIgFAIIAAABIAAABIgFAGIgHAIIgCADIAAAAIgCACIAAABIgGAGIgEAEIgJAHQgLAIgNABgAgqAgIAKAIQAGAGAKAAIAKgCIgCgDQAAAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAABIgIABQgIgBgGgGIgJgHIgIgDIgGgBIgDgEIAAgEQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBABQgBADACACIAJADIgCACIABABIAAABIAAAAIADAEQAEAEAGABQAGABgCgEIgFgFIgDgCgAgPAGQgGAGABAJQABAJAIAHQAIAGAJAAQALABAGgGQAGgGgBgKQgBgJgIgHIgNgGIgFAAQgJAAgHAGgAgogtIgDABIgCACIACAAQgHADAAAFIACAIQAFAHAKAAQAMAAAFgKIgDABIABgCIABgDQgCgGgFgDQgEgDgGAAgAgxAdIAEACgAgyAdIAAAAIABAAIgBAAg");
	this.shape_9.setTransform(7.7,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DB2D02").s().p("AgHAlQAAgEAFgHIAJgLIgMAJQgBAAgBAAQAAAAAAgBQgBAAAAgBQABgBAAgBQAAgGAOgXIgOAPQgIAHAEgNQADgMAKgVIAAAAIACgEQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQACAAABAFIACAPIAAABQABAfgGAPIgDAFIAAABIgBABIgGAFIgCAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_10.setTransform(16.2,4.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C12702").s().p("AgPAqIAAgBIABgNIABgHIABgGIgBAAIgBgBIAGgUQAFgPAMgUIACgBIAAAAQgLAUgCANQgEANAHgHIAPgQQgPAYAAAFQAAABAAABQgBABABABQAAAAABAAQAAABABgBIANgJIgKAMQgFAGAAAFQAAAEAFgCIAHgFIABgBIgCAFIgOALIgLAEg");
	this.shape_11.setTransform(15.3,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DB2D02").s().p("AgOAEIAAgDQAAgTAMgCIACAAIAEAAIACABIABAAQAIACAAAIIgCAOIgEAEIgJAHIgJAEIgBAAIAAABQgEAAAAgRg");
	this.shape_12.setTransform(2.1,9.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#47180E").s().p("AAAAAIABAAIAAAAg");
	this.shape_13.setTransform(2.7,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.6,17.7,17.4);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgzA4QgagOgEgSQgCgIAGgJQACAIAYAOQAaANAQACIAbgDQAMgEAPgTQAQgSABgNIACgNQACARgJARIgEADQgDAEAMAJIAUAOIgDANIgIABQgFgBgFgKQgHgKgBgIIgDADIgHAJIgCACIgCACIgBABIgJALQgLAJgKADIgRAEIgCAAQgSAAgWgLgAAdAzIAAgBIgBABgAA9gxQAIgHABgKQgBAegGAIg");
	this.shape.setTransform(8.3,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#47180E").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(14.9,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DB2D02").s().p("AAGAWIgDgBIgDgCIAAgBIgHgJQgIgMAAgKQAAgKAPACIAEABIAGACIABABIAAAAIABABIABACIADALIgDAVQgCAEgEAAIgBAAg");
	this.shape_2.setTransform(14.9,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#913711").s().p("AADAIIgKgIIgIgCQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIAAAAIgJgDQgCgCABgDQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAIAAAEIADAEIAGABIAIADIAJAGQAGAGAHABIAJgBQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAIABADIgKACQgKAAgFgGg");
	this.shape_3.setTransform(4.2,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#470E0E").s().p("AASAQIgCgCIgBgFIABgEIACgBIABAAIADgDIACAAIABAAIADABIAAAAIgBABIgBAEIACAEIABACIAEABIgCACQgDADgEAAQgEAAgCgDgAgbgEIgCgCIgCgFQgBgDACgDIABgBIABABIABABIAAAAIADACIADgDIABAAIAAABIAAAAIABADIAAABIAAABIAAABIgBACIgEAEIgDAAg");
	this.shape_4.setTransform(4.7,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#792B17").s().p("AAQATIgBgCIgBgCIgCgEIAAgBIABgCQABgFACgCQAEgBAFgBQACABADABIgCAAIgBABIAAAAIgDgBIgBAAIgCAAIgDADIgBAAIgCABIgBAEIABAFIACACQADADADAAQAEAAADgDIACgCIABAAIAAAAIADgDIABAAQAAAFgEADQgDAEgFAAQgFAAgEgEgAgcgBIgFgCQgDgCgBgFIABgIQADgEAEAAIAAAAIAAADIAAABIgBABQgDADABADIACAFIACACIAAAAIADAAIAEgEIACgCIAAgBIAAgBIAAADIAAACIgBAEIgFACg");
	this.shape_5.setTransform(4.8,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAYIAAgBIgBgBIACgCIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABIAAAAIAAABIgCACgAAdAQIgBAAIgDgBIgCgBIgBgFIAAgEIABAAIAAgBIABAAIAAAAIACgBIACgBIAFACIACAFIgBAFIgBAAIgDACgAgfgOIgBAAIAAAAIgBgCIAAgBIAAgDIABgBIADgCIACACIADADIAAACIAAADIAAgBIgBgBIAAABIgDACg");
	this.shape_6.setTransform(5.1,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AgFArQgGgBgEgDIgDgEIAAgBIACABIACgDIAAAAQADAAAFADIAFAGQABAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAgAgMgXIgCgJQAAgFAHgCIgCgBIACgBIACgBIAIABQAHAAADAEIAFAHQAAABAAABQAAAAAAABQAAAAAAABQAAAAABAAQgFAKgMAAQgJAAgFgHg");
	this.shape_7.setTransform(4.1,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9F4E3").s().p("AAdAgQgIAAgHgGQgHgFgBgIQAAgHAFgGQAFgDAJAAQAIAAAHAEQAHAGAAAIQABAHgFAFQgFAFgHAAIgCAAgAAMAFQgDABgBAFIgBADIAAABIACADIABADIACACQADAEAGAAQAEAAAEgEQAEgEAAgEIABgEIgCgFIgFgCIgCABQgCgDgCAAQgGAAgDADgAgjAEQgGAAgDgGIgCgOQAAgHAFgFQAFgEAEABQAFABACAGQADAFAAAJQAAAIgEADQgDAEgEAAIgCgBgAgogPIgBAIQAAAFADACIAGACIACAAIAFgCIABgDIAAgCIAAgEIAAgBIgBgCIAAgCIAAgDIgDgDIgCgCIgDADIgBABIAAAAQgEAAgCADg");
	this.shape_8.setTransform(5.2,12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F93E0F").s().p("AAdAkQgKAAgIgHQgIgHgBgJQgBgJAGgFQAHgGAKAAQALABAHAGQAIAGABAJQABAJgGAGQgGAGgIAAIgDAAgAAJAAQgFAFAAAHQABAIAHAFQAHAGAIAAQAJAAAFgFQAFgFgBgHQAAgIgHgGQgHgEgIAAQgJAAgFAEgAgvAAIgBgEIgCgNQAAgHAGgHIAFgDIAHgBQAFACAEAHQADAGAAAKQAAAKgEAFQgFAEgHAAQgHAAgEgJgAgrgdQgFAFAAAHIACAOQADAGAGAAQAGABADgEQAEgDAAgIQAAgJgDgFQgCgGgFgBIgCAAQgEAAgDADg");
	this.shape_9.setTransform(5.4,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF530F").s().p("AgOA/QgMgBgPgJQgbgPgDgOQgDgLAHgIIABAEQAEAJAHABQAHAAAFgEQAEgGAAgJQAAgKgDgHQgEgGgFgCIgHABQAGgKANgHIACgBIgCABIgCABIACABQgHACAAAFIACAJQAFAGAKAAQAMAAAFgKQgBABAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIgFgHQgDgEgHAAIgJgCIABAAIAIgDIABgBIADAAIACgBIABAAIAGgBIABAAIAEgBIAOgFQAWgGAYgCIAJABIAEADIAEAEIADAGIAAABIABADIAAAAIABAFIAAACIABAFIgBAQIgBAFIgCALIgCAFIgOAcIgBAAIAAABIgCACIAAAAIgCACIAAABIgGAGIgEAEIgJAHQgLAIgNABgAgmAiIAKAIQAGAHAKAAIAKgDIgCgDQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABIgIABQgIgBgGgFIgJgIIgIgCIgGgCIgDgEIAAgDQgBgBAAAAQAAAAgBAAQAAAAgBABQAAAAgBABQgBADACACIAJADIgCACIABABIAAABIAAAAIADAFQAEADAGABQAGABgCgDIgFgGIgDgCgAgLAIQgGAGABAJQABAJAIAHQAHAHAKgBQALACAGgHQAGgGgBgKQgBgIgIgIQgHgFgLgCQgJAAgHAHgAgtAgIAEABgAguAgIAAgBIABABIgBAAgAglgrIAAAAIAAABg");
	this.shape_10.setTransform(7.3,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#47180E").s().p("AABAkIAAAAIgBABgAAAgjIAAgBIAAAAIAAABg");
	this.shape_11.setTransform(14.8,4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DB2D02").s().p("AgDAlQAAgGADgEIADgKIgFAHQgBgBAAgFQAAgGAGgVIgGAOQgDAEABgLIAFggIAAgBIACgBIgBAAIABgDIACAAIABAFIABARIAAAAIgCAwIgBAEIgBAAIAAACIgCADIgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_12.setTransform(14.7,4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C12702").s().p("AgGAoIABgOIAAgHIABgHIgBABIAAgCQgBgEADgPQADgPAEgSIABgBIgFAgQgCALADgDIAHgPQgHAVAAAGQgBAFABABIAHgHIgFAKQgCAEAAAGQgBABABABQAAABAAAAQAAABABAAQAAAAABgBIADgDIABgCIgBAGIAAgBIgGAJIgCABIgCAAIgBABQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAABgBg");
	this.shape_13.setTransform(14.2,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DB2D02").s().p("AgQADQAAgTAMgFIADAAIADgBIADAAIAAAAQANAEgBAGIgFAKIgEAIIgJAJIgKAHIAAAAIgBABQgEAAAAgUg");
	this.shape_14.setTransform(1.9,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.5,18);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("Ag4A4QgbgOgDgSQgDgIAGgJQACAIAZAOQAZANARACIAbgDQALgEATgXIASgYIACgFIACgEIAAgCQADgOgFgKQARgKAHgLIgEAaQgFAPgOAIQgCANgGALQgDgBgDAGQgDAFAXAKQAOAHAEgCQAAAJgEAFQgEAGgIgCIgGgDIgLgJIgIgPIgDADIgHAJIgCACIgCACIAAABIgKAKQgLAKgJADIgRAEIgDAAQgSAAgVgLgAAXAyIABAAIgBABg");
	this.shape.setTransform(8.8,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB2D02").s().p("AAHAWIgDAAIgEgDIgLgKQgKgKAAgJQgBgLAWAAIABAAIAAAAIAEABQAGAAAEADIABAAIACABQAEAFAAAHQgBAPgDAGQgEAFgFAAg");
	this.shape_1.setTransform(15.5,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#913711").s().p("AADAIIgKgIIgIgCQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIAAAAIgJgDQgCgCABgDQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAIAAAEIADAEIAGABIAIADIAJAGQAGAGAHABIAJgBQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAIABADIgKACQgKAAgFgGg");
	this.shape_2.setTransform(4.2,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#470E0E").s().p("AASAQQgDgCAAgFIABgEIACgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABgBIACAAIABAAIADABIAAAAIgBABIgBAEIACAEQACADADAAIgCACQgDADgEAAQgEAAgCgDgAgdgGIgCgFQgBgDACgDIABgBIACACIAAAAIADACIADgDIABAAIAAABIAAAAIABADIAAABIAAACIgBACIgEAEIgDAAg");
	this.shape_3.setTransform(4.7,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#792B17").s().p("AAQATIgEgJQABgIADgBQAEgBAFgBQACABADABIgCAAIgBABIgDgBIgBAAIgCAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIgCABIgBAEQAAAFADACQADADADAAQAEAAADgDIACgCIABAAIAAAAIADgDIABAAQAAAFgEADQgDAEgFAAQgFAAgEgEgAgcgBIgFgCQgDgCgBgFIABgIQADgEAEAAIAAAAIAAADIAAABIgBABQgDADABADIACAFIACACIADAAIAEgEIACgCIAAgCIAAADIAAABIgBAEIgGADg");
	this.shape_4.setTransform(4.8,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAYIAAgBIgBgBIACgCIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABIAAAAIAAABIgCACgAAdAQIgBAAQgDAAgCgCIgBgFIAAgEIABAAIAAgBIABAAIACgBIACgBIAFACIACAFIgBAFIgBAAIgDACgAgfgOIgBAAIgBgCIAAgBIAAgDIABgBIADgCIACACIADADIAAACIAAABIAAABIgBgBIAAABIgDACg");
	this.shape_5.setTransform(5.1,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6A09").s().p("AgFArQgGgBgEgDIgDgEIAAgBIACABIACgDIAAAAQADAAAFADIAFAGQABABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgCgBgAgMgXIgCgJQAAgFAHgCIgCgBIACgBIADgBIAFgBQAGABAEADQAFACACAHIgBADIgBACIADgBQgFAKgMAAQgJAAgFgHg");
	this.shape_6.setTransform(4.1,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9F4E3").s().p("AAdAgQgIAAgHgGQgHgFgBgIQAAgHAFgGQAFgDAJAAIAGABIAJADQAHAGAAAIQABAHgFAFQgFAFgHAAgAAMAFQgDABgCAIIAFAJQADAEAGAAQAEAAAEgEQAEgEAAgEIABgEIgCgFIgFgCIgCABQgCgDgCAAQgGAAgDADgAgjAEQgGAAgDgGIgCgOQAAgHAFgFQAFgEAEABQAFABACAGQADAFAAAJQAAAIgEADQgDAEgEAAIgCgBgAgogPIgBAIQAAAFADACIAGACIACAAIAAAAIAFgCIABgDIAAgCIAAgEIAAgBIgBgCIAAgCIAAgDIgDgDIgCgCIgDADIgBABIAAAAQgEAAgCADg");
	this.shape_7.setTransform(5.2,12.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F93E0F").s().p("AAdAkQgKAAgIgHQgIgHgBgJQgBgJAGgFQAHgGAKAAIAFABIANAGQAIAGABAJQABAJgGAGQgGAGgIAAIgDAAgAAJAAQgFAFAAAHQABAIAHAFQAHAGAIAAIACAAQAHAAAFgFQAFgFgBgHQAAgIgHgGIgJgDIgGgBQgJAAgFAEgAgvAAIgBgEIgCgNQAAgHAGgHIAFgDIAHgBQAFACAEAHQADAGAAAKQAAAKgEAFQgFAEgHAAQgHAAgEgJgAgrgdQgFAFAAAHIACAOQADAGAGAAQAGABADgEQAEgDAAgIQAAgJgDgFQgCgGgFgBIgCAAQgEAAgDADg");
	this.shape_8.setTransform(5.4,12.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF530F").s().p("AgSA9QgMgCgPgIQgbgPgDgPQgDgKAHgJIABAFQAEAJAHABQAHAAAFgEQAEgGAAgJQAAgKgDgHQgEgHgFgBIgHABQAGgKANgIIADgBIAIgDIABgBIAEgBIAFgCIAXgFIAigEIAUACQARABAEANIABADIAAAEIAAAHIgCALIgEANIgDAGIgDAHIgFAIIAAABIAAABIgFAGIgHAIIgCADIAAAAIgCACIAAABIgGAGIgEAEIgJAHQgLAIgNABgAgqAgIAKAIQAGAGAKAAIAKgCIgCgDQAAAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAABIgIABQgIgBgGgGIgJgHIgIgDIgGgBIgDgEIAAgEQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBABQgBADACACIAJADIgCACIABABIAAABIAAAAIADAEQAEAEAGABQAGABgCgEIgFgFIgDgCgAgPAGQgGAGABAJQABAJAIAHQAIAGAJAAQALABAGgGQAGgGgBgKQgBgJgIgHIgNgGIgFAAQgJAAgHAGgAgogtIgDABIgCACIACAAQgHADAAAFIACAIQAFAHAKAAQAMAAAFgKIgDABIABgCIABgDQgCgGgFgDQgEgDgGAAgAgxAdIAEACgAgyAdIAAAAIABAAIgBAAg");
	this.shape_9.setTransform(7.7,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C12702").s().p("AgPAqIAAgBIABgNIABgHIABgGIgBAAIgBgBIAGgUQAFgPAMgUIACgBIAAAAQgLAUgCANQgEANAHgHIAPgQQgPAYAAAFQAAABAAABQgBABABABQAAAAABAAQAAABABgBIANgJIgKAMQgFAGAAAFQAAAEAFgCIAHgFIABgBIgCAFIgOALIgLAEg");
	this.shape_10.setTransform(15.3,5.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DB2D02").s().p("AgHAlQAAgEAFgHIAJgLIgMAJQgBAAgBAAQAAAAAAgBQgBAAAAgBQABgBAAgBQAAgGAOgXIgOAPQgIAHAEgNQADgMAKgVIAAAAIACgEQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQACAAABAFIACAPIAAABQABAfgGAPIgDAFIAAABIgBABIgGAFIgCAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_11.setTransform(16.2,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DB2D02").s().p("AgOAEIAAgDQAAgTAMgCIACAAIAEAAIACABIABAAQAIACAAAIIgCAOIgEAEIgJAHIgJAEIgBAAIAAABQgEAAAAgRg");
	this.shape_12.setTransform(2.1,9.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#47180E").s().p("AAAAAIABAAIAAAAg");
	this.shape_13.setTransform(2.7,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.6,17.7,17.4);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AhEA6QgagOgEgSQgCgIAGgJQABAIAZAOQAZANARACIAbgDQALgEATgXIASgYIAEgLQADgOgDgHQAEABAPgHQARgIAKgOIAAAAIAAACIAAAAQABAjgJAMIgEAEIgFADIAAABIgXAEIgBAAIgCAAIgBABIgEAHIAAABIgEAGQgGAAgBAEQgBAFAWAGIAVAAQgBAOgEAGQgEAGgHAAIgDAAIgGgCIgMgIQgHgIgDgGIgCADIgHAJIgCACIgCACIgBABIgJALQgLAJgJADIgSAEIgCAAQgSAAgWgLgABjhCIAAAAgAAMA1IAAgBIgBABgABRAQIABAEIAAABg");
	this.shape.setTransform(10,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB2D02").s().p("AAFAVIgFgCIAAAAIgLgIQgMgLAAgIQgBgKAYgCIAPAAIADABIACACQAEAEAAAHQgBAPgEAHQgDAFgIAAg");
	this.shape_1.setTransform(15.7,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#47180E").s().p("AAAAAIAAAAIAAABg");
	this.shape_2.setTransform(11.1,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#913711").s().p("AACAIIgJgIIgFgBIgCgBIgCgBIgBAAIgJgDQgCgCABgDQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABABIAAADIADAEIAGABIAHADIAJAGQAGAGAHABIAJgBQAAgBAAgBQABAAAAAAQABAAAAgBQABAAABABIABADIgKACQgKAAgHgGg");
	this.shape_3.setTransform(4.1,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#470E0E").s().p("AASAQIgCgCIgBgFIABgEIACgBIABAAIADgDIACAAIABAAIADABIAAAAIgBABIgBAEIACAEIABACIAEABIgCACQgDADgEAAQgEAAgCgDgAgdgGIgCgFQgBgDACgDIABgBIABABIABABIAAAAIADACIADgDIABAAIAAABIAAAAIABADIAAABIAAABIAAABIgBACIgEAEIgDAAg");
	this.shape_4.setTransform(4.7,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#792B17").s().p("AAQATIgBgCIgBgCIgCgEIAAgBIAAgBIABgBIADgHQAEgBAFgBQACABADABIgCAAIgBABIAAAAIgDgBIgBAAIgCAAIgDADIgBAAIgCABIgBAEIABAFIACACQADADADAAQAEAAADgDIACgCIABAAIAAAAIADgDIABAAQAAAFgEADQgDAEgFAAQgFAAgEgEgAgcgBIgFgCQgDgCgBgFIABgIQADgEAEAAIAAAAIAAADIAAABIgBABQgDADABADIACAFIACACIADAAIAEgEIACgCIAAgBIAAgBIAAADIAAACIAAABIgBACIgGADg");
	this.shape_5.setTransform(4.8,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxAsIAAAAIAAAAgAgrAiIgBgCIAAgBIACgCIABAAIACACIAAAAIgCADgAAOAaIgBAAIgDgBIgCgCIgBgEIAAgEIABgBIAAAAIABAAIAAgBIACAAIACgBIAFACIACAFIgBAEIgBAAIgDADgAgugEIgBAAIAAgBIgBgBIAAgBIAAgDIABgBIADgDIACACIADAEIAAACIAAACIAAAAIgBgBIAAAAIgDADgAgegrIABAAIAAAAg");
	this.shape_6.setTransform(6.6,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AAsAuIAAAAIABAAgAgfApQgHAAgDgEIgDgFIAAAAIACAAIACgCIAAAAIACAAIAFADIAGAGQABABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAIgCAAgAgmgaIgCgIQAAgFAHgCIgDgBIACgBIABAAIACgCIABABIADgBIAJAAQAIACADALIgBACIgBACIABAAQgFAJgKAAQgKABgFgIg");
	this.shape_7.setTransform(6.7,11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9F4E3").s().p("AAOAaIgGgHIgCgGQgBgIAGgFQAFgEAIABQAJAAAHAEQAGAGABAIQABAHgFAFQgFAFgJAAQgJAAgGgGgAAMAFIgEAHIgBABIAAABIAAABIACADIABADIACACQADAEAGAAQAEAAAEgEQAEgEAAgEIABgEIgCgFIgFgCIgCABQgCgDgCAAQgGAAgDADgAgjAEQgGAAgDgGQgDgIAAgGQAAgHAFgFQAGgEAEABQAFABACAGIADAOQAAAIgEADQgDADgEAAIgCAAgAgogPIgBAIQAAAFADACIAGACIACAAIAFgCIABgCIAAgBIAAgCIAAgEIAAgBIgBgCIAAgCIAAgDIgDgDIgCgCIgDADIgBABIAAAAQgEAAgCADg");
	this.shape_8.setTransform(5.2,12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F93E0F").s().p("AAdAkQgKgBgIgGQgIgHgBgJQgBgJAGgFQAHgGAKAAQALABAIAGQAHAFABAKQABAJgGAGQgFAGgJAAIgDAAgAAJAAQgFAEABAIIABAGIAGAHQAHAGAJAAQAIAAAFgFQAFgFAAgHQgBgIgGgGQgHgEgJAAIgCAAQgHAAgFAEgAgjAJQgHAAgEgJIgCgEIgCgNQAAgHAGgHIAFgDIAIgBQAFACADAHIADAQQAAAKgEAFQgEAEgGAAIgBAAgAgrgdQgFAFAAAHQAAAGADAIQADAGAFAAQAGABAEgEQADgDAAgIIgCgOQgDgGgEgBIgDAAQgDAAgEADg");
	this.shape_9.setTransform(5.4,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF530F").s().p("AgUA7QgNgBgPgJQgbgPgDgOQgDgLAHgIIACAEQAEAJAHABQAGABAFgFQAEgGAAgJIgDgRQgDgGgFgCIgIABQAGgJALgHIADABQgIACAAAFIADAIQAFAIAJgBQAKAAAFgJIgBAAIABgCIACgCQgEgLgIgCIgJAAIgDABIAAgBIAIgDIABAAQAbgJAhAAIAPAAQAZACAKANQAIAJgJAVIgEAJIAAAAIgKAOIgDAEIgFAHIgHAJIgCACIAAAAIgDACIAAABIgFAGIgBAAIgDAEIAAAAIgKAHQgLAIgMABgAgtAdIAKAKQAGAFAKABIAKgDIgBgDQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIgIABQgHgBgHgFIgJgIIgHgCIgHgCIgDgEIAAgDQAAAAgBgBQAAAAAAAAQgBABAAAAQgBAAAAABQgCADADACIAIADIgBACIAAABIABABIAAAAIACAFQAEAEAGAAQACAAABAAQABAAAAAAQABAAAAgBQAAAAAAgBIgGgGIgGgDgAgSADQgGAHABAJQABAJAIAHQAIAGAJAAQALABAGgGQAGgHgBgJQgBgJgHgHQgIgEgKgCQgKABgHAEgAgugtIAAAAIAAAAIgCABgAgsgvIgCACg");
	this.shape_10.setTransform(8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#47180E").s().p("AAAAAIAAAAIAAAAg");
	this.shape_11.setTransform(18.1,2.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C12702").s().p("AgZAjIACgNIACgHIACgGIgDAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgFAJgNQAKgNATgPIABAAIABgBIAAAAIAAABQgRAPgEAMQgGALALgCIAZgJQgYARgCAEQAAAGAEABIAWgCIgPAGQgJAEAAAFQgBAEAJABIAMgBIACgBIgFADIAAAAIgXAEQgXAAACgFg");
	this.shape_12.setTransform(16.3,6.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DB2D02").s().p("AgMAiQABgFAIgEIAPgGIgVACQgFgBABgGQABgEAXgRIgXAIQgMADAFgLQAFgMAQgPIABAAIAAgBIAAAAIADgCIACgBIAFABIAGAGIACARIAAABQABAhgJANIgEAEIgCABIgKABQgJgBAAgEg");
	this.shape_13.setTransform(17.8,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DB2D02").s().p("AgMAAQAAgVAMACIAFADIgCgCIAFADQAFADAAAGIgCAOIgDAEIgIAFIgHADIgBAAIAAAAQgFAAABgUg");
	this.shape_14.setTransform(2.3,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,19.9,16.1);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgvA3QgNgCgQgIQgbgOgDgRQgDgIAGgIQACAGAZAOIAdANIANACIAcgCIAQgNIARgRIAJAFIAVAGQAOAEADgEQgDATgTgBIgKgDIgOgNIgIAHIgDADIgBABIAAABIgMAOIgBAAQgJAJgKADIgSAEgAA1goIAjgFQAOgEAGgGQgBAfgKAFQgNAMgjgGIgCADIgHADIgFADQAVgXgDgNg");
	this.shape.setTransform(10.8,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB2D02").s().p("AAAAWQgFgCgHgEQgMgJAAgIQgBgKAZgHIAHgCIAGgBIADABIABAAIABAAIAAAAIACACQAFABAAAIQAAAQgFAGQgDAHgIACIgEAAg");
	this.shape_1.setTransform(15.8,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#913711").s().p("AADAIIgKgIIgIgCQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIAAAAIgJgDQgCgCABgDQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAIAAAEIADAEIAGABIAIADIAJAGQAGAGAHABIAJgBQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAIABADIgKACQgKAAgFgGg");
	this.shape_2.setTransform(4.2,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#470E0E").s().p("AASAQIgCgCIgBgFIABgEIACgBIABAAIADgDIACAAIABAAIADABIAAAAIgBABIgBAEIACAEIABACIAEABIgCACQgDADgEAAQgEAAgCgDgAgbgEIgCgCIgCgFQgBgDACgDIABgBIABABIABABIAAAAIADACIADgDIABAAIAAABIAAAAIABADIAAABIAAABIAAABIgBACIgEAEIgDAAg");
	this.shape_3.setTransform(4.7,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#792B17").s().p("AAQATIgBgCIgBgCIgCgEIAAgBIABgCQABgFACgCQAEgBAFgBQACABADABIgCAAIgBABIAAAAIgDgBIgBAAIgCAAIgDADIgBAAIgCABIgBAEIABAFIACACQADADADAAQAEAAADgDIACgCIABAAIAAAAIADgDIABAAQAAAFgEADQgDAEgFAAQgFAAgEgEgAgcgBIgFgCQgDgCgBgFIABgIQADgEAEAAIAAAAIAAADIAAABIgBABQgDADABADIACAFIACACIAAAAIADAAIAEgEIACgCIAAgBIAAgBIAAADIAAACIgBAEIgFACg");
	this.shape_4.setTransform(4.8,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6A09").s().p("AgFArQgGgBgEgDIgDgEIAAgBIACABIACgDIAAAAQADAAAFADIAFAGQABABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgCgBgAgMgXIgCgJQAAgFAFgDIACgBIAEgBIAEgBQADAAAIAEQAHADgBAGIABAEQgFAKgMAAQgJAAgFgHg");
	this.shape_5.setTransform(4.1,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8AYIgBgBIAAgBIACgCIAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIABAAIgBABIgCACgAgDAQIAAAAIgEgBIgBgBIgCgFIABgEIABAAIAAgBIAAAAIABAAIACgBIACgBIADACIACAFIgBAFIgBAAIgCACgABDgFIAAAAIAAABgAhAgOIAAAAIgBAAIgBgCIAAgBIABgDIAAgBIADgCIADACIADADIAAACIgBADIAAgBIAAgBIgBABIgDACg");
	this.shape_6.setTransform(8.4,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9F4E3").s().p("AAdAgQgIAAgHgGQgHgFgBgIQAAgHAFgGQAFgDAJAAQAIAAAHAEQAHAGAAAIQABAHgFAFQgFAFgHAAIgCAAgAAMAFQgDABgBAFIgBADIAAABIACADIABADIACACQADAEAGAAQAEAAAEgEQAEgEAAgEIABgEIgCgFIgFgCIgCABQgCgDgCAAQgGAAgDADgAgjAEQgGAAgDgGIgCgOQAAgHAFgFQAFgEAEABQAFABACAGQADAFAAAJQAAAIgEADQgDAEgEAAIgCgBgAgogPIgBAIQAAAFADACIAGACIACAAIAFgCIABgDIAAgCIAAgEIAAgBIgBgCIAAgCIAAgDIgDgDIgCgCIgDADIgBABIAAAAQgEAAgCADg");
	this.shape_7.setTransform(5.2,12.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F93E0F").s().p("AAdAkQgKAAgIgHQgIgHgBgJQgBgJAGgFQAHgGAKAAQALABAHAGQAIAGABAJQABAJgGAGQgGAGgIAAIgDAAgAAJAAQgFAFAAAHQABAIAHAFQAHAGAIAAQAJAAAFgFQAFgFgBgHQAAgIgHgGQgHgEgIAAQgJAAgFAEgAgvAAIgBgEIgCgNQAAgHAGgHIAFgDIAHgBQAFACAEAHQADAGAAAKQAAAKgEAFQgFAEgHAAQgHAAgEgJgAgrgdQgFAFAAAHIACAOQADAGAGAAQAGABADgEQAEgDAAgIQAAgJgDgFQgCgGgFgBIgCAAQgEAAgDADg");
	this.shape_8.setTransform(5.4,12.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF530F").s().p("AgWA7QgNgCgPgIQgbgQgDgOQgCgKAGgJIACAFQAEAJAHABQAGAAAFgFQAFgFAAgJQAAgKgEgHQgDgHgFgBIgHABQAFgKANgIIADgBIAIgDIABgBIAEgCIACAAIAYgEIAUgBIAOAAIAHABIAKABIAEABIAAAAIABAAIAFACIAGACQALAFAFAHQAFAFAAAGQgBALgJAOIgDADIAAAAIAAAAIgKAMIgEAEIgIAIIgDAEIgCADIgBAAIgBACIgGAHIgBAAIgDADIgBAAIABAAIgKAIQgLAHgLACgAgvAeIALAHQAFAHAKAAIAKgCIgBgDQgBgBAAAAQgBABAAAAQAAAAgBAAQAAABAAABIgJABQgHgBgGgGIgKgIIgIgCIgGgBIgDgEIAAgEQAAAAgBAAQAAgBgBABQAAAAAAAAQgBABAAAAQgBAEACACIAJACIgCACIAAABIABACIAAAAIADAEQADADAGACQAGABgBgEIgFgFIgEgDgAgUAEQgFAGABAIQAAAKAIAGQAJAHAIAAQALABAGgHQAHgFgBgKQgBgJgIgHQgIgFgJgBQgLAAgHAGgAgsgvIgEABIgCABQgFADAAAFIADAJQAFAHAKAAQAMAAAEgKIAAgEQAAgGgHgDQgHgDgDAAgAg1AbIADABgAg2AbIgBgBIACABIgBAAg");
	this.shape_9.setTransform(8.2,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C12702").s().p("AgeAfIACgMIACgHIADgGIgDAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgEALgMQAKgMAXgNIACAAIACgBIAAAAIgBAAIAAABQgUAOgGALQgGALANgBIAdgHQgdAOAAAFQgBAFAFACQAHACATgCIgTAFQgKACAAAGQgBAEALABIANAAIADAAIgGADIABAAIgcABQgbgDACgFg");
	this.shape_10.setTransform(17.4,7.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DB2D02").s().p("AgDAmQgMgCACgEQAAgFAKgCIARgFQgSABgGgBQgGgDABgFQABgEAcgOIgdAGQgNAAAGgJQAGgMATgNIABgBIAAAAIAAAAIACgBIACgBIACAAIAGABIAGAGIADASIAAABQACAigLAKIgEAFIgDAAg");
	this.shape_11.setTransform(19,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#47180E").s().p("AAAAAIAAAAIAAAAg");
	this.shape_12.setTransform(2.1,9.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DB2D02").s().p("AgDAUIgCgBIAAAAIAAAAQgDgCAAgUQAAgQAFAAIACABIABACIACACIACADIAAAAQAEAGABAHIgCANIgCADIgFACg");
	this.shape_13.setTransform(2.7,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.2,21.6,14.9);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgyAyQgNgDgQgHQgbgOgEgSQgCgIAGgIQACAIAZANIAdAMIANACIAcgCIAQgMIATgRIAHAEIAQAFIAPACQgMAXgWgPIgGgHIgHAHIgDADIgBACIAAABIgBAAIgCACIAAABIgKAKQgKAKgJADIgSAEgAAAAiIAAAAIAAAAgABDgIQADgbggATQAJgMACgIQA1ABAJgOQAAAfgKAJQgFAGgJAAQgIAAgMgFg");
	this.shape.setTransform(11.1,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB2D02").s().p("AAAAWQgFAAgFgEQgLgGAAgJQgBgKAWgKIAGgDIAIgCIABAAIABAAIADABQAEABAAAIIgEAYQgEAGgHADIgDABIgDABg");
	this.shape_1.setTransform(15.6,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#47180E").s().p("AgEAFIAAABIgBAAgAAFgFIABAAIgCABg");
	this.shape_2.setTransform(11.7,15.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#913711").s().p("AACAIIgJgIIgFgBIgCgBIgCgBIgBAAIgJgDQgCgCABgDQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABABIAAADIADAEIAGABIAHADIAJAGQAGAGAHABIAJgBQAAgBAAgBQABAAAAAAQABAAAAgBQABAAABABIABADIgKACQgKAAgHgGg");
	this.shape_3.setTransform(4.1,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#470E0E").s().p("AASAQIgCgBQgBgCAAgEIABgEIACgBIABAAIADgDIACAAIABAAIADABIAAAAIgBABIgBAEIACAEIABACIAEABIgCACQgDADgEAAQgEAAgCgDgAgdgGIgCgFQgBgDACgDIABgBIABABIABABIAAAAIADACIADgDIABAAIAAABIAAAAIABADIAAABIAAABIAAABIgBACIgEAEIgDAAg");
	this.shape_4.setTransform(4.7,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#792B17").s().p("AAQATIgBgCIgBgCIgCgEIAAgBIAAgBIABgBIADgHQAEgBAFgBQACABADABIgCAAIgBABIAAAAIgDgBIgBAAIgCAAIgDADIgBAAIgCABIgBAEQAAAEABACIACABQADADADAAQAEAAADgDIACgCIABAAIAAAAIADgDIABAAQAAAFgEADQgDAEgFAAQgFAAgEgEgAgcgBIgFgCQgDgCgBgFIABgIQADgEAEAAIAAAAIAAADIAAABIgBABQgDADABADIACAFIACACIADAAIAEgEIACgCIAAgBIAAgBIAAADIAAACIAAABIgBACIgBABIgEACg");
	this.shape_5.setTransform(4.8,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxAsIAAAAIAAAAgAgrAiIgBgCIAAgBIACgCIABAAIACACIAAAAIgCADgAAOAaIgBAAIgDgBIgCgCIgBgEIAAgEIABgBIAAAAIABAAIAAgBIACAAIACgBIAFACIACAFIgBAEIgBAAIgDADgAgugEIgBAAIAAgBIgBgBIAAgBIAAgDIABgBIADgDIACACIADAEIAAACIAAACIAAAAIgBgBIAAAAIgDADgAgegrIABAAIAAAAg");
	this.shape_6.setTransform(6.6,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AgFArQgHAAgDgEIgDgEIAAgBIACABIACgDIAAAAIACAAIAFADIAGAGQABABAAAAQAAABAAAAQgBAAAAAAQgBABgBAAIgCgBgAgMgYIgCgIQAAgFAHgCIgDgBIADgBIACgBIABAAIAGgBIAIACQAEABAEAKQABAJgNACIgGABQgIAAgEgGg");
	this.shape_7.setTransform(4.1,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9F4E3").s().p("AAOAaQgHgFgBgIQgBgIAGgFQAFgEAIABQAJAAAHAEQAGAGABAIQABAHgFAFQgFAFgJAAQgJAAgGgGgAAMAFIgEAHIgBABIAAABIAAABIACADIABADIACACQADAEAGAAQAEAAAEgEQAEgEAAgEIABgEIgCgFIgFgCIgCABQgCgDgCAAQgGAAgDADgAgjAEQgGAAgDgGQgDgIAAgGQAAgHAFgFQAGgEAEABQAFABACAGIADAOQAAAIgEADQgDADgEAAIgCAAgAgogPIgBAIQAAAFADACIAGACIACAAIAEgCIABAAIABgCIAAgBIAAgCIAAgEIAAgBIgBgCIAAgCIAAgDIgDgDIgCgCIgDADIgBABIAAAAQgEAAgCADg");
	this.shape_8.setTransform(5.2,12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F93E0F").s().p("AAdAkQgKgBgIgGQgIgHgBgJQgBgJAGgFQAHgGAKAAQALABAIAGQAHAFABAKQABAJgGAGQgFAGgJAAIgDAAgAAJAAQgFAEABAIQABAIAGAFQAHAGAJAAQAIAAAFgFQAFgFAAgHQgBgIgGgGQgHgEgJAAIgCAAQgHAAgFAEgAgjAJQgHAAgEgJIgCgEIgCgNQAAgHAGgHIAFgDIAIgBQAFACADAHIADAQQAAAKgEAFQgEAEgGAAIgBAAgAgrgdQgFAFAAAHQAAAGADAIQADAGAFAAQAGABAEgEQADgDAAgIIgCgOQgDgGgEgBIgDAAQgDAAgEADg");
	this.shape_9.setTransform(5.4,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF530F").s().p("AgWA6QgNgBgPgJQgbgPgDgOQgDgLAHgIIACAEQAEAJAHABQAGABAFgFQAEgGAAgJIgDgRQgDgGgFgCIgIABQAGgKANgHIACgCIgCACIgCABIADABQgIACAAAFIADAIQAFAIANgDQAOgDgBgIQgFgKgEgBIgIgCIgHABIAAgBIAIgDIABgBIAKgCIABAAIATgEIARAAIAWADIACAAIABAAIAEABQAMADAJAFIAEADIADACIAKALIADAIQADAJgNAOIAAAAIgEAEIgEAEIgDADIgBAAIAAAAIgDAEIgLALIgBABIgCACIgCACIgBAAIABgBIAAAAIgBABIAAABIgFAGIgBAAIgDAEIAAAAIgKAHQgLAIgMABgAgvAcIAKAKQAGAFAKABIAKgDIgBgDQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIgIABQgHgBgHgFIgJgIIgHgCIgHgCIgDgEIAAgDQAAAAAAgBQgBAAAAAAQgBABAAAAQgBAAAAABQgCADADACIAIADIgBACIAAABIABABIAAAAIACAFQAEAEAGAAQACAAABAAQABAAABAAQAAAAAAgBQAAAAAAgBIgGgGIgGgDgAgUACQgGAHABAJQABAJAIAHQAIAGAJAAQALABAGgGQAGgHgBgJQgBgJgHgHQgIgEgKgCQgKABgHAEg");
	this.shape_10.setTransform(8.2,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C12702").s().p("AAVAmIgGAAIgVgFQgWgGgDgFIAAAAIAAgCIgCgDQgCgCABgHIABgIIACgGIAOgNIAVgOIAPgFIAAABQgUAJgGAKQgGALANACIAdgBQgdAHAAAFQgBAFAFADIAaAHIgTAAQgJAAgBAEQgBAFALADIANAEIADABIgHABgAAjgJIAAABIgBABg");
	this.shape_11.setTransform(18,8.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#47180E").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_12.setTransform(19.9,4.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DB2D02").s().p("AAIAlIgMgDQgMgEACgEQABgEAJgBIASAAIgZgGQgGgEABgEQABgGAcgHIgcABQgOgCAGgKQAGgLAUgIIAAAAIAAgBIAMACQAEACADAGIADAUIAAAAQABAhgKAKIgFACgAASgHIABAAIAAgBg");
	this.shape_13.setTransform(19.6,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DB2D02").s().p("AABAUIgDgDIgCgEIAAgBIgBgOIACgQIACgCIAAABIABAAIAAADIAEARQADANgDAFIgBACg");
	this.shape_14.setTransform(3.5,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4.7,22.2,13.3);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AgvA3QgNgCgQgIQgbgOgDgRQgDgIAGgIQACAGAZAOIAdANIANACIAcgCIAQgNIAQgPIALAEIAUAFIARAAQgDATgTgBIgKgDIgOgNIgIAHIgDADIgBABIAAABIgMAOIgBAAQgJAJgKADIgSAEgAA1gnIAjgGQAOgEAGgGQgBAfgKAFQgNAMgjgGIgCADIgHADIgFADQAVgXgDgMg");
	this.shape.setTransform(10.8,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB2D02").s().p("AAAAWQgFgCgHgEQgMgJAAgIQgBgKAZgHIAHgCIAGgBIADABIABAAIABAAIAAAAIACACQAFABAAAIQAAAQgFAGQgDAHgIACIgEAAg");
	this.shape_1.setTransform(15.8,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#470E0E").s().p("AgFAAQAAAAAFgBIAFAAIABACIgEABg");
	this.shape_2.setTransform(1.8,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#470E0E").s().p("AgEgCQgGgLAJAJIAIAKIgDADQgDAAgFgLg");
	this.shape_3.setTransform(1.9,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#470E0E").s().p("AgBACQgJgDADgCQADgCAFAFIAHAFg");
	this.shape_4.setTransform(7.1,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#470E0E").s().p("AgOAAQABgEAQACIAMACIgOACIgNABQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAg");
	this.shape_5.setTransform(7.7,13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#913711").s().p("AADAIIgKgIIgIgCQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIAAAAIgJgDQgCgCABgDQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAIAAAEIADAEIAGABIAIADIAJAGQAGAGAHABIAJgBQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAIABADIgKACQgKAAgFgGg");
	this.shape_6.setTransform(4.2,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AgFArQgGgBgEgDIgDgEIAAgBIACABIACgDIAAAAQADAAAFADIAFAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgCAAgAgMgXIgCgJQAAgFAHgCIgDgBIADgBIADgBIAHAAIAGABIAFACIAEACIABAEIAAAHQgFAKgMAAQgJAAgFgHg");
	this.shape_7.setTransform(4.2,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/APIAAgCIgBgBIACgCIABAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIAAABIAAAAIgCADgABAgOIABAAIAAAAg");
	this.shape_8.setTransform(8.6,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DB2D02").s().p("AAdAgQgIAAgHgGQgHgFgBgIQAAgHAFgGQAFgDAJAAQAIAAAHAEQAHAGAAAIQABAHgFAFQgFAFgHAAIgCAAgAgjAEQgGAAgDgGIgCgOQAAgHAFgFQAFgEAEABQAFABACAGQADAFAAAJQAAAIgEADQgDAEgEAAIgCgBg");
	this.shape_9.setTransform(5.2,12.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F93E0F").s().p("AAdAkQgKAAgIgHQgIgHgBgJQgBgJAGgFQAHgGAKAAQALABAHAGQAIAGABAJQABAJgGAGQgGAGgIAAIgDAAgAAJAAQgFAFAAAHQABAIAHAFQAHAGAIAAQAJAAAFgFQAFgFgBgHQAAgIgHgGQgHgEgIAAQgJAAgFAEgAgvAAIgBgEIgCgNQAAgHAGgHIAFgDIAHgBQAFACAEAHQADAGAAAKQAAAKgEAFQgFAEgHAAQgHAAgEgJgAgrgdQgFAFAAAHIACAOQADAGAGAAQAGABADgEQAEgDAAgIQAAgJgDgFQgCgGgFgBIgCAAQgEAAgDADg");
	this.shape_10.setTransform(5.4,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF530F").s().p("AgWA7QgNgCgPgIQgbgQgDgOQgCgKAGgJIACAFQAEAJAHABQAGAAAFgFQAFgFAAgJQAAgKgEgHQgDgHgFgBIgHABQAFgKANgIIADgBIAIgDIABgBIAEgCIACAAIAYgEIAggBIATACIAEABIAAAAIABAAIAFACIAGACQALAFAFAHQAFAFAAAGQgBALgJAOIgDADIAAAAIAAAAIgKAMIgEAEIgIAIIgDAEIgCADIgBAAIgBACIgGAHIgBAAIgDADIgBAAIABAAIgKAIQgLAHgLACgAgvAeIALAHQAFAHAKAAIAKgCIgBgDQgBgBAAAAQgBABAAAAQAAAAgBAAQAAABAAABIgJABQgHgBgGgGIgKgIIgIgCIgGgBIgDgEIAAgEQAAAAgBAAQAAgBgBABQAAAAAAAAQgBABAAAAQgBAEACACIAJACIgCACIAAABIABACIAAAAIADAEQADADAGACQAGABgBgEIgFgFIgEgDgAgUAEQgFAGABAIQAAAKAIAGQAJAHAIAAQALABAGgHQAHgFgBgKQgBgJgIgHQgIgFgJgBQgLAAgHAGgAgsgvIgDABIgDABIADABQgIADAAAEIADAJQAFAHAKAAQAMAAAEgKIABgHIgCgDIgDgDIgFgCIgHgBgAg1AbIADABgAg2AbIgBgBIACABIgBAAg");
	this.shape_11.setTransform(8.2,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Layer 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C12702").s().p("AgeAfIACgMIACgHIADgGIgDAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgEALgMQAKgMAXgNIACAAIACgBIAAAAIgBAAIAAABQgUAOgGALQgGALANgBIAdgHQgdAOAAAFQgBAFAFACQAHACATgCIgTAFQgKACAAAGQgBAEALABIANAAIADAAIgGADIABAAIgcABQgbgDACgFg");
	this.shape_12.setTransform(17.4,7.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DB2D02").s().p("AgDAmQgMgCACgEQAAgFAKgCIARgFQgSABgGgBQgGgDABgFQABgEAcgOIgdAGQgNAAAGgJQAGgMATgNIABgBIAAAAIAAAAIACgBIACgBIACAAIAGABIAGAGIADASIAAABQACAigLAKIgEAFIgDAAg");
	this.shape_13.setTransform(19,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#47180E").s().p("AAAAAIAAAAIAAAAg");
	this.shape_14.setTransform(2.1,9.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DB2D02").s().p("AgDAUIgCgBIAAAAIAAAAQgDgCAAgUQAAgQAFAAIACABIABACIACACIACADIAAAAQAEAGABAHIgCANIgCADIgFACg");
	this.shape_15.setTransform(2.7,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.2,21.6,14.9);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AhEA6QgagOgEgSQgCgIAGgJQABAIAZAOQAZANARACIAbgDQALgEATgXIASgYIAEgLQADgOgDgHQAEABAPgHQARgIAKgOIAAACIAAAAIAAAAIAAgCIAAAAIAAACQABAjgJAMIgEAEIgFADIAAABIgXAEIgBAAIgCAAIgBABIgEAHIAAABIgEAGQgGAAgBAEQgBAFAWAGIAVAAQgBAOgEAGQgEAGgHAAIgDAAIgGgCIgMgIQgHgIgDgGIgCADIgHAJIgCACIgCACIgBABIgJALQgLAJgJADIgSAEIgCAAQgSAAgWgLgAAMA1IAAgBIgBABgABRAQIABAEIAAABgABjhEg");
	this.shape.setTransform(10,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB2D02").s().p("AAFAVIgFgCIAAAAIgLgIQgMgLAAgIQgBgKAYgCIAPAAIADABIACACQAEAEAAAHQgBAPgEAHQgDAFgIAAg");
	this.shape_1.setTransform(15.7,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#47180E").s().p("AAAAAIAAAAIAAABg");
	this.shape_2.setTransform(11.1,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#913711").s().p("AACAIIgJgIIgFgBIgCgBIgCgBIgBAAIgJgDQgCgCABgDQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABABIAAADIADAEIAGABIAHADIAJAGQAGAGAHABIAJgBQAAgBAAgBQABAAAAAAQABAAAAgBQABAAABABIABADIgKACQgKAAgHgGg");
	this.shape_3.setTransform(4.1,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#470E0E").s().p("AASAQIgCgCIgBgFIABgEIACgBIABAAIADgDIACAAIABAAIADABIAAAAIgBABIgBAEIACAEIABACIAEABIgCACQgDADgEAAQgEAAgCgDgAgdgGIgCgFQgBgDACgDIABgBIABABIABABIAAAAIADACIADgDIABAAIAAABIAAAAIABADIAAABIAAABIAAABIgBACIgEAEIgDAAg");
	this.shape_4.setTransform(4.7,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#792B17").s().p("AAQATIgBgCIgBgCIgCgEIAAgBIAAgBIABgBIADgHQAEgBAFgBQACABADABIgCAAIgBABIAAAAIgDgBIgBAAIgCAAIgDADIgBAAIgCABIgBAEIABAFIACACQADADADAAQAEAAADgDIACgCIABAAIAAAAIADgDIABAAQAAAFgEADQgDAEgFAAQgFAAgEgEgAgcgBIgFgCQgDgCgBgFIABgIQADgEAEAAIAAAAIAAADIAAABIgBABQgDADABADIACAFIACACIADAAIAEgEIACgCIAAgBIAAgBIAAADIAAACIAAABIgBACIgGADg");
	this.shape_5.setTransform(4.8,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxAsIAAAAIAAAAgAgrAiIgBgCIAAgBIACgCIABAAIACACIAAAAIgCADgAAOAaIgBAAIgDgBIgCgCIgBgEIAAgEIABgBIAAAAIABAAIAAgBIACAAIACgBIAFACIACAFIgBAEIgBAAIgDADgAgugEIgBAAIAAgBIgBgBIAAgBIAAgDIABgBIADgDIACACIADAEIAAACIAAACIAAAAIgBgBIAAAAIgDADgAgegrIABAAIAAAAg");
	this.shape_6.setTransform(6.6,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6A09").s().p("AAsAuIAAAAIABAAgAgfApQgHAAgDgEIgDgFIAAAAIACAAIACgCIAAAAIACAAIAFADIAGAGQABABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAIgCAAgAgmgaIgCgIQAAgFAHgCIgDgBIACgBIABAAIACgCIABABIADgBIAJAAQAIACADALIgBACIgBACIABAAQgFAJgKAAQgKABgFgIg");
	this.shape_7.setTransform(6.7,11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9F4E3").s().p("AAOAaIgGgHIgCgGQgBgIAGgFQAFgEAIABQAJAAAHAEQAGAGABAIQABAHgFAFQgFAFgJAAQgJAAgGgGgAAMAFIgEAHIgBABIAAABIAAABIACADIABADIACACQADAEAGAAQAEAAAEgEQAEgEAAgEIABgEIgCgFIgFgCIgCABQgCgDgCAAQgGAAgDADgAgjAEQgGAAgDgGQgDgIAAgGQAAgHAFgFQAGgEAEABQAFABACAGIADAOQAAAIgEADQgDADgEAAIgCAAgAgogPIgBAIQAAAFADACIAGACIACAAIAFgCIABgCIAAgBIAAgCIAAgEIAAgBIgBgCIAAgCIAAgDIgDgDIgCgCIgDADIgBABIAAAAQgEAAgCADg");
	this.shape_8.setTransform(5.2,12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F93E0F").s().p("AAdAkQgKgBgIgGQgIgHgBgJQgBgJAGgFQAHgGAKAAQALABAIAGQAHAFABAKQABAJgGAGQgFAGgJAAIgDAAgAAJAAQgFAEABAIIABAGIAGAHQAHAGAJAAQAIAAAFgFQAFgFAAgHQgBgIgGgGQgHgEgJAAIgCAAQgHAAgFAEgAgjAJQgHAAgEgJIgCgEIgCgNQAAgHAGgHIAFgDIAIgBQAFACADAHIADAQQAAAKgEAFQgEAEgGAAIgBAAgAgrgdQgFAFAAAHQAAAGADAIQADAGAFAAQAGABAEgEQADgDAAgIIgCgOQgDgGgEgBIgDAAQgDAAgEADg");
	this.shape_9.setTransform(5.4,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF530F").s().p("AgUA7QgNgBgPgJQgbgPgDgOQgDgLAHgIIACAEQAEAJAHABQAGABAFgFQAEgGAAgJIgDgRQgDgGgFgCIgIABQAGgJALgHIADABQgIACAAAFIADAIQAFAIAJgBQAKAAAFgJIgBAAIABgCIACgCQgEgLgIgCIgJAAIgDABIAAgBIAIgDIABAAQAbgJAhAAIAPAAQAZACAKANQAIAJgJAVIgEAJIAAAAIgKAOIgDAEIgFAHIgHAJIgCACIAAAAIgDACIAAABIgFAGIgBAAIgDAEIAAAAIgKAHQgLAIgMABgAgtAdIAKAKQAGAFAKABIAKgDIgBgDQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIgIABQgHgBgHgFIgJgIIgHgCIgHgCIgDgEIAAgDQAAAAgBgBQAAAAAAAAQgBABAAAAQgBAAAAABQgCADADACIAIADIgBACIAAABIABABIAAAAIACAFQAEAEAGAAQACAAABAAQABAAAAAAQABAAAAgBQAAAAAAgBIgGgGIgGgDgAgSADQgGAHABAJQABAJAIAHQAIAGAJAAQALABAGgGQAGgHgBgJQgBgJgHgHQgIgEgKgCQgKABgHAEgAgugtIAAAAIAAAAIgCABgAgsgvIgCACg");
	this.shape_10.setTransform(8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#47180E").s().p("AAAAAIAAAAIAAAAg");
	this.shape_11.setTransform(18.1,2.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DB2D02").s().p("AgMAiQABgFAIgEIAPgGIgVACQgFgBABgGQABgEAXgRIgXAIQgMADAFgLQAFgMAQgPIABAAIAAgBIAAAAIADgCIACgBIAFABIAGAGIACARIAAABQABAhgJANIgEAEIgCABIgKABQgJgBAAgEg");
	this.shape_12.setTransform(17.8,5.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C12702").s().p("AgZAjIACgNIACgHIACgGIgDAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgFAJgNQAKgNATgPIABAAIABgBIAAAAIAAABQgRAPgEAMQgGALALgCIAZgJQgYARgCAEQAAAGAEABIAWgCIgPAGQgJAEAAAFQgBAEAJABIAMgBIACgBIgFADIAAAAIgXAEQgXAAACgFg");
	this.shape_13.setTransform(16.3,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DB2D02").s().p("AgMAAQAAgVAMACIAFADIgCgCIAFADQAFADAAAGIgCAOIgDAEIgIAFIgHADIgBAAIAAAAQgFAAABgUg");
	this.shape_14.setTransform(2.3,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,19.9,16.1);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("Ah/AvQgCgLAAgZIASgBIAbgIIAVgMQAJgIgCgDIgEgEIgCgBIgDgBIgFgCIADgIQgIgFAAgLQgBgKACgJIAIADIAPAEIACAAIgFAJQgFAHgCAJQgCAIAHAFIAXAGQAPADAagCQAagDAWgHQAKAIAXAEIAcADQAFAAgDgMQgCgMgOgDIgSgCIAHgDQANgGASgTIgBALQAIAOAAAMIgJARQgBAbgJAIQgGAHgIgCIgLgGIgJgHIgSAGIgRAEIgpADQggAAgXgJQgIATgPAQQgUAXgNACIgCAAQgMAAgDgag");
	this.shape.setTransform(14.9,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB2D02").s().p("AgSAKQgOgTAAgIQAAgIAJgFQADgDAIAAIAWABQARACAFAPIABAEIgDAVQgDAPgGAGIgHACIgBABQgOAAgRgYg");
	this.shape_1.setTransform(23.7,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DB2D02").s().p("AgbAcQgDgcADgYIACgJIAAgDQAFgOANgCIADAAIgDABQAcADADAHQAEAIgLAIQgKAIgUAGIATgCQALAAAAAFQAAAGgJAHIgNALIAQgJQAGgEAEAAIAIABQADADgGAMQgEAJgPAPIgHAGIgKAEIgCAAQgMAAgDgZg");
	this.shape_2.setTransform(4.8,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C12702").s().p("AgKAsIgHAHgAAJAUQAFgLgDgDIgHgCQgEABgGADIgRAJIAOgKQAJgIAAgGQAAgEgLAAIgUACQAVgHAKgHQALgIgEgIQgEgIgbgDIAZABIAKACQAGABAJAFQAJAGgEAWQgGAUgUAXIgPAOQAOgOAFgKg");
	this.shape_3.setTransform(6.6,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA4ArQAEgNgBgjQgBgjgpgJIgWgDIANgJIAWADQAvAEgBAmQgCAkgHAQIgJAVIgBAAIgBAAIgDABIgDACIgCABIgBABgAhLgRIAAAAIAAAAg");
	this.shape_4.setTransform(17.9,8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DB2D02").s().p("AgsAVIgDgCIgCgBIgFgFIgDgHQgBgIAWgLQAWgLAYgDIAtADIADABIAAAAQgOAFgNAGIgEADIgOAJIgGADIgEAEIgdAUIgBABQgHAAgKgHg");
	this.shape_5.setTransform(16,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF530F").s().p("AgXBLIgKAAIgFAAIgDgBIgGAAIgCAAIgWgEQgRgEgGgIIgBgCQgFgJAAgMQAAgMAIgNIAGgIIACgCIAKgQIABAAIAAgBIACgDIAAAAIAAgBIABgBIAGgJIADACQALAHAHgBIAegUIAEgEIAGgEIAVADQAqAIABAkQABAjgEANIgKASIgBAAIgEACIgNAEIgEABIgHACIgPACIgOABIgFAAIgHABgABFAlQAGgQACgkQACgmgvgEIgWgDIAEgDQANgGAOgFQAmAIAKAOQAKAPgGAdQAJANgBANQgBAMgUAPIgQAKIgEACIgBABg");
	this.shape_6.setTransform(17.7,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DB2D02").s().p("AgMAZIgCgBIgCgBIgGgEQgFgGABgNIAAgFQABgVALABIABAAIALACIACAAQAVAEAGAMIABAGQAAAHgJAIQgNAKgKACg");
	this.shape_7.setTransform(10,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,0.1,26,20.5);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AiJAeIgBgQIAvgEQArgJgCgSIAEAEQAPAJAlAAIArgGIAPgFQALAKApAAQATAAAAgIQABgJgJgHQgIgGgSACIATgMIAMgNIgBAMQAIAOAAANIgDAJIgDARQgDAQgHAGIgIADIgEAAQgKAAgMgJIAAAAIgCAAIgBABIgBAAIgFACIgGACIgCABIgsAFIgFAAIAAAAIgKgBIgHAAIgBAAIgBAAIgEAAIgLgBIgEgBIgGgBQgSgEgOgJIgDgDQgIAOgPANIgaAQIgMACQgQgBgEgcgAg7g1IANACIAHgCIgHAIIgKAJQgDgFAAgMg");
	this.shape.setTransform(14,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB2D02").s().p("AALAhIAAAAIgMgEQgJgFgJgLQgQgRAAgHQABgJAJgGQADgDAJgBIAZgCQASAAAFAOIABAFIgDAVQgDAQgHAGIgIADg");
	this.shape_1.setTransform(24,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DB2D02").s().p("AgfAYQgDgbADgZIADgLQAFgOAOACIACAAQAeAIAEAIQAFAJgMAGQgNAGgWACIAVACQANACAAAFQAAAEgLAHIgOAIIASgGIAMgCQAFAAADADQAEAEgGAKQgFAJgTAMIgGAFIgLABQgQAAgEgcg");
	this.shape_2.setTransform(3.4,12.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C12702").s().p("AgNAvQASgMAFgJQAGgLgEgDQgDgDgFAAIgLACIgTAGIAPgIQALgHAAgFQAAgFgNgCIgWgBQAXgDAMgFQAMgGgFgJQgEgJgegHIAcAFIALADQAHADAKAHQAKAHgFAVQgGAUgWATIgTAMIgGAEg");
	this.shape_3.setTransform(5.4,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVArQAEgNgBgjQgBgjgogJIgXgDIAOgJIAWADQAuAEgBAmQgCAkgHAQIgJAUIAAABIgBAAIgBAAIgDABIgDACIgCABIgBABg");
	this.shape_4.setTransform(21.4,8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#47180E").s().p("AAAAAIABAAIgBABg");
	this.shape_5.setTransform(23.7,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DB2D02").s().p("AgqAYIgEgDIAAAAIgEgDIgBAAIABgBQgDgBgDgIQgGgMAYgJQAYgJAYgDIAsADIABAAIADAAIAAABQgOAEgMAHIgFADIgOAIIgFAEIgQAMQgPAJgIAAg");
	this.shape_6.setTransform(16,2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF530F").s().p("AgKBJIAAAAIgKAAIgHAAIgBAAIgBAAIgFgBIgLgBIgEAAIgGgBQgSgEgOgKIgEgDQgLgJgBgHQgCgJACgHQADgIAPgNIABgCIACgBIAGgHIACgCIABgBIACgCIADgEIAAAAIACgCIAGgIIAAAAIAEADIALACQAIAAAPgJIARgMIAFgEIAWADQApAIABAkQABAigEANIgJATIgBAAIgFABIgGADIgCAAIgrAFgAA/A6IAJgUQAHgPACglQABgmgvgDIgWgDIAFgDQAMgHAOgEQAnAIAJAOQAKAPgFAdQAIANAAAMQgBANgUAOIgQAKIgEACg");
	this.shape_7.setTransform(17.4,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#47180E").s().p("AAAAAIAAAAIABAAg");
	this.shape_8.setTransform(10.3,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DB2D02").s().p("AgLAZIgEgCIgGgGQgDgFAAgNIAAgGQABgUAJACIAKACIADABIgBAAIACAAIAAABQAUAHAEAMIABAFQAAAJgHAGQgMAIgJAAg");
	this.shape_9.setTransform(10.5,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,27.9,17.5);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("Ah/AvQgCgLAAgZIASgBIAbgIIAVgMQAJgIgCgDIgEgEIgCgBIAAAAIgDgBIgFgCIADgIQgIgFAAgLQgBgKACgJIAIADIAPAEIACAAIgFAJQgFAHgCAJQgCAIAHAFIAXAGQAPADAagCQAagDAWgHQAKAIAXAEIAcADQAFAAgDgMQgCgMgOgDIgSgCIAHgDQANgGASgTIgBALQAIAOAAAMIgJARQgBAbgJAIQgGAHgIgCIgLgGIgJgHIgSAGIgRAEIgpADQggAAgXgJQgIATgPAQQgUAXgNACIgCAAQgMAAgDgag");
	this.shape.setTransform(14.9,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB2D02").s().p("AgSAKQgOgTAAgIQAAgIAJgFQADgDAIAAIAWABQARACAFAPIABAEIgDAVQgDAPgGAGIgHACIgBABQgOAAgRgYg");
	this.shape_1.setTransform(23.7,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#47180E").s().p("AAAAAIABAAIgBABg");
	this.shape_2.setTransform(4.2,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DB2D02").s().p("AgbAbQgDgbADgZIACgJIAAgCQAFgPANgBIAAAAQAcADADAIQAEAIgLAIQgKAHgUAHIATgCQALAAAAAEQAAAGgJAIIgNAKIAQgJQAGgDAEgBIAIACQADADgGALQgEAKgPAOIgHAHIgKAEIgCAAQgMAAgDgag");
	this.shape_3.setTransform(4.8,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C12702").s().p("AgKAsQAOgOAFgKQAFgLgDgDIgHgCQgEABgGADIgRAJIAOgKQAJgIAAgGQAAgEgLAAIgUACQAVgHAKgHQALgIgEgIQgEgIgbgDIAZABIAKACQAGABAJAFQAJAGgEAWQgGAUgUAXIgPAOIgHAHg");
	this.shape_4.setTransform(6.6,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA4ArQAEgNgBgjQgBgjgpgJIgWgDIANgJIAWADQAvAEgBAmQgCAkgHAQIgJAUIAAABIgBAAIgBAAIgDABIgDACIgCABIgBABgAhLgRIAAAAIAAAAg");
	this.shape_5.setTransform(17.9,8.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#47180E").s().p("AAAAAIABAAIgBABg");
	this.shape_6.setTransform(23.7,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DB2D02").s().p("AgsAVIgDgCIgHgGIgDgHQgBgIAWgLQAWgLAYgDIAtADIADABIAAAAQgOAFgNAGIgEADIgOAJIgGADIgEAEIgdAUIgBABQgHAAgKgHg");
	this.shape_7.setTransform(16,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF530F").s().p("AgXBLIgKAAIgFAAIgDgBIgGAAIgCAAIgWgEQgRgEgGgIIgBgCQgFgJAAgMQAAgMAIgNIAGgIIACgCIAKgQIABAAIAAgBIACgDIAAAAIAAgBIABgBIAGgJIADACQALAHAHgBIAegUIAEgEIAGgEIAVADQAqAIABAkQABAjgEANIgKASIgBAAIgEACIgNAEIgEABIgHACIgPACIgOABIgFAAIgHABgAA8A5IAJgUQAGgQACgkQACgmgvgEIgWgDIAEgDQANgGAOgFQAmAIAKAOQAKAPgGAdQAJANgBANQgBAMgUAPIgQAKIgEACg");
	this.shape_8.setTransform(17.7,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#47180E").s().p("AAAABIAAAAIAAgBIABABg");
	this.shape_9.setTransform(8.5,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DB2D02").s().p("AgMAZIgCgBIABAAIgBgBIAAABIgCgBIgGgEQgFgGABgNIAAgFQABgVALABIABAAIALACIACAAQAVAEAGAMIABAGQAAAHgJAIQgNAKgKACg");
	this.shape_10.setTransform(10,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,0.1,26,20.5);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("Ah/AvIgCgXIAVgCQAOgCAagTIACgBQATgOgLgKIgCgBIgCgBIAAAAIgDgBIgFgCIgBAAIgDgHQgCgHACgNIAAgIIAGABIATAAIgBACIgDAGIgFAQQgEAJAIAEQAHAFAOADIAtgCIAsgKQAIAHAVAHIAXAAIAAgBIAAgEQgEgPgOgDIgLgCIANgGQANgGASgTIgBALQAIAOAAAMQgBANgUAOIgBABIgCALQgCAPgFAFQgIAEgIgGIgJgKIgBgCIgOAFIhCAJIgEAAIglgEIgGgDIgCgBQgGAQgPAQQgUAXgNACIgCAAQgMAAgDgag");
	this.shape.setTransform(14.9,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#47180E").s().p("AAAABIAAgBIgDgCIAGADIAAACg");
	this.shape_1.setTransform(23.3,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DB2D02").s().p("AACAeIAEACIAAgCIgGgDIgOgUQgLgUAAgHQAAgJAHgEIAbABQAEABAEADQAHAFACAKIgBAZIgDAMIgFAIQgDACgDAAQgEAAgFgEg");
	this.shape_2.setTransform(23,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C12702").s().p("AgKAsQAOgOAFgKQAFgLgDgDIgHgCQgEABgGADIgRAJIAOgKQAJgIAAgGQAAgEgLAAIgUACQAVgHAKgHQALgIgEgIQgEgIgbgDIAZABIAKACQAGABAJAFQAJAGgEAWQgGAUgUAXIgPAOIgHAHg");
	this.shape_3.setTransform(6.6,15.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#47180E").s().p("AAAAAIABAAIgBABg");
	this.shape_4.setTransform(4.2,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DB2D02").s().p("AgbAbQgDgbADgZIACgJIAAgCQAFgPANgBIAAAAQAcADADAIQAEAIgLAIQgKAHgUAHIATgCQALAAAAAEQAAAGgJAIIgNAKIAQgJQAGgDAEgBIAIACQADADgGALQgEAKgPAOIgHAHIgKAEIgCAAQgMAAgDgag");
	this.shape_5.setTransform(4.8,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DB2D02").s().p("AgsAVIgBAAIgBgBIAAAAIgBgBIgCgBIgFgFIgDgHQgBgIAWgLQAWgLAYgDIAtADIADABIAAAAQgOAFgNAGIgEADIgOAJIgGADIgEAEIgdAUIgBABQgHAAgKgHg");
	this.shape_6.setTransform(16,2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVArQAEgNgBgjQgBgjgogJIgXgDIAOgJIAWADQAuAEgBAmQgCAkgHAQIgJAUIAAABIgBAAIgBAAIgDABIgDACIgCABIgBABg");
	this.shape_7.setTransform(21.4,8.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#47180E").s().p("AA+AsIAAAAIgBABgAg9grIAAAAIABAAg");
	this.shape_8.setTransform(17.5,9.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF530F").s().p("AhVBFQgMgHAAgKQgBgLAGgVIAGgTIABgBIAAAAIAGgNIADgEIABgDIABgBIAAAAIAAAAIAIgLIAAAAIACABIAAABQAMAGAGAAIAegVIAFgDIAFgEIAWADQApAIABAkQABAigEANIgJATIgBAAIgFABIgMAFIgpAHIgFABIgJABIgJAAIgCAAIgEAAIgEAAQgeAAgJgHgAA5A3IAJgUQAHgPACglQABgmgvgDIgWgDIAFgDQAMgHAOgEQAnAIAJAOQAKAPgFAdQAIANAAAMQgBANgUAOIgQAKIgEACg");
	this.shape_9.setTransform(18,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DB2D02").s().p("AgWAVQgFgFABgSQABgUAKgCIAOAAIABAAQAVAAAFAKQAFALgMAMQgNAMgKAEIgMAAg");
	this.shape_10.setTransform(10,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,0.1,26,20.5);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AhxBDIgDgfIAAgFIABAAQAMAAAYgSQAZgRgCgJQgCgIgFgDIgJgBIABgIIgHABIgFAAQgEgBgDgDQgEgEAAgNIAAgHIADgNIAOACIAQgCIAEgDIgGAOIgFAPIgBAHQAAAEALAGIAYAFIAwgHQAUgCAIgFQAKAKANAHQANAHAAgHQAAgHgFgHIgKgLIgDgBQAYgHAagaIgBALQAIAOAAANQgBAMgUAPIgTALIAAAFQgCAPgEAEIgDABQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgBgBIAAAAIgBgBIgBgBIgCgDIgFgJIgBABIgEABIgCABIgBAAIgcAIIgCABIgFABIgBAAIAAABIgBgBIgFACIgKACIgFABIgHABIgTABQgNABgJgFIgQAgIgLAQIgGAHQgFAIgFAAIgBAAQgGAAgEgPg");
	this.shape.setTransform(16.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB2D02").s().p("AAIAjIgEgCIgBAAIAAgBIgBgBIgBAAIgBgDIgJgVQgIgVAAgHQAAgIAFgEQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIADAAIAMAEIAFAFIABAAIABACQADAFACAIIAAAFIgBAUQgCAPgEAEIgDABg");
	this.shape_1.setTransform(22.2,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DB2D02").s().p("AgTAoIgDgfIAAgXIADgVQAGgRAJgCIAIAAIgDABQAQABADAIQACAGgIAKQgIAIgPAJIAOgEQAJgBAAAFIgHAOIgJAMIALgLQAEgEAEAAQADgBADABQACADgEAMIgPAZIgFAHQgEAIgFAAIgBAAQgGAAgEgPg");
	this.shape_2.setTransform(6.8,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C12702").s().p("AgHAsIANgZQAFgMgCgDQgEgCgCAAQgDABgEAFIgMALIAKgMIAGgOQAAgFgIABIgPAEQAQgJAHgIQAHgKgCgHQgCgHgPgCIACAAIANAAIAPAFQAGAEAAALIgBANQgEAVgPAYIgKAQIgHAHg");
	this.shape_3.setTransform(8.2,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVArQAEgNgBgjQgBgjgogJIgXgDIAOgJIAWADQAuAEgBAmQgCAkgHAQIgJAUIAAABIgBAAIgBAAIgDABIgDACIgCABIgBABg");
	this.shape_4.setTransform(21.4,8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#47180E").s().p("AAAAAIABAAIgBABg");
	this.shape_5.setTransform(23.7,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DB2D02").s().p("AhCAzIACAAIAAABgAgigEIAAAAIgBAAIAAgBIgCAAIAAgBIgDgCIgCgCIgCgDIgCgDQABgMATgKQATgJAYgEIAvABIADAAIAAABQgOAEgMAHIgFADIgOAJIgFAEIgNAMQgKAKgJABIgBAAQgIAAgKgFg");
	this.shape_6.setTransform(15.1,5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF530F").s().p("AhWBKQgEgDgCgHQgDgLACgVIAEgYIABgEIABgDIABgCIAFgMIABgDIACgEIADgEIAGgLIABABIABAAIAAAAIABABQALAGAIgBQAJgBALgLIAMgMIAGgEIAVADQAqAIABAkQABAjgEANIgKASIgBAAIgEACIgEABIgBABIgEABIgCABIgCAAIgbAIIgBABIgGABIAAAAIAAABIgBgBIgGACIgLACIgEABIgIABIgSABIgFAAQgOAAgJgGgAA2A0IAJgUQAGgQACgkQACgmgvgEIgWgDIAEgDQANgGAOgFQAmAIAKAOQAKAPgGAdQAJANgBANQgBAMgUAPIgQAKIgEACg");
	this.shape_7.setTransform(18.3,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DB2D02").s().p("AgTAaQgDgBgEgDQgEgEABgOIAAgFQABgUAMgCIALgCIAEABIABAAIAAAAQAYgCAFALIABAGQAAAHgKAJQgOAOgMAEIgIABg");
	this.shape_8.setTransform(9.7,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.5,0.3,23.4,22.1);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AhTBUQgEAAgCgDQgDgEgBgKQgDgMABgQIAAgCIABAAIAXgWQARgTgCgHQgCgGgRgFIABgOIALADIAXADIAsgFIAegIIACAEIAEAGIAEAFIAEADIACgDIgBgKIgEgLIARgIQAKgEAJgGIAOgMQAGgGgBADIgBAIQAJAOgBAMQgBANgUAOIgBABIgTAMIgCABIgBAAIgDABIAAAAIgDABIgBABIgCABIgBAAIgDABIgDARIgCACQgDgCgDgOIgaAKIgFABIgCABIgCABIgEABIgFADIgEABIgEABIgBAAIgfAEIgKgBQgDASgIASIgLAVIgDACIgBABIAAAAIgBABgAhmgjQgEgFAAgNIAAgGIACgMIAJADQAOAAAKgIIAIgGQgDAFgDANQgEANgCAOIAAAAIgEACIgBABIgJABIgFAAg");
	this.shape.setTransform(17.1,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB2D02").s().p("AgEAHQgEgVAAgIIACgLIACgBIACAAIADACIACACIABACQAEAFABANIAAABIAAAEIAAAUIgDATIgCACQgEgDgEgag");
	this.shape_1.setTransform(21.3,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DB2D02").s().p("AgDA1QgDAAgCgDQgDgEgCgJQgCgMAAgRIABgaQgBgRAEgJQAEgIAEAAIADAAQAMADACAJQACAIgFAHIgPAPIAJgDQAFAAABAFIgFANIgGALIAIgJIAFgEQAAgBABAAQAAAAAAABQABAAAAAAQABABAAABIAAAOIgOAeIgCACIAAABIgBABIgBAAg");
	this.shape_2.setTransform(9.1,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C12702").s().p("AAFAUIAAgNQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIgEAFIgIAJIAGgLIAEgNQAAgFgFAAIgKADIAPgPQAFgIgCgHQgCgJgLgDIAFAAIAGABIAEACIAIAHQACADABALIgBANQgDAVgJAWIgLAVg");
	this.shape_3.setTransform(10.2,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF530F").s().p("AhWBCIgDgKQgDgXADgWIABgEIAAgCIABgDIABgDIABgDIACgGIAAgBIABgFIADgHIACgEIAFgLIAAAAIAAgBIgCgCIACABIAAABIACABIABAAIAAAAQAIAFAGACIAHACQAGAAAUgUIAGgFIAFgFIAUADQApAIABAkQABAjgEANQgDAMgGAGIAAAAIgBAAIgEACIgBAAIgHADIgbAKIgFACIgCABIgDABIgDABIgHACIgDABIgFACIAAAAIggAEIgBAAQgSAAgGgRgAAyAxIAJgUQAHgQACgkQABgmgvgEIgVgDIAFgCQALgHAOgFQAnAIAJAOQAKAPgFAdQAIAOAAAMQgBAMgUAPIgQAKIgEACg");
	this.shape_4.setTransform(18.7,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALA9QAGgGADgMQAEgNgBgjQgBgjgogJIgVgDIANgJIAVADQAuAEgBAmQgCAkgHAQIgJAUIAAABIgBAAIgBAAIgDABIgBABIgCABIgCABIgBABg");
	this.shape_5.setTransform(21.5,8.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DB2D02").s().p("AhCA0IACAAIAAABgAgTACQgGgCgIgEIAAAAIgBAAIgCgBIAAgBIgCgBQgMgJAPgNQARgNAegHIAdgDIAVADIAAAAIACAAIAAAAIADAAIAAABQgOAFgLAGIgFADIgNAJIgFAEIgGAGQgTASgGABg");
	this.shape_6.setTransform(15.1,5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#47180E").s().p("AAMBCIABAAIgBABgAgMhCIACAAIgCABg");
	this.shape_7.setTransform(22.5,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DB2D02").s().p("AgaAYQgFgEAAgOIAAgGQABgUAMgCIAMgDIAEAAIABAAIABAAIAAAAIALgBQAPAAAFAIIABAGQAAAHgKAKQgPAOgMAGIgJABIgFABgAgRAaIACAAIgCgBg");
	this.shape_8.setTransform(9.6,8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#47180E").s().p("AAAAAIABAAIgBAAg");
	this.shape_9.setTransform(7.9,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,0.1,21.5,22.9);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("AhxBDIgDgfIAAgFIABAAQAMAAAYgSQAZgRgCgJQgCgIgFgDIgJgBIABgIIgHABIgFAAQgEgBgDgDQgEgEAAgNIAAgHIADgNIAOACIAQgCIAEgDIgGAOIgFAPIgBAHQAAAEALAGIAYAFIAwgHQAUgCAIgFQAKAKANAHQANAHAAgHQAAgHgFgHIgKgLIgDgBQAYgHAagaIgBALQAIAOAAANQgBAMgUAPIgTALIAAAFQgCAPgEAEIgDABQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgBgBIAAAAIgBgBIgBgBIgCgDIgFgJIgBABIgEABIgCABIgBAAIgcAIIgCABIgFABIgBAAIAAABIgBgBIgFACIgKACIgFABIgHABIgTABQgNABgJgFIgQAgIgLAQIgGAHQgFAIgFAAIgBAAQgGAAgEgPg");
	this.shape.setTransform(16.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB2D02").s().p("AAIAjIgEgCIgBAAIAAgBIgBgBIgBAAIgBgDIgJgVQgIgVAAgHQAAgIAFgEQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIADAAIAMAEIAFAFIABAAIABACQADAFACAIIAAAFIgBAUQgCAPgEAEIgDABg");
	this.shape_1.setTransform(22.2,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DB2D02").s().p("AgTAoIgDgfIAAgXIADgVQAGgRAJgCIAEAAIgDACQAUgBADAJQACAGgIAKQgIAIgPAJIAOgEQAJgBAAAFIgHAOIgJAMIALgLQAEgEAEAAQADgBADABQACADgEAMIgPAZIgFAHQgEAIgFAAIgBAAQgGAAgEgPg");
	this.shape_2.setTransform(6.8,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C12702").s().p("AgHAsIANgZQAFgMgCgDQgEgCgCAAQgDABgEAFIgMALIAKgMIAGgOQAAgFgIABIgPAEQAQgJAHgIQAHgKgCgHQgDgIgTABIAHgCIANAAIAPAFQAGAEAAALIgBANQgEAVgPAYIgKAQIgHAHg");
	this.shape_3.setTransform(8.2,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVArQAEgNgBgjQgBgjgogJIgXgDIAOgJIAWADQAuAEgBAmQgCAkgHAQIgJAUIAAABIgBAAIgBAAIgDABIgDACIgCABIgBABg");
	this.shape_4.setTransform(21.4,8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF530F").s().p("AhWBKQgEgDgCgHQgDgLACgVIAEgYIABgEIABgDIABgCIAFgMIABgDIACgEIADgEIAGgLIABABIABAAIAAAAIABABQALAGAIgBQAJgBALgLIAMgMIAGgEIAVADQAqAIABAkQABAjgEANIgKASIgBAAIgEACIgEABIgBABIgEABIgCABIgCAAIgbAIIgBABIgGABIAAAAIAAABIgBgBIgGACIgLACIgEABIgIABIgSABIgFAAQgOAAgJgGgAA2A0IAJgUQAGgQACgkQACgmgvgEIgWgDIAEgDQANgGAOgFQAmAIAKAOQAKAPgGAdQAJANgBANQgBAMgUAPIgQAKIgEACg");
	this.shape_5.setTransform(18.3,8.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#47180E").s().p("AAAAAIABAAIgBABg");
	this.shape_6.setTransform(23.7,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DB2D02").s().p("AhCAzIACAAIAAABgAgigEIAAAAIgBAAIAAgBIgCAAIAAgBIgDgCIgCgCIgCgDIgCgDQABgMATgKQATgJAYgEIAvABIADAAIAAABQgOAEgMAHIgFADIgOAJIgFAEIgNAMQgKAKgJABIgBAAQgIAAgKgFg");
	this.shape_7.setTransform(15.1,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DB2D02").s().p("AgTAaQgDgBgEgDQgEgEABgOIAAgFQABgUAMgCIALgCIAEABIABAAIAAAAQAYgCAFALIABAGQAAAHgKAJQgOAOgMAEIgIABg");
	this.shape_8.setTransform(9.7,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.5,0.3,23.4,22.1);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,188,223,0.702)").s().p("Ah/AvIgCgXIAVgCQAOgCAagTIACgBQATgOgLgKIgCgBIgCgBIAAAAIgDgBIgFgCIgBAAIgDgHQgCgHACgNIAAgIIAGABIATAAIgBACIgDAGIgFAQQgEAJAIAEQAHAFAOADIAtgCIAsgKQAIAHAVAHIAXAAIAAgBIAAgEQgEgPgOgDIgLgCIANgGQANgGASgTIgBALQAIAOAAAMQgBANgUAOIgBABIgCALQgCAPgFAFQgIAEgIgGIgJgKIgBgCIgOAFIhCAJIgEAAIglgEIgGgDIgCgBQgGAQgPAQQgUAXgNACIgCAAQgMAAgDgag");
	this.shape.setTransform(14.9,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB2D02").s().p("AABAdIgBgCIgOgUQgLgUAAgHQAAgJAHgEIAbABQANAEAEAPIgBAZIgDAMIgFAIQgDACgDAAQgEAAgGgFg");
	this.shape_1.setTransform(23,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C12702").s().p("AgKAsQAOgOAFgKQAFgLgDgDIgHgCQgEABgGADIgRAJIAOgKQAJgIAAgGQAAgEgLAAIgUACQAVgHAKgHQALgIgEgIQgEgIgbgDIAZABIAKACQAGABAJAFQAJAGgEAWQgGAUgUAXIgPAOIgHAHg");
	this.shape_2.setTransform(6.6,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#47180E").s().p("AAAAAIABAAIgBABg");
	this.shape_3.setTransform(4.2,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DB2D02").s().p("AgbAbQgDgbADgZIACgJIAAgCQAFgPANgBIAAAAQAcADADAIQAEAIgLAIQgKAHgUAHIATgCQALAAAAAEQAAAGgJAIIgNAKIAQgJQAGgDAEgBIAIACQADADgGALQgEAKgPAOIgHAHIgKAEIgCAAQgMAAgDgag");
	this.shape_4.setTransform(4.8,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVArQAEgNgBgjQgBgjgogJIgXgDIAOgJIAWADQAuAEgBAmQgCAkgHAQIgJAUIAAABIgBAAIgBAAIgDABIgDACIgCABIgBABg");
	this.shape_5.setTransform(21.4,8.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF530F").s().p("AhVBFQgMgHAAgKQgBgJAFgRIAAgBIAAAAIABgFIAHgUIAAAAIAGgNIADgEIABgDIABgBIAAAAIAAAAIACgDIAGgIIACACQAMAGAGAAIAegVIAFgDIAFgEIAWADQApAIABAkQABAigEANIgJATIgBAAIgFABIgMAFIgpAHIgFABIgJABIgJAAIgCAAIgIAAQgeAAgJgHgAA5A3IAJgUQAHgPACglQABgmgvgDIgWgDIAFgDQAMgHAOgEQAnAIAJAOQAKAPgFAdQAIANAAAMQgBANgUAOIgQAKIgEACg");
	this.shape_6.setTransform(18,8.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#47180E").s().p("AAAAAIABAAIgBABg");
	this.shape_7.setTransform(23.7,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DB2D02").s().p("AhCA0IACAAIAAABgAgjgDIgCgCIgCgBIgFgGIgDgGQgBgKAVgLQAWgKAYgDIAtADIADAAIAAABQgOAEgMAHIgFADIgOAJIgFAEIgFADIgdAUIgBAAQgGAAgLgFg");
	this.shape_8.setTransform(15.1,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DB2D02").s().p("AgWAVQgFgFABgSQABgUAKgCIAOAAIABAAQAVAAAFAKQAFALgMAMQgNAMgKAEIgMAAg");
	this.shape_9.setTransform(10,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,0.1,26,20.5);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADADIABgDIACABIgBACIgBAAgAgFgBIACgBQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIgDABQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAAAgBg");
	this.shape.setTransform(43.4,-20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAGQgCgCAAgEQAAgEADgDIAGgCQAFAAACADIADAHIgEAGQgCADgEAAQgEAAgDgEgAACAEIABAAIABAAIABgCIgCgBgAgGAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIACgCQAAAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1.setTransform(43.5,-20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626773").s().p("AgLATIgCgLIACgCIAEgOIgDAGIAAAAIACgMIAAgEIABgBIACgBIADgCIABAOIABABIABgFIAFAFIgEAEIAAABIAGACIgDADIAFACIAEABIgBACIAAAAIgBABIgBAEIgHgHIAAAAIAAADIAAAAIgJgIIgBAAIAAAEIgEACIAGAFIgHAKIgBABg");
	this.shape_2.setTransform(47.9,-20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777C88").s().p("AgIApIgCgBIgBgHIgKAHIAEgLIAFABIAAgEIgCgJIAEABIgDgGIAHgFQgEgBgBgCIACgDIACgCIAEgEIAAAAIgCgBIgKABIAAAAIAFgHIgFACIgDACIgBAAIAGgJIgLAFIgBgCIABgHIgEAHIgGgDIgCgCIABADIABACIAAAAIgGgBIgBAAIgBAAIACgFIAAAAIgDgBIAAgBIAKgGIgIgBIgJACQAEgIALABIAHABIAFAFIAPgJIABgBIALgCQgJAEgCACIACAAIAFAAIABAAIgGADIgBAAIABAAIAEAAIAIABIAAACIgHACIAAAAIAFABIAEABIAEgBIAFgDIgDAEIAHABIANgCIAFAAIABAAIgBABIgHACIAJABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAIAIACIgCABIAFADIgDAAIAEAHIgEAAIAAAAIAAAAIAAAAIACAEIAAABIAAABIgDgDIgEAAIAFADIgCABIgJACIgBAAIADACIAAAAIgFAAIgDAAIAAgBIAAAAIgJADIAFgHIABgBIgBAAIgHABIgGAEIAFgHIAAgCIAAAAIAAAAIgDACIgDADIgBACIAAgBIgBADIAAABIgCAFIgCAAIgBgOIgCACIgCABIAAABIAAADIgDAMIAAAAIADgFIgEAOIgCADIACAKIgBAEg");
	this.shape_3.setTransform(47.1,-22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAEADIgBAAIABgDIABABIAAACgAgEAAIABgCIACACIgCABg");
	this.shape_4.setTransform(49,-20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAAKQgDAAgDgDQgCgDAAgEIACgGIAGgDQAEABACACIADAHIgEAGQgBADgEAAIAAAAgAABAEIABAAIACAAIAAgBIgBgCgAgGAAIACACIACgCIgCgBg");
	this.shape_5.setTransform(49.1,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("AhxhQIgBACIgBAAIgGAFIgIAIQgCgBAAgFIABgLIAAgBQABgOAEgBIAPgEIAKgEIADgCIAEgCIAKgJIAJgDIAJgGIAOAGIAEACIACABIAPAHIACABIAXgCIANgDIAIABIALABIACAAIAJAFIAEADQALAHAGAAIADAAIABAAIALgDIgKAGIACAAIAFAAIABAAIgHADIAAABIAAAAIAEAAIAIABIAAABAgvhUIALACIAAAAIgFgKIgLgBIgEAAIAHgEIgBAAIAAgBIgBgBIgFgEIADAAIADABIAAgBQgJgNgGAAQgFAAgSAOIgMAMIgNAKAgnAzIAAABIAAAAIgFAKIACgZIAAgBIgBABIgFAFIgEAGIAAgCIACgKIAEgLQgCAAgDADIAAABIAAgBIAEgOIgGgeIgFgcIAAgEIACgFIgCgCIACgDIAAgBIgBAAIgCABIgHABIgHgDIgCABIgCACIgEADQgDgBgFgFIgFgDIAAgGIgGABIgGgGIgGgGIgBAAAgZBDIgBAGIgBACIAAgCQgFgNAAgDIgDAHIgBAFQgCgDAAgIIAAgEIgBgCAgZBDIABgEIABgGABCBtIgQAOIAGgLIAAgBIAAABIgVAOIADgLIgOAOIgBAAIAAAAIADgJIABgGIgEAEIgJAIIAAAAIAGgLIADgJIAAgDIgEAFIgEAEIgOAOIAAAAIAAAAQAFgGAFgNIgGAEIAAAAIAAgBIAGgKIgJAGIgHADIANgYIgPASIgIAGIAAAAIAAAAIAEgKIADgJIgMASIAAgHIAAgOIAAAHQgFgQAAgLABNhZIgGABIgBAAIAGABQACABACAAIAEgBIAFgCIgDADIAHABIANgCIAFAAIABABIADABIgEgBIgHACIAJACIgEABIAHACIACABIgEAAIAGAEIgDAAIAFAGIgFAAIACAGIAAAAIgDgCIgEAAIAFADIAAABIgCAAIgJACIgBABIACABIABABIgCAAIgDgBIgEABIAAAAIAAADIAAACIgCAIIgCAEIADAEIAAABIAFADIAAABIgEgBIAFAGIACACIAAABIgDAAIAKAIIAEADIAEAFIABACIACANIAAABIAAAFIAHARIABAJIAAAJIgDALIgBAEIgBADIgCAJIgFATIgCARQgDgDAAgBIgBADQAAAGACAEIAAAAIAAAAQgFgFAAgDIgHAKIAAAAIAAgBIgBgIIgCgHIgBAKIgDgHIgCgGIgBAMIAAABIAAgBIgCgDIgDgMIAAgCIAAgCIAAAAIAAgIIgFALIgBABIgBABAB1hEIAAAAIgBAAgAByAiIgEABQgFAAgBgDIAAgCIgBgGIgFgEIgBgBQgDgDgBgEIAAgBQAAgIALAAIAEAAIAJAAIAFgGAB0AgIABgDIADgFIACgBIACgCIAAgCIAAgDABSBoIgLAMIAEgJIgBABIgEACIgFADIABgBIAAgDIAAAA");
	this.shape_6.setTransform(40,-16.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292421").s().p("AgDADIADgDIACgDIACAAIgCAEIgCADg");
	this.shape_7.setTransform(51.1,-13.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDAQIgBgCIgBgGIgFgEIAAgBQgEgDAAgDIgBgBQABgHAKgBIAEAAIAIAAIAGgHIACAOIAAABIAAAEIAAADIgBACIgCACIgBACIgDAEIgBADIgCACIgFACQgDgBgBgDgAABAIIgBADIABABIADgDIACgFIgBAAg");
	this.shape_8.setTransform(50.8,-14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444655").s().p("ABYBBIgEAMIAAAAIABgKIgBgPIAAgCIAAgDIAHARIABAJIgCAPgAASA/IAAgGIAIgSIAHgLIgMAHIgBAAIARgTIgEACIgBAAIACgFIADgHIgBAAIgCgKIgBgGIABAAIAIAIIAAgBIAAgCIAAAAIAHAFIABgDIAAAAIADgBIgEgCIgFgDIADgDIgGgCIAAgBIADgFIgFgEIABgBIACgDIAAgCIADgDIADgCIAAADIgFAGIAGgDIAHgCIAAABIgFAIIAIgCIAAAAIAAADIAAACIgCAIIgCAFIADADIAAABIAFACIAAABIgEgBIAFAGIACACIAAABIgDAAIAKAIIAEAEIAEAEIABACIgFAHIgJAAIgEAAIABgEQgHACAAACIABgJIgHAHIAAgLQgGACgBAIIgBARIAAAAIgBgJIgCgKIgJALQgHAIgGAPgAAygWIABAAIgBAAgAgrAqIACgNIABgFIACgMIgIAKIgDAIIADgVIgLAKIgHAFIAAAAIAGgHIAHgMIAGgNQgEAEgDAAIABgCQAEgIANgFIgFAAIgCAAIgBAAIgEAAIABgBIAFgEIAAAAIgGABIABgBIABgEIAFgCIgIAAIAAAAIAFgFIAFgEIgJgCIAFgCIABAAIgBgBIgGAAIAHgEIAEAAIgBACIAHACIgDAHIAAAAIAHgFIgCAFIABAAQAAgCAGgCIADgBIAIgEIABAAIABAAIAGACIAAgBIgDgCIgBgCIADABIAFAEIAFgHIgBAHIgBACIAMgGIgGAJIAAAAIAFgBIAEgCIgFAGIAAABIAKgCIABABIgGAGIgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAIAFADIgHAEIADAGIgEAAIACAJIAAADIgFgBIgEALIgBAAIAAgHIgIAMIgCADIgIAUIgBAAIAFgXIAAgFIgBAAIAAABIgHAKIAAAAIgBgHIgBgCIAAAAIgFAEIAAABIgDAFIAAgLIAAAAIgJANIgDAFQgGAMAAAGgAAYAOIAAgBIAAABgAhKAAIgBgGIAAgCIABgEIgBgGIABgFIgCAAIABgBIAAgBIAAAAIgEgBIADgEIADgCIABgBIAHgLIAAgCIAAAAIABABIACACIACACIAFAAIgFAFIAHADIgFAFIABAAIAEABIAAABIgEABIgFADIAFAAIgJAEIgCAHIgBAFIAAADIgBACQgDAHAAAEgAhVghIgDgCIgDgDIACgDIACgBIAAgCIgBgBIAEgDIADAEIgDgEIAAgBIgDgEIALADIAAgBIgFgJIAAgBIABABIAIAJIABADIAAAAIAAAEIgDAFIgBAAQgEAGgEAAgAhMhAIAAAAIgDgCIAAAAIADgBIgHgKIABAAIACAAIgFgKIAPAGIADAFIAHAFIAAABIgDAAQgGgFgDANg");
	this.shape_9.setTransform(44,-19.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("ABzB1IABAAIgBABgABpBvIABAAIAAAAgAAeBhIAAgBIAAABgAA4BWIABgBIAAABgAAABEIAAgBIAAABgAgPBBIABAAIgBACgAgQA7IABAAIAAAAgABjAlIAAAAIgCAAgABzAYIAAgBIABABgAgCAXIAAgBIAAABgAgoAUIABABIgBAAgAAvAFIABAAIAAAAgABGgOIAAgBIABABgAgWgcIABABIAAACgABRgaIAAAAIAAABgAA8gcIAAAAIAAABgABdgsIAAAAIABAAgAAEg6IABAAIgBAAgABmg9IAAAAIAAAAgAB2g/IABAAIABABgABvg/IAAAAIABgBIgBABgAgXhAIAAAAIAAABgABshGIABAAIgBABgAAKhSIAAAAIABAAgAh3hZIAAgCIABACgAAgheIAAgBIABABgAgphqIAAAAIABAAgAgfh0IgBgBIABABg");
	this.shape_10.setTransform(38.8,-15.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#977168").s().p("AgKAFIAFgDIgDgBIADgDIAAAAQgEgBgEgCIAOgGIAAABIgGAEIAEAAIAKABIAFAIIAAABIgLgCIABADIgEgCIAAAAIAAAAIgCAAIAAABIACADIAAAAIAAADIgEACQgEgCgCgFg");
	this.shape_11.setTransform(34.9,-25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("AA8BUIgBABIADgGIAMgXQgCAPgEAIIgBABIAAABIgBABIgLAMgABJBQIABgBIgBgCIABgEIACgEIAAAIIAAABIAAAPgAAVBDIgFAMIgBAAIAJghIgKAWIgLANIAEgLIgIAJIACgPIgMANIAHgTIgIAIIgHAGQAHgIAMgcIACgDIAHgPIALgbIAAAAIAAAAIgLAQIgKAOIgFAGIgIAIQgIAIgFAKIAAgBIAGgRIABgEIACgEQAGgSADgEIgBAAIgPAWIgCACIgCAFQgGAKABAGIgBgMIAAgEIAAgCIADgLIADgNIAAgBIAAABQgEACgFAOQgFAOAAAGIAAAAIgBgRIACgSIgFASIgBgBIAAgHIABgNIADgKIAAAAQgIANgCAQIgBgEIAAgMIABgQIABgJIABgOIgBAAIgHAFIAAgZIgIACIABgKIAHgTIgIACIgBAAIgCAAIgDgDIACgDIAAAAIAAAAIgCAAIgIABIgHgCIgBABIgGgGIgHgFIAEAAIAKACIAGACQACAAABgFIAIABIAJAGIADABIAFgCIAHgBIgDAEIgEAFIAAABIAEABIgFAFIAGAAIAAAGIgCAGIgBADIgBALIADAAIADAGQABAFADACIAAgWIAAgBIACgEIAGgJQAFgGAFgCIgBAIQgCACAAAEIgBAEIABADIABgCQADAAAEgDIgFANIgIANIgGAGIAAABIAHgGIALgKIgDAVIADgIIAIgKIgCANIgBAEIgBAOIAAAEQABgGAFgMIADgEIAJgOIAAAAIAAALIADgEIAAgBIAEgFIABAAIAAACIABAHIABAAIAGgKIAAgBIABAAIABAGIgFAWIAAAAIAIgTIACgEIAKgFIAAABIAAgBIALgHIABAHIACABIACAAIABAAIgCACIAAABIABAAIAEgCIAAABIgGAGIgCACIgCACIAAABIABAAIAEgBIgJAJIgIANQgGAMAAAKIAAAEIACgFIAIgNIAIgLQgJANgCAKIgBAGIAAAPIADgMIAEgLIgDAWIgBAFIgHAUIAKgUIAJgXIAEgHQAGgOAGgGIAEALIABADIACANIgCALIgGANIgHAIIAJgIIAGgLIABgBIAEACQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBIABAAIAEAGIABgBIABAAIACAJIAAADIgBAAIgDgDIAAAKIgDgFIgBgDIgEAGIgBgEIgCgEIgEAJIgDAIIgBgKIgBABIgHAIIgDAGIAAgIIACgLIAAgEIAAAAIgLASQgHAOABAIIAAADIAAAAIgBgDIgBgKIgBABIgDALIAAAAIgBgCIgBgHIAAgBIAAABIgEAFIgCAEIgBAEgABiA2IgFAKIgHAJIAAAAIAIgTIAAgDIgOAOIAMgVIAGgDIAEgCIACgBIAAADIAAABIgDAVIgDAMIgBAEgAgiAyIAAABgABdAoIAAAAIAIgTIADALIgJAIIgGAEgABZAbIAAgDIgBAAIgFABIAAgDIAAAAIgEAEIAAgJIgHAFIgBAAIADgWIAAAAIAAgNIAAgEQAAAJADAFIABgDIADAFIABADIAGAHIABAAQABAEAEAAIAFgCQgCAIgHAJgAAtgOIgCADg");
	this.shape_12.setTransform(41.5,-14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777C88").s().p("ABZAiIABAHIgKAFgAhYgTIgBgCQABgNAFgCIAOgEIAKgDIADgCIgCADIgFACIABACIgEABIgBAAIgDACIgDAHQgEABgKANg");
	this.shape_13.setTransform(35.8,-22.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4C3C1").s().p("AAQB7IADgJIABgGIgEAEIgJAIIAAAAIAGgLIADgJIAAgDIgDAFIgFAEIgMAOIgBAAQAFgGAFgNIgGAEIAAgBIAGgKIgJAGIgIADIANgYIgOASIgIAGIAAAAIADgKIADgJIgMASIAAgHIAAgOIAAAHQgFgQABgLIAAgEIABgGIgBAGIAAAEIgCAGIgBAAQgFgNAAgDIgDAHIgBAFQgBgDgBgIIAAgEIgBgCIAAgBIAAABIAAAAIgFAKIACgZIAAgBIAAABIgGAFIgEAGIAAgCIADgKIADgLQgCAAgCADIgBAAIAEgOIgGgeIgFgcIAAgEIACgFIACAAIACAAIAIgBIgHASIgBALIAHgDIAAAaIAHgFIACAAIgBANIgBAJIgBAQIAAAMIABAFQACgQAHgOIABgBIgDAMIgBANIAAAHIABAAIAEgRIgCASIABAQIABABIAAgBQgBgGAGgOQAFgNAEgDIAAAAIgEANIgCAMIAAACIgBADIABANQAAgGAGgKIACgFIABgCIAQgWIAAAAQgCADgGASIgCAEIgBAEIgGASIAAAAIAAAAQAFgJAHgJIAHgIIAGgFIALgPIAKgQIABAAIgLAbIgIAPIgBADQgMAcgHAJIAHgGIAHgJIgGAUIALgNIgCAOIAJgJIgEAMIgBAAIAAAAIABAAIALgNIAKgWIgJAhIABAAIAFgNIABARIABgEIACgDIADgGIABAAIABAIIABACIAAAAIADgMIAAAAIACAKIAAACIABAAIgBgCQAAgIAHgOIAKgSIABAAIAAADIgCAMIAAAHIADgGIAHgIIAAAAIACAKIADgIIADgKIADAEIABAFIAEgHIABAEIADAEIAAgJIADACIABAAIAAgDIgDgJIAAAAIgBACIgEgGIgBAAQAAABAAAAQAAABgBAAQAAAAgBABQgBAAgBAAIgDgCIAAgEIABgBIAIgFIAAAJIADgDIABAAIAAADIAFgBIAAAAIAAACIABABQAIgIABgIIACgCIABgDIAEgFIABAPIgCAOIAAACIgEgMIgHATIAAABIgEADIADAAIgMAWIAOgOIAAACIgIAUIAAAAIAHgJIAEgKIAAAYIABgEIACgMIAEgVIAAAAIAAgEQAEgEACgJIACAOIAAAFIgBADIgCAJIgEATIgDARIgDgEIgBADQAAAGACAEIAAAAQgFgFABgDIgIAKIAAgBIgBgIIgCgHIgBAKIgDgHIgCgGIAAAMIgBAAIgCgDIAAgOIAAgCIAAgIIgDAFIAAADIAAAAIAAgIIgFALIgBABIABgBQAEgJACgPIgMAXIgDAHIgFACIgEADIAAgBIAAgDIgQAOIAHgLIAAgBIgBABIgVAOIAEgLIgPAOgAA7BnIAAAAgAgaBDIAAAAgAhghCIgEgDIgBgGIgGABIgFgGIgGgGIgBAAIAMgKIANgMQARgOAFAAQAGAAAJANIgCgBIgMgCIgDAAIADACIACAEIgNACIgJAFIAAABIALACIgGAEQgEACABAEIAMABIgFAGIACAFIgKgCIgEAAIAHAFIAFAGIgBACIgFADQgDgBgFgFg");
	this.shape_14.setTransform(40.7,-15.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B0928A").s().p("AgFASIgCgFIAFgGIgMgCQgBgDAEgCIAGgEIgLgCIAAAAIAJgFIAMgDIgCgDIgDgCIADAAIAMACIACABIABABIgEgBIgDAAIAFADIABACIABAAIgPAGQAEADAEAAIAAAAIgDAEIADAAIgFADQACAFAEACIgBAAIAAAAIAAAFIgJgCQAAAFgCAAgAAPgMIABAAIgBAAg");
	this.shape_15.setTransform(33.2,-25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#626773").s().p("AAxBUIABgFIAEgWIgFALIgDAMIAAgOIABgHQACgKAJgNIgHALIgIANIgCAGIgBgFQABgKAGgNIAHgNIAJgJIgEABIAAgBIACgCIABgCIAHgGIAAgBIAAAAIgFACIAAgBIACgCIgBAAIgDAAIgCgBIAAgGIgLAGIAEgKIAFABIAAgEIgCgJIAEAAIgDgFIAHgFIgFgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgBIAGgFIgBgBIgKACIAAgBIAFgHIgEACIgFACIAAAAIAGgKIgMAGIABgBIABgIIgFAIIgGgFIgDgBIABADIADACIAAABIgGgCIgBAAIgBAAIgIADIgDABQgGADAAACIgBAAIACgGIgHAGIAAAAIADgHIgHgCIABgDIgDAAIgHAFIAGAAIAAAAIgFACIAIADIgEAEIgFAEIAAAAIAHAAIgEADIgBADIgBABIAGgBIAAAAIgFAFIgCABIABAAIAEAAIABAAIABAAIAFAAQgMAFgEAHIgBACIgBACIgBgDIAAgDQABgFACgCIAAgIQgFACgFAGIgGAJIgCAEIAAgEIABgEIACgHIAJgFIgFAAIAFgDIAEAAIAAgBIgEgBIgBAAIAFgGIgHgCIAFgGIgFAAIgCgCIgCgBIgBgBIAAAAIAAACIgHAKIgBABIgDACIADgEIgGABIgFACIgEgBIgJgFIAAgFIABAAIABAAIAFgCIgBgDIAAAAIgCgDIAAgBIABAAIABAAIAAAAIAFACIgBgDIADADIAAABIAAABIgEADIABABIAAABIgCABIgCAEIADADIADABIACAAQAEAAAEgFIABgBIADgEIAAgEIAAgBIgBgDIgIgJIgBgBIAAABIgLgBIgEAAIAHgEIgBgBIAAAAIgBgCIgFgDIADAAIADABIAAgBQgJgOgGAAQgFAAgSAPIgMALIgNALIgBACIgBAAIgGAFIgIAHQgCAAAAgFIABgLIAAAAIABAFQAKgNAEgBIAEgHIADgCIABAAIADgBIAAgCIAFgBIACgEIAEgDIAKgIIAJgDIAJgHIAOAHIAEACIACABIAFAKIgCAAIgBgBIAAABIAHAKIgDABIAAAAIADADIAAAAIAEACQADgNAGAEIADAAIAAAAIgHgGIgDgEIACABIAXgCIANgEIAIACIALABIACAAIAJAFIAEACQALAIAGAAIADAAIABgBIALgCIgKAGIACAAIAFAAIABAAIgHADIAAAAIAAAAIAEAAIAIABIAAACIAAAAIgGABIgBAAIAGACQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIAEgBIAFgCIgDADIAHABIANgCIAFAAIABABIADABIgEgBIgHACIAJABIgEACIAHABIACACIgEAAIAGADIgDAAIAFAHIgFAAIAAAAIgBAAIABAAIACAFIAAABIgDgDIgEAAIAFAEIAAABIgCAAIgJACIgBABIACABIgBAAIgDAAIgEAAIABgBIgBABIgIACIAFgIIABgBIgBAAIgHADIgGADIAFgHIAAgCIgDABIgDAEIAAACIgCACIgBABIAFAFIgDAEIAAABIAGADIgDADIAFACIAEACIgDABIAAABIgBAEIgHgHIAAAAIAAAAIAAADIAAABIgIgIIgBAAIABAFIACALIABAAIgDAGIgCAGIABAAIAEgCIgRATIABAAIAMgIIgHALIgIASIAAAHIABAAQAGgPAHgJIAJgLIACAKIABAJIAAAAIABgRQABgIAGgCIAAALIAHgGIgBAJQAAgCAHgDIgBAFQgLAAAAAIIAAABQABADADAEIABABIAFADIABAHIAAABIgGgHIgCgEIgCgFIgBADQgEgFABgJIgBAEIAAAOIAAABIgCAVIgBAAIgBAFIAAABIgHAKIgIAIIAGgIIAGgNIACgLIgBgNIgBgEIgEgLQgHAGgGAPIgDAHIgJAXIgKAUgAA6AkIADgEgAAVg+IAAAAIAAAAgAB/BbIAAgFIgBgOQgCAIgFAFIgCABIgDACIgGADIgDAAIAFgEIAJgIIABgBIACgOIgCgPIACgBIACgCIABAOIgBAKIAAAAIAEgMIACAYIACgQIAAAJIgDAMIgBAEIgBADgAghAGIAAgCIAAgBIAAADIgCgGIgDAAIAAgKIABgDIADgGIgBAFIAAABIABAHIABAJQAAgDADgHIABgCIAAACIAAAUQgCgCgCgFgAgogZIAEgFIACAAIgBAGgAgogfIABgBIAEAAIAAABIgBABg");
	this.shape_16.setTransform(40,-18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.8,-30.2,28.4,27.9);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADACIACgCIABABIAAABIgCABgAgFAAIACgCIACACIgCABQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAAAg");
	this.shape.setTransform(38.2,-22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAGQgCgCAAgEQAAgEADgDIAGgCIAHADIADAHIgEAGIgGADQgEAAgDgEgAACAEIABAAIABAAIABgCIgCgBgAgGAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIACgCIgCgBg");
	this.shape_1.setTransform(38.3,-22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626773").s().p("AgMATIgBgLIACgCIAEgOIgDAGIAAAAIACgMIABgEIAAgBIACgBIACgCIACAOIABABIABgFIAEAFIgDAEIAAABIAHACIgEADIAFACIAEABIgCACIAAAAIAAABIgBAEIgHgHIgBAAIABADIAAAAIgJgIIgBAAIAAAEIgEACIAGAFIgIAKIAAABg");
	this.shape_2.setTransform(42.6,-22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777C88").s().p("AgIApIgCgBIgBgHIgKAHIAEgMIAFABIAAgDIgCgJIADAAIgCgFIAHgFQgDgBgCgBIACgEIACgCIAEgDIAAgCIgCAAIgKABIAAgBIAEgGIgDACIgFACIAAAAIAGgKIgLAGIAAgBIAAgIIgFAIIgFgFIgDgBIABACIACADIAAABIgGgCIAAAAIgBgBIABgDIAAgBIgDAAIAAgBIALgHIgJAAIgIABQADgHALAAIAHABIAFAFIAOgJIACAAIALgDQgJAEgBACIACAAIAEgBIABAAIgGAEIAAABIAAAAIAEAAIAHABIAAABIgGABIAAAAIAFABIAEACIAFgBIAEgDIgDAEIAHAAIANgCIAFAAIABABIgBAAIgHADIAJABQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAABIAHABIgDACIAGAEIgDAAIAEAFIgEABIACAFIABAAIAAABIgEgCIgEgBIAFADIgDAAIgJADIAAABIADABIAAABIgFgBIgDAAIABgBIgBABIgIACIAEgHIAAgBIAAAAIgIABIgEAEIAEgGIAAgCIAAgBIAAABIgDACIgCACIgBABIgBgBIgBAFIgBAAIgCAFIgBgBIgBgMIgCACIgCAAIAAABIgBADIgCAMIAAABIADgHIgEAPIgBACIABALIAAAEgAAugGIAAAAIAAgBg");
	this.shape_3.setTransform(41.9,-24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AADADIgBgBIACgCIACABIgBACgAgFAAIADgCIACACIgCABg");
	this.shape_4.setTransform(43.7,-22.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAAKQgDAAgDgDQgCgDAAgEIACgGIAGgDQAEABACACIADAHIgEAGQgBADgEAAIAAAAgAABAEIABAAIACAAIAAgBIgBgCgAgGAAIACACIACgCIgCgBg");
	this.shape_5.setTransform(43.8,-22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("AhxhQIgBACIgBAAIgGAFIgIAIQgCgBAAgFIABgLIAAgBQABgOAEgBIAPgEIAKgEIADgCIAEgCIAKgJIAJgDQAHgGACAAIAOAGIAEACIACABIAPAHIACABIAXgCIANgDIAIABIALABIACAAIAJAFIAEADQALAHAGAAIADAAIABAAIALgDIgKAGIACAAIAFAAIABAAIgHADIAAABIAAAAIAEAAIAIABIAAABAgnAzIAAABIAAAAIgFAKIACgZIAAgBIgBABIgFAFIgEAGIAAgCIACgKIAEgLIgFADIAAABIAAgBIAEgOIgGgeIgFgcIAAgEQAAgDACgCIgCgCIACgDIAAgBIgBAAIgCABIgHABIgHgDIgCABIgCACIgEADQgDgBgFgFIgFgDIAAgGIgGABIgGgGIgGgGIgBAAIANgKIAMgMQASgOAFAAQAGAAAJANIAAABIgDgBIgDAAIAFAEIABABIAAABIABAAIgHAEIAEAAIALABIAFAKIAAAAIgLgCAgZBDIgBAGIgBACIAAgCQgFgNAAgDIgDAHIgBAFIgCgLIAAgEIgBgCABCBtIgQAOIAGgLIAAgBIAAABIgVAOIADgLIgOAOIgBAAIAAAAIADgJIABgGIgEAEIgJAIIAAAAIAGgLIADgJIAAgDIgEAFIgEAEIgOAOIAAAAIAAAAQAFgGAFgNIgGAEIAAAAIAAgBQADgBADgJIgJAGIgHADIANgYIgPASIgIAGIAAAAIAAAAIAEgKIADgJIgMASIAAgHIAAgOIAAAHQgFgQAAgLIABgEIABgGABNhZIgGABIgBAAIAGABQACABACAAQADAAABgBIAFgCIgDADIAHABIANgCIAFAAIABABIADABIgEgBIgHACIAJACIgEABIAHACIACABIgEAAIAGAEIgDAAIAFAGIgFAAIAAAAIgBAAIABAAIACAGIAAAAIgDgCIgEAAIAFADIAAABIgCAAIgJACIgBABIACABIABABIgCAAIgDgBIgEABIAAAAIAAADIAAACIgCAIIgCAEIADAEIAAABIAFADIAAABIgEgBIAFAGIACACIAAABIgDAAIAKAIIAEADIAEAFIABACAByAiIgEABQgFAAgBgDIAAgCIgBgGIgFgEIgBgBQgDgDgBgEIAAgBQAAgIALAAIAEAAIAJAAIAFgGIACANIAAABIAAAFIAAADIAAACIgCACIgCABIgDAFIgBADAB8AQIAHARIABAJIAAAJIgDALIgBAEIgBADIgCAJIgFATIgCARIgDgEIgBADQAAAGACAEIAAAAIAAAAIgFgIIgHAKIAAAAIAAgBIgBgIIgCgHIgBAKIgDgHIgCgGIgBAMIAAABIAAgBIgCgDIgDgMIAAgCIAAgCIAAAAIAAgIIgFALIgBABIgBABABCBtIAAAAABSBoIgLAMIAEgJIgBABIgEACIgFADIABgBIAAgD");
	this.shape_6.setTransform(34.7,-18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292421").s().p("AgDADIADgDIACgCIACAAIgCADIgCACg");
	this.shape_7.setTransform(45.8,-15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDAQIgBgBIgBgHIgFgEIAAAAQgEgEAAgCIgBgCQABgHAKgBIAEAAIAIABIAGgIIACAPIAAAAIAAAEIAAAEIgBABIgCACIgBABIgDAGIgBACIgCACIgFABQgDABgBgEgAABAIIgBADIABAAIADgCIACgEIgBAAg");
	this.shape_8.setTransform(45.6,-16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444655").s().p("ABYBBIgEAMIAAgBIABgJIgBgPIAAgBIAAgEIAHARIABAJIgCAQgAASA/IAAgGIAIgTIAHgKIgMAHIgBAAIARgSIgEABIgBAAIACgGIADgFIgBAAIgCgLIgBgGIABABIAIAHIAAAAIAAgDIAAAAIAHAFIABgCIAAgBIADgCIgEgBIgFgCIADgDIgGgDIAAgBIADgEIgFgGIABAAIACgDIAAgBIADgEIADgCIAAACIgFAHIAGgDIAHgCIAAABIgFAHIAIgCIAAABIAAADIAAADIgCAHIgCAEIADAFIAAAAIAFACIAAABIgEgBIAFAGIACADIAAAAIgDAAIAKAIIAEADIAEAGIABABIgFAIIgJgBIgEAAIABgEQgHADAAACIABgKIgHAGIAAgKQgGABgBAJIgBARIAAAAIgBgKIgCgKIgJALQgHAKgGAOgAAygWIABgBIgBAAgAgrArIACgOIABgEIACgOIgIALIgDAHIADgUIgLAKIgHAGIAAgBIAGgGIAHgNIAGgNIgHAEIABgCQAEgIANgFIgFAAIgCABIgBAAIgEgBIABAAIAFgGIAAAAIgGACIABgBIABgDIAFgDIgIAAIAAgBIAFgEIAFgDIgJgDIAFgCIABAAIgBgBIgGAAIAHgEIAEAAIgBADIAHABIgDAIIAAAAIAHgGIgCAFIABAAIAGgFIADgBIAIgCIABAAIABAAIAGABIAAAAIgDgDIgBgCIADABIAFAEIAFgIIgBAIIgBACIAMgGIgGAKIAAAAIAFgDIAEgCIgFAIIAAAAIAKgBIABABIgGAEIgBACQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAIAFADIgHAFIADAFIgEgBIACAJIAAAEIgFAAIgEAKIgBAAIAAgHIgIAMIgCADIgIAUIgBAAIAFgWIAAgGIgBAAIAAAAIgHALIAAAAIgBgHIgBgCIAAAAIgFAFIAAABIgDADIAAgKIAAAAIgJAOIgDAEQgGAMAAAGgAAYANIAAgBIAAABgAhKAAIgBgHIAAgBIABgFIgBgFIABgGIgCAAIABgBIAAAAIAAAAIgEgBIADgEIADgDIABgBIAHgKIAAgBIAAAAIABAAIACACIACACIAFgBIgFAHIAHABIgFAGIABABIAEAAIAAABIgEABIgFACIAFABIgJAFQgCAAAAAGIgBAFIAAAEIgBACQgDAFAAAFgAhVghIgDgCIgDgCIACgEIACgCIAAgBIgBgBIAEgCIADADIgDgEIAAgBIgDgEIALACIAAAAIgFgKIAAAAIABABIAIAIIABAEIAAABIAAADIgDAEIgBACQgEAFgEAAgAhMhAIAAAAIgDgCIAAgBIADgBIgHgKIABAAIACABIgFgLIAPAIIADAEIAHAFIAAABIgDAAQgGgFgDANg");
	this.shape_9.setTransform(38.7,-21.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("ABzB1IABAAIgBABgABpBvIABAAIAAAAgAAeBhIABgBIgBABgAA4BWIABgBIAAABgAAABEIAAgBIAAABgAgPBBIABAAIgBACgAgQA7IAAAAIAAAAgABiAlIABAAIgCAAgABzAYIAAgBIABABgAgCAXIAAgBIAAABgAgnAUIAAABIAAAAgAAvAFIABAAIAAAAgABGgOIAAgBIABABgAgVgcIAAABIAAACgABQgaIABAAIgBABgAA8gcIAAAAIAAABgABegsIAAAAIAAAAgAAEg6IACAAIgBAAgABmg9IABAAIgBAAgAB1g/IABAAIACABgABvg/IAAAAIABgBIgBABgAgXhAIAAAAIAAABgABshGIAAAAIAAABgAAKhSIgBAAIABAAgAh2hZIAAgCIAAACgAAhheIAAgBIAAABgAgohqIAAAAIAAAAgAgfh0IAAgBIABABg");
	this.shape_10.setTransform(33.6,-17.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#977168").s().p("AgKAFIAFgDIgDgBIADgDIAAAAQgEgBgEgCIANgGIABABIgFAEIADAAIAKABIAFAIIAAABIgKgCIABADIgFgCIAAAAIgBAAIgBAAIAAABIACADIAAAAIAAADIgEACQgEgCgCgFg");
	this.shape_11.setTransform(29.6,-26.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("AA8BUIgBABIADgGIAMgXIgGAXIgBABIAAABIgBABIgLAMgABJBQIABgBIgBgCIABgEIACgEIAAAIIAAABIAAAPgAAVBDIgFAMIgBAAIAJghIgKAWIgLANIAEgLIgIAJIACgPIgMANIAHgTIgIAIIgHAGQAHgIAMgcIACgDIAHgPIALgbIAAAAIAAAAIgLAQIgKAOIgFAGIgIAIQgIAIgFAKIAAgBIAGgRIABgEIACgEQAGgSADgEIgBAAIgPAWIgCACIgCAFQgGAKABAGIgBgMIAAgEIAAgCIADgLIADgNIAAgBIAAABIgJAQQgFAOAAAGIAAAAIgBgRIACgSIgFASIgBgBIAAgHIABgNIADgKIAAAAQgIANgCAQIgBgEIAAgMIABgQIABgJIABgOIgBAAIgHAFIAAgZIgIACIABgKIAHgTIgIACIgBAAIgCAAIgDgDIACgDIAAAAIAAAAIgCAAIgIABIgHgCIgBABIgGgGIgHgFIAEAAIAKACIAGACQACAAABgFIAIABIAJAGIADABIAFgCIAHgBIgDAEIgEAFIAAABIAEABIgFAFIAGAAIAAAGIgCAGIgBADIgBALIADAAIADAGQABAFADACIAAgWIAAgBIACgEIAGgJQAFgGAFgCIgBAIIgCAGIgBAEIABADIABgCIAHgDIgFANIgIANIgGAGIAAABIAHgGIALgKIgDAVIADgIIAIgKIgCANIgBAEIgBAOIAAAEQABgGAFgMIADgEIAJgOIAAAAIAAALIADgEIAAgBIAEgFIABAAIAAACIABAHIABAAIAGgKIAAgBIABAAIABAGIgFAWIAAAAIAIgTIACgEIAKgFIAAABIAAgBIALgHIABAHIACABIACAAIABAAIgCACIAAABIABAAIAEgCIAAABIgGAGIgCACIgCACIAAABIABAAIAEgBIgJAJIgIANQgGAMAAAKIAAAEIACgFIAIgNIAIgKQgJAMgCAKIgBAGIAAAPIADgMIAEgLIgDAWIgBAFIgHAUIAKgUIAJgXIAEgHQAGgOAGgGQACAHACAEIABADIACANIgCALIgGANIgHAIIAJgIIAGgLIABgBIAEACQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBIABAAIAEAGIABgBIABAAIACAJIAAADIgBAAIgDgDIAAAKIgDgFIgBgDIgEAGIgBgEIgCgEIgEAJIgDAIIgBgKIgBABIgHAIIgDAGIAAgIIACgLIAAgEIAAAAIgLASQgHAOABAIIAAADIAAAAIgBgDIgBgKIgBABIgDALIAAAAIgBgCIgBgHIAAgBIAAABIgEAFIgCAEIgBAEgABiA2IgFAKIgHAJIAAAAIAIgTIAAgDIgOAOIAMgVIAGgDIAEgCIACgBIAAADIAAABIgDAVIgDAMIgBAEgAgiAyIAAABgABdAoIAAAAIAIgTIADALIgJAIIgGAEgABZAbIAAgDIgBAAIgFABIAAgDIAAAAIgEAEIAAgJIgHAFIgBAAIADgWIAAAAIAAgNIAAgEQAAAJADAFIABgDIADAFIABADIAGAHIABAAQABAEAEAAIAFgCQgCAIgHAJgAAtgOIgCAEg");
	this.shape_12.setTransform(36.3,-15.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777C88").s().p("ABZAiIABAHIgKAFgAhYgTIgBgCQABgNAFgCIAOgEIAKgDIADgCIgCADIgFACIABACIgEABIgBAAIgDACIgDAHIgOAOg");
	this.shape_13.setTransform(30.6,-24.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4C3C1").s().p("AARB7IACgJIABgGIgEAEIgIAIIAAAAIAFgLIADgJIAAgDIgEAFIgDAEIgOAOIAAAAQAFgGAEgNIgEAEIgBgBQACgBADgJIgIAGIgIADIANgYIgPASIgIAGIAAAAIAFgKIACgJIgMASIABgHIAAgOIgBAHQgFgQAAgLIgBAGIAAAAQgGgNAAgDIgDAHIgBAFIgCgLIAAgEIAAgCIAAgBIgBABIAAAAIgFAKIACgZIAAgBIgBABIgFAFIgEAGIAAgCIACgKIAEgLIgFADIAAAAIAFgOIgHgeIgFgcIAAgEQABgDACgCIABAAIACAAIAIgBIgIASIAAALIAHgDIAAAaIAIgFIABAAIgBANIgBAJIgBAQIAAAMIABAFQABgQAJgOIAAgBIgDAMIgCANIABAHIAAAAIAGgRIgCASIABAQIAAABIAAgBQgBgGAFgOIAJgQIABAAIgEANIgCAMIAAACIAAADIABANQgBgGAFgKIADgFIACgCIAPgWIABAAQgEADgFASIgCAEIgBAEIgGASIAAAAIAAAAQAFgJAHgJIAHgIIAGgFIALgPIAKgQIABAAIgLAbIgHAPIgCADQgMAcgHAJIAGgGIAIgJIgHAUIANgNIgDAOIAJgJIgEAMIALgNIAJgWIgIAhIABAAIAFgNIAAARIACgEIACgDIADgGIABAAIABAIIAAACIABAAIADgMIABAAIABAKIABACIAAAAIAAgCQgBgIAHgOIALgSIAAAAIAAADIgCAMIAAAHIADgGIAHgIIABAAIABAKIADgIIAEgKIACAEIABAFIADgHIACAEIADAEIAAgJIADACIABAAIAAgDIgDgJIAAAAIgBACIgFgGIAAAAQAAAAAAABQAAABgBAAQAAAAgBABQgBAAgBAAIgDgCIAAgEIACgBIAHgFIAAAJIADgDIABAAIAAADIAFgBIABAAIAAACIABABQAGgIADgIIABgCIABgDIADgFIACAPIgCAOIgBACIgDgMIgHATIAAABIgEADIADAAIgMAWIANgOIAAACIgIAUIABAAIAHgJIAFgKIgBAYIABgEIACgMIADgVIAAAAIAAgEIAHgNIABAOIAAAFIAAADIgCAJIgFATIgCARIgDgEIAAADQgBAGACAEIAAAAIgFgIIgGAKIgBgBIgBgIIgCgHIgBAKIgDgHIgBgGIgBAMIgBAAIgCgDIgBgOIAAgCIABgIIgDAFIAAADIAAAAIAAgIIgFALIgBABIAAgBIAHgYIgMAXIgEAHIgDACIgGADIABgBIAAgDIAAAAIAAAAIgQAOIAGgLIAAgBIAAABIgVAOIADgLIgOAOgAALBiIAAAAIABAAgAgZBDIAAAAgAgfA5IgBAEIABgEIABgGgAhghCIgEgDIgBgGIgGABIgGgGIgFgGIgCAAIANgKIAMgMQATgOAEAAQAGAAAJANIgCgBIgLgCIgFAAIAEACIACAEIgMACIgKAFIAAABIALACIgGAEQgEACABAEIAMABIgFAGIACAFIgKgCIgEAAIAHAFIAGAGIgDACIgEADQgDgBgFgFg");
	this.shape_14.setTransform(35.4,-17.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B0928A").s().p("AgFASIgCgFIAFgGIgMgBQgBgEAEgCIAGgDIgLgCIAAgBIAKgFIALgCIgCgEIgDgCIAEAAIALACIACABIAAAAIgDgBIgCAAIAEAFIABABIAAAAIgOAGQAEACAEABIAAAAIgDADIADACIgFACQACAFAEACIgBAAIAAABIAAADIgIgBQgBAFgCAAgAAPgLIAAAAIAAgBg");
	this.shape_15.setTransform(27.9,-26.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#626773").s().p("AAxBUIABgFIAEgVIgFALIgDALIAAgPIABgGQACgKAJgNIgHAKIgIAOIgCAFIgBgEQABgKAGgNIAHgNIAJgJIgEABIAAgBIACgBIABgCIAHgHIAAAAIAAAAIgFABIAAgBIACgCIgBABIgDAAIgCgBIAAgGIgLAGIAEgLIAFAAIAAgDIgCgJIAEAAIgDgFIAHgEIgFgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgBIAGgFIgBgBIgKABIAAAAIAFgHIgEACIgFACIAAAAIAGgKIgMAHIABgDIABgHIgFAHIgGgEIgDAAIABABIADADIAAAAIgGgBIgBAAIgBAAIgIADIgDABIgGAEIgBAAIACgEIgHAFIAAAAIADgIIgHgBIABgDIgDAAIgHAEIAGABIAAABIgFACIAIACIgEAEIgFAEIAAAAIAHAAIgEADIgBAEIgBABIAGgCIAAAAIgFAFIgCAAIABAAIAEABIABAAIABgBIAFAAQgMAGgEAIIgBACIgBABIgBgCIAAgFIADgGIAAgIQgFACgFAGIgGAJIgCAEIAAgDIABgGQAAgFACgBIAJgEIgFgBIAFgCIAEgBIAAgCIgEAAIgBgBIAFgFIgHgCIAFgGIgFABIgCgCIgCgDIgBAAIAAAAIAAABIgHALIgBABIgDACIADgDIgGAAIgFACIgEAAIgJgHIAAgDIABgBIABAAIAFgCIgBgDIAAAAIgCgDIAAAAIABAAIABgBIAAAAIAFACIgBgDIADAEIAAAAIAAABIgEACIABACIAAABIgCACIgCADIADADIADACIACAAQAEAAAEgGIABgBIADgFIAAgDIAAgBIgBgDIgIgIIgBgBIAAAAIgLgBIgEAAIAHgEIgBgBIAAAAIgBgBIgFgFIADAAIADABIAAAAQgJgNgGAAQgFAAgSAOIgMAMIgNAKIgBABIgBAAIgGAGIgIAIQgCgBAAgFIABgLIAAAAIABAFIAOgNIAEgIIADgBIABgBIADgBIAAgCIAFgCIACgDIAEgCIAKgJIAJgEQAHgFACAAIAOAFIAEADIACABIAFALIgCgBIgBAAIAAAAIAHAKIgDABIAAAAIADACIAAAAIAEADQADgOAGAGIADAAIAAgBIgHgFIgDgFIACAAIAXgBIANgDIAIABIALABIACgBIAJAGIAEACQALAIAGAAIADAAIABAAIALgDIgKAGIACAAIAFgBIABAAIgHAEIAAABIAAAAIAEAAIAIABIAAABIAAABIgGAAIgBAAIAGABQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIAEgBIAFgCIgDADIAHAAIANgCIAFAAIABABIADACIgEgBIgHACIAJACIgEABIAHABIACACIgEAAIAGAEIgDAAIAFAFIgFABIAAgBIgBABIABAAIACAGIAAAAIgDgCIgEAAIAFADIAAAAIgCABIgJACIgBAAIACACIgBABIgDgBIgEABIABgBIgBAAIgIACIAFgIIABAAIgBAAIgHABIgGAEIAFgHIAAgCIgDACIgDADIAAABIgCAEIgBAAIAFAFIgDAFIAAABIAGACIgDADIAFADIAEABIgDABIAAABIgBAEIgHgGIAAgBIAAABIAAACIAAAAIgIgHIgBgBIABAHIACAKIABAAIgDAGIgCAGIABAAIAEgCIgRASIABAAIAMgGIgHAKIgIATIAAAGIABAAQAGgPAHgJIAJgLIACAKIABAKIAAAAIABgRQABgJAGgBIAAAKIAHgHIgBAKQAAgCAHgCIgBADQgLABAAAHIAAACQABADADAEIABAAIAFAFIABAGIAAABIgGgGIgCgFIgCgEIgBACQgEgFABgJIgBAFIAAANIAAAAIgCAWIgBABIgBADIAAABIgHALIgIAJIAGgJIAGgNIACgLIgBgMIgBgFQgDgEgBgHQgHAHgGAOIgDAHIgJAXIgKAVgAA6AkIADgEgAAVg+IAAAAIAAgBgAB/BaIAAgEIgBgOIgHANIgCACIgDABIgGADIgDAAIAFgDIAJgJIABgBIACgPIgCgOIACgBIACgDIABAQIgBAJIAAAAIAEgLIACAXIACgPIAAAJIgDALIgBAEIgBADgAghAHIAAgCIAAgBQAAgEADgHIABgCIAAABIAAAVQgCgCgCgEgAgjAAIgDAAIAAgKIABgCIADgHIgBAFIAAABIABAHIABAKIAAADgAgogZIAEgFIgEAAIABgCIAEABIAAAAIgBABIACAAIgBAFg");
	this.shape_16.setTransform(34.7,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.6,-32,28.4,27.9);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEACIAAgCIACABIAAABIgBAAgAgFAAIABgBIADABIgCACg");
	this.shape.setTransform(-1,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAIQgCgDgBgEIACgGIAHgEIAGACQADADABAEQAAADgDADIgGAEgAADADIABAAIABAAIAAgBIgCgBgAgGABIACACIACgCIgDgBg");
	this.shape_1.setTransform(-0.9,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626773").s().p("AgKATIgDgKIACgDIACgOIgCAHIgBgBIAAgMIABgEIAAgBIACgBIACgCIADAOIACgBIABgFIAEAFIgCAEIAAABIAGABIgCADIAFACIAEABIgCABIAAABIAAAAIAAAEIgJgFIAAgBIAAABIABADIgKgGIgBAAIABAEIgEADIAHADIgGAMIAAAAg");
	this.shape_2.setTransform(3.6,-3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777C88").s().p("AgJAeIAFAAIAAgDIgEgJIADAAIgDgGIAGgFQgEAAgBgCIABgEIACgBIADgFIAAgBIgCAAIgLADIAAgBIAFgHIgEACIgEADIAAAAQgBgDAFgHIgKAHIgBgCIAAgHIgEAIIgGgDIgDgBIACACIACADIAAAAIgGAAIAAAAIgBAAIAAgFIAAAAIgDAAIAAgBIAJgIIgIABIgIADQACgJALgBIAHAAIAFAEIANgLIABgBIALgEIgJAIIACAAIAFgDIABABIgGAEIgBABIABAAIAEgBIAHAAIABABIgGACIAAABIAEAAIAFAAIADgBIAFgDIgCAEIAGgBIANgEIAFgBIABAAIAAABIgHADIAJAAIgEADIAIAAIgCACIAGACIgDABIAFAFIgEABIgBAAIABAAIAAAAIADAEIABABIgFgBIgDAAIAFADIAAAAIgCABIgJAEIAAABIADABIAAAAIgEAAIgEABIAAgBIAAABIgIACIAEgHIAAgBIAAAAQgDAAgEADIgFAEIADgHIAAgCIAAgBIAAABIgCACIgDADIAAADIgBgBIAAADIgBAAIgBAFIgBABIgEgNIgCACIgBABIgBABIAAADIAAAMIAAABIADgHIgDAPIgBADIADAKIAAAEIgDABIgBgBIgCgGIgJAIg");
	this.shape_3.setTransform(2.1,-4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAEACIAAgCIABABIAAABIgBAAgAgEAAIABgBIACABIgCACg");
	this.shape_4.setTransform(4.5,-3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFAHIgDgGQAAgDACgEIAGgDIAFACIAEAHIgCAGQgCADgEABIgBAAQgCAAgDgDgAADADIABAAIABAAIgBgBIgBgBgAgFABIACACIABgDIgCAAg");
	this.shape_5.setTransform(4.6,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("AA6hmIAFAAIAFABQACAAABgCIAFgCIgCADIAGgBQAEgCAIgCIAFAAIABAAIAEACIgEAAIgHACIAJAAIgDACIAHAAIACACIgEAAIAGADIgDAAIAGAGIgEABIgBgBIAAABIABAAIADAFIAAAAQgCAAgCgCIgDABIAFADIAAAAIgCABIgJAEIAAAAQABABABAAIABABIgCAAIgDAAIgEABIAAAAIAAADIAAACIAAAIIgBAFIADADIAAAAIAGADIAAABIgEAAIAGAFIACACIAAABIgCAAIALAGIAEADIAFAEIACACIAEAOIAAAAIABAEIAJAQIADAIIABAKIAAAMIgBADIAAAEIgBAJIgCATQAAALABAHIgEgFIAAAEIAEAJIAAABIgBgBQgFgEAAgDIgGALIgBABIAAgBIgCgIIgDgGIABAJIgFgGIgCgGIABANIAAAAIAAAAIgDgDIgFgMIAAgBIgBgCIAAgBIgBgIIgDAMIAAABIgBABAh6g/IgBACIgBAAIgFAGIgGAJQgCAAgBgFIgCgLIAAgBQgBgOAEgCIAOgHIAJgFIADgCIAEgEIAJgIIAIgGIAHgIIAPAEIAFACIACAAIAPAFIACAAIAXgFQAHgCAGgEIAIAAIALAAIABgBIAKAEIAEACIASAEIADAAIABgBIALgEIgJAHIACAAIAFgCIAAAAIgGAFIAAAAIABAAIADAAIAJAAIAAAAAA6hmIgBAAIAAAAABAhoIgGACAB6AJIABgDIACgGIABAAIACgCIAAgCIAAgEAB5AMIgEABQgFABgBgDIgBgCIgCgGIgGgDIgBAAIgEgFIgBgCQgBgHAKgCIAEgBIAJgBQADgBACgHABlBWIgJAOIADgKIgBABIgEAEIgEADIAAAAIAAgEIAAABIgPAQIAFgMIAAgBIAAABIgSARIABgMIgMARIAAAAIAAgBIABgJIAAgGIgEAFQgGAGAAAEIgBgBIAEgLIACgJIgBgEIgDAGIgDAEIgLAQIgBAAQAEgGADgOIgFAFIAAAAIAAAAQACgCACgJIgIAGIgIAFIAKgaIgMAUIgHAIIAAAAIAAAAIACgKIACgLIgJAVIAAgIIgDgOIABAHQgIgPgBgLIAAgJIAAAQIgBACIAAgCIgIgPIgBAIIgBAFIgDgLIgBgEIgBgBAg5hOIAKAAIAAAAIgGgJIgLABIgEABIAGgFIAAgBIgBAAIgCgBIgFgEIADAAIADAAIAAAAQgLgLgGAAQgFABgPARIgKAOIgLAMAgbA3IAAAAIAAABIgDAKIgDgZIAAAAIgBAAIgEAFIgDAHIAAgCIAAgKIACgLIgEADIAAABIAAgBIACgPIgLgcIgKgbIgBgEIABgFIgCgCIABgDIAAgBIAAABIgCAAQgFACgDABIgHgBIgBABIgCABIgEAEIgIgEIgFgCIgCgGIgGACIgGgGIgHgFIgBAB");
	this.shape_6.setTransform(-3.8,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292421").s().p("AgCAEIACgDIACgDQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIgBADIgCADg");
	this.shape_7.setTransform(7.8,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAASIgBgCIgCgGIgGgDIgBgBIgEgFIgBgBQgBgHAKgCIAEgBIAIgBQADgBACgHIAEAOIAAAAIABAEIAAADIAAACIgCACIgBABIgCAGIgBADIgBACIgEACIgCAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAgAAGAFIgDAEIgCADIACAAIADgDIABgEIgBgBIAAABg");
	this.shape_8.setTransform(7.4,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444655").s().p("ABgAxQABAJgEAFIAAgBIAAgKIgDgOIAAgCIgBgEIAJAQIADAJIAAAQgAAaA7IAAgGQAAgJAEgKIAFgMIgLAJIAAAAIANgVIgDADIAAAAIAAgHIACgGIgBABIgDgKIgDgGIABAAIAJAGIAAAAIgBgDIABAAIAIAFIAAgEIAAgBIACgBIgEgBIgFgBIADgFIgHAAIAAgBIACgFIgFgFIABAAIABgDIAAgCIACgEIADgCIAAACIgEAIIAGgEQADgEADAAIAAABIgDAIIAAAAIAAABIAAgBIAHgDIAAABIABACIAAADIgBAIIgBAFIADACIAAABIAHADIAAABIgFAAIAGAEIACACIAAACIgCAAIALAEIAFAEIAEADIACACQgBAIgDAAIgJABIgFABIABgEQgGAEAAABIgBgJQgEADgCAEIgBgKQgFACAAAJIACAQIAAABIgDgJIgDgKIgIANQgFAKgEAPgAglAxIgBgNIAAgFIAAgNIgGAMIgBAIIgBgVIgJAMIgHAGIAAAAIAGgHIAFgPIADgNIgGAEIAAgCQADgIAMgHIgFABIgBABIgBAAIgFAAIAAAAIAGgGIgBAAIgFACIAAAAIABgEIAFgEIgIABIAAAAIAEgFIAEgFIgJgBIAEgCIABAAIgCgBIgFABIAGgGIAFAAIgBACIAHABIgCAIIAAAAIAGgGIgBAEIABAAIAFgFIADgCIAIgDIABgBIAAAAIAGABIAAgBIgDgCIgBgCIACAAIAHAEIAEgIIABAHIgBACIAKgIIgFAKIAAAAIAFgCIADgDIgDAHIAAABIAKgDIABAAIgGAHIgBABIABAFQADACADAAIgHAFIAEAFIgEAAIAFAJIAAADIgGAAIgCAMIAAAAIgCgHIgGANIgBAEIgFAUIgBAAIABgWIgBgGIgBAAIAAAAIgEAMIAAAAIgDgGIgBgCIAAAAIgDAFIAAABIgEAFIgBgLIAAAAQgDAFgEAKIgCAFQgDAMAAAHgAhLAMIgCgHIAAgBIgBgEIgBgGIAAgFIgCAAIABgBIAAAAIgBAAIgDAAIADgFIABgDIABgBIAGgMIgBgBIABAAIABABIABABIACACIAGgBIgEAHIAGAAIgDAHIABAAIAEAAIAAABIgEABIgEADIAFAAIgIAGIgBAGIAAAFIABAEIgBACIgBALgAAYAJIABAAIgBABgAhfgTIgDgDIABgDIACgCIAAgCIgBgBIAEgDIACADIgCgDIgBgBIgDgEIAKABIAAgBIgGgIIAAgBIACACIAJAGIABAEIAAABIAAADIgBAFIgBABQgDAGgFABIgCAAgAhXgzIgBAAIgDAAIAAgBIADgCIgIgIIAAAAIADAAIgHgKIAQAFIADAEIAIADIAAABIgCAAQgHgDgBANg");
	this.shape_9.setTransform(0.1,-1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("ACFBnIAAAAIAAABgAB6BjIABAAIAAAAgAAtBiIAAAAgAAtBhIABAAIgBABgABFBSIAAAAIAAAAgAgFBKIABAAIAAACgAAKBKIAAgBIAAABgAgGBEIAAAAgAgHBEIABAAgAgkAhIABAAIgBABgAAAAdIABAAIAAAAgABnAbIAAAAgAB1ALIAAgBIABABgAAvAEIAAgBIAAABgAgagRIAAABIABACgABCgTIAAgBIABABgAA2gfIAAAAIAAABgABLggIAAAAIAAAAgAgFgzIABAAIAAAAgAgig0IAAAAIAAAAgABVg0IAAgBIAAABgAiEg9IAAgCIAAACgABbhHIAAAAIAAABgABihKIAAAAIABgBIAAABgABphKIABgBIABABgAgDhMIgBAAIABAAgABehQIABAAIAAABgAg6hbIAAAAIABAAgAAQhcIAAAAIAAAAgAgyhmIgBgBIACABg");
	this.shape_10.setTransform(-4.6,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#977168").s().p("AgJAGIAEgDIgCgBIACgDIgBgBIgIgBIAOgIIAAAAIgFAGIADgBIAKgBIAHAHIAAABIgLgBIABAEIgFgBIAAAAIAAABIgBAAIAAAAIABADIABgBIABADIgEADQgEgCgDgEg");
	this.shape_11.setTransform(-10.1,-5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("ABNBHIgBACIACgHIAIgZIgCAYIAAABIgBABIAAABIgJANgAAWBCIgIAKIABgPQgEAJgHAGIAFgUIgHAJIgGAIQAGgKAIgeIABgDIAFgPIAGgdIAAgBIgBABIgHARIgJARIgEAGIgGAJIgJAUIgBgBIAEgSIAAgEIACgEIAEgYIAAABIgMAZIAAACIgDAFIgCARIgDgNIAAgDIAAgCIABgMIAAgOIAAAAIAAAAQgDAEgDAOIgCAVIAAAAIgEgQIAAgTIgDATIAAAAIgBgHIgBgOIABgMIgBAAQgFAQABAQIgCgEIgCgMIgCgQIAAgJIgBgOIgCAAIgGAHIgEgaIgHAEIgBgKIAEgTIgIADIgCAAIgBAAIgDgCIACgEIAAAAIgBAAIgCABIgHACIgHgBIgCABIgGgFIgIgEIAEgBIAKABIAFABQADAAAAgFIAIAAIALAEIADAAIAEgDIAGgBIgBAEIgDAFIAAACIADgBIgDAGIAFgBIABAGIgBAGIAAADIABALIADAAIADAGIAGAGIgEgVIAAgCIABgFIAEgJIAJgKIABAIIgCAHIABAEIABACIABgBIAGgFIgDAOIgFAOIgGAHIAAABIAHgGIAJgMIABAUIABgHIAGgMIAAANIAAAEIABAOIABAEQAAgGADgMIACgFQAEgLADgEIAAAAIABAKIADgEIAAgBIADgFIAAAAIABABIADAHIAAAAIAEgMIAAAAIABAAIABAFIgBAXIABAAIAFgUIABgEIAJgHIAAABIAAgBIAJgIIACAGIACABIAEgBIABAAIgCACIAAABIABAAIADgCIABAAIgGAIIgBACIgCACIgBABIABAAIAFgBIgIAKIgFANQgEAOABAKIABAEIABgGIAGgOIAFgKQgGANAAAJIAAAHIACAPIABgNIADgMIABAXIgBAFIgDAVIAHgWIAFgYIACgHQAEgPAFgHIAGAKIACAEIAEALIAAAMIgEAOIgFAJIAHgKIAEgLIAAgBIAEABIADgDIABAAIAFAEIABgBIABAAQAAAEADAEIABADIgBABIgDgDIABAKIgEgEIgCgDIgCAHIgCgEIgDgEIgCAKIgBAIIgDgJIgBAAIgGAJIgBAHIgCgIQgBgFACgGIgBgEIAAAAIgIATQgFAPACAIIABADIAAAAIgBgDIgEgJIAAAAIgBAMIgBAAIAAgBIgDgIIAAAAIAAAAIgDAGIgCAEIgBAEIgCgRIgEAOIgBAAQAFgagBgIIgGAXIgIAPgABaBBIAAgBIgBgCIAAgBIAAgDIACgFIAAAJIABABIACAOgABtAjIgCALIgGAKIAAAAIAEgVIAAgCIgMAQIAJgXIAGgEIADgCIABgCIABAEIAAAAIAAAVIAAANIgBAEgABmAXIAAgBIAFgUIAEALIgHAJIgFAFgABgAKIgBgCIgBAAIgDABIgBgDIgBAAIgDAEIgCgJIgGAHIgCgVIAAgBIgCgNIAAgEQABAJAEAEIABgDIADAEIACAEIAHAGIABAAQACAEAEgBIAEgCIgGARgAAugXIgDAFg");
	this.shape_12.setTransform(-2,4.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777C88").s().p("ABcAVIACAHIgJAGgAhcgCIAAgCQgBgNAEgDIANgGIAKgFIACgCIgBADIgFACIABADIgDABIgBABIgDABIgCAIIgMAPg");
	this.shape_13.setTransform(-8.6,-3.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4C3C1").s().p("AAQByQAEgGADgOIgFAFIgBAAQADgCACgJIgIAGIgIAFIAKgaIgMAUIgGAIIAAAAIACgKIAAgLIgIAVIgBgIIgCgNIABAGQgIgPgBgLIAAgJIAAAQIgBAAIgIgPIgBAIIgBAFIgEgKIAAgEIgBgCIAAgBIgBAAIAAABIgCAKIgEgZIAAAAIAAAAIgEAGIgDAGIAAgCIAAgJIACgMIgEADIgBAAIADgOIgMgcIgKgbIgBgFIACgEIACAAIACAAIAIgDIgFATIABAKIAHgEIAFAaIAFgHIACAAIACANIAAAJIACARIACAMIABAEQAAgQAFgQIABAAIgBAMIABAOIABAHIAAAAIACgTIAAATIAFAQIAAAAIACgVQACgOADgEIABAAIgBAOIgBAMIAAACIAAADIAEANIACgRIACgFIAAgCIAMgZIAAgBIgEAYIgBAEIAAAEIgEASIAAABIABAAIAIgUIAGgJIAFgGIAJgRIAHgRIABAAIgHAdIgFAPIgBADQgIAegGAKIAGgIIAHgJIgEAUQAHgGAEgJIgBAPIAIgKIgCAMIAIgPIAGgXQACAIgFAaIABAAIADgOIADARIABgEIACgEIACgGIAAAAIADAIIAAABIABAAIACgMIAAAAIADAJIABADIAAAAIgBgDQgBgIAEgPIAIgTIAAAAIABAEQgBAGAAAFIACAIIACgHIAFgJIABAAIAEAJIABgIIABgKIADAEIADAEIACgHIABADIAFAEIgCgKIAEADIABgBIgBgDQgDgEgBgEIgBAAIgBABIgEgEIgBAAIgEADIgDgBIAAgFIABAAIAGgHIACAJIACgEIABAAIABADIAEgBIABAAIABACIABABIAGgSIABgDIABgCIACgFIAEAOIABAOIgBACIgFgLIgEAUIAAABIgEAEIAEgBIgJAXIAMgQIAAACIgFAVIAAAAIAGgKIACgLIAEAZIABgEIAAgNIAAgVIAAAAIgBgEIAFgNIAEANIAAAFIABADIgBAJIgCATQgBALACAHIgFgEIAAADIAFAJIgBAAQgFgEAAgDIgHALIAAAAIgCgIIgDgGIABAJIgFgGIgCgGIABANIAAAAIgDgDIgDgOIgBgBIAAgJIgCAFIAAADIgBgIIgDAMIAAABIAAgBIACgYIgIAZIgCAHIgEADIgEADIAAAAIAAgEIAAABIgPAQIAFgMIAAgBIAAABIgSARIABgMIgMARIgBgBIACgJIAAgGIgEAFQgGAGgBAEIAAgBIAEgLIABgJIAAgEIgDAGIgDAEIgMAQgAAdBbIAAAAgAAdBaIAAABIABgBgAgVA9IgBAAgABiBJIAAABgAhng2IgGgCIgBgGIgGACIgGgFIgHgFIgBABIALgNIAKgNQAPgSAEAAQAHgBAKAMIgBgBQgMgDAAADIgEAAIADACIAEADIgNAEIgJAHIAAABIAMAAIgGAEIgBAHIALgBIgDAHIACAFIgKgBIgDABIAHAEIAGAFIgBACIgFAEg");
	this.shape_14.setTransform(-3,3.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B0928A").s().p("AgBAUIgDgFIAEgHIgMABIACgHIAFgDIgLAAIAAgBIAJgHIALgEIgDgDIgCgCIACAAQAAgDAMADIACABIgDgBIgCABIAEADIACABIABABIgOAIIAIABIAAABIgBADIACABIgEADQACAEAFACIgBAAIgBABIABAEIgIAAQAAAFgDAAgAAOgNIAAAAIgBAAgAAPgRIAAAAIABAAg");
	this.shape_15.setTransform(-11.8,-5.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#626773").s().p("AA8BJIABgEIgBgXIgCAMIgBANIgDgPIAAgHIADgMIAHADIAAAFIACAAIABgEIAEACIgCAFIgFAZIgGAWgABYBHIAEgPIAAgEIADABIAAAEIAAABIgFAMIgHAKgAB6BDIAHgKIABgBIgBgPIgEgOIABgBIACgDIAEAOIAAAKIAAABQADgFgBgIIAGAXIAAgPIABAJIAAAMIgBADIAAAEIgBgEIAAgEIgEgOIgFAOIgBACIgEACIgFAEIgEABgAAwA1QgBgJACgKIAHADIgGAOIgBAGgABcAxIAAgEIgEgNIgBgDIgHgKQgDAEgDAJIgDgDIAEgKIAHgMIAEAKIACAJIAAgBIgBgQQAAgJAEgBIACAJQABgFAEgCIABAJQABgCAFgEIAAAFQgKACABAIIAAABIAFAGIABAAIAGADIABAHIAAABIgGgGIgDgEIgDgEIgBADQgDgEgCgKIAAAFIADANIAAAAIACAXgABHArIAAgCIADgJIASARIAAADgABAAoIAAgCQAAgGADgHIAEAEIgEAMgAA4AlIAAgBIAFgLIgEAMgAgfABIAAgFIAAgBIABgFIADgJIAJgKIABAHIgCAHIABAFIABACIABgBIABgDQADgIALgHIgEABIgCABIgBAAIgEAAIAAAAIAAAAIAFgHIgBAAIgEADIAAgBIABgEIAEgDIgHABIAAAAIADgGIAEgDIA/A8IgBAAIgEANIgCAGgAA/AVIgCAEgAA/AVIAAgBIAAABIgHgGIAHgLIgEACIAAgBIABgCIABgCIAHgHIAAgBIgBAAIgEACIgBAAIACgCIgBAAIgDABIgCgBIgCgHIgKAJIADgMIAFAAIAAgEIgEgJIADAAIgDgEIAHgGQgEAAgCgCIgBgEIABgCIAGgGIgCAAIgKACIAAAAIAEgIIgEADIgEADIAAAAIAEgKIgLAHIABgCIgBgHIgDAIIgHgDIgCAAIABABIACACIAAABIgFgBIgBAAIgBABIgIAEIgDABIgEAGIgBAAIABgFIgFAHIAAAAIABgIIgHgBIABgCIgEAAIgEADIgWgVIAAAAIACAAIAAgBIgHgEIgEgDIACAAIAXgGIANgGIAIAAIAKAAIACgBIAKAEIADACIASAEIADgBIACAAIALgEIgJAHIACAAIAEgBIgFAEIAAAAIABAAIADAAIAIAAIABAAIAAABIgGACIgBAAIAAAAIAAAAIABAAIAFAAIAFABQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIAFgCIgDADIAGgBQAFgCAIgBIAFgBIABABIAEABIgEAAIgHACIAJAAIgEACIAIAAIACACIgEABIAGACIgDAAIAGAGIgFABIAAAAIAAAAIAAAAIADAFIAAAAIgDgCIgDABIAEADIAAABIgCABIgJADIAAAAIACABIgBABIgCAAIgEABIAAgBIgBAAIgGAEIADgIIAAgBIAAAAQgDAAgEADIgFAFIADgIIAAgDIgCADIgDADIAAACIgBAEIgBAAIAGAEIgCAGIAAABIAGAAIgDAEIAGACIADABIgBABIAAABIAAADIgIgEIgBgBIAAABIABACIAAAAIgJgGIgBAAIACAGIADALIACgBIgDAHIAAAHIAAAAIAEgEIgOAVIAAAAIALgJIgEALIgCAGgAAIhCIAAAAIAAgBgAghAKIgBgBIAAgBIABACIgEgGIgCABIgBgHIAEABIACAJIABgIIACABIADAQgAgkgBIgBAAIgBgHIAAgBIgBgGIgBAHIAAADIAAADIhSgiIA2ggIADACIABABIABABIABAAIgGAFIADgBIALgBIAAAAIACABIAJAHIACADIAAABIAAAEIgCAEIgBABQgDAGgFABIgCAAIgCgBIgDgCIABgEIACgCIAAgBIgBgBIADgDIAAgBIgBgBIgCgDIABADIgGgBIAAAAIgBABIgBAAIAAAAIACAEIABgBIABADIgFACIAAABIgBAAIABAFIAKADIADABIAFgDIAGgBIgCADIACgCIABgBIAFgMIgBgCIABAAIABABIACACIACACIAFgBIgEAGIAHAAIgEAHIACAAIAEAAIAAABIgFACIgEADIAGAAIgIAFIgBAHIAAAGIABADIgBACIgBADgAgugTIAGgBIAAgFIgCAAIABgBIgBAAIgEAAIAAABIAEAAgAiKgZIgCgKIABAAIACADIALgPIACgIIAEgCIABgBIACgBIgBgCIAFgCIACgEIAEgDIAIgJIAIgGIAIgIIAPAFIAEABIACAAIAHAKIgCAAIgBAAIABAAIABACIgJAFQgLgLgGABQgEAAgPASIgKANIgLANIgCABIAAAAIgFAHIgHAIIAAAAQgCAAAAgFgAgJguIADAAIgBABgAgQgvIAEgCIADADgAgNgyIABgBIABABIgBABgAgPg0IACACIgFAAgAgwhBIgBAAIgEgBIAAgBIAEgCIgHgGIAKgGIAJAIQgHgEgBAOgAhGhGIADAAIABAAIgCACgAhBhGIAAAAIABAAgAhChGIABAAIAAAAgAA5hUIAAAAIgBABg");
	this.shape_16.setTransform(-3.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-10.6,30.2,26.2);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEACIAAgBIABgBIABACIgBABgAACAAIACgCIABACIgBABg");
	this.shape.setTransform(-7.3,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAHIgEgHIADgGQADgDADAAIAHADIADAGQAAAEgCADQgDADgEAAgAgDACIAAABIABABIACgBIgCgCgAADAAIADACIABgCIgCgBg");
	this.shape_1.setTransform(-7.5,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626773").s().p("AAMAXIgHgLIAGgEIgEgDIgBgEIgJAIIAAgBIABgCIAAgBIgBABIgHAGIgBgEIAAAAIAAgBIgCgBIAEgCIAEgCIgDgCIAHgCIAAgBIgEgFIAFgFIABAFIABAAIADgOIABACIACACIABABIAAADIACAMIAAABIgEgHQAAAHAFAHIACACIgCAKIABAFg");
	this.shape_2.setTransform(-11.8,-1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777C88").s().p("AAEApIAAgFIACgKIgCgCQgEgIAAgHIACAHIAAgBIgBgMIAAgDIgBAAIgBgCIgCgCIgCANIgCAAIgBgFIAAAAIgBgEIAAABIgBgBIgEgDIgCgCIAAgBIAAABIAAACIAEAGIgFgDIgIgCIAAAAIAAABIAGAHIgIgDIgBAAIAAABIgEAAIgEAAIABAAIABgCIAAAAIgJgCIgBAAIAAgBIADgDIgCAAIgFACIAAAAIABgBIADgEIAAAAIAAgBIAAABIgGgBIAGgGIgEAAIAFgEIgBgBIAHgBIgEgCIAJgBIgHgCIgBgBIABgBIAFAAIANADIAHAAIgCgEIAEADIAEABIAEgBIAFgCIAAAAIgGgBIAAgCIAHgBIAFAAIAAAAIAAAAIgHgDIABgBIAFABIACAAIgJgGIALACIAAABIAPAJIAFgEIAHgBQALgBACAJIgHgDIgJABIALAGIAAABIgEABIgBABIADADIgCABIgBAAIgFABIAAAAIACgDIABgCIgCACIgGADIgFgIIABAIIgBABIgLgFIAGAJIAAAAIgEgCIgFgCIAGAHIAAAAIgKgBIgDAAIAAABIAEAFIACABIABADQgBADgDAAIAGAFIgDAFIAEAAIgCAJIAAADIAFAAIAEAMIgLgIIAAAHIgCABg");
	this.shape_3.setTransform(-10.9,-3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEACIAAgBIABgBIABACIgBABgAABAAIACgCIACACQAAAAAAAAQAAAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_4.setTransform(-12.9,-2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFAHIgDgHIADgGIAFgDIAGADIADAGQAAAEgCADQgDADgEAAQgCAAgDgDgAgDACIAAABIABABIACgBIgCgCgAADAAIACACQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgCgBg");
	this.shape_5.setTransform(-13,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("AB0hNIABACIABAAIAGAFIAHAIQACAAABgFIgBgLIAAgCQAAgNgFgCIgOgEIgJgEIgDgCIgFgDIgKgJIgJgDIgIgHIgOAGIgFACIgCABIgOAHIgCAAIgYgCIgNgEIgIABIgLABIgCAAIgJAFIgEACQgKAHgGAAIgEAAIAAAAIgNgDIALAGIgCAAIgGgBIAAAAIAGAEIABABIgBAAIgEgBIgIABIAAABAB0hNIgMgLIgMgMQgSgPgEAAQgGAAgJANIgBABIAEgBIACAAIgEAEIgCABIAAABIgBAAIAHAEIgEAAIgLABIgFAJIAAABIAKgCAAmA0IABAAIAAABIAEAKIAAgZIAAAAIAAAAIAFAFIAEAFIAAgBIgCgKIgDgLIAEADIAAAAIAAgBIgDgNIAGgeIAHgcIAAgEIgCgFIACgCIgCgDIAAgBIABAAIACABIAHABIAHgCIACABIACACQACADACgBIAIgFIAFgDIABgGIAGACIAFgHIAGgFIABAAAhKhcIAGABIABAAIgGABIgEABQgCAAgCgBIgFgCIADADIgGAAIgOgCIgFAAIgBABIgDABIAEAAIAHACIgJABIAEACIgIABIgCABIAEAAIgFAEIADAAIgFAGIAFAAIgDAGIAAAAIAEgCIAEAAIgFADIAAABIACAAIAJADIAAAAIgBACIgCABIACgBIADAAIAEAAIAAAAIAAADIAAADIACAIIABAEIgDAEIAAAAIgFAEIAAAAIAEAAIgFAFIgBADIAAABIACAAIgKAHIgEADIgFAFIAAACAhyhIIAAAAIAAAAgAhEBrIAQAOIgGgLIAAgBIAAABIAUAOIgDgLIAOAPIABAAIAAgBIgCgJIgCgGIAFAEIAIAJIAAgBIgFgKIgDgJIAAgDIAEAFIAEADIANAPIABAAIAAAAIgKgTIAGAEIAAAAIAAgBIgGgKIAKAGIAHADIgNgYIAOASIAIAHIAAAAIAAAAIgEgKIgDgKIANATIgBgIIAAgNIABAGQAFgPAAgLIgBgKIACAQIABACIAAgCIAGgQIACAHIACAGIACgLIAAgEIAAgCAhyAeIADABQAFABACgEIAAgBIABgHIAFgEIABAAIAEgHIAAgBQAAgIgLAAIgEAAIgJAAIgEgHIgDANIAAAAIAAAFIAAAEIAAABIADADIAAABIADAFIABADAh8ALIgHARIgBAKIgBAJIACALIABAEIABADIADAIIADATIADASIACgFIABAEIgCAJIAAABIAAgBIAFgHIAHAKIAAAAIAAgBIABgIIACgGIABAJIAEgGIABgGIABAMIAAAAIAAAAIADgDIACgMIAAgCIABgCIAAgBIAAgIIAFALIAAABIABABAhUBlIAKAMIgEgJIABABQABAAADACIAFADIAAAAIAAgDIAAgB");
	this.shape_6.setTransform(-4.1,2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292421").s().p("AgBABIgBgDQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIACACIACADIgCABg");
	this.shape_7.setTransform(-15.3,4.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBAUIgEgCIgCgCIgBgCIgDgGIgBgBIgCgCIgBgCIAAgDIABgEIAAgBIACgOIAFAIIAIgBIAEABQALABAAAHIgBACIgEAFIAAABIgGAEIgBAGIAAACQgCADgCAAIgBAAgAgFAFIABAEIADADIACgBIgCgDIgDgDIgBgBIAAABg");
	this.shape_8.setTransform(-15.1,3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444655").s().p("AhdBHIABgKIAHgRIAAAEIABACIgCAOIABALIAAAAIgDgMIgDAXgAgUA/QgFgPgHgJIgJgMIgBAKIgCAKIgBgBIAAgQQgBgJgGgCIAAALQgCgEgEgCIAAAJIgHgFIABAFIgEgBIgJABIgFgIIABgCIAFgFIADgDIAKgHIgCAAIAAgBIACgCIAFgFIgEAAIAAAAIAFgDIAAgBIADgEIgCgEIgBgIIAAgCIAAgEIAAAAIAIACIAAABIAAgBIAAAAIgFgHIAAgBIAHACIAGADIgFgHIAAgCIADACIADAEIAAABIACADIAAAAIgEAGIACAEIAAABIgGACIAEADIgGACIgDACIACACIAAAAIABAEIAHgGIABAAIgBADIAAAAIAIgHIABgBIgBAHIgBAKIgCAAIADAGIABAGIAAAAIgFgDIARAUIAAAAIgMgIIAGALQAGAKABAJIAAAGgAAlAfIgDgGQgFgKgEgDIAAAAIAAALIgDgFIAAgBIgFgEIAAAAIgBACIgBAHIgBAAIgGgLIAAgBIgBAAIAAAGIAFAXIgBAAIgIgUIgBgEQgFgKgDgCIgBAHIAAAAIgFgLIgEAAIgBgDIADgJIgEABIADgGIgHgEIAFgEIABgEIgCgBIgGgFIACgBIAKABIAAAAIgGgHIAFACIAEADIAAAAQABgDgGgHIALAGIgBgCIAAgIIAEAIIAGgDIACgBIgBABIgCADIAAAAIAGgBIABAAIABAAIAIADIADACIAGAEIABAAIgCgFIAGAGIABAAIgDgIIAHgBIgBgDIADAAIAIAFIgGAAIgBABIAAAAIAGACIgJACIAEAEIAFAEIAAABIgIgBQADABACACIACAEIAAABIgGgCIAAAAIAGAFIAAABIgEAAIgCAAIgBgBIgEAAQALAGAEAIIACACIgHgDIAFAMIAHAMIAGAHIAAAAIgHgFIgKgKIABAVIgCgIQgFgJgCgCIABANIAAAFIACANIgBAFQAAgHgFgLgAgXANIAAgBIAAABgABHABIgBgBIAAgDIAAgGQAAgFgCgCIgJgEIAFAAIgFgDIgEgBIAAgCIAEAAIABAAIgEgGIAGgCIgFgFIAFAAIADgCIACgCIAAgBIABAAIAAACIAHALIABABIACACIAEAGIgFAAIAAAAIAAAAIABABIgCAAIAAAFIAAAGIAAAFIAAABIAAAGIgBALQAAgFgEgHgABNgkIgBgBIgCgEIAAgEIAAgBIABgDIAIgIIACgBIAAABIgGAJIAAAAIAKgCIgCADIgBACIgCAEIACgEIAFACIgCACIAAABIADACIACADIgDADIgDACIgCAAQgFAAgEgGgABDhEIgDAAIAAAAIAHgGIADgEIAOgHIgEALIABAAIABAAIgHAJIAEABIAAABIgEABIAAAAIgDADQgEgNgFAEg");
	this.shape_9.setTransform(-8.1,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("Ah3BzIAAgBIAAABgAhuBtIABAAIgBABgAgiBhIACAAIgBAAgAg7BVIAAAAIABAAgAgCBFIABAAIAAAAgAANBDIABAAIgBACgAAOA8IAAAAIAAABgAhkAkIAAAAIABAAgAAAAYIABAAIgBAAgAAmAXIABgBIAAABgAh1AVIAAABIAAAAgAgvAFIAAAAIAAAAgAhGgPIAAAAIgBABgAAWgYIABgBIgBACgAhRgaIABAAIAAAAgAg7gcIAAAAIAAAAgAhdgtIABgBIAAABgAgDg4IAAgBIABABgAAZg9IAAAAIAAAAgAhlg/IAAAAIAAABgAh1hBIABAAIgCABgAhuhBIAAgBIABABIAAAAgAhrhHIABAAIAAABgAgIhQIABgBIgBABgAB4hUIABgCIAAACgAgeheIABgBIAAABgAArhnIABgBIgBABgAAhhxIABgBIAAABg");
	this.shape_10.setTransform(-2.9,3.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#977168").s().p("AAAAKIAAgDIABAAIACgDIgBgBIgBAAIAAAAIgBAAIgEABIABgDIgKACIAAAAIAFgIIAKgBIAEAAIgGgEIAAgBIAOAGIgHADIgBAAIADADIgDABIAFADIgHAHg");
	this.shape_11.setTransform(1.2,-5.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("AhFBPIgBgBIAAgBIAAAAIgFgYIALAYIACAGIgBgBIAFAKgAhOBMIAAgBIgBgIIADAEIABADIgBADIAAABIgDAMgAgaBOIgBgDIgDgGIgBAAIAAAAIgCAIIAAABIgBAAIgCgLIgBAAIgBAKIgBACIAAAAIAAgCQABgJgHgOIgKgSIAAAAIAAAEIACALIgBAIIgCgHIgIgIIAAAAIgCAKIgDgJIgDgJIgCAEIgCAEIgDgFIgCADIgDAEIABgKIgEADIgBAAIAAgDIAEgJIAAAAIABACIAEgGIABAAIAEADIADgCIABABIAGAKIAIAJIgGgJIgFgMIgDgMIADgLIABgEIAEgLQAHAGAFAOIADAIIAJAWIAKAVIgHgVIgBgEIgCgXQACAEACAIIADAMIABgPIgCgGQgCgLgIgMIAHAKIAHAOIADAFIAAgEQAAgKgFgNIgIgMIgIgJIADABIABgBIAAAAIgCgCIgCgCIgGgHIAAAAIAFABIAAAAIAAgBIgCgCIABAAIADABIACgBIABgHIALAHIAAAAIAAAAIAKAFIABAEIAIAUIABAAIgFgXIAAgGIABAAIAAABIAGALIABAAIABgHIABgCIAAAAIAFAEIAAABIACAFIAAgLIAAAAQAEADAFAKIADAGQAFALAAAHIABgFIgCgNIAAgFIgBgNQACACAFAJIACAIIgBgVIAKAKIAHAFIAAAAIgGgHIgHgMIgFgNIAHADIABABQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgFQgBgEgCgCIAAgIQAFACAEAHIAGAJIACAEIAAABIgBAWIAFgHIACgGIADAAIAAgLIgBgCIgCgHIAAgGIAGAAIgEgFIAEAAIAAgBIgEgGIgCgDIAGABIAEABIAEAAIAKgGIAHgBQABAFADAAIAFgBIAKgDIAEAAIgIAGIgFAGIgCgCIgGADIgIgCIgCgBIgBAAIAAABIADADIgDACIgCAAIgBAAIgJgBIAIASIAAALIgIgCIgBAZIgHgGIgBAAIAAAPIABAJIAAAQIABAMIgCADQgBgPgIgOIAAAAIACAKIACAOIgBAGIAAABIgFgSIACASIgCAQIAAAAQAAgFgEgOQgGgOgDgDIgBAAIAAAAIAEAOIACAKIAAACIAAAEIAAANQAAgGgGgKIgCgFIgBgCIgPgXIgBAAIAIAWIACAEIABAEIAGASIgBAAQgEgJgHgJIgIgJIgFgEIgKgQIgKgQIAAAAIAAAAIAKAcIAHAOIABADIASAlIgHgGIgIgIIAHATIgLgOIACAPQAAgDgJgGIADAMIgKgNIgJgXQAAAJAHAYIAAAAIgFgMIgBARgAhkBHIgCgMIgDgVIAAAAIAAgEIACABIADADIAHADIALAVIgOgOIABACIAHAUIgBAAIgGgJIgEgKIgBAZgAhgAlIgJgIIAEgLIAHASIAAABIADAEgAhjAIIAEABQAEABACgEIAAAAIAHgGIABgEIADgEIABADQADgGABgJIAAAFIgBANIAAAAIACAWIAAAAIgIgGIAAAJIgDgDIAAAAIgBADIgFgBIgBAAIAAACIgBABgAgsgPIACADg");
	this.shape_12.setTransform(-5.7,4.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777C88").s().p("AhZAnIABgHQADACAFAKgABLgaQgBAAgCgHIgDgBIgBgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIABgCIgFgCIgCgDIADACIAJAEIAOAEQAFACAAANIAAACIgCAEg");
	this.shape_13.setTransform(0.1,-3.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4C3C1").s().p("AghBrIACALIgTgOIgBgBIAAABIAGALIgQgOIAAgBIAAABIAAADIAAAAIgFgDIgEgCIgDgHIgLgXIAGAXIAAABIgBgBIgFgLIAAAIIAAABIgBgDIgCgFIABAIIAAACIgBAOIgCADIgBAAIgBgMIgBAGIgDAGIgBgJIgCAGIgCAIIAAABIgHgKIgFAHIAAAAIACgJIgBgEIgCAFIgCgSIgEgTIgDgIIAAgDIAAgFIACgOIAHANIAAADIAAABIACAVIACAMIABAEIABgYIADAKIAHAJIABAAIgIgUIAAgCIANAOIgLgWIADABIgEgEIAAgBIgHgSIgDAKIAAgBIgCgOIACgPIACAFIABADIADACIAIARIABgBIAAgCIABAAIAEABIABgDIAAAAIAEADIAAgJIAIAFIABABIAAAEIgEACIgDgDIgBAAIgFAFIgBgBIAAAAIgDAJIAAADIABAAIADgDIgBAKIAEgFIACgDIACAGIACgEIADgEIADAJIACAJIACgKIABAAIAHAIIADAHIABgIIgDgLIAAgEIAAAAIALASQAHAOgCAIIAAADIAAAAIABgDIACgKIABABIACALIABAAIAAgBIABgIIABAAIAEAGIABADIACAEIAAgRIAGANIAAAAQgHgZAAgIIAJAWIAKAOIgDgMQAIAGABADIgDgPIAMAOIgGgUIAHAJIAHAGIgTglIgBgDIgGgOIgLgdIAAAAIALARIALAPIAEAFIAHAJQAHAIAFAKIABAAIAAAAIgGgSIgBgEIgCgEIgIgWIABAAIAOAXIACACIACAFQAFAKAAAGIABgNIgBgEIAAgCIgCgLIgDgNIABAAQADADAGAOQAEANgBAGIAAABIAAgBIADgQIgDgSIAGASIAAgBIAAgGIgBgOIgCgMIAAABQAIAPABAPIACgEIgBgMIAAgRIgBgJIAAgNIABAAIAGAGIACgaIAHADIAAgLIgHgSIAIABIACAAIACAAIABAFIAAAEIgGAcIgGAeIADANIgBABIgDgDIADALIACAKIAAABIgEgFIgFgFIgBAAIAAAAIAAAZIgDgKIAAgBIgBAAIAAABIAAACIAAAEIgDALIgBgGIgCgHIgGAQIgBAAIgCgQIAAAKQABALgGAPIAAgGIgBANIABAIIgMgTIACAKIAFAKIAAAAIgIgHIgOgSIANAYIgIgDIgJgGIAGAKIgBABIgFgEIAJATIgBAAIgNgPIgDgDIgEgFIABADIACAJIAFAKIAAABIgIgJIgFgEIABAGIADAJIgBABgAgOBhIABAAIgBAAgABWg9IgCgCIAGgGIAHgFIgDAAIgKACIABgFIgEgGIAMgCQABgDgEgCIgGgEIALgCIAAgBIgKgFIgMgDIADgDIADgCIgEAAIgLABIgDABQAKgNAFAAQAFAAASAPIAMAMIALALIgBAAIgFAFIgFAHIgHgCIgBAGIgEADIgIAFIgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBgBgBAAg");
	this.shape_14.setTransform(-4.8,3.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B0928A").s().p("AgCAPIgIABIAAgEIgBAAIgBAAIAHgHIgFgDIACgBIgCgDIAAgBIAIgCIgPgGIABgBIACgBIAEgEIgCAAIgEABIAAAAIADgCIALgBIADAAIgCACIgDAEIALACIAKAGIAAAAIgLACIAGADQADACAAADIgMACIAEAGIgBAGIgGABQgCAAAAgFgAgOgMIAAAAIABgBg");
	this.shape_15.setTransform(3,-5.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#626773").s().p("Ag2BSIgJgXIgDgHQgFgPgGgHIgFALIgBAFIgCAMIACAMIAGAMIAFAJIgIgJIgFgKIgBgBIAAgEIgBgBIgDgWIAAAAIABgOIAAgEQAAAJgEAGIAAgDIgDAEIgCAEIgGAHIAAgBIABgHIAFgEIABAAIAEgHIAAgBQABgIgLgBIgBgEIAGAFIAAgKQAEACACAFIAAgLQAHACABAIIAAARIAAABIACgKIABgKIAJAMQAHAJAGAPIABAAIAAgGQgCgJgGgKIgGgLIANAIIAAAAIgRgUIAEADIAAAAIgBgHIgCgFIABAAIABgLIABgGIgBABIgIAHIAAgBIABgCIAAgBIgBABIgGAGIgCgEIAAgBIgCgBIAEgCIAFgCIgDgDIAGgCIAAgBIgDgFIAFgFIAAAAIgCgDIgBgCIgDgDIgCgCIAAACIAEAHIgFgEIgHgBIgBAAIABABIAEAHIgHgCIgCgBIABABIgEAAIgCAAIgBAAIACgCIgBAAIgJgDIgCAAIAAgBIAEgDIgDAAIgEACIAAAAIADgGIgFAAIAFgGIgDAAIAGgEIgFAAIADgBIAHgBIgEgCIAJgBIgHgCIgEAAIADgBIABgBIAGAAIAMACIAHAAIgCgDIAEACIAEABIAEgBIAGgBIAAAAIgHgBIAAgBIAAgBIAIgBIAEABIABAAIgBgBIgGgEIABAAIAFABIACAAIgLgGIANADIABAAIACAAQAHAAAKgHIAEgCIAKgFIABAAIALgBIAIgBIANAEIAXACIACAAIgCAEIgIAFIAAABIADAAQAGgFADAOIAEgDIAAAAIADgBIAAgBIgDgBIAHgKIAAgBIgBABIgCABIAFgLIACgBIAFgCIAOgGIAIAHIAJADIAKAJIAFADIACADIAEACIAAACQAAAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIABABIACABQACAHACAAIANAOIABgEIABAAIAAALQAAAFgCAAIgIgIIgGgFIAAAAIgCgCIgLgLIgMgMQgSgPgFAAQgFAAgKANIAAABIAEgBIACAAIgEAEIgCABIgBABIAAAAIAGAEIgDAAIgLABIAAAAIgCABIgIAIIgBADIAAABIAAADIADAFIABABQAEAGAFAAIACgBIACgBIADgDIgCgDIgCgCIAAgBIABgCIgEgCIAAAAIABgCIACgDIgBADIAFgCIAAAAIABABIABAAIABAAIgDADIAAAAIgBADIAFACIABAAIABABIAAAEIgKAFIgDABIgFgCIgGgBIADAEIgDgCIgBgBIgGgLIAAgCIgBAAIgBABIgCACIgCACIgGgBIAGAGIgHACIAFAGIgBAAIgFAAIAAACIAFABIAEACIgEABIAJAEQACABAAAGIAAAFIAAAEIgCgFIgGgJQgFgGgEgCIAAAIQACACAAAEIAAAEQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgBgCIgBgCQgEgHgLgGIAEAAIABABIACAAIADAAIABAAIgBgBIgFgFIAAAAIAFACIAAgBIgCgEQgCgCgCgBIAHABIAAgBIgEgEIgFgEIAJgCIgFgDIABAAIAGAAIgIgFIgDAAIAAADIgFABIACAIIAAAAIgHgGIACAFIgBAAIgFgFIgEgBIgIgDIgBAAIgBAAIgFABIAAAAIACgDIABgCIgCABIgHAEIgEgIIAAAIIABACIgMgHQAGAIAAACIAAAAIgFgCIgEgCIAGAHIAAAAIgLgBIgCABIAHAFIABABIgBAEIgFAEIAHAEIgCAFIADAAIgDAJIABADIAFAAIAEALIgKgGIgBAGIgCABIgEgBIgBAAIACACIAAABIgEgCIgBAAIABABIAGAHIACACIACABIgBABIgEgBIAIAJIAIANQAFANABALIAAAEIgDgFIgHgPIgHgKQAIANABAKIACAHIgBAOIgCgLQgDgJgCgDIADAWIABAFIAGAVgAg5AiIgCgEgAhygvIAAAAIAAAAgAgSg/IABAAIAAgBgAiBBXIgBgEIgCgLIAAgJIACAPIACgXIAEAMIAAgBIgCgKIADgPIACADIABABIgCAPIACAOIAAABIAJAJIAFAEIgDgBIgGgDIgEgCIgBgBIgHgNIgCAOIAAAFIAAADgAAfgHIAAgBIABACQADAGAAAEIABgJIAAgHIAAgBIAAgFIADAGIABADIAAAKIgDAAIgDAGIABgDIgBABIAAACIgEAHgAAlgYIAAgFIACAAIgBgBIAAgBIAEAAIAAACIgDAAIADAFg");
	this.shape_16.setTransform(-4.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-11.1,28.7,27.6);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEACIgBAAIAAgBIACgBIAAACgAAEACIgCgCQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIABABQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgBAAg");
	this.shape.setTransform(-8.7,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAKIgGgEQgDgDAAgDIAEgHIAGgCIAHAEIACAGIgDAHQgDACgEAAIAAAAgAgCADIAAgCIgCABIAAABIABAAIABAAgAADABIACACQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIgBgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABg");
	this.shape_1.setTransform(-8.8,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626773").s().p("AAKAXIgGgMIAHgDIgEgDIABgEIgBAAIgKAGIABgDIAAgBIAAABIgJAFIAAgEIAAAAIAAgBIgCgBIAEgBIAFgCIgCgDIAGgBIAAgBIgCgEIAEgFIABAFIACABIADgOIACACIACABIAAABIABAEIAAAMIgBABIgCgHIACAOIACADIgDAKIgBAEg");
	this.shape_2.setTransform(-13.3,-3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777C88").s().p("AADAiIgCAGIgBABIgDgBIAAgEIADgKIgBgDIgDgPIADAHIAAgBIAAgMIAAgDIgBgBIgBgBIgCgCIgEANIgBgBIgBgFIgBAAIAAgDIgBABIAAgDIgDgDIgCgCIAAgBIAAABIAAACIADAHIgFgEQgEgDgDAAIAAAAIAAABIAEAHIgIgCIAAgBIAAABIgEgBIgEAAIAAAAIADgBIAAgBIgJgEIgCgBIAAAAIAFgDIgDAAIgFABIABgBIADgEIAAAAIABAAIgBAAIgEgBIAFgFIgDgBIAGgCIgCgCIAIAAIgEgDIAJAAIgHgDIAAgBIABAAIAFABIANAEIAGABIgCgEIAFADQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAEAAIAAgBIgGgCIABgBIAHAAIAEABIABAAIgBgBIgGgEIABgBIAFADIACAAQgBgDgJgFIAMAEIABABIANALIAFgEIAHAAQALABACAJIgIgDIgIgBIAJAIIAAABIgDAAIAAAAIAAAFIgBAAIAAAAIgGAAIAAAAIACgDIACgCIgDABIgGADIgEgIIAAAHIgBACIgKgHQAFAHgBADIAAAAIgEgDIgEgCIAFAHIAAABIgLgDIgCAAIAAABIADAFIACABIABAEQgBACgEAAIAGAFIgDAGIADAAIgEAJIAAADIAFAAIACAMg");
	this.shape_3.setTransform(-11.8,-4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFACIABgBIABgBIAAACIgBAAgAACAAIACgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAgBAAIgCACg");
	this.shape_4.setTransform(-14.2,-3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAAKIgGgEIgCgGIAEgHIAFgCIAGADIACAHIgDAGQgDADgDAAIAAAAgAgDACIgBABIABAAIABAAIAAgCgAADAAIABADIACgCQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_5.setTransform(-14.3,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("AB7g/IABACIABAAIAFAGIAGAJQACAAABgFIACgLIAAgBQABgOgEgCIgOgHIgJgFIgDgCIgEgEIgJgIIgIgGIgHgIIgPAEIgFACIgCAAIgPAFIgCAAIgXgFIgNgGIgJAAIgKAAIgBgBIgKAEIgEACQgMAFgGgBIgDAAIgBgBIgLgEIAJAHIgCAAIgFgCIAAAAIAGAFIAAAAIgBAAIgDAAIgJAAIAAAAAA6hOIgKAAIAAAAIAGgJIALABIAEABIgGgFIAAgBIABAAIACgBIAFgEIgDAAIgDAAIAAAAQALgLAGAAQAFABAPARIAKAOIALAMAAcA3IAAAAIAAABIADAKIADgZIAAAAIABAAIAEAFIADAHIAAgCIAAgKIgCgLIAEADIAAABIAAgBIgCgPIALgcIAKgbIABgEIgBgFIACgCIgBgDIAAgBIAAABIACAAIAIADIAHgBIABABIACABIAEAEIAIgEQAEgDABABIACgGIAGACIAGgGIAHgFIABABAg5hmIgFAAIgFABQgCAAgBgCIgFgCIACADIgGgBQgEgCgIgCIgFAAIgBAAIgEACIAEAAIAHACIgJAAQACAAABACIgHAAIgCACIAEAAIgGADIADAAIgGAGIAEABIABgBIAAABIgBAAIgDAFIAAAAIAEgCIADABIgFADIAAAAIACABIAJAEIAAAAQgBABgBAAIgBABIACAAIADAAIAEABIAAAAIAAADIAAACIAAAIIABAFIgDADIAAAAIgGADIAAABIAEAAIgGAFIgCACIAAABIACAAIgLAGIgEADIgFAEIgCACAg/hoIAGACAg4hmIgBAAAhkBWIAJAOIgDgKIABABIAEAEIAEADIAAAAIAAgEIAAABIAPAQIgFgMIAAgBIAAABIASARIgBgMIAMARIAAAAIAAgBIgBgJIAAgGIAEAFQAGAGAAAEIABgBIgEgLIgCgJIABgEIADAGIADAEIALAQIABAAIgHgUIAFAFIAAAAIAAAAIgEgLIAIAGIAIAFIgKgaIAMAUIAHAIIAAAAIAAAAIgCgKIgCgLIAJAVIAAgIIADgOIgBAHQAIgPABgLIAAgJIAAAQIABACIAAgCIAIgPQABACAAAGIABAFIADgLIABgEIABgBAh4AMIAEABQAFABABgDIABgCIACgGIAGgDIABAAIAEgFIABgCQABgHgKgCIgEgBIgJgBQgDgBgCgHIgEAOIAAAAIgBAEAh5AJIgBgDIgCgGIgBAAIgCgCIAAgCIAAgEIgJAQIgDAIIgBAKIAAAMIABADIAAAEIABAJIACATQAAALgBAHIAEgFIAAAEIgEAJIAAABIABgBQAFgEAAgDIAGALIABABIAAgBIACgIIADgGIgBAJIAFgGIACgGIgBANIAAAAIAAAAIADgDIAFgMIAAgBIABgCIAAgBIABgIIADAMIAAABIABAB");
	this.shape_6.setTransform(-5.9,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292421").s().p("AgBABIgBgDQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIACADIACADIgCAAg");
	this.shape_7.setTransform(-17.5,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgEAUIgEgCIgBgCIgBgDIgCgGIgBgBIgCgCIAAgCIAAgDIABgEIAAAAIAEgOQACAHADABIAIABIAEABQAKACgBAHIgBABIgEAFIgBABIgGADIgCAGIgBACQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAgBAAIgCAAgAgGAFIABAEIADADIACAAIgCgDIgDgEIAAgBIgBABg");
	this.shape_8.setTransform(-17.1,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444655").s().p("AhkA5IADgJIAJgQIgBAEIAAACIgDAOIAAAKIAAABQgEgFACgJIgGAYgAgaA7QgEgPgGgKIgHgNIgDAKIgCAJIgBgBIACgQQAAgJgFgCIgCAKQgBgEgEgDIgBAJIgGgFIABAEIgFgBIgJgBQgDAAgBgIIABgCIAGgDIAEgEIALgEIgDAAIAAgCIACgCIAHgEIgFAAIAAgBIAGgDIAAgBIAEgCIgBgFIgBgIIAAgDIABgCIAAgBIAHADIAAABIAAgBIAAAAIgDgIIAAgBIAHAEIAEAEIgDgIIAAgCIACACIADAEIAAACIABADIABAAIgFAFIABAFIAAABIgGAAIADAFIgGABIgDABIACABIAAABIAAAEIAIgFIABAAIgBADIAAAAIAJgGIABAAIgCAGIgEAKIgBgBIACAGIAAAHIAAAAIgEgDIAPAVIgBAAIgLgJIAFAMQAEAKAAAJIAAAGgAAiAjIgCgFIgHgPIAAAAIgBALIgEgFIAAgBIgDgFIgBAAIAAACIgCAGIgBAAIgEgMIAAAAIgBAAIgBAGIAAAWIAAAAIgFgUIgBgEIgGgNIgCAHIAAAAIgDgMIgFAAIAAgDIAFgJIgEAAIAEgFIgHgFQAEAAACgCIABgFIgBgBIgHgHIACAAIAKADIAAgBIgEgHIAEADIAFACIAAAAIgFgKIALAIIgBgCIABgHIADAIIAHgEIABAAIAAACIgDACIAAABIAFgBIABAAIABABQAFAAADADIADACIAFAFIAAAAIAAgEIAGAGIAAAAIgBgIIAGgBIgBgCIAFAAIAHAGIgGgBIgCABIABAAIAEACIgKABIAFAFIAEAFIAAAAIgIgBIAFAEIABAEIAAAAIgFgCIgBAAIAGAGIAAAAIgFAAIgBAAIgBgBIgEgBQAKAHADAIIABACIgGgEIADANIAGAPIAFAHIAAAAIgHgGIgJgMIgBAVIgBgIIgGgMIAAANIAAAFIgBANIgBAFQABgHgEgMgABIALIgBgCIABgEIAAgFQABgFgCgBIgIgGIAFAAIgEgDIgEgBIAAgBIADAAIACAAIgEgHIAHAAIgEgHIAGABIACgCIABgBIABgBIABAAIgBABIAFAMIABABIACADIAEAFIgFAAIAAAAIAAAAIAAABIgBAAIgBAFIAAAGIgBAEIAAABIgCAHIgDAKgAgYAJIABAAIAAABgABbgSQgFgBgDgGIgBgBIgCgFIABgDIAAgBIABgEIAJgGIACgCIAAABIgGAIIAAABIAKgBIgDAEIAAABIgEADIAEgDQABABAAAAQABABAAAAQABAAAAABQAAAAAAAAIgBABIAAACIACACIABADIgDADIgDABgABNg7IgDAAIAAgBIAHgDIAFgEIAPgFIgHAKIADAAIAAAAIgIAIIADACIAAABIgEAAIAAAAIgDACQgCgNgGADg");
	this.shape_9.setTransform(-9.7,-1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("AiEBnIAAAAIAAABgAh6BjIABAAIgBAAgAgtBhIABAAIAAABgAgtBhIAAAAgAhEBSIAAAAIAAAAgAAFBKIABAAIgBACgAgJBKIAAgBIAAABgAAHBEIAAAAIABAAgAAHBEIAAAAgAAkAhIABAAIAAABgAAAAdIAAAAIAAAAgAhmAbIAAAAgAh0AKIAAABIgBAAgAguAEIAAgBIAAABgAAbgQIAAgBIgBADgAhCgTIABgBIAAABgAg1gfIAAAAIAAABgAhKggIAAAAIAAAAgAAFgzIAAAAIABAAgAAjg0IAAAAIAAAAgAhUg0IAAgBIAAABgACFg9IAAgCIAAACgAhahHIAAAAIAAABgAhihKIAAgBIABABIAAAAgAhqhKIABgBIABABgAAEhMIABAAIgBAAgAhehQIABAAIgBABgAA6hbIABAAIAAAAgAgPhcIAAAAIAAAAgAAyhmIACgBIgBABg");
	this.shape_10.setTransform(-5.1,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#977168").s().p("AgBAJIABgDIAAABIACgDIAAAAIgBAAIgBgBIAAAAIgEABIABgEIgLABIAAgBIAHgHIAKABIADABIgGgGIABAAIAOAIIgIABIgBABIACADIgCABIAEADQgDAEgEACg");
	this.shape_11.setTransform(0.4,-5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("AhSBEIgBgBIAAgBIAAgBIgCgYIAIAZIACAHIgBgCIADAKgAgcA/IgFgXQgCAIAEAaIAAAAIgDgOIgEARIgBgEIgBgEIgCgGIgBAAIAAAAIgDAIIAAABIgBAAIgBgMIgBAAIgCAJIgBADIgBAAIABgDQACgIgFgPIgIgTIAAAAIgBAEQACAGgBAFIgCAIIgCgHQgCgHgDgCIgBAAIgDAJIgBgIIgCgKIgDAEIgCAEIgCgHIgCADIgEAEIABgKIgDADIgBgBIABgDIADgIIABAAIABABIAFgEIAAAAIAEADIAEgBIAAABIAEALIAHAKIgEgJIgFgOIAAgMIAEgLIACgEIAGgKQAFAHAEAPIACAHIAFAYIAHAWIgDgVIAAgFIAAgXIACAMIABANIADgOIAQBCgAgVBCIABACIAAAKgAhbA/IABgBIAAgJIADAFIAAADIAAABIgBACIAAABIgGAMgAgOA9IABAPQgBgDgGgFIAAg7IAFAHIAFAOIABADQAJAeAEAKIgFgIIgGgJIADAUgAhwA4IAAgNIAAgVIAAAAIAAgEIACACIAEACIAFAEIAIAXIgLgQIAAACIAEAVIAAAAIgFgKIgDgLIgEAZgAAPA3QgDgKgHgKIgCgEIgYgtIAIARIAJARIAEAGIADAFIAMAYIgegnIAAgBIgFgbIgBgCIAAgBIAAABIABACIAAAVIgJgLIgDgOIgFgNIgIgKIAFABIAAAAIAAgBIgCgCIgBgCIgGgIIAAAAIAEACIABAAIAAgBIgCgCIABAAIAEABIABgBIACgGIAKAIIAAABIAAgBIAJAHIABAEIAFAUIAAAAIAAgXIABgFIABAAIAAAAIAEAMIABAAIACgHIAAgBIABAAIADAFIAAABIADAEIABgKIAAAAIAHAPIACAFQAEAMgBAGIABgEIABgOIAAgEIAAgNIAGAMIABAHIABgUIAJAMIAHAGIAAgBIgFgHIgGgOIgDgOIAGAFIABABIACgCIAAgEQAAgFgCgCIACgIIAIAKIAEAJIABAFIAAACIgDAVIAEgGIAEgGIADAAIABgLIgBgDIAAgGIAAgGIAGABIgEgGIAFABIAAgCIgEgFIgCgEIAHABIAEADIAEAAIAKgEIAIAAQAAAFACAAIAGgBIAKgBIADABIgHAEIgGAFIgCgBIgGABIgIgCIgCgBIAAAAIAAAAIABAEIgDACIgCAAIgBAAIgIgDIAEATIgBAKIgHgEIgFAaIgFgHIgCAAIgCAOIAAAJIgCAQIgBAMIgCAEQABgQgGgQIAAAAIABAMIgBAOIgBAHIAAAAIgCgTIgBATIgEAQIgBAAQACgGgDgPQgDgOgDgEIgBAAIAAAAIABAOIABAMIAAACIAAADIgDANQABgGgDgLIgCgFIgBgCIgMgZIgBgBIAGAYIABAEIAAAEIADASIAAABgAhnAWIgIgJIAGgLIADAUIAAABIAEAEgAgfAGIgHgOIgEgKIANAQIAAAKIgBAEgAgtgXIADAFQAGANAAAJIAAAHIAAABgAhmgGIAEACQAEABACgEIABAAIAGgGIADgEIADgEIABADQAEgEABgJIAAAEIgDANIAAABIgBAVIgHgHIgBAJIgDgEIAAAAIgCADIgEgBIAAAAIgBACIgBABg");
	this.shape_12.setTransform(-7.6,4.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777C88").s().p("AhdAcIACgHIAHANgABPgOIgCgIIgDgBIgBgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAIABgDIgFgCIgBgDIACACIAKAFIANAGQAEADgBANIAAACIgCADg");
	this.shape_13.setTransform(-1.1,-3.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4C3C1").s().p("AgQByIgLgQIgDgEIgDgGIgBAEIACAJIAEALIAAABQgBgEgGgGIgDgFIAAAGIABAJIgBABIgMgRIACAMIgSgRIgBgBIAAABIAFAMIgPgQIAAgBIAAAEIAAAAIgEgDIgDgDIgDgHIgGgVIAgARIgBAHIgBADIABAAIABgDIACgGIACABIABAIIABAAIAAgBIACgGIACACIABACIACAEIABAEIABgIIAFADIAAACIABAAIAAgCIALAGIgEgGIADABIABAFIAAAAIAAgFIAGADIAAAAIAAAAIADABIADAKIAAAAIgFgFIAHAUgAgcBbIAAgBIgBAAgAACBkIABABIAAAAgAAGBfIAFgJIgCAHIAAAIgAABBbIgBgLIAGAPIgDAGgAgGBgIgJgXIANAUIAEAHgAgMBeIgFgDIALAFIABADgAh7BVQABADgGAEIAAAAIADgJIAAgDIgDAEQAAgHAAgLIgBgTIgCgJIAJAFIAAAMIAAANIABAEIAEgZIACALIAGAKIAAAAIgFgVIAAAAIADABIAJANIgEgKIAMAGIACAUIAAABIgBgBIgDgMIgBAIIAAABIAAgBIAAgDIgCgFIAAAJIgBABIgDAOIgDADIAAAAIABgNIgCAGIgEAGIAAgJIgDAGIgCAIIgBAAgAgUBZIgBgBIAEADgAgYBJIABAPIAAAAQgBgDgFgFIgBhSIAFAdIAGAPIABADQAIAeAGAKIgGgIIgHgJIAEAUgAAMBUIAFgJIgGALgAAMBQIAAAEIgBACgAgeBVIAAgHIABACIAAAFgAgpBUIgBgFIABABIABAEgAgpBQQgDgVABgHIAGAXIAEAJgAgzBPIgBgEIgBAAIAAACIgEgBIAAgEIgBAAIANAGIgBADgAgtBOIABgGIACAHgAAUA+IAAAAIAAAFIABAAIgEAIIADgNgAg9BKIAAgEIADACIgBADgAg6BIIAAAAIAAAAgAheA3IgBgCIABACIgMgGIgEgLIACABIgDgEIAAgBIgEgUIgFALIAAgCIAAgOIAEgOIACAFIABACIACADIAFASIABgBIABgCIABAAIAEABIABgDIAAAAIADAEIACgJIAGAHIABAAIAAAFIgEABIgDgDIAAAAIgGAEIAAgBIgBAAIgEAIIgBADIABABIAEgDIgBAKIADgEIACgDIADAHIACgEIACgEIACAKIABAIIAEgJIABAAQADACACAHIACAHIACgIQAAgFgBgGIABgEIAAAAIAIATIADAMgAAVBDIADgGIADgQIABgTIACATIAAAAIACgHIABgOIgBgMIAAAAQAGAQgCAQIACgEIACgMIACgRIAAgJIACgNIABAAIAGAHIAEgaIAHAEIABgKIgDgTIAIADIABAAIACAAIABAEIgBAFIgJAbIgLAcIACAOIgBAAIgEgDIACAMIABAJIAAACIgEgGIgEgGIAAAAIAAAAIgEAZIgDgKIAAgBIAAAAIAAABIgBACIAAAEIgEAKIgBgFQAAgGgBgCIgIAPgAAGBDIAAAAIAAAAgAgHAqIAEAFQAFAKAEAKgAAGBCIgEgSIAAgEIgBgEIgEgYIABABIAKAZIABACIACAFQADAJAAAGIgIADgAAOBAIAAAAIAAACIAAgCgAARA1IAAgDIAAgCIgBgMIgBgOIABAAQACAEADAOQAEAPgCAGIAAAAIAAAAIAAAAIgDABIAAgLIAAAJIAAACIgGACgAAXA9gAheA5IAAgCIAAAAIABACgAhvAwIgBgBIAGACIAAACgAh6ArIAAgBIAIAEIAAABgAhyAuIAAgBIACACgAiDAmIABgDIABgFIADgNIAFANIgBAEIAAAAIAAAIgAgJAmIgFgGIgJgRIgFgOIAVApgAgegCIAAAAIACADgABcg1IgCgCIAHgFIAHgEIgEgBIgKABIADgFIgDgHIALABIgCgHIgEgEIALAAIAAgBIgJgHIgNgEIAEgDIADgCIgEAAQAAgDgMADIgCABQAMgMAFABQAFAAAPASIAKANIAMANIgBgBIgIAFIgGAFIgGgCIgCAGQgBgBgEADIgHAFg");
	this.shape_14.setTransform(-6.7,3.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B0928A").s().p("AgFAQIgIAAIABgEIgBgBIgBAAQAFgCACgEIgEgDIACgBIgCgDIABgBIAIgBIgOgIIABgBIACgBIAEgDIgCgBIgDABIACgBQAMgDgBADIAEAAIgDACIgDADIALAEIAJAHIAAABIgLAAIAFADIACAHIgMgBIAEAHIgDAFIgFABQgCAAAAgFgAgNgNIAAAAIABAAgAgOgRIAAAAIAAAAg");
	this.shape_15.setTransform(2.2,-5.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#626773").s().p("Ag/BJIgGgZIgCgHIgCgIIAEgEIAFAQIABAAIAAgHQAAgGgDgHIAEgFIACAFQAGAOABAKIAAAHIgDAPIgBgNIgDgMIAAAXIAAAEIAEAWgAhZBGIgFgMIAAgBIADgDIAAACIAEAPIAFAJgAh2BHIgGgEIgDgCIgCgCIgFgOIgDAOIgBAEIgBAEIAAgEIgBgDIAAgMIABgJIAAAPIAGgXQgBAIADAFIAAgBIAAgKIAEgOIACADIABABIgEAOIAAAPIAAABIAHAKIAFAFgAheA1IAAAEgAgxAzIgGgPIgFgLIACgPIAEAFIAEANQAFAOgBALIgBAEgAhbAtIADgNIACgDIAGgKQAEAFADAJIgSAVgAhdAeIAAAAIABgDIgDAagAhsAkIABgHIAGgDIABAAIAEgGIABgBQABgIgKgCIgBgFIAHAGIAAgJQAEACACAFIACgJIAAAAIgCAUQgBAEgDADIgBgDIgCAEIgDAEIgGAGgAhKATIgHgMIgEAKIgCAJIgBgBIACgQQAAgJgEgBIAEguIAEACIgEgIIAKAMIAAAAIACAGIAAABIgGAAIACAEIgFACIgEABIACABIAAABIAAADIAIgEIABgBIAAABIgBACIAAAAIAJgGIABAAIgCAGIgDALIgBgBIACAHIAAAHIAAAAIgEgEIAOAVIgBAAIgKgJIAEALIACAGIgDAEIgFgKgAhcATIACgHIAAAFIgCAKgAAhgEIAAgBIABACIABALIACgJIACgHIAAgBIABgGIABAHIABADIgCAKIgDgBIgDAGIABgCIAAABIgBABIgFAHgAg+AEIAEACIAAgBIAAAFgAg8ADIgBgCIgGgHIAAgBIABAAIAIAMgAhCgHIAEACgAg+gFIgBgCIABAAIADABIACgBIACgHIAKAJIgRAAgAAfgKIgEgJIgIgKIgBAHQACADgBAEIAAAFIgBACIgBgBIgBgDQgDgIgLgHIAFABIABABIABAAIAEAAIAAAAIAAAAIgFgHIABAAIAEADIAAgBIgBgEIgEgDIAIABIAAAAIgFgGIgEgEIAKgBIgFgDIABgBIAGABIgHgFIgEAAIABACIgHABIABAIIAAAAIgEgHIAAAFIAAAAIgGgGIgCgBQgEgDgEgBIgBgBIgBAAIgGABIAAgBIADgCIABgBIgCAAIgGADIgEgIIgBAHIABACIgLgHIAEAKIAAAAIgEgDIgEgDIAEAIIAAAAIgKgCIgCAAIAGAGIABACIgBAEQgCACgDAAIAGAGIgEAEIAEAAIgEAJIAAAEIAFAAIADAMIgfgkIAFgEIAAAAIgBgEIAAgCIgDgDIgDgDIAAADIAEAIIgFgFIgHgDIAAAAIAAABIAAAGIgDgCIgBAAIAAABIgEgBIgDAAIgBgBIACgBIAAAAIgJgDIgCgBIAAgBIAGgDIgEgBIgDACIAAAAIACgFIABAAIAAAAIgBAAIgEgBIAGgGIgDAAIAGgCIgEgBIACgCIAHAAQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIAJAAIgHgCIgEAAIAEgBIABgBIAFABQAIABAEACIAHABIgCgDIAEACQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAFgBIAGAAIgHgCIAAgBIABAAIAIAAIADAAIABAAIAAAAIgFgEIAEABIACAAIgJgHIAMAEIABAAIACABQAHABALgFIAFgCIAJgEIACABIAJAAIAJAAIANAGIAXAGIACAAIgEADIgHAEIAAABIACAAQAGgEACAOIADgCIABAAIAEgBIAAgBIgDgCIAHgIIACAAIgCAAIgDAAIAIgKIABAAIAGgBIAOgFIAHAIIAIAGIAJAJIAEADIACAEIAEACIAAACQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIABABIAEACIACAIIALAPIADgDIAAAAIgCAKQgBAFgCAAIgGgIIgFgHIAAAAIgBgBIgMgNIgKgNQgPgSgFAAQgFgBgLALIgBAAIAAAAIABAAIADAAIACAAIgFAEIgCABIgBABIAAAAIAGAFIgEgBIgLgBIAAAAIgBABIgJAHIgBADIAAABIgBAEIACAEIABABQADAGAFABIABAAIADgBIAEgCIgCgEIgCgCIAAgBIABgBQABAAgBgBQAAAAAAgBQgBAAAAAAQgBgBgBAAIAAgBIAAgBIADgDIgBADIAGgBIAAAAIAAABIABAAIABAAIgCAEIgBgBIgBADIAEACIABABIABAAIgBAFIgKADIgDABIgFgDIgGgBIACADIgCgCIgBgBIgFgMIAAgCIAAAAIgBABIgBACIgDACIgFgBIADAGIgGAAIAEAHIgCAAIgEAAIAAABIAFACIADADIgEAAIAIAFQACACgBAFIAAAGIgBADgAgIhCIABAAIAAgBgAg4hMIAAAAgAApgUIABgFIABAAIADAGgAArgZIAAgBIAAAAIAEAAIAAABgAg3hUIgBAAIABABg");
	this.shape_16.setTransform(-5.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-10.6,30.2,26.2);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEACIAAgBIABgBIABACIgBABgAACAAIACgCIABACIgBABg");
	this.shape.setTransform(-7.3,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAHIgEgHIADgGQADgDADAAIAHADIADAGQAAAEgCADQgDADgEAAgAgDACIAAABIABABIACgBIgCgCgAADAAIADACIABgCIgCgBg");
	this.shape_1.setTransform(-7.5,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626773").s().p("AAMAXIgHgLIAGgEIgEgDIgBgEIgJAIIAAgBIABgCIAAgBIgBABIgHAGIgBgEIAAAAIAAgBIgCgBIAEgCIAEgCIgDgCIAHgCIAAgBIgEgFIAFgFIABAFIABAAIADgOIABACIACACIABABIAAADIACAMIAAABIgEgHQAAAHAFAHIACACIgCAKIABAFg");
	this.shape_2.setTransform(-11.8,-1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777C88").s().p("AAEApIAAgFIACgKIgCgCQgEgIAAgHIACAHIAAgBIgBgMIAAgDIgBAAIgBgCIgCgCIgCANIgCAAIgBgFIAAAAIgBgEIAAABIgBgBIgEgDIgCgCIAAgBIAAABIAAACIAEAGIgFgDIgIgCIAAAAIAAABIAGAHIgIgDIgBAAIAAABIgEAAIgEAAIABAAIABgCIAAAAIgJgCIgBAAIAAgBIADgDIgCAAIgFACIAAAAIABgBIADgEIAAAAIAAgBIAAABIgGgBIAGgGIgEAAIAFgEIgBgBIAHgBIgEgCIAJgBIgHgCIgBgBIABgBIAFAAIANADIAHAAIgCgEIAEADIAEABIAEgBIAFgCIAAAAIgGgBIAAgCIAHgBIAFAAIAAAAIAAAAIgHgDIABgBIAFABIACAAIgJgGIALACIAAABIAPAJIAFgEIAHgBQALgBACAJIgHgDIgJABIALAGIAAABIgEABIgBABIADADIgCABIgBAAIgFABIAAAAIACgDIABgCIgCACIgGADIgFgIIABAIIgBABIgLgFIAGAJIAAAAIgEgCIgFgCIAGAHIAAAAIgKgBIgDAAIAAABIAEAFIACABIABADQgBADgDAAIAGAFIgDAFIAEAAIgCAJIAAADIAFAAIAEAMIgLgIIAAAHIgCABg");
	this.shape_3.setTransform(-10.9,-3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEACIAAgBIABgBIABACIgBABgAABAAIACgCIACACQAAAAAAAAQAAAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_4.setTransform(-12.9,-2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFAHIgDgHIADgGIAFgDIAGADIADAGQAAAEgCADQgDADgEAAQgCAAgDgDgAgDACIAAABIABABIACgBIgCgCgAADAAIACACQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgCgBg");
	this.shape_5.setTransform(-13,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("AB0hNIABACIABAAIAGAFIAHAIQACAAABgFIgBgLIAAgCQAAgNgFgCIgOgEIgJgEIgDgCIgFgDIgKgJIgJgDIgIgHIgOAGIgFACIgCABIgOAHIgCAAIgYgCIgNgEIgIABIgLABIgCAAIgJAFIgEACQgKAHgGAAIgEAAIAAAAIgNgDIALAGIgCAAIgGgBIAAAAIAGAEIABABIgBAAIgEgBIgIABIAAABAB0hNIgMgLIgMgMQgSgPgEAAQgGAAgJANIgBABIAEgBIACAAIgEAEIgCABIAAABIgBAAIAHAEIgEAAIgLABIgFAJIAAABIAKgCAAmA0IABAAIAAABIAEAKIAAgZIAAAAIAAAAIAFAFIAEAFIAAgBIgCgKIgDgLIAEADIAAAAIAAgBIgDgNIAGgeIAHgcIAAgEIgCgFIACgCIgCgDIAAgBIABAAIACABIAHABIAHgCIACABIACACQACADACgBIAIgFIAFgDIABgGIAGACIAFgHIAGgFIABAAAhKhcIAGABIABAAIgGABIgEABQgCAAgCgBIgFgCIADADIgGAAIgOgCIgFAAIgBABIgDABIAEAAIAHACIgJABIAEACIgIABIgCABIAEAAIgFAEIADAAIgFAGIAFAAIgDAGIAAAAIAEgCIAEAAIgFADIAAABIACAAIAJADIAAAAIgBACIgCABIACgBIADAAIAEAAIAAAAIAAADIAAADIACAIIABAEIgDAEIAAAAIgFAEIAAAAIAEAAIgFAFIgBADIAAABIACAAIgKAHIgEADIgFAFIAAACAhyhIIAAAAIAAAAgAhEBrIAQAOIgGgLIAAgBIAAABIAUAOIgDgLIAOAPIABAAIAAgBIgCgJIgCgGIAFAEIAIAJIAAgBIgFgKIgDgJIAAgDIAEAFIAEADIANAPIABAAIAAAAIgKgTIAGAEIAAAAIAAgBIgGgKIAKAGIAHADIgNgYIAOASIAIAHIAAAAIAAAAIgEgKIgDgKIANATIgBgIIAAgNIABAGQAFgPAAgLIgBgKIACAQIABACIAAgCIAGgQIACAHIACAGIACgLIAAgEIAAgCAhyAeIADABQAFABACgEIAAgBIABgHIAFgEIABAAIAEgHIAAgBQAAgIgLAAIgEAAIgJAAIgEgHIgDANIAAAAIAAAFIAAAEIAAABIADADIAAABIADAFIABADAh8ALIgHARIgBAKIgBAJIACALIABAEIABADIADAIIADATIADASIACgFIABAEIgCAJIAAABIAAgBIAFgHIAHAKIAAAAIAAgBIABgIIACgGIABAJIAEgGIABgGIABAMIAAAAIAAAAIADgDIACgMIAAgCIABgCIAAgBIAAgIIAFALIAAABIABABAhUBlIAKAMIgEgJIABABQABAAADACIAFADIAAAAIAAgDIAAgB");
	this.shape_6.setTransform(-4.1,2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292421").s().p("AgBABIgBgDQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIACACIACADIgCABg");
	this.shape_7.setTransform(-15.3,4.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBAUIgEgCIgCgCIgBgCIgDgGIgBgBIgCgCIgBgCIAAgDIABgEIAAgBIACgOIAFAIIAIgBIAEABQALABAAAHIgBACIgEAFIAAABIgGAEIgBAGIAAACQgCADgCAAIgBAAgAgFAFIABAEIADADIACgBIgCgDIgDgDIgBgBIAAABg");
	this.shape_8.setTransform(-15.1,3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444655").s().p("AhdBHIABgKIAHgRIAAAEIABACIgCAOIABALIAAAAIgDgMIgDAXgAgUA/QgFgPgHgJIgJgMIgBAKIgCAKIgBgBIAAgQQgBgJgGgCIAAALQgCgEgEgCIAAAJIgHgFIABAFIgEgBIgJABIgFgIIABgCIAFgFIADgDIAKgHIgCAAIAAgBIACgCIAFgFIgEAAIAAAAIAFgDIAAgBIADgEIgCgEIgBgIIAAgCIAAgEIAAAAIAIACIAAABIAAgBIAAAAIgFgHIAAgBIAHACIAGADIgFgHIAAgCIADACIADAEIAAABIACADIAAAAIgEAGIACAEIAAABIgGACIAEADIgGACIgDACIACACIAAAAIABAEIAHgGIABAAIgBADIAAAAIAIgHIABgBIgBAHIgBAKIgCAAIADAGIABAGIAAAAIgFgDIARAUIAAAAIgMgIIAGALQAGAKABAJIAAAGgAAlAfIgDgGQgFgKgEgDIAAAAIAAALIgDgFIAAgBIgFgEIAAAAIgBACIgBAHIgBAAIgGgLIAAgBIgBAAIAAAGIAFAXIgBAAIgIgUIgBgEQgFgKgDgCIgBAHIAAAAIgFgLIgEAAIgBgDIADgJIgEABIADgGIgHgEIAFgEIABgEIgCgBIgGgFIACgBIAKABIAAAAIgGgHIAFACIAEADIAAAAQABgDgGgHIALAGIgBgCIAAgIIAEAIIAGgDIACgBIgBABIgCADIAAAAIAGgBIABAAIABAAIAIADIADACIAGAEIABAAIgCgFIAGAGIABAAIgDgIIAHgBIgBgDIADAAIAIAFIgGAAIgBABIAAAAIAGACIgJACIAEAEIAFAEIAAABIgIgBQADABACACIACAEIAAABIgGgCIAAAAIAGAFIAAABIgEAAIgCAAIgBgBIgEAAQALAGAEAIIACACIgHgDIAFAMIAHAMIAGAHIAAAAIgHgFIgKgKIABAVIgCgIQgFgJgCgCIABANIAAAFIACANIgBAFQAAgHgFgLgAgXANIAAgBIAAABgABHABIgBgBIAAgDIAAgGQAAgFgCgCIgJgEIAFAAIgFgDIgEgBIAAgCIAEAAIABAAIgEgGIAGgCIgFgFIAFAAIADgCIACgCIAAgBIABAAIAAACIAHALIABABIACACIAEAGIgFAAIAAAAIAAAAIABABIgCAAIAAAFIAAAGIAAAFIAAABIAAAGIgBALQAAgFgEgHgABNgkIgBgBIgCgEIAAgEIAAgBIABgDIAIgIIACgBIAAABIgGAJIAAAAIAKgCIgCADIgBACIgCAEIACgEIAFACIgCACIAAABIADACIACADIgDADIgDACIgCAAQgFAAgEgGgABDhEIgDAAIAAAAIAHgGIADgEIAOgHIgEALIABAAIABAAIgHAJIAEABIAAABIgEABIAAAAIgDADQgEgNgFAEg");
	this.shape_9.setTransform(-8.1,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("Ah3BzIAAgBIAAABgAhuBtIABAAIgBABgAgiBhIACAAIgBAAgAg7BVIAAAAIABAAgAgCBFIABAAIAAAAgAANBDIABAAIgBACgAAOA8IAAAAIAAABgAhkAkIAAAAIABAAgAAAAYIABAAIgBAAgAAmAXIABgBIAAABgAh1AVIAAABIAAAAgAgvAFIAAAAIAAAAgAhGgPIAAAAIgBABgAAWgYIABgBIgBACgAhRgaIABAAIAAAAgAg7gcIAAAAIAAAAgAhdgtIABgBIAAABgAgDg4IAAgBIABABgAAZg9IAAAAIAAAAgAhlg/IAAAAIAAABgAh1hBIABAAIgCABgAhuhBIAAgBIABABIAAAAgAhrhHIABAAIAAABgAgIhQIABgBIgBABgAB4hUIABgCIAAACgAgeheIABgBIAAABgAArhnIABgBIgBABgAAhhxIABgBIAAABg");
	this.shape_10.setTransform(-2.9,3.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#977168").s().p("AAAAKIAAgDIABAAIACgDIgBgBIgBAAIAAAAIgBAAIgEABIABgDIgKACIAAAAIAFgIIAKgBIAEAAIgGgEIAAgBIAOAGIgHADIgBAAIADADIgDABIAFADIgHAHg");
	this.shape_11.setTransform(1.2,-5.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("AhFBPIgBgBIAAgBIAAAAIgFgYIALAYIACAGIgBgBIAFAKgAhOBMIAAgBIgBgIIADAEIABADIgBADIAAABIgDAMgAgaBOIgBgDIgDgGIgBAAIAAAAIgCAIIAAABIgBAAIgCgLIgBAAIgBAKIgBACIAAAAIAAgCQABgJgHgOIgKgSIAAAAIAAAEIACALIgBAIIgCgHIgIgIIAAAAIgCAKIgDgJIgDgJIgCAEIgCAEIgDgFIgCADIgDAEIABgKIgEADIgBAAIAAgDIAEgJIAAAAIABACIAEgGIABAAIAEADIADgCIABABIAGAKIAIAJIgGgJIgFgMIgDgMIADgLIABgEIAEgLQAHAGAFAOIADAIIAJAWIAKAVIgHgVIgBgEIgCgXQACAEACAIIADAMIABgPIgCgGQgCgLgIgMIAHAKIAHAOIADAFIAAgEQAAgKgFgNIgIgMIgIgJIADABIABgBIAAAAIgCgCIgCgCIgGgHIAAAAIAFABIAAAAIAAgBIgCgCIABAAIADABIACgBIABgHIALAHIAAAAIAAAAIAKAFIABAEIAIAUIABAAIgFgXIAAgGIABAAIAAABIAGALIABAAIABgHIABgCIAAAAIAFAEIAAABIACAFIAAgLIAAAAQAEADAFAKIADAGQAFALAAAHIABgFIgCgNIAAgFIgBgNQACACAFAJIACAIIgBgVIAKAKIAHAFIAAAAIgGgHIgHgMIgFgNIAHADIABABQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgFQgBgEgCgCIAAgIQAFACAEAHIAGAJIACAEIAAABIgBAWIAFgHIACgGIADAAIAAgLIgBgCIgCgHIAAgGIAGAAIgEgFIAEAAIAAgBIgEgGIgCgDIAGABIAEABIAEAAIAKgGIAHgBQABAFADAAIAFgBIAKgDIAEAAIgIAGIgFAGIgCgCIgGADIgIgCIgCgBIgBAAIAAABIADADIgDACIgCAAIgBAAIgJgBIAIASIAAALIgIgCIgBAZIgHgGIgBAAIAAAPIABAJIAAAQIABAMIgCADQgBgPgIgOIAAAAIACAKIACAOIgBAGIAAABIgFgSIACASIgCAQIAAAAQAAgFgEgOQgGgOgDgDIgBAAIAAAAIAEAOIACAKIAAACIAAAEIAAANQAAgGgGgKIgCgFIgBgCIgPgXIgBAAIAIAWIACAEIABAEIAGASIgBAAQgEgJgHgJIgIgJIgFgEIgKgQIgKgQIAAAAIAAAAIAKAcIAHAOIABADIASAlIgHgGIgIgIIAHATIgLgOIACAPQAAgDgJgGIADAMIgKgNIgJgXQAAAJAHAYIAAAAIgFgMIgBARgAhkBHIgCgMIgDgVIAAAAIAAgEIACABIADADIAHADIALAVIgOgOIABACIAHAUIgBAAIgGgJIgEgKIgBAZgAhgAlIgJgIIAEgLIAHASIAAABIADAEgAhjAIIAEABQAEABACgEIAAAAIAHgGIABgEIADgEIABADQADgGABgJIAAAFIgBANIAAAAIACAWIAAAAIgIgGIAAAJIgDgDIAAAAIgBADIgFgBIgBAAIAAACIgBABgAgsgPIACADg");
	this.shape_12.setTransform(-5.7,4.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777C88").s().p("AhZAnIABgHQADACAFAKgABLgaQgBAAgCgHIgDgBIgBgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIABgCIgFgCIgCgDIADACIAJAEIAOAEQAFACAAANIAAACIgCAEg");
	this.shape_13.setTransform(0.1,-3.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4C3C1").s().p("AghBrIACALIgTgOIgBgBIAAABIAGALIgQgOIAAgBIAAABIAAADIAAAAIgFgDIgEgCIgDgHIgLgXIAGAXIAAABIgBgBIgFgLIAAAIIAAABIgBgDIgCgFIABAIIAAACIgBAOIgCADIgBAAIgBgMIgBAGIgDAGIgBgJIgCAGIgCAIIAAABIgHgKIgFAHIAAAAIACgJIgBgEIgCAFIgCgSIgEgTIgDgIIAAgDIAAgFIACgOIAHANIAAADIAAABIACAVIACAMIABAEIABgYIADAKIAHAJIABAAIgIgUIAAgCIANAOIgLgWIADABIgEgEIAAgBIgHgSIgDAKIAAgBIgCgOIACgPIACAFIABADIADACIAIARIABgBIAAgCIABAAIAEABIABgDIAAAAIAEADIAAgJIAIAFIABABIAAAEIgEACIgDgDIgBAAIgFAFIgBgBIAAAAIgDAJIAAADIABAAIADgDIgBAKIAEgFIACgDIACAGIACgEIADgEIADAJIACAJIACgKIABAAIAHAIIADAHIABgIIgDgLIAAgEIAAAAIALASQAHAOgCAIIAAADIAAAAIABgDIACgKIABABIACALIABAAIAAgBIABgIIABAAIAEAGIABADIACAEIAAgRIAGANIAAAAQgHgZAAgIIAJAWIAKAOIgDgMQAIAGABADIgDgPIAMAOIgGgUIAHAJIAHAGIgTglIgBgDIgGgOIgLgdIAAAAIALARIALAPIAEAFIAHAJQAHAIAFAKIABAAIAAAAIgGgSIgBgEIgCgEIgIgWIABAAIAOAXIACACIACAFQAFAKAAAGIABgNIgBgEIAAgCIgCgLIgDgNIABAAQADADAGAOQAEANgBAGIAAABIAAgBIADgQIgDgSIAGASIAAgBIAAgGIgBgOIgCgMIAAABQAIAPABAPIACgEIgBgMIAAgRIgBgJIAAgNIABAAIAGAGIACgaIAHADIAAgLIgHgSIAIABIACAAIACAAIABAFIAAAEIgGAcIgGAeIADANIgBABIgDgDIADALIACAKIAAABIgEgFIgFgFIgBAAIAAAAIAAAZIgDgKIAAgBIgBAAIAAABIAAACIAAAEIgDALIgBgGIgCgHIgGAQIgBAAIgCgQIAAAKQABALgGAPIAAgGIgBANIABAIIgMgTIACAKIAFAKIAAAAIgIgHIgOgSIANAYIgIgDIgJgGIAGAKIgBABIgFgEIAJATIgBAAIgNgPIgDgDIgEgFIABADIACAJIAFAKIAAABIgIgJIgFgEIABAGIADAJIgBABgAgOBhIABAAIgBAAgABWg9IgCgCIAGgGIAHgFIgDAAIgKACIABgFIgEgGIAMgCQABgDgEgCIgGgEIALgCIAAgBIgKgFIgMgDIADgDIADgCIgEAAIgLABIgDABQAKgNAFAAQAFAAASAPIAMAMIALALIgBAAIgFAFIgFAHIgHgCIgBAGIgEADIgIAFIgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBgBgBAAg");
	this.shape_14.setTransform(-4.8,3.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B0928A").s().p("AgCAPIgIABIAAgEIgBAAIgBAAIAHgHIgFgDIACgBIgCgDIAAgBIAIgCIgPgGIABgBIACgBIAEgEIgCAAIgEABIAAAAIADgCIALgBIADAAIgCACIgDAEIALACIAKAGIAAAAIgLACIAGADQADACAAADIgMACIAEAGIgBAGIgGABQgCAAAAgFgAgOgMIAAAAIABgBg");
	this.shape_15.setTransform(3,-5.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#626773").s().p("Ag2BSIgJgXIgDgHQgFgPgGgHIgFALIgBAFIgCAMIACAMIAGAMIAFAJIgIgJIgFgKIgBgBIAAgEIgBgBIgDgWIAAAAIABgOIAAgEQAAAJgEAGIAAgDIgDAEIgCAEIgGAHIAAgBIABgHIAFgEIABAAIAEgHIAAgBQABgIgLgBIgBgEIAGAFIAAgKQAEACACAFIAAgLQAHACABAIIAAARIAAABIACgKIABgKIAJAMQAHAJAGAPIABAAIAAgGQgCgJgGgKIgGgLIANAIIAAAAIgRgUIAEADIAAAAIgBgHIgCgFIABAAIABgLIABgGIgBABIgIAHIAAgBIABgCIAAgBIgBABIgGAGIgCgEIAAgBIgCgBIAEgCIAFgCIgDgDIAGgCIAAgBIgDgFIAFgFIAAAAIgCgDIgBgCIgDgDIgCgCIAAACIAEAHIgFgEIgHgBIgBAAIABABIAEAHIgHgCIgCgBIABABIgEAAIgCAAIgBAAIACgCIgBAAIgJgDIgCAAIAAgBIAEgDIgDAAIgEACIAAAAIADgGIgFAAIAFgGIgDAAIAGgEIgFAAIADgBIAHgBIgEgCIAJgBIgHgCIgEAAIADgBIABgBIAGAAIAMACIAHAAIgCgDIAEACIAEABIAEgBIAGgBIAAAAIgHgBIAAgBIAAgBIAIgBIAEABIABAAIgBgBIgGgEIABAAIAFABIACAAIgLgGIANADIABAAIACAAQAHAAAKgHIAEgCIAKgFIABAAIALgBIAIgBIANAEIAXACIACAAIgCAEIgIAFIAAABIADAAQAGgFADAOIAEgDIAAAAIADgBIAAgBIgDgBIAHgKIAAgBIgBABIgCABIAFgLIACgBIAFgCIAOgGIAIAHIAJADIAKAJIAFADIACADIAEACIAAACQAAAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIABABIACABQACAHACAAIANAOIABgEIABAAIAAALQAAAFgCAAIgIgIIgGgFIAAAAIgCgCIgLgLIgMgMQgSgPgFAAQgFAAgKANIAAABIAEgBIACAAIgEAEIgCABIgBABIAAAAIAGAEIgDAAIgLABIAAAAIgCABIgIAIIgBADIAAABIAAADIADAFIABABQAEAGAFAAIACgBIACgBIADgDIgCgDIgCgCIAAgBIABgCIgEgCIAAAAIABgCIACgDIgBADIAFgCIAAAAIABABIABAAIABAAIgDADIAAAAIgBADIAFACIABAAIABABIAAAEIgKAFIgDABIgFgCIgGgBIADAEIgDgCIgBgBIgGgLIAAgCIgBAAIgBABIgCACIgCACIgGgBIAGAGIgHACIAFAGIgBAAIgFAAIAAACIAFABIAEACIgEABIAJAEQACABAAAGIAAAFIAAAEIgCgFIgGgJQgFgGgEgCIAAAIQACACAAAEIAAAEQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgBgCIgBgCQgEgHgLgGIAEAAIABABIACAAIADAAIABAAIgBgBIgFgFIAAAAIAFACIAAgBIgCgEQgCgCgCgBIAHABIAAgBIgEgEIgFgEIAJgCIgFgDIABAAIAGAAIgIgFIgDAAIAAADIgFABIACAIIAAAAIgHgGIACAFIgBAAIgFgFIgEgBIgIgDIgBAAIgBAAIgFABIAAAAIACgDIABgCIgCABIgHAEIgEgIIAAAIIABACIgMgHQAGAIAAACIAAAAIgFgCIgEgCIAGAHIAAAAIgLgBIgCABIAHAFIABABIgBAEIgFAEIAHAEIgCAFIADAAIgDAJIABADIAFAAIAEALIgKgGIgBAGIgCABIgEgBIgBAAIACACIAAABIgEgCIgBAAIABABIAGAHIACACIACABIgBABIgEgBIAIAJIAIANQAFANABALIAAAEIgDgFIgHgPIgHgKQAIANABAKIACAHIgBAOIgCgLQgDgJgCgDIADAWIABAFIAGAVgAg5AiIgCgEgAhygvIAAAAIAAAAgAgSg/IABAAIAAgBgAiBBXIgBgEIgCgLIAAgJIACAPIACgXIAEAMIAAgBIgCgKIADgPIACADIABABIgCAPIACAOIAAABIAJAJIAFAEIgDgBIgGgDIgEgCIgBgBIgHgNIgCAOIAAAFIAAADgAAfgHIAAgBIABACQADAGAAAEIABgJIAAgHIAAgBIAAgFIADAGIABADIAAAKIgDAAIgDAGIABgDIgBABIAAACIgEAHgAAlgYIAAgFIACAAIgBgBIAAgBIAEAAIAAACIgDAAIADAFg");
	this.shape_16.setTransform(-4.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-11.1,28.7,27.6);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("AhdhzIACgBIABAAIAKgHIgIgDIAQgDIANgEIAGADIACABIADABIADADIAAgBIAAgCIACAAIADADIAAgEIAFAGIABgFIAAAAQADAFABAMIAJACIASgCIAJACIAJADQAEgEAFABIAAgHIACAAIAAgBIgCgEIAAgFIAEAAIACABIACgFIAJgHIAAgBIABAAIADgCIABAAIAKgDIACAAIAAgBIAAABIgCACIAMAEIgDACIAJACIAEACABOiDIgEACIAHABIAIABIABABIgFACIAAABIAMAFIAPAEQgCACgDABIAAABIAIAAIADgCIgCADIgCADQAAABACAAIAFACIgTAZQgEAGgMAGIgLAEIgCAAIABgEIgBABIABgMIgBgBIgBgCIAAgBIAAgEIgFgIIgIgTIgJgKABJg+IACAFIABABIgEgBIgDAAIADAMABAghIAAAAIACgBIgBAAIgEgDIAGgEIgEgDIACgHIAEADIADADIAAAAIAAABIgBAAIABgBAA/gfIgDACIAAABIAIgBIAGABIAAAAIgLADIAIAKIgHgEIgCAAIAHAIIgEgBIACADIACACIAEAIIgFgBIACAIIAAAEIgDgBIADAGQAFAGAEgCAhkhwIgGACIAIABIgTAHIAEABIgHAIIAAACIACAAQgCAIANALIAEAHIAAAFQAAAFADABIADABIAEgDAgxhsIAAAGIgFgCIABAHIgCgBIgEgFIgBAGIABAHIgEAAIgJABIAHAHIgCAAIgHABIgBAAIgBABIACACIACAEQgBABgCABIAFAGIgGAGAgyhwIgBgDIgBAAIgHgHIgLAHIgKAWIAAABIgBACIgBACQgGAZgFAHIAFgFIAAAAIACADIAEAFIABAAIgCgIIABgBIAEACIACAAIgBAAIABAAIAFAAIgBAHIAAABIABADIAAABIACAFIAAACIAAAAIgFAHIAAAAIAFACIgDAFIgCAEIgBAEQABABAFABIgFAFIACADQAAACgJANIAAABIAAAAIAHgCIgFAJIgEAIIADAAIgGALIgCASIAFgKIAAAAIgFAPIgDAQIgBACIACgCIAFgKIgCAOIAAACIgBAIIAAgHIABgBIgCAaIAFgGIgBACIABALIAEAIIAAgOQAAAIAHAIQAHAKAGgBIgBgBIgDgFIAAgCIgBgIIAAAAIABgGIABgDIACgHIgBADIAEAHIABABIAAAAIAAgBIgBgIIAEAHIABAAIAAAAIADgKIAAAIQAAANAGAHIABABIAAgBIgBgHIACgKIAAgBQADACgBALIAAAAIAAABIgBAFIABgBIADgFIABgCIAAgCIAAgDIABABIADAFIAFAEIgDgEIgBgEIAAAAIAGAJIACACIAIACIgEgGIgBgCIAAgCIAEAFIAAAAIACAFIAEgMIABAJIABAAIABgFQADAIAFACIgDgKIAAgDIABAEIAHgPIAAAOIgBAKIgBAFIgCAKIAFgKIABgFIAFgPIABgHIAAAAIgBAHIgCANIAAAAIABAAIAIgSQADAGgDALIALgQIABAFIAAAEIAKgPIABAEIgCAIIgBADABPAVIgJADIAAAAQAEAAADAIIAGAKIAAABIgBAAQgHgKgEABQAHAEAEARIAAABIgEgEIgBgBIABAEIABAJIAJAYIAAABIgBAAIgGgGIAAAAIABAIIAAAFIAAAAIgBAAIgBgFIgCgEIgBARAA2BwIgKALIAFgNIgJAKIgDAEABMBrIAAABIgBgBIAAgBAA0B5IAAAAIAAgBIAAgBABJBqIABADIgBAGIgBgCAAUB/IgBAAIAAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmADIABgCIABABIAAABIgBABgAAuACIABgCIACABIAAABIgCABgAgwAAIACgCQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAgAAkgBIACgCIABAAQAAABABAAQAAAAAAAAQABAAAAAAQAAABAAAAIgDABQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBg");
	this.shape_1.setTransform(-0.3,-5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E4DFDE").s().p("AgIABQAAgBAIgBIAJABIAAABIgDgBIgOACg");
	this.shape_2.setTransform(-0.8,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#292421").s().p("AgQAFIgBgFQAAgEAGgBIADAAIADAAIARgCQAHAAgBAHIgCAEIgDACIgIgEQgIAAgEADIgGADgAgIAAIAAABIAOgBIADAAIAAAAIgJgCQgIABAAABg");
	this.shape_3.setTransform(-0.8,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFBAIgMgDIgDgDQgJgGAAgKQABgLAHgCIAEgBIAGgBIAEAAIADAAIAGAAIACAAIAFgBIAHACIABACQADADAAAEQgBAPgIAHQgHAFgHAAIgCAAgAgRAhQgFABgBAFIACAFIADADIAFgDQAEgDAJAAIAHAEIADgCIADgFQAAgHgHAAIgRACIgCAAgAgxguQgDgDAAgFIADgHIAIgCIACAAIABALIgBACIABABIABgBIAAgBIgBgBIAEgJIABABIgBAOIAAAAQgDADgFAAQgEAAgDgDgAgxg2IACADQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAgBAAgAAqgsQgEAAgDgDQgDgDAAgFIAAgBIAAgBIALAAIgHgEIAAgBIAGACIAJgBIAAABIACAGQAAAEgDADQgDADgEAAIgBAAgAAtgzIABABIACgBIAAgBIgCgBgAAjg3QAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIADgDQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgBAAgAghgxIACgFIAAABQAAADgCADg");
	this.shape_4.setTransform(-0.2,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#977168").s().p("ABEAQIgDgEIgBAAIAAgCIABgCIgBAAIgEACIgCACIABgMIgEADIgBgKIAAgBIABAAIAKAJIgDgGIAHAHIABAPgAg3AIQgOgDAAgEIACgCIAIgGIgDgDIAJgBIAAgBIgCgEIABACIAGALIAAADIgEgFIgBAFIACAIg");
	this.shape_5.setTransform(-0.7,-9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B0928A").s().p("ABJAWIgBgFIAAAAIgCAEIgCgCIgBgOIgHgHIADAGIgKgJIgBAAIAAABIABAKIgBABIAAAAIgBgKIgBAAIgCADIAAAAQgDgDgBgFIABgDIAAAAIABgJIAJgBIAJAKIAIASIAFAIIAAAEIgBABIgCACgAhMANIADgGIAAAAIgBAAIAJgVIALgGIAIAGIAAABIABACIABAEIAAAGIgFgCIABAHIgCgCIAAgDIgGgKIgBgCIACAEIAAABIgJAAIADAEIgIAEIgCAEQAAADAOADIgJACIAGAGIgCAAIgHABIAAgDIgEACIgBABIgCACg");
	this.shape_6.setTransform(-0.5,-10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E6E6").s().p("AAlB2IAAAAIAFgFIABgGIAAgCIAAgBIAAgBIACgFIAAgCIAAgBIgBgKIgEgOIgGgSIgBgBIABAAQgCgFgEgDIgFgGIgDgBIAAAAIgBgBIgHgBIABABQAEADAAAKIgFgDIgBAAIABADIgBAHIgBABIgEgBIgBAAIADADIACABIgCAAIgKgCIgEAFQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAIgIADIgEgFQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABAAAAIgBABQACgEgEAAQgFAAgEAEIgHgKIgEgGQgDADABAOQABAPANALQgKgRADgIIAAgBIAEAJIABgDIABgDIACADIADACIABgJIAJAKIAGgFIAEAEIADAAIgBgCIAAgBIAKACIABABIAAgGIAEAAIgBABIACAAIAHgHIABAAIACACIABAAIgBgGIACgHQAKABAHAQIgQgNIgBAAQACAMAIACIABABIgCAAIgBAAIgPgDIAAAAIAAAAQACAFAIACIgHgBQgGgBgCgDQAFAPAeAGIgMAAIgPgDIgCgBIgEgBIgHgDIgBgBIAAgBIgBABIADAGIADAEIABABIAHAEIgJgCIgGgEIgCgBIgBAAIABAAIADAGIgDgCIgGgDIgIgJIAAAAQABAGgCAMIgCAGIgFAJIABgFIACgOIAAgJIgBAAIAAABQgBAHgGAEIAHADIgIgBIgKADIAHgFIgJgFQABAEgDAHIAAAAIgBAEIAAABIAAAAIgDAIIgCAAIACgFIAAAAIADgNIAAgKIgBgBIgDAFIAAAHIgEgIIgBgEIgCgFIgBAAIAAAAIAAABIgBAAIgBgFIABgJQAAgLAEgGQADgGAKgGQgGABgGAFIgHAIIAAAAIAAABIgBAAIgHASIgGAXIAAABIAAAHIAAABIABAHIgJgPIgCAFIAAABQgFgQAAgOIAEgTIAAAFQABASAEAIIAAABIAAAAIAAgBIAAgRIABgNIAEAOIACgcQAEgMAJgFIAIgCIAEAAIAKABIADAAIAAgBIADABQgHACgBALQAAAKAJAGIADADIAMADQAJABAHgGQAIgHABgPQAAgEgDgDIgBgCIABAAIADAAIAHgBIABABIABgBIACgBIAGABIAAAAIgFgEIACAAIAGABIALAMQAFAJADAQQAAgWgHgMIAHAGIAFAFIACAGIAAAAIAAAAIABAAIgBAAIAAgEIAGAIIAEAKIgDgCIgHgEIAHAKIAAAOIAAAFIgFgIIACAgIAAAFIgIALQgHAIgFAAIgCgBgAgfBcIAAAAIgBgBgAAzBVIABABIAAgBIAAAAIAAgBIAAABgAAzA8IAAAAIgBgBgAAJAiIABAAIgBAAgAhgBCIAAgBIgBAIgAhshDIgDgDIAGgGQAFgFAAgDIgBgCIAFgGIAAgCIgCABIADgGIAEgDIACgBIgCACQgGAZgEAHIgEADgABAhLIABgEIgBABIABgMIgBgBIAAgBIAAAAIACgEIAAAAIAAgBIABgCIABABIgCABIAEAFIgBAEIAAAGIAIgEIAAABIABAAIAFgGIAKgEQAAgGAEgDIAEgFIAFgHIABgCIAFACIgTAZQgEAGgMAGIgLAEg");
	this.shape_7.setTransform(0.9,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C4C3C1").s().p("AAHCHIABgGIABgJIgBgOIgHAPIgBgFIAAADIAEALQgFgCgDgIIgBAFIgBAAIgBgJIgDAMIgDgFIABgBIgBAAIgEgFIAAACIABACIAEAHIgIgCIgCgCIgGgKIAAABIABAEIADADIgFgEIgDgEIAAgCQACgHAAgEIAJAFIgHAFIAJgDIAJABIgHgDQAGgEABgHIAAgBIABAJIgCAOIgBAFIAFgJIABgGQADgMgBgGIAAAAIAHAJIAFADIAFACIgFgGIAAAAIADABIAHAEIAIACIgGgEIgBgBIgDgEIgDgGIABgBIAAABIABABIAHADIAEABIABABIAQADIALAAQgdgGgGgPQADADAGABIAGABQgHgCgCgFIAAAAIAPADIABAAIACAAIgBgBQgJgCgBgMIABAAIAQANQgIgQgJgBIgCAHIABAGIgBAAIgCgCIgBAAIgIAHIgBAAIAAgBIgDAAIAAAGIgBgBIgLgCIAAABIABACIgDAAIgDgEIgHAFIgIgKIgCAJIgCgCIgDgDIgBADIgBADIgDgJIAAABQgDAIAKARQgNgLgCgPQAAgOACgDIAFAGIAGAKQAFgEAEAAQAFAAgCAEIABgBQAAAAAAgBQAAgBABAAQAAAAABAAQAAAAABAAIAEAFIAGgDQABAAAAAAQABAAAAABQAAAAAAABQABABAAABIAEgFIALACIACAAIgCgBIgDgDIAAAAIAFABIABgBIABgHIgBgDIABAAIAEADQABgKgEgDIgBgBIAHABIABABIAAAAIACABIAGAGQAEADABAFIAAAAIABABIAGASIADAOIABAKIAAABIAAACIgKALIAGgMIgJAJIAAgDIACgHIAAgFIgLAPIAAgDIAAgGIgLAQQACgLgCgFIgIARIgBAAIACgMIgFAPIgBAEIgFAKgAAQBzIABgHIAAAAIgBAHgAAcBfIAAAAIgBAAgAhGB5QgHgJAAgIIABAOIgFgIIgBgLIABgCIgEAGIABgZIACgEIABgDIAHgKIABgCIAAAEIgEATQAAAOAEAQIABgBIABgFIAKAPIAAACIADAFIACABIgCAAQgFAAgHgIgAgoB9QgHgIAAgNIAAgIIgDAJIgBABIgEgHIABAIIAAABIAAAAIgBAAIgDgIIABgCIgBACIAAAAIgCAFIgBACIgBAGIgBgHIAAgBIAHgXIAHgSIABAAIAAgBIAAAAIAHgIQAFgFAHgBQgKAGgEAGQgDAGAAALIgBAJIABAFIAAAAIABgBIAAAAIACAFIABAEIAFAIIAAgHIACgFIABABIABAKIgEANIAAgBQABgLgDgBIAAAAIgCAKIABAIgABHBvIAAACIAAgFIgCggIAEAIIABgFIgBgOIgGgKIAGAEIAEACIACAFIAAADIAAAAIgHgHIAQAUIACAFIAAABIAAAAIgHgGIAAABIACAHIAAAFIgBAAIgBgFIgCgDIgBAQIAAAFIgBgBIAAAAIgBgBIAAgBIgCgDIABACIgBACIABADIgBAGIgBgDIgBACIgDAHIgBABgAA2B4IAAAAIABgCIAAACgAA/BiIAAAAIAAgBIABABIgBAAIAAABgAA+BIIAAABIAAAAgAAUAvIACAAIgBAAgAhPg1IgEgFIgBgDIgBAAIgFAFQAFgHAGgZIABgCIABgCIABgBIABAAIAAAAIgDAFIAAAIIACgBIABgBIAEgCIAAADIgBAAIgBABIACACIACAEIgDACIAGAGIgHAGIgBAAIgFgCIgBABIACAIgABKhQIAAgBIAAgEIgEgIIgIgTIgKgKIgJAAIAAAJIgBgIIgDAFIgBAAIAAgGIADgMIACgDIAAgBIABAAIAEgCIABAAIAKgDIgDAGIADgBIAEADIAEACIgGABIADADQAFAFACABIABAAIAAAAIgHAAIALARIAAABIgFAAIAFAGIAAAAIAAAAIACADIgEABIAFAJIgBACIAAABIAAAAIgCAEIAAAAIAAABg");
	this.shape_8.setTransform(-0.3,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444655").s().p("AAzBMIgLgMIgGgBIgCAAIAFAEIAAAAIgGgBIgCABIgBABIgBgBIgFABIgFAAIgBAAIgHgCIgFABIgCAAIgGAAIgDAAIgEAAIgGABIgEABIgDgBIgBAAIgNgEQACgCAHAAIAJACIAAAAIgJgCIAFgBIAFABQgGgFgFAAIgLADIgHAHQADgKAHgFIgBAAIgBABIgDAAIgGADIABgEIgCAAIgGAGIgFAGIgBgDIAAgBIgBAAIgHAJQAAgGAFgHIABAAIAEgFIgBAAIAAAAIACgCIALgFQALgEAQgBIgEgCIgNAAIgGAEIAAAAIACgDIADgCIgJACIAAgBIAKgFIAHgCIABAAIgBAAIgHgBIANgGIABAAIAMgCIgDgEIgHgEIABgBIAEABIAEACIABAAIgBgBIgEgHIAHAAIAAgDIgBgIIABAAIABACIACgKIAAAAIACADIAAAAIAFgMIAAgBIAAgCIABAAIAAAAIACAAIABAQIAEgCIAAAEIgBAGIAAAAIAFgEIAAADIgBACIgBACQADgCAEgBIAAAAIgBACIAAADIADgCIAEgBIAEABIABAAIgOAKIAMgEQgGACgJAIIAAABIAEgBIAMAEIAIAFIAAABIgIgDIgDAAIACADIAEABQAOAFAGAHIgHgDIgBAAIgHgCIgJAAIgLgBIAAABQATACALAHIABAAIABAAIABABIACABIAAAAIAGAGIAAABIAGAGIgLgEQAMAIADAPIAAAEIABAAIgBAAIAAAAIAAAAIgCgGIgFgFIgHgGQAHAMAAAWQgDgQgFgJgAAmAKIAAgBIAKgCIgCAAIgHgCIAAgDIgDgCIgDABIgEAAIABgBIAEgGIgMAEIAAgCIgFgIIgBgBIAAAAIAFABIgCgDIgCgDIgEgEIACABIAGACIACABIADAAIAAAAIgDgFIAAAAIACACIACABIAEADIABABIAAABQAAAFADADQADADAEAAQAFAAADgDQADgDAAgEIgCgGIAEgBIAAAAIAAAAIgFgFIANAAIgHgGIAIACIAIAEIABAAIgEgEIAAAAIgCgEIgCgBIgBgCIgDgCIgFgCIgCgBIgDAAIgFgBIgBABIADgDIgJgBIgGgBIgGABIAEgFIAAAAQgEAAgHAGIgKAHIACgHIgHAKIgDAGIgBACIgBAAIAAgLIgBAAIAAAEIgBABIAAAAIgHgMIgHgHIACAGIgNgIIgBAAIgBAAIABAAIADAEIgIgCIgHACIgBAAIACAEIgMgBIAAABIAAAAIACACIAAABIgBAAIgDAAIgHADIABABIgBAAIADABIAAAAIABABIgCABIgDABIgDAFIAAAAIACAAIABAAIAAABIAAAAIgCACIAAABIgBABIAAAAIAGgDIAAgBIAHABIAAACIABAAIAEgCIAHABIAAAEIgCAAIgIACIgDAHQAAAFADADQADADAEAAQAFAAADgDIAAAAIAAABIABgCQACgDAAgDIAAgBIAEgIIABgBIABAAIAAABIgCAHIAAADIADgGIABgCIACgDIABgBIACAFIADgGIABAAIgBABIABABIACgCIACAAIgDAHIAAAAQgDAIACAFIAAABIgBAAIgEgCIgBAEIgFgCIAAAAIAAABIABADIgNgCIADABIAFAFQgGgEgEAAIAAAFIgEgFIABAEIgBAAIgIgFIAAAIIgBAAIgDgEIgEADIgEACIADgIIAAAAIAAAAIgEACIgCAAIAGgGIgFAAIgCAAIAAAAIAGgGIAAAAIgDAAIgEgCIgBgDIAAgBIAAgHIgFAAIAAAAIAHgGIgGgGIAEgCIgDgEIgBgCIAAgBIABAAIAHgBIACAAIgGgHIAJgBIAEAAIgCgHIABgGIAEAFIACABIgBgHIAFACIAAgGIAEACIAAgJIgBgEIADADIgDgIIgBgEIADADIAAgBIgBgCIACAAIADADIAAgEIAFAGIABgFIABAAQACAFABAMIAJACIASgCIAJACIAJADQAEgEAFABIAAgHIACAAIAAgBIgCgEIAAgFIAEAAIACABIACgFIAJgHIgDADIgCAMIAAAGIAAAAIADgFIABAIIAAABIgBADQABAFADADIAAABIAAgBIACgDIABAAIABALIAAAAIABgBIAEgDIgBALIACgCIAEgBIABgBIgBACIAAADIABAAIADADIACABIACABIACgDIAAAAIABAFIABAAIACgCIABAAIABACIABABIgBAMIABgBIgBAEIACAFIABABIgEgBIgDAAIADAMIgDgDIgEgDIgCAHIAEADIgGAEIAEACIgBABIAAAAIgBACIgCAAIgCgCQgCABAAAGIgBAAIgGgCIAEAFgAgigVIABgCIAAADgAADgYIAAgBIAUACIAAAAgAgKgZIAAAAIALAAIAAABgAABgZIACgBIAAABIAAAAgAgOgZIAAgBIADAAIgBABgAgLgaIACgCIAAABIgBACgAgngbIAAAAIAYABIAAABgAgPgaIAAAAIABAAIAAAAgAgugcIACgBIABgBIAEgBIAAAEgAgzgcIAAAAIAFAAIAAAAIAAAAgAhpgjQgNgLACgIIgBAAIAAgCIAHgIIgEgBIASgHIgHgBIAGgCIAGgDIAFAAIgCACIgGAGIgHAKIgBABIABAAIAIgCIgCABIAAAAIgDADIgEAFIAAACIABgBIAFgCIgDAOIAAABIAAAAIAHgIIgCACIAAABQgBAIgGAHgAg6gdIAHgDIAAACIAAACgAg9gdIADAAIAAAAgABYgkIAAgBIgFgMIADgBIgBgBIgGgEIAAAAIABgBIADAAIgFgNIACAAIACABIAFAJIADANIACgMIAAAAIABAEIACAFIAAgJIgDgLIgDgFIACABIgEgHIABAAIAKAEIAJACIAJACIACAAIgCADIACABIgBACIgFAHIgEAFQgEADAAAGIgKAEIgFAGgAhcgxIADgGQgBAAgBgBQgBAAAAAAQgBAAAAgBQAAAAAAAAIADgEIADgEIgGgBIAFgGIAHgHIABAAIACgCIALgGIgJAIIADAAIABAAIgHAIIADAAIABAAIgGAJIADAAIgCAEIAAABIgBACIgBABIAAABIgFAFIgFACg");
	this.shape_9.setTransform(-0.2,-3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#777C88").s().p("AhNBWIAAgFIAAgEIgBACIgGAKIgCADIgCAEIAAgCIACgOIgEAKIgBAAIACgRIAGgPIAAABIgGAJIADgRIAFgMIgCABIAEgJIAFgIIgHACIAAgBIAAgBQAJgNAAgCIgCgDIAEgFIgFgBIABgEIAJgEIgDAFIAAAEQAHgEADAAIABABIgQAVIAAAAIAEgBIAFgDIABABQgGAHgDAMIAAABIAJgIQAGgDALgCIAFgEIANAAIAEACQgQABgLAEIgLAFIgCACIAAAAIABAAIgEAFIgBAAQgFAHABAGIAHgJIABAAIgBABIACADIAEgGIAGgGIACAAIgBAEIAHgDIACAAIABgBIABAAQgHAFgDAKIAHgHIALgDQAGAAAFAFIgFgBIgFABIAJACIAAAAIgJgCQgHAAgCACIANAEIABAAIAAABIgDAAIgKgBIgEAAIgIACQgJAFgEAMIgCAcIgEgOIgBANIAAARIAAAAQgEgIgBgSgAg+A0IABAAIAAgBgABUBkIgPgUIAGAHIAAAAIAAgDIgCgFIgEgKIgGgIQgDgPgMgIIALAEIgFgGIgBgBIgGgGIAAAAIgCgBIgBgBIgBAAIAAAAQgMgHgTgCIAAgBIALABIAKAAIAGACIABAAIAAABIAQANIABgFIgCgEIgBgCIAGADIABAAIgBgEIgBgGIAEAEIABgNIACABIACACIAEAJIgEgCIABAJIAAAEIgDgBIAEAFQAEAGAEgCIAAABIgIACIgBAAQAEABAEAHIAFALIgBAAQgHgJgDAAQAGAEAEASIAAAAIgDgDIgBgCIABAFIABAJIAIAXgAgyATIgBAAIgEABIgFABIAOgLIAKgHIAAgBIAAAAIgGABIgDACIAAgBIAJgIIAIgGIgBAAIgHgCIAEgCIAFgDIAGgEIADgCIABAAIAAgBIAAgEIABgJIAAAAQAGACADgHIAFgJIgBAKIAAABIgFAMIAAAAIgBgDIgBgBIAAABIgBAKIgBgCIgCAAIABAJIAAADIgHAAIAEAHIAAABIgEgCIgEgBIgBABIAHAEIADADIgMACIAAAAIgOAGIAHABIABAAIgBAAIgHACIgKAFIAAABIAJgCIgDACIgCADIgJACgAApAQQgFgEgHgBIgCAAIgDgBIgDgDIAEAAIAHADIAAgBIgIgFIgMgEIgEABIAAgBQAJgHAHgCIgNAEIAOgKIAAAAIgFgBIgEABIgDACIAAgDIACgCIgBAAQgEABgCACIAAgCIABgDIAAgDIgEAFIAAgBIABgGIAAgEIgFACIgBgRIABgGIABAAIADAIIACAJIAHABIABABIgGAHIAIAAIgBAGIAAABIAAAAIABgBIAAAAIAKAAIgBABIAEAAIgHAHIABAAIANACIgNAHQAEABAIAFQAKAHAAAGIAAABgAgkgZIAAgOIAAgDIAAACIgFAJIgBgLIAAgIIgDABIgBAAIgDACIgEACIgBAAIAAgEIAAgCIgHAEIgFADIgBAAIABgBIABgBIABgCIAAAAIAAgBIAAgBIAAAAIgDABIADgFIADgBIACgBIgBgBIAAAAIgCgBIgBgBIAHgDIADAAIABAAIAAgBIgCgCIAAgBIAMABIAAAAIgCgEIABAAIAHgCIAIACIABAAIAAAAIgEgEIABAAIANAMIABABIgEAAIgHgCIgBAAIAKAJIgGACIgCADIAHgCIAEAAIAAACIgBAEIgBgBIgBAAIgDAGIgCgEIgBAAIgCAEIgBACIgCAGIAAgEIABgGIAAgBIAAgBIAAABIgBABIgFAIIgCAFIAAACIAAACgAAdgkIgBAAIgEgDIgBgBIgDgCIAAAAIAEAFIgBAAIgDAAIgDgCIgIgFIAAgBIAGgEIAEgDIgDgBIAAgBIALgDIAAgBIgFgDIAKgDIAEgBIAJABIgDADIACgBIAEABIADAAIACABIAGACIACACIABACIACABIACAEIAAAAIAEAEIAAAAIgJgEIgHgCIAHAGIgOAAIAGAFIgBAAIgEAAIgJABIgGgCIAAABIAIAEgAAUgqIgBgBgAATg0IABAAIABgBgABUhOIgFgJIgGgOIABAAIAFACIAAAAIgFgJIABAAIALAJIgCAAIAFAHIgDgBIADAFIADALIAAAJIgCgFIAAgEIgBgBIAAABIgBAMgAgyhaIgBgEIgBgDIAAAAIgIgHIgLAHIgBgCIgHABIAJgIIgLAGIADgCIAJgGIAAAAIAFgBIAFACIgBgEIABAAQAFABAFAJIAEAEIgBAJg");
	this.shape_10.setTransform(0.1,-1.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#626773").s().p("AhOB4IAAgBIAAgBIAAACgAhEA6IABAAIAAABgAhOAoQADgLAGgIIgBAAIgFACIgEACIAAgBIAQgWIgBAAQgDAAgHAEIAAgFIADgDIgJACIACgDIACgFIgEgBIAAgBIAEgGIACAAIAFgBIgGAHIADAAIADgCIAAAAIAAABIgCAHIADgBIAEgDIAEAEIAAAAIAAgKIAIAGIABAAIAAgEIADAFIAAgFQAEAAAGAEIgFgGIgDgBIANADIgBgDIAAgBIABAAIAEABIABgEIAEACIgDADIgGADIgFADIgEADIAHABIABAAIgIAFIgJAJIAAABIADgBIAGgCIAAAAIAAABIgKAIIgOALIAFgBIAEgBIABAAIgGAEIAJgBIABAAQgLACgGADIgJAHgAAiAbIAAAAIAHADQgGgIgOgEIACAAQAHAAAFAEIAFAEIAAgBQAAgGgKgIQgIgGgEAAIANgGIgNgDIgBAAIAHgHIAEgBIACACIAAAEIAHACIACAAIgKACIAAAAIASADIgEgFIAGADIABAAQAAgGADgCIABADIACgBIgCADIgBAAIAIgBIAGABIAAABIgLADIAIAIIgHgEIgBAAIAHAJIgFgBIACACIgCgBIgBANIgEgEIABAGIABAFIgBgBIgGgCIABABIACAFIgBAFgAAKgLIAAgBIABgFIgIgBIAGgGIAEAHIAAADIANgEIgFAGIgKAAIAAABIgBAAgAhLgTIgCgFIAAAAIAFACIACgBIAAABIgGAFgAgWgeIgBAIIAAAFQgCgGADgHgAgjgcIABgHIgBAHIAAAEgAAHgaIABABIgHgBIgBgJIgDgIIgBAAIgBAFIAAgBIgCACIAAABIgCACIABgKIgFAJQgDAHgGgCIAFgKIgBgBIgFAGIgBgBIABgCIABAAIABgDIAAgDIgEAAIgHACIACgCIAGgCIgKgJIABAAIAHABIAEABIgBgCIgNgMIAAAAIANAIIgBgGIAHAHIAGANIAAAAIABgBIABgFIAAAAIACALIAAAAIABgCIADgGIAGgJIgBAHIAJgIQAHgFAEgBIAAABIgEAEIAGAAIAGAAIgEACIgKADIAFADIAAAAIgLAEIAAABIADABIgEACIgGAFIAAAAIAIAFIADACIgCAAIgGgDIgCgBIAFAFIACADIABACgAAWgeIgEgCIAEACIABABIAAAAgAhugkIAAgEQAHgHAAgJIAAAAIACgDIAFgCIAFgFIAAAAIABgCIABgCIABAAIABgEIgCgBIAFgIIAAgBIgBAAIgCABIAHgJIgBABIgEAAIAHgBIABABIgJAWIgBACIAAABIgCABIgEADIgDAGIACAAIAAACIgEAFIABACQgBADgFAGIgFAGIACADQgEgBAAgGgAgdgkIgBAAIgCADIACgDIABgBIACAFIADgGIgDAGgAAqghIAEgBIABABIgFAAgAAOgkIAAABgAgigjIAAgBIAAABgAANgkIABAAgAhHgnIABgCIgBACIgBABgAg0gqIABgBIgCABIgCACgAhJgrIADAAIAAAAIAAAAIAAAAIgDABgABIgyIABgEIgFgGIACgBIgBgBIgEgJIADgBIgCgCIAAgBIgEgGIAEAAIABAAIgBgBIgKgQIAHAAIAAgBIgBAAQgDAAgEgFIgEgEIAGAAIgDgDIgFgCIgCAAIACgGIACAAIAAAAIgCACIAMAEIgDACIAJACIAEACIAAABIgEABIAHABIAJACIAAAAIgFADIAAAAIANAFIAOAFQgCACgCAAIAAABIAHAAIADgBIgBADIgDAAIgJgCIgIgDIgKgDIgLgJIgBAAIAFAIIAAABIgFgCIgBAAIAGAOIgCgBIgCgBIAFAOIgCAAIgBAAIAAABIAFAEIABABIgDAAIAGANIAAAAIgJAFgAANgtIACgBIgBABgAhCgyIAAAAIgDgCIABAAIACABIAAAAIABABgAhsgzIADgPIgFACIgBAAIAEgFIADgEIAAAAIACAAIgIABIAAAAIAHgLIAGgFIACgDIgEABIACgCIABAAIAKgHIgJgCIARgEIANgEIAGADIABABIAEACIACAEIACAHIgCgCIABAEIgEgFQgFgJgFgBIgBAAIABAEIgFgBIgFABIAAAAIgJAFIgDADIgCABIgBAAIgGAHIgGAGIAGABIgDAEIgDAEQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAIgDAHIAAACIgGAIgAg8g7IAAAAIACADgAgwg7IgCgDIACADgAgig/IgDgDIAEADIAAABgAgmhDIACAAIgBABg");
	this.shape_11.setTransform(0.7,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-15.4,26.1,30.9);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEACIAAgCIACABIAAABIgBAAgAgFAAIABgBIADABIgCACg");
	this.shape.setTransform(-1,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAIQgCgDgBgEIACgGIAHgEIAGACQADADABAEQAAADgDADIgGAEgAADADIABAAIABAAIAAgBIgCgBgAgGABIACACIACgCIgDgBg");
	this.shape_1.setTransform(-0.9,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626773").s().p("AgKATIgDgKIACgDIACgOIgCAHIgBgBIAAgMIABgEIAAgBIACgBIACgCIADAOIACgBIABgFIAEAFIgCAEIAAABIAGABIgCADIAFACIAEABIgCABIAAABIAAAAIAAAEIgJgFIAAgBIAAABIABADIgKgGIgBAAIABAEIgEADIAHADIgGAMIAAAAg");
	this.shape_2.setTransform(3.6,-3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777C88").s().p("AgJAeIAFAAIAAgDIgEgJIADAAIgDgGIAGgFQgEAAgBgCIABgEIACgBIADgFIAAgBIgCAAIgLADIAAgBIAFgHIgEACIgEADIAAAAQgBgDAFgHIgKAHIgBgCIAAgHIgEAIIgGgDIgDgBIACACIACADIAAAAIgGAAIAAAAIgBAAIAAgFIAAAAIgDAAIAAgBIAJgIIgIABIgIADQACgJALgBIAHAAIAFAEIANgLIABgBIALgEIgJAIIACAAIAFgDIABABIgGAEIgBABIABAAIAEgBIAHAAIABABIgGACIAAABIAEAAIAFAAIADgBIAFgDIgCAEIAGgBIANgEIAFgBIABAAIAAABIgHADIAJAAIgEADIAIAAIgCACIAGACIgDABIAFAFIgEABIgBAAIABAAIAAAAIADAEIABABIgFgBIgDAAIAFADIAAAAIgCABIgJAEIAAABIADABIAAAAIgEAAIgEABIAAgBIAAABIgIACIAEgHIAAgBIAAAAQgDAAgEADIgFAEIADgHIAAgCIAAgBIAAABIgCACIgDADIAAADIgBgBIAAADIgBAAIgBAFIgBABIgEgNIgCACIgBABIgBABIAAADIAAAMIAAABIADgHIgDAPIgBADIADAKIAAAEIgDABIgBgBIgCgGIgJAIg");
	this.shape_3.setTransform(2.1,-4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAEACIAAgCIABABIAAABIgBAAgAgEAAIABgBIACABIgCACg");
	this.shape_4.setTransform(4.5,-3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFAHIgDgGQAAgDACgEIAGgDIAFACIAEAHIgCAGQgCADgEABIgBAAQgCAAgDgDgAADADIABAAIABAAIgBgBIgBgBgAgFABIACACIABgDIgCAAg");
	this.shape_5.setTransform(4.6,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("AA6hmIAFAAIAFABQACAAABgCIAFgCIgCADIAGgBQAEgCAIgCIAFAAIABAAIAEACIgEAAIgHACIAJAAIgDACIAHAAIACACIgEAAIAGADIgDAAIAGAGIgEABIgBgBIAAABIABAAIADAFIAAAAQgCAAgCgCIgDABIAFADIAAAAIgCABIgJAEIAAAAQABABABAAIABABIgCAAIgDAAIgEABIAAAAIAAADIAAACIAAAIIgBAFIADADIAAAAIAGADIAAABIgEAAIAGAFIACACIAAABIgCAAIALAGIAEADIAFAEIACACIAEAOIAAAAIABAEIAJAQIADAIIABAKIAAAMIgBADIAAAEIgBAJIgCATQAAALABAHIgEgFIAAAEIAEAJIAAABIgBgBQgFgEAAgDIgGALIgBABIAAgBIgCgIIgDgGIABAJIgFgGIgCgGIABANIAAAAIAAAAIgDgDIgFgMIAAgBIgBgCIAAgBIgBgIIgDAMIAAABIgBABAh6g/IgBACIgBAAIgFAGIgGAJQgCAAgBgFIgCgLIAAgBQgBgOAEgCIAOgHIAJgFIADgCIAEgEIAJgIIAIgGIAHgIIAPAEIAFACIACAAIAPAFIACAAIAXgFQAHgCAGgEIAIAAIALAAIABgBIAKAEIAEACIASAEIADAAIABgBIALgEIgJAHIACAAIAFgCIAAAAIgGAFIAAAAIABAAIADAAIAJAAIAAAAAA6hmIgBAAIAAAAABAhoIgGACAB6AJIABgDIACgGIABAAIACgCIAAgCIAAgEAB5AMIgEABQgFABgBgDIgBgCIgCgGIgGgDIgBAAIgEgFIgBgCQgBgHAKgCIAEgBIAJgBQADgBACgHABlBWIgJAOIADgKIgBABIgEAEIgEADIAAAAIAAgEIAAABIgPAQIAFgMIAAgBIAAABIgSARIABgMIgMARIAAAAIAAgBIABgJIAAgGIgEAFQgGAGAAAEIgBgBIAEgLIACgJIgBgEIgDAGIgDAEIgLAQIgBAAQAEgGADgOIgFAFIAAAAIAAAAQACgCACgJIgIAGIgIAFIAKgaIgMAUIgHAIIAAAAIAAAAIACgKIACgLIgJAVIAAgIIgDgOIABAHQgIgPgBgLIAAgJIAAAQIgBACIAAgCIgIgPIgBAIIgBAFIgDgLIgBgEIgBgBAg5hOIAKAAIAAAAIgGgJIgLABIgEABIAGgFIAAgBIgBAAIgCgBIgFgEIADAAIADAAIAAAAQgLgLgGAAQgFABgPARIgKAOIgLAMAgbA3IAAAAIAAABIgDAKIgDgZIAAAAIgBAAIgEAFIgDAHIAAgCIAAgKIACgLIgEADIAAABIAAgBIACgPIgLgcIgKgbIgBgEIABgFIgCgCIABgDIAAgBIAAABIgCAAQgFACgDABIgHgBIgBABIgCABIgEAEIgIgEIgFgCIgCgGIgGACIgGgGIgHgFIgBAB");
	this.shape_6.setTransform(-3.8,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292421").s().p("AgCAEIACgDIACgDQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIgBADIgCADg");
	this.shape_7.setTransform(7.8,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAASIgBgCIgCgGIgGgDIgBgBIgEgFIgBgBQgBgHAKgCIAEgBIAIgBQADgBACgHIAEAOIAAAAIABAEIAAADIAAACIgCACIgBABIgCAGIgBADIgBACIgEACIgCAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAgAAGAFIgDAEIgCADIACAAIADgDIABgEIgBgBIAAABg");
	this.shape_8.setTransform(7.4,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444655").s().p("ABgAxQABAJgEAFIAAgBIAAgKIgDgOIAAgCIgBgEIAJAQIADAJIAAAQgAAaA7IAAgGQAAgJAEgKIAFgMIgLAJIAAAAIANgVIgDADIAAAAIAAgHIACgGIgBABIgDgKIgDgGIABAAIAJAGIAAAAIgBgDIABAAIAIAFIAAgEIAAgBIACgBIgEgBIgFgBIADgFIgHAAIAAgBIACgFIgFgFIABAAIABgDIAAgCIACgEIADgCIAAACIgEAIIAGgEQADgEADAAIAAABIgDAIIAAAAIAAABIAAgBIAHgDIAAABIABACIAAADIgBAIIgBAFIADACIAAABIAHADIAAABIgFAAIAGAEIACACIAAACIgCAAIALAEIAFAEIAEADIACACQgBAIgDAAIgJABIgFABIABgEQgGAEAAABIgBgJQgEADgCAEIgBgKQgFACAAAJIACAQIAAABIgDgJIgDgKIgIANQgFAKgEAPgAglAxIgBgNIAAgFIAAgNIgGAMIgBAIIgBgVIgJAMIgHAGIAAAAIAGgHIAFgPIADgNIgGAEIAAgCQADgIAMgHIgFABIgBABIgBAAIgFAAIAAAAIAGgGIgBAAIgFACIAAAAIABgEIAFgEIgIABIAAAAIAEgFIAEgFIgJgBIAEgCIABAAIgCgBIgFABIAGgGIAFAAIgBACIAHABIgCAIIAAAAIAGgGIgBAEIABAAIAFgFIADgCIAIgDIABgBIAAAAIAGABIAAgBIgDgCIgBgCIACAAIAHAEIAEgIIABAHIgBACIAKgIIgFAKIAAAAIAFgCIADgDIgDAHIAAABIAKgDIABAAIgGAHIgBABIABAFQADACADAAIgHAFIAEAFIgEAAIAFAJIAAADIgGAAIgCAMIAAAAIgCgHIgGANIgBAEIgFAUIgBAAIABgWIgBgGIgBAAIAAAAIgEAMIAAAAIgDgGIgBgCIAAAAIgDAFIAAABIgEAFIgBgLIAAAAQgDAFgEAKIgCAFQgDAMAAAHgAhLAMIgCgHIAAgBIgBgEIgBgGIAAgFIgCAAIABgBIAAAAIgBAAIgDAAIADgFIABgDIABgBIAGgMIgBgBIABAAIABABIABABIACACIAGgBIgEAHIAGAAIgDAHIABAAIAEAAIAAABIgEABIgEADIAFAAIgIAGIgBAGIAAAFIABAEIgBACIgBALgAAYAJIABAAIgBABgAhfgTIgDgDIABgDIACgCIAAgCIgBgBIAEgDIACADIgCgDIgBgBIgDgEIAKABIAAgBIgGgIIAAgBIACACIAJAGIABAEIAAABIAAADIgBAFIgBABQgDAGgFABIgCAAgAhXgzIgBAAIgDAAIAAgBIADgCIgIgIIAAAAIADAAIgHgKIAQAFIADAEIAIADIAAABIgCAAQgHgDgBANg");
	this.shape_9.setTransform(0.1,-1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("ACFBnIAAAAIAAABgAB6BjIABAAIAAAAgAAtBiIAAAAgAAtBhIABAAIgBABgABFBSIAAAAIAAAAgAgFBKIABAAIAAACgAAKBKIAAgBIAAABgAgGBEIAAAAgAgHBEIABAAgAgkAhIABAAIgBABgAAAAdIABAAIAAAAgABnAbIAAAAgAB1ALIAAgBIABABgAAvAEIAAgBIAAABgAgagRIAAABIABACgABCgTIAAgBIABABgAA2gfIAAAAIAAABgABLggIAAAAIAAAAgAgFgzIABAAIAAAAgAgig0IAAAAIAAAAgABVg0IAAgBIAAABgAiEg9IAAgCIAAACgABbhHIAAAAIAAABgABihKIAAAAIABgBIAAABgABphKIABgBIABABgAgDhMIgBAAIABAAgABehQIABAAIAAABgAg6hbIAAAAIABAAgAAQhcIAAAAIAAAAgAgyhmIgBgBIACABg");
	this.shape_10.setTransform(-4.6,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#977168").s().p("AgJAGIAEgDIgCgBIACgDIgBgBIgIgBIAOgIIAAAAIgFAGIADgBIAKgBIAHAHIAAABIgLgBIABAEIgFgBIAAAAIAAABIgBAAIAAAAIABADIABgBIABADIgEADQgEgCgDgEg");
	this.shape_11.setTransform(-10.1,-5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("ABNBHIgBACIACgHIAIgZIgCAYIAAABIgBABIAAABIgJANgAAWBCIgIAKIABgPQgEAJgHAGIAFgUIgHAJIgGAIQAGgKAIgeIABgDIAFgPIAGgdIAAgBIgBABIgHARIgJARIgEAGIgGAJIgJAUIgBgBIAEgSIAAgEIACgEIAEgYIAAABIgMAZIAAACIgDAFIgCARIgDgNIAAgDIAAgCIABgMIAAgOIAAAAIAAAAQgDAEgDAOIgCAVIAAAAIgEgQIAAgTIgDATIAAAAIgBgHIgBgOIABgMIgBAAQgFAQABAQIgCgEIgCgMIgCgQIAAgJIgBgOIgCAAIgGAHIgEgaIgHAEIgBgKIAEgTIgIADIgCAAIgBAAIgDgCIACgEIAAAAIgBAAIgCABIgHACIgHgBIgCABIgGgFIgIgEIAEgBIAKABIAFABQADAAAAgFIAIAAIALAEIADAAIAEgDIAGgBIgBAEIgDAFIAAACIADgBIgDAGIAFgBIABAGIgBAGIAAADIABALIADAAIADAGIAGAGIgEgVIAAgCIABgFIAEgJIAJgKIABAIIgCAHIABAEIABACIABgBIAGgFIgDAOIgFAOIgGAHIAAABIAHgGIAJgMIABAUIABgHIAGgMIAAANIAAAEIABAOIABAEQAAgGADgMIACgFQAEgLADgEIAAAAIABAKIADgEIAAgBIADgFIAAAAIABABIADAHIAAAAIAEgMIAAAAIABAAIABAFIgBAXIABAAIAFgUIABgEIAJgHIAAABIAAgBIAJgIIACAGIACABIAEgBIABAAIgCACIAAABIABAAIADgCIABAAIgGAIIgBACIgCACIgBABIABAAIAFgBIgIAKIgFANQgEAOABAKIABAEIABgGIAGgOIAFgKQgGANAAAJIAAAHIACAPIABgNIADgMIABAXIgBAFIgDAVIAHgWIAFgYIACgHQAEgPAFgHIAGAKIACAEIAEALIAAAMIgEAOIgFAJIAHgKIAEgLIAAgBIAEABIADgDIABAAIAFAEIABgBIABAAQAAAEADAEIABADIgBABIgDgDIABAKIgEgEIgCgDIgCAHIgCgEIgDgEIgCAKIgBAIIgDgJIgBAAIgGAJIgBAHIgCgIQgBgFACgGIgBgEIAAAAIgIATQgFAPACAIIABADIAAAAIgBgDIgEgJIAAAAIgBAMIgBAAIAAgBIgDgIIAAAAIAAAAIgDAGIgCAEIgBAEIgCgRIgEAOIgBAAQAFgagBgIIgGAXIgIAPgABaBBIAAgBIgBgCIAAgBIAAgDIACgFIAAAJIABABIACAOgABtAjIgCALIgGAKIAAAAIAEgVIAAgCIgMAQIAJgXIAGgEIADgCIABgCIABAEIAAAAIAAAVIAAANIgBAEgABmAXIAAgBIAFgUIAEALIgHAJIgFAFgABgAKIgBgCIgBAAIgDABIgBgDIgBAAIgDAEIgCgJIgGAHIgCgVIAAgBIgCgNIAAgEQABAJAEAEIABgDIADAEIACAEIAHAGIABAAQACAEAEgBIAEgCIgGARgAAugXIgDAFg");
	this.shape_12.setTransform(-2,4.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777C88").s().p("ABcAVIACAHIgJAGgAhcgCIAAgCQgBgNAEgDIANgGIAKgFIACgCIgBADIgFACIABADIgDABIgBABIgDABIgCAIIgMAPg");
	this.shape_13.setTransform(-8.6,-3.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4C3C1").s().p("AAQByQAEgGADgOIgFAFIgBAAQADgCACgJIgIAGIgIAFIAKgaIgMAUIgGAIIAAAAIACgKIAAgLIgIAVIgBgIIgCgNIABAGQgIgPgBgLIAAgJIAAAQIgBAAIgIgPIgBAIIgBAFIgEgKIAAgEIgBgCIAAgBIgBAAIAAABIgCAKIgEgZIAAAAIAAAAIgEAGIgDAGIAAgCIAAgJIACgMIgEADIgBAAIADgOIgMgcIgKgbIgBgFIACgEIACAAIACAAIAIgDIgFATIABAKIAHgEIAFAaIAFgHIACAAIACANIAAAJIACARIACAMIABAEQAAgQAFgQIABAAIgBAMIABAOIABAHIAAAAIACgTIAAATIAFAQIAAAAIACgVQACgOADgEIABAAIgBAOIgBAMIAAACIAAADIAEANIACgRIACgFIAAgCIAMgZIAAgBIgEAYIgBAEIAAAEIgEASIAAABIABAAIAIgUIAGgJIAFgGIAJgRIAHgRIABAAIgHAdIgFAPIgBADQgIAegGAKIAGgIIAHgJIgEAUQAHgGAEgJIgBAPIAIgKIgCAMIAIgPIAGgXQACAIgFAaIABAAIADgOIADARIABgEIACgEIACgGIAAAAIADAIIAAABIABAAIACgMIAAAAIADAJIABADIAAAAIgBgDQgBgIAEgPIAIgTIAAAAIABAEQgBAGAAAFIACAIIACgHIAFgJIABAAIAEAJIABgIIABgKIADAEIADAEIACgHIABADIAFAEIgCgKIAEADIABgBIgBgDQgDgEgBgEIgBAAIgBABIgEgEIgBAAIgEADIgDgBIAAgFIABAAIAGgHIACAJIACgEIABAAIABADIAEgBIABAAIABACIABABIAGgSIABgDIABgCIACgFIAEAOIABAOIgBACIgFgLIgEAUIAAABIgEAEIAEgBIgJAXIAMgQIAAACIgFAVIAAAAIAGgKIACgLIAEAZIABgEIAAgNIAAgVIAAAAIgBgEIAFgNIAEANIAAAFIABADIgBAJIgCATQgBALACAHIgFgEIAAADIAFAJIgBAAQgFgEAAgDIgHALIAAAAIgCgIIgDgGIABAJIgFgGIgCgGIABANIAAAAIgDgDIgDgOIgBgBIAAgJIgCAFIAAADIgBgIIgDAMIAAABIAAgBIACgYIgIAZIgCAHIgEADIgEADIAAAAIAAgEIAAABIgPAQIAFgMIAAgBIAAABIgSARIABgMIgMARIgBgBIACgJIAAgGIgEAFQgGAGgBAEIAAgBIAEgLIABgJIAAgEIgDAGIgDAEIgMAQgAAdBbIAAAAgAAdBaIAAABIABgBgAgVA9IgBAAgABiBJIAAABgAhng2IgGgCIgBgGIgGACIgGgFIgHgFIgBABIALgNIAKgNQAPgSAEAAQAHgBAKAMIgBgBQgMgDAAADIgEAAIADACIAEADIgNAEIgJAHIAAABIAMAAIgGAEIgBAHIALgBIgDAHIACAFIgKgBIgDABIAHAEIAGAFIgBACIgFAEg");
	this.shape_14.setTransform(-3,3.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B0928A").s().p("AgBAUIgDgFIAEgHIgMABIACgHIAFgDIgLAAIAAgBIAJgHIALgEIgDgDIgCgCIACAAQAAgDAMADIACABIgDgBIgCABIAEADIACABIABABIgOAIIAIABIAAABIgBADIACABIgEADQACAEAFACIgBAAIgBABIABAEIgIAAQAAAFgDAAgAAOgNIAAAAIgBAAgAAPgRIAAAAIABAAg");
	this.shape_15.setTransform(-11.8,-5.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#626773").s().p("AA8BJIABgEIgBgXIgCAMIgBANIgDgPIAAgHIADgMIAHADIAAAFIACAAIABgEIAEACIgCAFIgFAZIgGAWgABYBHIAEgPIAAgEIADABIAAAEIAAABIgFAMIgHAKgAB6BDIAHgKIABgBIgBgPIgEgOIABgBIACgDIAEAOIAAAKIAAABQADgFgBgIIAGAXIAAgPIABAJIAAAMIgBADIAAAEIgBgEIAAgEIgEgOIgFAOIgBACIgEACIgFAEIgEABgAAwA1QgBgJACgKIAHADIgGAOIgBAGgABcAxIAAgEIgEgNIgBgDIgHgKQgDAEgDAJIgDgDIAEgKIAHgMIAEAKIACAJIAAgBIgBgQQAAgJAEgBIACAJQABgFAEgCIABAJQABgCAFgEIAAAFQgKACABAIIAAABIAFAGIABAAIAGADIABAHIAAABIgGgGIgDgEIgDgEIgBADQgDgEgCgKIAAAFIADANIAAAAIACAXgABHArIAAgCIADgJIASARIAAADgABAAoIAAgCQAAgGADgHIAEAEIgEAMgAA4AlIAAgBIAFgLIgEAMgAgfABIAAgFIAAgBIgBACIgBADIgDgBIgBAAIgBgHIAAgBIgBgGIgBAHIAAADIAAADIhSgiIA2ggIADACIABABIABABIABAAIgGAFIADgBIALgBIAAAAIACABIAJAHIACADIAAABIAAAEIgCAEIgBABQgDAGgFABIgCAAIgCgBIgDgCIABgEIACgCIAAgBIgBgBIADgDIAAgBIgBgBIgCgDIABADIgGgBIAAAAIgBABIgBAAIAAAAIACAEIABgBIABADIgFACIAAABIgBAAIABAFIAKADIADABIAFgDIAGgBIgCADIACgCIABgBIAFgMIgBgCIABAAIABABIACACIACACIAFgBIgEAGIAHAAIgEAHIACAAIAEAAIAAABIgFACIgEADIAGAAIgIAFIgBAHIAAAGIABADIABgFIADgJIAJgKIABAHIgCAHIABAFIABACIABgBIABgDQADgIALgHIgEABIgCABIgBAAIgEAAIAAAAIAAAAIAFgHIgBAAIgEADIAAgBIABgEIAEgDIgHABIAAAAIADgGIAEgDIA/A8IgBAAIgEANIgCAGgAgugTIAGgBIAAgFIgCAAIABgBIgBAAIgEAAIAAABIAEAAgAA/AVIgCAEgAA/AVIAAgBIAAABIgHgGIAHgLIgEACIAAgBIABgCIABgCIAHgHIAAgBIgBAAIgEACIgBAAIACgCIgBAAIgDABIgCgBIgCgHIgKAJIADgMIAFAAIAAgEIgEgJIADAAIgDgEIAHgGQgEAAgCgCIgBgEIABgCIAGgGIgCAAIgKACIAAAAIAEgIIgEADIgEADIAAAAIAEgKIgLAHIABgCIgBgHIgDAIIgHgDIgCAAIABABIACACIAAABIgFgBIgBAAIgBABIgIAEIgDABIgEAGIgBAAIABgFIgFAHIAAAAIABgIIgHgBIABgCIgEAAIgEADIgWgVIAAAAIACAAIAAgBIgHgEIgEgDIACAAIAXgGIANgGIAIAAIAKAAIACgBIAKAEIADACIASAEIADgBIACAAIALgEIgJAHIACAAIAEgBIgFAEIAAAAIABAAIADAAIAIAAIABAAIAAABIgGACIgBAAIAAAAIAAAAIABAAIAFAAIAFABQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIAFgCIgDADIAGgBQAFgCAIgBIAFgBIABABIAEABIgEAAIgHACIAJAAIgEACIAIAAIACACIgEABIAGACIgDAAIAGAGIgFABIAAAAIAAAAIAAAAIADAFIAAAAIgDgCIgDABIAEADIAAABIgCABIgJADIAAAAIACABIgBABIgCAAIgEABIAAgBIgBAAIgGAEIADgIIAAgBIAAAAQgDAAgEADIgFAFIADgIIAAgDIgCADIgDADIAAACIgBAEIgBAAIAGAEIgCAGIAAABIAGAAIgDAEIAGACIADABIgBABIAAABIAAADIgIgEIgBgBIAAABIABACIAAAAIgJgGIgBAAIACAGIADALIACgBIgDAHIAAAHIAAAAIAEgEIgOAVIAAAAIALgJIgEALIgCAGgAAIhCIAAAAIAAgBgAghAKIgBgBIAAgBIABACIgEgGIgCABIgBgHIAEABIACAJIABgIIACABIADAQgAiKgZIgCgKIABAAIACADIALgPIACgIIAEgCIABgBIACgBIgBgCIAFgCIACgEIAEgDIAIgJIAIgGIAIgIIAPAFIAEABIACAAIAHAKIgCAAIgBAAIABAAIABACIgJAFQgLgLgGABQgEAAgPASIgKANIgLANIgCABIAAAAIgFAHIgHAIIAAAAQgCAAAAgFgAgJguIADAAIgBABgAgQgvIAEgCIADADgAgNgyIABgBIABABIgBABgAgPg0IACACIgFAAgAgwhBIgBAAIgEgBIAAgBIAEgCIgHgGIAKgGIAJAIQgHgEgBAOgAhGhGIADAAIABAAIgCACgAhBhGIAAAAIABAAgAhChGIABAAIAAAAgAA5hUIAAAAIgBABg");
	this.shape_16.setTransform(-3.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-10.6,30.2,26.2);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADACQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABAAIAAABIgBABgAgFAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIACABIgCABg");
	this.shape.setTransform(25.3,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAIIgDgHQAAgDACgDQACgDAEgBIAHACIAEAHIgDAGIgGAEgAACADIACABIABgBIAAgCIgCAAQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAgAgGABIACACIACgDIgDAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABg");
	this.shape_1.setTransform(25.5,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626773").s().p("AgKATIgDgKIACgCIACgPIgCAHIgBgBIAAgMIABgDIAAgBIACgCIACgCIADANIACAAIABgFIAEAEIgCAFIAAABIAGABIgCADIAFACIAEABIgCABIAAABIAAAAIAAAEIgJgFIAAAAIAAAAIABADIAAAAIgKgHIgBAAIABAFIgEACIAHAFIgGALIAAAAg");
	this.shape_2.setTransform(29.9,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777C88").s().p("AgJAeIAFAAIAAgDIgEgJIADAAIgDgFIAGgGQgEAAgBgCIABgEIACgBIADgFIAAgBIgCAAIgLADIAAgBIAFgHIgEACIgEAEIAAAAQgBgDAFgIIgKAHIgBgCIgBgHIgDAIIgGgCIgDgCIACADIACABIAAABIgGAAIgBAAIAAAAIAAgEIAAgBIgDAAIAAgBIAJgJIgIABIgIAEQABgIALgCIAIAAIAFAEIANgLIABgBIALgEIgJAIIACgBIAFgCIABABIgGAFIgBAAIABAAIAEgBIAHAAIABABIgGACIAAAAIAFABIAEABIADgCIAFgDIgCAEIAGgBQAFgEAIAAIAFgBIABAAIAAABIgHAEIAJAAIgEACIAIAAIgCABIAGAEIgDAAIAFAFIgEACIgBgBIAAABIABAAIADADIABABIAAABIgFgCIgDAAIAFADIAAABIgCAAIgJAEIAAAAIADACIAAAAIgEAAIgEABIAAgBIAAABIgIACQACgGACgBIAAgBIAAAAQgDAAgEADIgFAEIADgHIAAgCIgCACIgDAEIAAACIgBgBIAAADIgBAAIgBAFIgBAAIgEgMIgCACIgBACIgBABIAAACIAAAMIAAABIADgHIgDAQIgBACIADAKIAAAEIgDABIgBgBIgCgHIgJAJg");
	this.shape_3.setTransform(28.4,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AADACIABgCIABAAIAAACIAAAAgAgEAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIADABIgCABg");
	this.shape_4.setTransform(30.8,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFAHQgCgCAAgEIAAgHIAHgDIAFACIAEAGIgCAHIgGAEgAACADIABAAIABAAIAAgCIgBAAgAgGAAIACACIADgCIgDAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_5.setTransform(30.9,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("Ah6g/IgBACIgBAAIgEAGIgHAJQgCAAgBgFIgBgLIgBgBQgBgOAEgCIAOgHIAJgEIADgDIAEgDIAJgKIAIgFIAHgIIAPAEIAFACIACAAIAPAFIACAAIAXgFIAOgGIAHAAIALgBIABAAIAKAEIAFACIARAEIADAAIABgBIALgEIgJAHIACAAIAFgCIABAAIgGAFIgBAAIABAAIAEgBIAIAAIAAABABAhoIgGACIAAAAIAFAAIAFABIADgCQADgCACgBIgCAEIAGgBIANgEIAFAAIABAAIADABIgDAAIgHADIAJAAIgEACIAHAAIADACIgEAAIAGADIgDAAIAFAGIgEABIADAFIAAAAIgEgCIgDABIAFADIAAAAIgCABIgIAEIgBAAIACABIACABIgDAAIgDAAIgDABIgBAAIABADIAAACIAAAIIgBAFQAAACADABIAAABIAGACIAAABIgEAAIAGAFIACACIAAABIgCAAQABAAAJAGIAEADIAGAEIABACABrhZIgBgBIAAABgAB5ALIgEACQgEABgCgDIAAgCIgCgGIgGgDIgBAAIgFgFIAAgCQgBgHAKgDIAEgBIAJAAQADgCABgGIAEANIAAABIABAFIAJAOIADAJIABAJIAAAMIgBAEIAAAEIgBAIIgBATIAAASIgEgEIAAAEQABAGADADIAAAAIgBAAIgFgHIgGALIAAAAIAAgBIgCgIIgDgGIAAAKIgEgGIgCgGIABAMIAAAAIgBAAIgCgDIgFgLIAAgCIgBgCIAAAAIgBgIIgEALIAAABIAAABAB7AJIAAgCIADgGIABgBIABgCIABgCIgBgDAg5hOIAKAAIAAAAIgGgJIgLABIgEABIAGgFIAAgBIgBAAIgCgBIgFgDIADgBIAEAAIgBABQgLgMgGAAQgFABgPARIgKAOIgLAMAgbA2IAAABIAAAAIgDALIgDgZIAAgBIAAABIgFAFIgDAHIAAgCIABgKIABgMIgDAEIgBAAIAAgBIACgNIgLgdIgKgaIgBgFQAAgDACgCIgDgCIABgDIAAAAIAAAAIgCAAIgHADIgIgBIgBABIgBACIgEADQgDAAgGgEQgDgDgCABIgCgGIgFACIgHgGIgHgFIgBABAgKBDIAAAHIgBACIAAgCIgIgPQgCABAAAGIAAAGIgEgLIgBgEIAAgCABlBWIgJAOIADgKIgBABIgDADIgFAEIAAgBIAAgDIAAAAIgOAQIAEgMIAAAAIAAAAIgRARIABgLIgMARIgBAAIAAgBIABgJIABgGIgEAEIgHAKIAAAAIADgMIACgJIgBgDIgCAFIgDAFIgMAQIgBAAIAAAAIAIgUIgGAEIAAAAIAAAAIAFgLIgJAHIgIAEIAKgZIgMAUIgHAHIAAABIAAgBIADgKIABgKIgJAUIAAgHIgCgOIABAHQgIgPgBgLAgKA6IAAAJ");
	this.shape_6.setTransform(22.5,24.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292421").s().p("AgCADIACgCIABgEIACAAIgBAEIgCADg");
	this.shape_7.setTransform(34.1,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAASIgBgCIgCgGIgGgDIAAAAIgFgGIgBgBQgBgHALgDIAEgBIAHAAQADgCABgGIAEANIABABIABAFIAAACIAAACIgCADIgBABIgCAGIgBACIgCACIgDACIgDAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAgAAFAFIgCAEIgCADIACABIADgDIABgFg");
	this.shape_8.setTransform(33.7,24);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444655").s().p("ABfAyQABAIgDAFIAAgBIAAgKIgEgOIABgCIgBgDIAJAPIADAJIAAAQgAAaA8IgBgGQABgJAEgLIAFgLIgLAJIAAAAIAOgWIgEADIgBAAIABgGIACgHIgCABIgCgKIgDgGIABABIAJAFIgBgCIABAAIAIAEIAAgDIABgBIABgCIgEgBIgFgBIADgEIgHgBIAAgBIADgFIgGgEIAAgBIACgDIAAgCIACgDIADgDIAAACIgEAIIAFgEQAFgDADAAIAAABIgEAIIAHgEIAAABIABADIAAACIAAAIIgBAFQAAABAAAAQAAAAABABQAAAAABAAQAAABABAAIAAABIAGACIAAABIgEAAIAGAFIACACIAAABIgCAAIAKAFIAEADIAGAEIABACQgBAGgDACIgJAAIgEABIABgEIgHAGIAAgKQgFADgBAFIgBgLQgGADAAAIIACARIAAABIgDgKIgDgJIgHAMQgGAKgEAQgAAsgeIABAAIgBAAgAglAyIgBgOIAAgFIAAgNIgGAMIgCAIIAAgVIgJAMIgGAGIAAAAIAFgHIAFgOIADgOIgGAEIAAgCQADgHAMgHIgFAAIgBABIgCAAIgEABIABgBIAEgGIAAAAIgFADIAAgBIABgEIAEgDIgHABIAAgBIAEgFIAEgEIgKgBIAFgDIABAAIgBgBIgGABIAHgFIAEgBIgCADIAIAAIgCAIIAAAAIAGgGIgBAFIABAAIAFgGIADgBQADgDAEgBIACgBIAAAAIAGABIAAgBIgCgCIgCgCIADABIAGADIAEgJIABAIIgBACIAJgIIgEALIAAAAIAFgDIADgDIgEAIIAAAAIAKgCIACAAIgGAGIgBABIACAFQABACAEAAIgGAFIADAGIgEAAIAEAIIABADIgFAAIgDAMIAAAAIgCgHQgDACgDAMIgBADIgFAVIAAAAIABgXIgBgGIgBAAIAAABIgFAMIAAAAIgDgHIgBgCIAAAAIgEAFIABABIgDAFIgCgLIAAAAQgEAEgDALIgCAFQgDANAAAGgAhLAMIgCgHIAAAAIAAgFIgCgFIAAgFIgCAAIABgBIAAgBIAAAAIgEABIACgGIADgCIABgBIAEgMIAAgCIABAAIABABIABABIADACIAFgBIgEAHIAHAAIgDAHIABAAIADAAIAAABIgDACIgFADIAFAAIgIAFIgBAHIAAAEIABAEIgBACQgCAHAAAEgAAYAJIAAgBIAAABgAhfgTIgDgCIABgEIACgCIAAgBIgBgBIADgDIADADIgDgEIAAgBIgDgDIAKAAIAAAAIgGgJIAAAAIABABIAJAHIACADIAAABIAAADIgBAFIgBABQgDAGgFABIgCAAgAhXgyIgBAAIgDgBIAAgBQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAIgIgIIAAAAIADAAIgHgKIAPAFIAEAEIAIAEIAAABIgCAAQgHgEgBAOg");
	this.shape_9.setTransform(26.4,20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("ACFBnIAAAAIAAABgAB7BjIAAgBIAAABgAAtBhIABAAIgBAAgABFBSIABAAIAAAAgAgEBKIABAAIAAACgAAKBKIAAAAIAAAAgAgGBEIAAAAIAAAAgAgkAhIABAAIgBABgAAAAdIABAAIAAAAgABnAbIABAAIgBAAgAB2ALIAAgBIAAABgAAvAEIAAAAIAAAAgAgbgRIABABIAAACgABDgUIAAABIgBAAgAA2gfIAAAAIAAABgABLggIABAAIgBAAgAgFgzIABAAIAAAAgABVg0IAAAAIAAAAgAgig0IAAAAIAAAAgAiEg9IgBgCIABACgABahHIABAAIgBABgABihKIAAAAIABgBIAAABgABqhLIAAAAIACABgAgDhMIgBAAIABAAgABfhQIABAAIgBABgAg5hbIgBAAIABAAgAAQhcIAAAAIAAAAgAgyhmIgBgBIACABg");
	this.shape_10.setTransform(21.8,24.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#977168").s().p("AgJAHIAEgEIgCgBIACgDIgBAAIgIgCIAOgIIAAABIgFAEIADAAIAKgBIAHAHIAAABIgLgBIACADIgGgBIAAABIAAAAIAAAAIgBABIABADIABAAIABACIgDADg");
	this.shape_11.setTransform(16.2,16.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("ABNBHIgBABIACgGIAJgZIgDAYIAAABIAAABIgBABIgJANgAAWBCQgHAHAAADIAAgOIgKAOIAEgUIgHAJIgFAIIANgoIABgDIAFgQIAGgcIAAAAIAAAAIgIARIgJARIgEAGIgGAJQgGAKgDAKIAAAAIADgTIABgEIABgEQACgTACgFIAAAAIgMAaIgBACIgCAFQgDALACAGQgDgFgBgIIAAgDIAAgCIAAgMIACgOIAAAAIgBAAQgCAEgEAOQgDAPACAGIAAAAIgEgQIgBgTIgCATIgBAAIgBgHIgBgOIABgMIAAABQgGAPABAQIgCgEIgCgMIgCgQIAAgJIgBgOIgCAAIgGAHIgEgaIgHAEIgBgKIAEgTIgIADIgBAAIgCAAIgDgCIABgDIAAgBIAAAAIgCABIgHACIgIgBIgBABIgGgFIgIgEIAEgBIAKABIAGABIACgFIAIAAIAKAEIAEAAIAEgDIAGgBIgCAEIgCAFIgBACIAEgBIgDAGIAFAAIACAFIgCAGIAAADIABALIADAAIADAGQADAFADABIgEgVIAAgCIABgFIAFgJIAIgKIABAIQgCADAAAEIABAEIABACIABgCIAGgDIgDANIgFAOIgFAHIAAABIAGgHIAJgLIAAAUIACgHIAGgMIAAANIAAAEIABAOIABAFQAAgHADgMIACgFQADgLAEgEIAAAAIACAKIACgEIgBgBIAEgFIAAgBIABACIADAHIAAAAIAFgMIAAAAIABAAIABAFIgBAXIAAAAIAFgUIABgEIAJgHIAAABIAAgBIAKgIIACAGIACABIADgBIABAAIgCACIAAABIAAAAIAFgCIAAAAIgGAIIgBACIgCACIAAABIABAAIAEgCIgIALIgFAOQgEAOACAJIABAEIABgGIAFgOIAEgJQgFANAAAIIAAAHIADAPIABgNQAAgIACgEIAAAXIAAAFIgCAWIAFgXIAGgYIACgHQAEgPAFgHIAGAKIACAEIADALIAAAMIgEANIgEAKIAGgKIAFgMIAAgBIAFACIADgEIAAAAIAGAFIAAgBIABAAQAAAEAEAEIAAADIgBAAIgDgCIACAKIgEgEIgCgDIgCAHIgDgFIgDgDIgBAKIgCAIIgDgJIgBAAQgDACgCAHIgDAHIgBgHQgBgGABgGIAAgEIAAAAIgIAUQgFAOACAIIABADIgBAAIAAgDIgEgJIAAAAIgBAMIgBAAIAAgBIgDgIIAAAAIAAAAIgDAGIgBAEIgBAEIgDgQIgDANIgBAAQAFgagCgIIgGAXIgIAPgABaBBIAAgBIgBgCIAGAPgABZA9IAAgDIACgEIABAHIAAACIADAOgABtAkIgCAKIgFAKIgBAAIAEgUIAAgDQgFAMgGAEIAIgXIAGgEIADgCIACgCIAAAEIAAAAIABAVIgBANIAAAEgABnAWIgBAAIAFgUIAFALIgIAJIgEAFgABgAKIAAgCIgBAAIgEABIgBgDIgBAAIgCAEIgCgJIgHAHIAAAAIgBgVIAAAAIgDgOIAAgEQACAJAEAFQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIADADIADAFIAHAFIAAAAQACAEAEgCIAEgCQgBAIgEAKgAAtgXIgDAGIADgGg");
	this.shape_12.setTransform(24.3,26.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777C88").s().p("ABcAVIACAGIgJAHQAEgLADgCgAhcgCIgBgCQgBgNAEgDIAOgGIAJgFIADgCIgBADIgFACIAAACIgCACIgBABIgDABIgDAIQgDACgIANg");
	this.shape_13.setTransform(17.8,18.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4C3C1").s().p("AAQByIAHgUIgFAFIgBgBIAFgKIgJAGIgHAFIAKgaIgMAUIgGAIIgBAAIADgKIAAgLIgIAVIgBgIIgBgNIAAAGQgHgOgCgLIAAgKIAAAKIAAAGIgBAAIgIgPQgBACgBAGIAAAFIgEgKIAAgEIgBgCIAAgBIAAAAIAAABIgDAKIgDgZIAAAAIgBAAIgEAGIgDAGIgBgCIABgJIACgMIgEADIAAAAIABgOIgKgcIgLgbIAAgEQAAgDABgCIACAAIACAAIAHgDIgEATIACAKIAHgEIAEAaIAGgHIABAAIACANIAAAJIACARIABAMIADAEQgBgQAFgPIABgBIgBAMIAAAOIACAHIAAAAIACgTIABATIAEAQIABAAIAAAAQgCgGADgPQADgOADgEIAAAAIgBAOIAAAMIAAACIAAADQABAIACAFQgBgGADgLIACgFIABgCIAKgaIABAAQgCAFgCATIgBAEIgBAEIgDATIAAAAIABAAQADgKAFgKIAGgJIAFgGIAIgRIAIgRIABAAIgHAcIgEAQIgCADIgOAoIAGgIIAHgJIgEAUIAKgOIAAAOQAAgEAIgGIgCAMIgBAAIABAAIAAAAIAJgPIAGgXQABAIgEAaIAAAAIAEgNIADAQIABgEIABgEIACgGIABAAIACAIIABABIAAAAIABgMIABAAIADAJIABADIAAAAIAAgDQgCgIAEgOIAIgUIABAAIAAAEQgBAGAAAGIACAHIACgHQADgHADgCIAAAAIAEAJIABgIIACgKIADADIACAFIACgHIACADIAEAEIgCgKIAEACIABAAIgBgDQgDgEgBgEIAAAAIgBABIgFgFIgBAAIgDAEIgEgCIAAgEIABAAIAHgHIABAJIADgEIAAAAIABADIAFgBIABAAIAAACIABABQAFgKAAgJIACgCIABgCIACgFIAEAOIAAAOIAAACIgFgLIgEAUIAAAAIgDAFIACgBIgHAXQAGgEAEgMIABADIgEAUIAAAAIAFgKIADgKIADAYIABgEIAAgNIAAgVIAAAAIgBgEIAFgOIADAOIABAFIAAADIgBAJIgBATIAAASIgDgFIAAAEQAAAGADADIAAAAIgGgHIgFALIgBAAIgBgIIgEgGIABAJIgEgGIgDgGIABAMIAAABIgCgDIgEgOIAAgCIAAgHIgCAEIAAADIgBgHIgEALIAAABIgBgBIADgYIgIAZIgCAGIgEADIgEAEIAAAAIgBgDIABAAIgBgBIAAABIgOAQIAFgMIAAgBIgBABIgRARIABgMIgMARIAAAAIABgKIAAgGIgEAFIgHAKIAAgBIAEgLIABgJIAAgEIgDAGIgDAEIgMARgABjBJIAAABgAhng2QgEgDgBABIgCgGIgGACIgGgFIgHgFIgBABIAKgNIALgNQAPgSAEAAQAGgBAMAMIgDgBQgMgDABADIgEABIADABIADADQgHABgEADIgKAHIAAABIAMAAIgFAEQgDAEABADIAMgBIgEAHIACAFIgJgBIgEABIAIAEIAGAFIgCACIgEAEQgDAAgFgFg");
	this.shape_14.setTransform(23.3,25.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B0928A").s().p("AgBAUIgCgFIADgHIgLABQgBgEADgDIAEgEIgLAAIAAAAIAJgHQAFgDAGgCIgDgCIgCgBIACgBQAAgDAMADIABABIgCAAIgDAAIAGADIACABIAAAAIgOAIIAIACIAAAAIgCAEIADABIgEADIAIAGIgBAAIgBAAIABAEIgIABIgDAEgAAPgNIAAAAIgBgBgAAOgRIACAAIAAAAg");
	this.shape_15.setTransform(14.5,16.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#626773").s().p("AA8BJIABgEIAAgXQgCADgBAJIgBAMIgDgOIAAgHQABgKAFgMIADgHIgDAHIgEAJIgFAPIgCAFIgBgEQgBgKADgOIAGgNIAHgLIgEABIAAAAIABgCIACgCIAFgHIABgBIgBAAIgEACIgBgBIACgCIgBABIgDABIgCgBIgCgHIgJAJIACgNIAFAAIAAgDIgEgIIAEAAIgEgGIAGgFQgDAAgCgCIgBgFIABgBIAGgGIgCAAIgKACIAAAAIAEgIIgEADIgEADIgBAAIAFgLIgKAIIAAgCIgBgIIgDAJIgHgDIgCgBIABACIADACIAAABIgGgBIgBAAIgBABQgEABgDADIgEABIgFAGIAAAAIAAgFIgEAGIgBAAIACgIIgHAAIABgDIgEABIgHAFIAGgBIABABIgFADIAKABIgFAEIgEAFIAAABIAIgBIgEADIgBAEIgBABIAFgDIABAAIgFAGIgBABIABAAIAEgBIABAAIACgBIAEAAQgLAHgDAIIgBACIgBACIgBgDIAAgDQgBgFACgCIgBgIIgIAKIgEAJIgCAFIgBgEIAAgEIABgIIAJgFIgFAAIAEgDIAEgCIAAgBIgEAAIgBAAIADgHIgGAAIAEgHIgFABIgDgCIgCgBIgBgBIAAAAIAAACIgFAMIgBABIgCACIACgEIgGACIgFADIgDgBIgKgEIgBgEIABAAIABgBIAEgCIgBgDIgBAAIgCgDIABAAIABAAIAAgBIAAAAIAGABIgCgDIADADIABABIAAABIgEADIABABIABABIgCACIgBAEIADACIADABIACAAQAEgBADgGIABgBIACgFIgBgDIAAgBIgBgDIgJgHIgCgBIAAAAIgLABIgDABIAGgFIgBgBIAAAAIgCgBIgFgDIACgBIADAAIABABIAAgBIgBAAQgLgLgGAAQgEABgPARIgLAOIgKAMIgCACIAAAAIgFAGIgHAJQgCAAgBgFIgBgLIABAAIACAEQAIgNADgCIACgIIADgCIABgBIADgBIgBgCIAFgCIACgEIAEgDIAIgKIAJgFIAGgIIAQAEIAEACIACAAIAHAKIgCAAIgBAAIAAAAIAIAIQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIAAABIADABIAAAAIAEACQABgOAHAEIADAAIgBgBIgHgEIgEgEIACAAIAXgFIANgGIAIAAIAKgBIACAAIAKAEIAEACIARAEIADAAIABgBIAMgEIgKAHIACAAIAGgCIAAAAIgGAFIAAAAIAAAAIAEgBIAIAAIABABIAAABIgGACIgBAAIAGAAIAEABIAEgCIAEgDIgCAEIAHgBIANgEIAFAAIABAAIADABIgEAAIgHADIAJAAIgDACIAHAAIACACIgEAAIAGADIgDAAIAGAGIgFABIAEAFIAAAAIgEgCIgEABIAFADIAAAAIgCABIgIAEIAAAAIACABIgBABIgDAAIgEABIABgBIgBAAIgIAEIAEgIIABgBIgBAAQgDAAgEADIgFAEIADgIIAAgCIgCADIgDADIAAACIgBADIAAABIAFAEIgCAFIAAABIAGABIgDAEIAGABIAEABIgCACIAAABIAAADIgJgEIAAgBIAAABIABACIgJgFIgBgBIACAGIADALIABgBIgBAHIgBAGIAAAAIAEgDIgOAVIABAAIALgJIgFALQgFALAAAJIABAGIABAAQAEgQAFgKIAHgMIADAJIADAKIAAgBIgCgRQAAgIAGgCIABAKQACgFAEgDIABAKIAGgGIAAAEQgLADABAHIABACIAFAGIAAAAIAGADIACAGIAAABIgHgFIgCgEIgDgEQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAQgEgFgBgJIAAAFIADANIAAABIAAAVIAAABIAAAEIAAABIgFAMIgHAKIAFgKIAEgOIAAgMIgEgLIgCgEIgGgLQgFAIgDAOIgCAIIgGAZIgGAWgABqg/IAAAAIAAgBgAAIhCIABAAIgBgBgAB6BDIAHgKIAAgBIAAgPIgEgOIABgBIACgDIAEAOIAAAKIAAABQADgFgBgIIAGAXIgBgQIACAJIgBAMIAAAEIgBAEIAAgEIgBgEIgDgOIgFAOIgCABIgDADIgGAEIgCAAgAghAKIAAgCIgBgBIABADIgDgGIgDABIgCgKIABgDIABgGIABAFIAAAAIABAHIADAJQgBgEADgGIAAgCIABABIADAUQgDgBgCgFgAgqgZIgEAAIAAgBIAEgBIABABIgBABIABAAIABAFIgGABg");
	this.shape_16.setTransform(22.5,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.4,11.6,30.2,26.2);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADACIACgCIABABIAAABIgBAAgAgFAAIACgBIACABIgBACIgBAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape.setTransform(2.7,-5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAIQgDgCgBgEIACgHQADgDAEgBIAGACIADAHIgBAGQgCADgFABIgBAAQgCAAgDgCgAACADIACAAIABAAIAAgBIgBgBgAgGABQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAIABgCIgCgBg");
	this.shape_1.setTransform(2.8,-5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADACIABgCIACAAIAAABIgCABgAgFAAIADgBIACABIgCACg");
	this.shape_2.setTransform(8.1,-6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAIQgDgCgBgEIACgHIAGgEIAFACIAEAHIgCAGIgFAEgAADADIABABIABgBIAAgBIgBgBgAgFABIACACIACgCIgCgBg");
	this.shape_3.setTransform(8.1,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#626773").s().p("AgKATIgDgJIABgEIADgOIgDAHIAAgBIAAgMIAAgDIAAgBIACgCIABgCIAFANIABAAIABgFIAFAEIgDAFIAAABIAHABIgDADIAFABIAFABIgCACIAAAAIAAABIAAADIgJgFIAAAAIAAAAIABADIAAABIgKgHIgBAAIABAEIgEAEIAGADIgFAMIgBAAg");
	this.shape_4.setTransform(7.2,-5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#777C88").s().p("AgIAeIAGgBIgBgDIgFgIIAEAAIgDgFIAGgGQgEAAgCgCIACgEIACgBIACgGIAAAAIgCAAIgKADIAAAAIAEgIIgEACIgEAEIgBAAIAFgLIgKAHIAAgBIgCgIIgDAJIgGgCIgDgCIABADIAEABIAAAAIgGAAIgBAAIgBABIABgEIgBgCIgEAAIAAgBIAKgIIgJACIgHADQACgJAKgBIAHAAIAFADIAOgLIAAAAIAMgGIgKAJIACgBIAGgCIAAAAIgGAGIAAAAIAAAAIAEgBIAIgBIAAACIgFACIAAAAIAEABIAEAAIAEgBIAEgEIgBAFIAGgBQAEgFAIgBIAFgBIACABIgBABIgGAEIAJAAIgEACIAHAAIgCABIAHADIgEAAIAHAGIgFABIgBgBIAAABIABAAIADAEIABABIAAAAIgFgBIgDAAIAFADIAAAAIgCABIgJAEIAAABIADABIABAAIgGAAIgCABIAAgBIgBABIgIACIADgHIABgBIgBAAIgGAEIgFADIADgHIAAgCIAAAAIAAAAIgCACIgCAEIgBACIgBAAIAAACIAAAAIgBAGIgCAAIgEgNIgBADIgCACIAAABIAAABIAAANIAAABIADgHIgDAPIgBADIADAJIAAAFIgDABIgCAAIgBgHIgJAJg");
	this.shape_5.setTransform(5.7,-7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("AA+hpIgGACIgBAAIAGAAIAEAAIAEgBIAEgDIgCAEIAHgBIANgFIAFAAIABAAIADAAIgEABIgHADIAJAAIgDACIAHAAIADABIgEABIAGACIgDABIAFAFIgEABIADAFIAAABIgEgCIgDAAIAFADIAAABIgCAAIgIAFIAAAAIACABIABABIgCAAIgDAAIgEABIAAAAIAAADIABACIAAAIIgBAFIADADIAAABQACABAEABIAAABIgEAAIAGAEIADACIAAABIgDABIALAFIAEADIAFAEIACACIAEANIAAABIACAFAh6g7IgBAAIgBACIgBAAIgEAGIgHAJQgCABgBgFIgBgLIgBgCQgBgNAEgDQAHgEAGgDIAJgFIADgCIAEgEIAIgKIAJgFIAGgIIAQAEIAEABIACAAIAQAFIACAAIAXgGIANgGIAIAAIAKgCIABAAIALAEIAEACQALAFAGgBIADgBIABgBIAMgEIgKAHIACAAIAGgCIAAAAIgGAFIAAAAIAAAAIAEgBIAIAAIABABAB6AIIgEACQgEACgCgEIAAgBIgDgGIgGgCIAAgBQgEgCgBgDIgBgCQgBgHAKgDIAEgBIAJgBQADgCABgGABphcIgBAAIAAAAgAB7AGIABgCIACgFIABgBIACgDIAAgCIAAgDIAJAOIADAJIABAJIAAALIAAAFIgBADIAAAJIgBATQAAALABAHIgEgEIAAAEQABAGADADIAAAAIgBAAIgFgHIgFALIgBAAIAAgBIgCgIIgDgGIAAAKIgEgGIgCgGIABAMIAAABIgBAAIgCgDIgFgMIgBgBIAAgCIAAgBIgBgHIgEALIAAABIAAABABoBUIgJAOIADgKIgBABQgBABgCACIgFAEIAAgBIAAgDQgKAPgEACIAEgMIAAgBIgRASIABgLIgLARIgBAAIAAgBIABgJIAAgGIgEAFQgGAGgBAEIAAgBIAEgLIABgJIgBgEIgCAGIgDAEIgLARIgBAAIAAAAIAHgVIgFAFIgBAAIAAAAIAFgLIgJAHIgHAEIAJgZIgMAUIgGAIIgBAAIAAAAIADgKIABgLIgJAVIgDgVIABAGIgJgZIAAAHIAAACIgBgCIgIgPIgCAHIAAAGIgEgLIgBgEIAAgCAgZA4IAAABIgCAKIgEgZIAAAAIgBAAIgEAGIgDAGIAAgCIAAgJIACgMIgEADIAAABIAAgBIABgOQgBgGgLgWIgLgaIAAgFIABgFIgDgBIABgEIAAAAIAAAAQgBABgBAAIgHACIgIgBIgBABIgBADIgEADQgDAAgGgEIgFgCIgCgGIgFACIgHgFIgHgFIAAABIAJgNIAKgNIATgTQAGgBAMAMIgBAAIgCAAIgDAAIAFADIACABIABAAIAAABIgGAFIAEAAIALgCIAHAJIAAAAIgLAAAhChdIABgBIgBABgAgIBEIAAgJ");
	this.shape_6.setTransform(-0.1,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B0928A").s().p("AAAAUIgDgFIADgHIgLABIACgGIAFgEIgMAAIAAgBIAJgHQAEgDAHgBIgDgDIgDgBIADgBQAAgDAMADIABAAIgCAAIgDABIAFADIACABIABAAIgOAJIAIABIABAAIgCADIACACIgEADIAIAGIgBAAIgBABIABADIgIABQAAAFgCAAgAAOgNIABAAIgCAAg");
	this.shape_7.setTransform(-8.3,-7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#977168").s().p("AgIAHIADgEIgCgBIACgDIgBAAIgIgCIAOgIIAAAAIgGAGIAEgBIAKgBIAHAHIAAABIgLgBIACADIgFgBIgBABIAAAAIAAAAIAAABIABADIAAgBIABADIgDADg");
	this.shape_8.setTransform(-6.5,-7.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C4C3C1").s().p("AATBxIAHgVIgFAFIgBAAIAFgLIgJAHIgHAEIAJgZIgMAUIgGAIIAAAAIACgKIABgLIgIAVIgDgVIABAGIgKgZIAAgJIAAAJIAAAHIgBAAIgIgPIgCAHIAAAGIgEgLIgBgEIAAgCIgBAAIAAABIgCAKIgEgZIAAAAIgBAAIgEAGIgDAGIAAgCIAAgJIACgMIgEADIAAAAIABgOQgBgGgLgWIgLgaIAAgFIABgFIACAAIABAAIAIgDIgEATIACALIAHgEIAFAZIAGgHIABAAIACANIAAAJIADARIACAMIACAEQgBgQAFgQIAAAAIAAALIAAAOIACAHIABAAIABgTIACATIAEAQIABABIAAgBQgDgGADgOIAGgTIAAAAIgBAOIAAAMIAAACIAAADIAEANQgBgGACgLIACgFIABgCIAKgaIAAAAQgCAEgBAUIgBAEIAAAEIgDATIAAAAIABAAQACgKAFgKIAGgKIAFgGIAIgRIAHgRIABAAIgGAcIgEAQIgBAEIgNAnIAGgHIAGgJIgDAUQAGgHADgIIABAOQAAgDAHgHIgBAMIgBAAIAAAAIABAAIAIgPIAFgYQACAJgEAZIABAAIADgNIADARIABgFIABgDIACgGIABAAIADAHIAAABIABAAIAAgMIABAAIAEAJIAAADIABAAIgBgDQgCgIAEgOIAHgUIABAAIAAAEQgBAGABAGIACAGIACgGQACgHADgCIABgBIADAKIACgJIABgKIADAEIADAEIABgHIADADIAEAEIgDgKIAEACIABAAIgBgDIgEgIIAAAAIgBABIgFgFIgBAAIgDAEIgEgBIgBgEIABgBIAHgHIACAJIACgEIABAAIABADIAEgBIABAAIABACIABABIAFgTIABgBIABgCIACgGIAFANIAAAPIAAABIgFgKIgEATIAAABIgDAFIACgBIgGAXIAKgQIAAACIgDAVIAAAAIAFgKIACgLIAEAYIABgEIAAgMIgBgVIAAgBIgBgDQAEgFABgJIADANIABAFIAAADIAAAJIgBATQAAALABAHIgEgEIAAAEQABAGADADIgBAAIgFgHIgFALIgBgBIgCgIIgDgGIAAAKIgEgGIgCgGIABAMIgBABIgCgDIgEgOIAAgCIAAgHIgCAEIAAADIgBgHIgEALIAAABIAAgBIACgYIgIAZIgCAHIgDADIgFAEIAAgBIAAgDQgKAPgEACIAEgMIAAgBIgRASIABgLIgLARIgBgBIABgJIAAgGIgEAFQgGAGgBAEIAAgBIAEgLIABgJIgBgEIgCAGIgDAEIgLARgAgRA8gAhpg0IgFgCIgCgGIgFACIgHgFIgHgFIAAABIAJgNIAKgNIATgTQAGgBAMAMIgBAAIABAAIAAAAIgBAAIgBgBQgMgDAAADIgEABIAEABIADADQgIABgEAEIgJAHIAAAAIAMAAIgFAFIgCAGIAMgBIgEAIIADAEIgKAAIgEABIAIADIAGAFIgBADIgEADQgDAAgGgEg");
	this.shape_9.setTransform(0.8,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#292421").s().p("AgCADIACgCIABgEIACAAIgBAEIgCADg");
	this.shape_10.setTransform(11.6,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAASIAAgBIgDgGIgGgDIAAgBQgEgCgBgDIgBgCQgBgGAKgDIAEgBIAIgBQADgCABgGIAEANIAAABIACAFIAAACIAAACIgCADIgBABIgCAGIgBACIgBACIgEACIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBgAAFAGIgCAEIgCADIACAAIADgDIABgFg");
	this.shape_11.setTransform(11.2,-1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("ABQBGIgBABIACgHIAHgZIgCAYIABABIgBAAIAAACIgJAOgAAZBBQgIAIAAADIAAgOQgDAIgHAGIAEgUIgHAJIgFAIIAMgnIACgEIAEgQIAFgcIAAgBIAAABIgIARIgIARIgEAGIgFAKQgGAKgDAKIAAgBIACgSIABgEIABgEQACgUACgFIgBAAIgKAaIgBACIgCAGQgDALACAGIgEgNIAAgEIAAgBIgBgMIACgOIAAAAIgBAAIgFASQgDAPACAGIAAAAIgFgQIgBgTIgCATIAAAAIgCgHIgBgOIABgMIgBABQgFAQACAQIgDgFIgCgLIgCgRIgBgIIgBgOIgCAAIgGAGIgEgZIgHAFIgCgLIADgTIgHADIgCAAIgCAAIgDgBIACgEIAAgBIgBAAIgCABIgHADIgHgBIgBABIgGgFIgIgDIAEgBIAJAAIAGABQADAAAAgFIAIgBIAKAEIADABIAFgEIAGgCIgCAEIgDAGIAAACIAEgBIgDAHIAFgBIACAFIgCAGIAAADIACALIADAAIADAFIAFAHIgEgVIAAgCIABgFIAFgJIAHgKIABAIIgBAGIABAEIABACIABgBIAGgEIgDAOIgFANIgEAHIAAABIAGgGIAIgNIABAVIABgHIAGgNIABAOIAAAEIABAOIABAEQAAgGADgNIACgEQADgMADgEIABAAIABAKIACgEIAAgBIADgFIABAAIABABIACAIIABAAIAEgNIAAgBIABAAIABAGIAAAXIAAAAIAFgVIABgDIAIgIIAAABIAAgBIAKgIIACAHIACAAIADAAIABgBIgCACIAAABIAAAAIAFgCIAAAAIgFAJIgCABIgBACIgBABIABAAIAEgCIgHALIgFAOQgDAOABAJIACAEIABgGIAFgNIADgJQgEAMgBAIIABAIIADAOIABgNIACgLIAAAWIAAAFIgBAWIAFgWIAFgaIACgHQADgOAFgHIAGAKIACADIAEAMIAAALIgEANIgEALIAGgLIAFgMIAAAAIAFABIADgEIAAAAIAGAFIAAgCIABAAIAEAJIAAADIgBAAIgDgCIACAJIgEgDIgCgEIgCAHIgCgDIgEgEIgBAKIgBAIIgEgJIAAAAQgDADgDAGIgCAHIgCgHQAAgFABgHIgBgDIAAAAIgHAUQgFAOADAIIAAADIAAAAIgBgDIgEgKIAAABIgBAMIAAAAIgBgBIgDgHIAAgBIAAABIgCAFIgBAEIgBAEIgEgQIgDANIAAAAQAEgZgCgJIgGAYIgIAOgABdA/IgBgBIgBgDIAAAAIAAgDIACgEIABAHIAAACIAEANgABvAhIgCALIgFAKIgBAAIAEgVIgBgDIgKARIAHgXIAGgFIADgCIACgBIAAADIAAAAIABAVIAAANIAAAEgABoATIgBAAIAEgTIAGAKIgIAJIgEAGgABhAIIAAgDIgBAAIgEACIgCgDIAAAAIgCAEIgCgIIgHAGIgBAAIgBgVIAAAAIgDgNIAAgFQACAJAEAFIAAgDIADAEIADADIAHAGIABAAQACAEAEgCIADgCIgEASgAAtgYIgDAHIADgHg");
	this.shape_12.setTransform(1.7,1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777C88").s().p("ABdATIABAGIgIAHQADgLAEgCgAhcAAIgBgBQgBgNAEgDIANgHIAJgFIADgCIgBADIgFACIAAACIgCACIgBABIgDACIgCAIIgLAOg");
	this.shape_13.setTransform(-4.9,-6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF00FF").s().p("ACHBkIABABIgBAAgAAvBhIABAAIgBAAgAB8BhIABgBIAAABgABGBSIABgBIAAABgAgDBMIABAAIAAACgAALBLIAAAAIABAAgAgFBFIABAAIAAABgAgjAjIAAAAIAAABgAABAeIAAAAIAAAAgABnAZIAAAAIgBABgAB2AJIAAgBIAAABgAAuAEIABAAIAAAAgAgcgPIABABIAAACgABBgUIABAAIgBABgAA0gfIABAAIgBAAgABJghIABAAIgBAAgAgHgxIABgBIgBABgAgkgyIAAAAIAAAAgABSg1IAAAAIABAAgAiGg4IgBgCIABACgABYhIIAAAAIAAAAgAgGhKIgBgBIABABgABghLIAAgBIABAAIgBABgABnhMIABgBIABABgABchRIABAAIgBABgAg9hYIgBAAIACAAgAANhbIgBAAIABAAgAg2hkIAAAAIABAAg");
	this.shape_14.setTransform(-0.7,-0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444655").s().p("ABgAvQACAJgDAFIAAgLIgFgPIABgBIgBgDIAJAOIADAJIABAQgAAcA7IgBgGQAAgIAEgMIAFgLIgLAKIAAAAIANgXIgEAEIAAAAIAAgHIACgGIgCAAIgDgKIgCgGIABABIAJAFIgBgCIAAAAIAJAEIAAgDIAAgBIACgCIgEgBIgGgBIADgDIgGgCIAAgBIACgFIgGgEIAAAAIACgEIAAgCIACgDIACgDIABADIgEAHIAFgEIAIgDIAAABIgEAIIAHgEIAAAAIABAEIAAACIAAAIIgBAFIAEADIAAABIAGACIAAAAIgEAAIAGAFIACACIAAABIgCABIAKAEIAEADIAGADIABACQgBAHgDACIgIAAIgEACIAAgFIgGAHIgBgKIgGAIIgBgLQgGACAAAJIADAPIgEgHIgDgJIgGANQgGAKgDAPgAArgfIABAAIgBAAgAgkAzIgBgOIAAgEIgBgOIgGANIgBAHIgBgVIgIANIgGAGIAAgBIAEgHIAFgNIADgOIgGAEIAAgCQADgHALgIIgEABIgCAAIgBAAIgEABIAAAAIAFgHIgBAAIgFAEIABgBIABgEIAEgEIgIACIAAgBIAEgFIAEgFIgKAAIAFgEIABAAIgBAAIgGABIAHgFIAEgBIgCACIAIAAIgCAJIAAAAIAGgHIgBAFIABAAIAFgGIADgBIAHgFIABAAIABAAIAGAAIAAAAIgDgDIgBgBIACAAIAHADIADgJIABAIIAAACIAJgHIgEAKIAAAAIAEgDIAEgDIgEAIIAAAAIAKgCIACAAIgGAGIgBABQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQABADAEAAIgGAFIAEAFIgEAAIAEAJIABADIgFAAIgDALIAAAAIgCgGQgDADgDALIAAADIgFAVIAAAAIAAgXIgBgGIgBAAIAAABIgEANIgBAAIgCgIIgBgBIgBAAIgDAFIAAABIgDAEIgBgKIgBAAQgDAEgDAMIgCAEQgDANAAAGgAhLAPIgCgIIAAAAIAAgFIgCgEIgBgGIgBAAIABgBIAAgBIgBAAIgEABIADgGIACgCIABgBIAEgMIAAgBIABAAIABAAIABACIADABIAFgBIgEAHIAHAAIgDAGIABABIAEgBIAAACIgEACIgEADIAFgBIgJAHIAAAGIAAAEIABAEIgBACIgBAMgAAYAJIAAgBIAAABgAhfgQIgDgDIAAgDIACgDIAAgBIgBgBIADgCIADACIgDgDIAAgBIgDgEIAKABIAAgBIgHgIIAAgBIACABIAJAHIACADIAAABIAAAEIgBAEIgBABQgDAHgEAAIgCABgAhZgvIAAAAIgDgBIAAgBIACgCIgIgIIAAAAIADAAIgHgKIAPAFIAEADQAEAEAEABIABAAIgDABQgHgEgBANg");
	this.shape_15.setTransform(3.7,-4.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#626773").s().p("AA+BJIAAgFIAAgXIgCAMIgBANIgDgPIgBgHQABgJAEgMIADgHIgDAHIgDAIIgFAPIgBAGIgCgEQgBgKADgOIAFgOIAHgLIgEACIAAgBIABgCIACgCIAFgHIAAgBIAAAAIgFADIAAgBIACgCIgBAAIgDABIgCgBIgCgGIgKAIIADgMIAFAAIgBgDIgEgJIAEAAIgEgFIAGgFQgEAAgBgDQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgBIAGgHIgCAAIgKADIAAAAIAEgIIgEADIgEADIAAAAIAEgLIgKAIIAAgCIgBgIIgDAJIgHgDIgCAAIABABIADADIAAAAIgGAAIgBAAIgBAAIgHAEIgDACIgFAGIgBAAIABgFIgFAGIAAAAIACgIIgIAAIACgDIgEABIgHAGIAGgBIAAAAIgFADIAKABIgEAFIgEAFIAAAAIAIgBIgEAEIgBADIgBABIAFgDIABAAIgFAHIgBAAIABAAIAEgBIABAAIACgBIAEAAQgLAHgDAIIAAACIgBACIgBgCIgBgEIABgHIgBgIIgHAKIgFAKIgBAFIgBgEIAAgEIAAgIIAJgGIgFABIAEgEIAEgBIAAgCIgEABIgBgBIADgGIgHAAIAEgIIgFACIgDgCIgBgBIgBgBIgBAAIAAACIgEAMIgBABIgCACIACgEIgGACIgFADIgDAAIgKgEIgBgEIAAAAIABgBIAEgDIgBgDIAAABIgCgDIAAgBIABAAIAAAAIABgBIAFABIgBgDIADAEIAAABIAAAAIgDADIABABIAAABIgCADIAAADIADADIADABIACgBQAEAAADgHIABgBIABgFIAAgDIAAgBIgCgDIgJgHIgCgBIAAABIgLABIgDABIAGgGIgBAAIAAgBIgCAAIgFgDIACgBIADAAIABABIAAgBIgBAAQgLgLgGAAIgTATIgKAOIgKAMIAAABIgCABIAAAAIgFAHIgHAIQAAAAgBAAQAAAAAAAAQgBgBAAgBQAAAAgBgCIgBgLIABAAIACAEIAKgQIADgIIACgBIABgBIADgCIgBgCIAFgCIACgEIAEgDIAIgKIAIgGIAHgHIAPADIAFABIACABIAHAKIgDAAIgBgBIABABIAIAIIgCACIAAAAIADABIAAAAIAEACQABgOAHAEIADAAIgBgBQgEgBgEgDIgEgDIACgBIAXgGIAOgGIAIAAIAJgBIACgBIAKAEIAFACQALAFAGgBIADgBIABAAIALgFIgJAHIACAAIAFgCIABAAIgGAFIgBABIABAAIAEgBIAIAAIAAABIAAAAIgGACIAAAAIAFABIAFAAIADgCIAFgDIgCAEIAGgBIANgEIAFgBIABAAIADABIgDAAIgHADIAJAAIgEADIAHgBIADACIgEAAIAGADIgDAAIAGAGIgFABIAAgBIAAABIAAAAIAEAFIAAAAIgEgCIgEABIAFADIABAAIgCABIgIAEIgBABIACABIgBAAIgDAAIgDABIAAgBIgBABIgHADIAEgIIAAgBIAAAAIgIAEIgFAEIAEgIIgBgCIgCADIgCADIAAACIgCADIAAABIAGAEIgCAFIAAABIAGABIgDAEIAGABIAEABIgCACIAAAAIAAAEIgJgEIAAgBIAAABIABACIgJgFIgBgBIACAGIADALIACgBIgCAHIAAAGIAAAAIAEgDIgNAVIAAAAIALgJIgFALQgEAMAAAIIABAGIABAAQADgQAGgKIAGgMIADAJIAEAHIgDgPQAAgIAGgCIABAJIAGgGIABAIIAGgGIAAAEQgLADACAIIAAABQABAEAEACIABAAIAGADIACAGIAAABIgHgFIgDgEIgDgDIAAADQgEgFgCgJIAAAEIADAOIAAAAIABAWIAAAAIAAAEIAAABIgFAMIgGAKIAEgKIAEgNIAAgMIgEgMIgCgEIgGgKQgFAIgDAOIgCAIIgFAZIgFAXgAAGhBIABAAIgBgBgAB7BAIAIgJIAAgCIgBgOIgEgPIABgBIABgDIAFAPIAAAKQADgEgCgJIAHAXIgBgQIACAJIAAAMIgBAEIAAAEIgBgEIAAgEIgEgOQAAAJgEAFIgCACIgDACIgGAFIgCAAgAghAMIAAgCIgBgBIABADIgDgGIgDABIgCgKIAAgDIACgGIAAAFIAAAAIACAHIADAJIABgKIABgCIAAABIAEAUgAgrgXIABAAIABAFIgFABgAgvgYIAEgBIABABIgBABIgEABgAhChCIgBgBIABAAIAAABg");
	this.shape_16.setTransform(-0.1,-2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-13.3,30.5,26.3);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADACIACgCIABAAIAAABIgBABgAgFAAIACgBIACABIgCABg");
	this.shape.setTransform(2.9,-5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAIIgDgHIACgGIAGgEIAHACIAEAHQAAADgDADQgCADgEABIgBAAQgDAAgDgCgAACADIACABIABgBIAAgCIgCAAgAgGABIACACIACgDIgDAAg");
	this.shape_1.setTransform(3,-5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADACIABgCIABAAIAAACIAAAAgAgEAAIABgBIADABIgCABg");
	this.shape_2.setTransform(8.3,-6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAHQgCgCAAgEIABgHIAGgDIAFACIAEAGIgCAHIgGAEIgBAAQgCAAgDgDgAACADIABAAIABAAIAAgCIgBAAgAgGAAIACACIADgCIgDAAg");
	this.shape_3.setTransform(8.4,-6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#626773").s().p("AgKATIgDgKIACgCIACgPIgCAHIgBgBIAAgMIABgDIAAgBIACgCIACgCIADANIACAAIABgFIAEAEIgCAFIAAABIAGABIgCADIAFACIAEABIgCABIAAABIAAAAIAAAEIgJgFIAAAAIAAAAIABADIAAAAIgKgHIgBAAIABAFIgEACIAHAFIgGALIAAAAg");
	this.shape_4.setTransform(7.4,-5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#777C88").s().p("AgJAeIAFAAIAAgDIgEgJIADAAIgDgFIAGgGQgEAAgBgCIABgEIACgBIADgFIAAgBIgCAAIgLADIAAgBIAFgHIgEACIgEAEIAAAAIAEgLIgKAHIgBgCIgBgHIgDAIIgGgCIgDgCIACADIACABIAAABIgGAAIgBAAIAAAAIAAgEIAAgBIgDAAIAAgBIAJgJIgIABIgIAEQABgIALgCIAIAAIAFAEIANgLIABgBIALgEQgIAFgBADIACgBIAFgCIABABIgGAFIgBAAIABAAIAEgBIAHAAIABABIgGACIAAAAIAFABIAEABIADgCIAFgDIgCAEIAGgBQAFgEAIAAIAFgBIABAAIAAABIgHAEIAJAAIgEACIAIAAIgCABIAGAEIgDAAIAFAFIgEACIgBgBIAAABIABAAIADADIABABIAAABIgFgCIgDAAIAFADIAAABIgCAAIgJAEIAAAAIADACIAAAAIgEAAIgEABIAAgBIAAABIgIACIAEgHIAAgBIAAAAQgDAAgEADIgFAEIADgHIAAgCIgCACIgDAEIAAACIgBgBIAAADIgBAAIgBAFIgBAAIgEgMIgCACIgBACIgBABIAAACIAAAMIAAABIADgHIgDAQIgBACIADAKIAAAEIgDABIgBgBIgCgHIgJAJg");
	this.shape_5.setTransform(5.9,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("ABAhoIgGACIAAAAIAFAAIAFABIADgCQADgCACgBIgCAEIAGgBIANgEIAFAAIABAAIADABIgDAAIgHADIAJAAIgEACIAHAAIADACIgEAAIAGADIgDAAIAFAGIgEABIADAFIAAAAIgEgCIgDABIAFADIAAAAIgCABIgIAEIgBAAIACABIACABIgDAAIgDAAIgDABIgBAAIABADIAAACIAAAIIgBAFQAAACADABIAAABIAGACIAAABIgEAAIAGAFIACACIAAABIgCAAIAKAGIAEADIAGAEIABACIAEANIAAABIABAFIABADIgBACIgBACIgBABIgDAGIAAACAh5g/IgBAAIgBACIgBAAIgEAGIgHAJQgCAAgBgFIgBgLIgBgBQgBgOAEgCIAOgHIAJgEIADgDIAEgDIAJgKIAIgFIAHgIIAPAEIAFACIACAAIAPAFIACAAQAOgCAJgDIAOgGIAHAAIALgBIABAAIAKAEIAFACQALAFAGgBIADAAIABgBIALgEIgJAHIACAAIAFgCIABAAIgGAFIgBAAIABAAIAEgBIAIAAIAAABAB5ALIgEACQgEABgCgDIAAgCIgCgGIgGgDIgBAAQgEgCgBgDIAAgCQgBgHAKgDIAEgBIAJAAQADgCABgGABrhZIgBgBIAAABgACAgHIAJAOIADAJIABAJIAAAMIgBAEIAAAEIgBAIIgBATIAAASIgEgEIAAAEQABAGADADIAAAAIgBAAIgFgHIgGALIAAAAIAAgBIgCgIIgDgGIAAAKIgEgGIgCgGIABAMIAAAAIgBAAIgCgDIgFgLIAAgCIgBgCIAAAAIgBgIIgEALIAAABIAAABABlBWIgJAOIADgKIgBABIgDADIgFAEIAAgBIAAgDIgOAQIAEgMIAAAAIgRARIABgLIgMARIgBAAIAAgBIABgJIABgGIgEAEIgHAKIAAAAIADgMIACgJIgBgDIgCAFIgDAFIgMAQIgBAAIAAAAIAIgUIgGAEIAAAAIAAAAIAFgLIgJAHIgIAEIAKgZIgMAUIgHAHIAAABIAAgBIADgKIABgKIgJAUIgCgVIABAHQgIgPgBgLIAAAHIgBACIAAgCIgIgPIgCAHIAAAGIgEgLIgBgEIAAgCAgbA2IAAABIgDALIgDgZIAAgBIAAABIgFAFIgDAHIAAgCIABgKIABgMIgDAEIgBAAIAAgBIACgNQgBgGgKgXIgKgaIgBgFIACgFIgDgCIABgDIAAAAIAAAAIgCAAQgFACgCABIgIgBIgBABIgBACIgEADIgJgEQgDgDgCABIgCgGIgFACIgHgGIgHgFIAAABIAKgMIAKgOQAPgRAFgBQAGAAALALIgBAAIgCAAIgDABIAFADIACABIABAAIAAABIgGAFIAEgBIALgBIAGAJIAAAAIgKAAAhAhgIABAAIgBABgAgKBDIAAgJ");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B0928A").s().p("AgBAUIgCgFIADgHIgLABIACgHIAEgDIgLAAIAAgBIAJgHIALgFIgDgCIgCgBIACgBQAAgDAMADIACABIgDAAIgDAAIAGADIACABIAAAAIgOAIIAIACIAAAAIgCAEIADAAIgEAEIAIAFIgBABIgBAAIABAFIgIAAQgBAEgCAAgAAPgNIAAAAIgBgBg");
	this.shape_7.setTransform(-8,-7.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#977168").s().p("AgJAHIAEgEIgCgBIACgDIgBAAIgIgCIAOgIIAAABIgFAEIADAAIAKgBIAHAHIAAABIgLgBIACAEIgGgCIAAABIAAABIAAAAIgBAAIABADIABAAIABACIgDADg");
	this.shape_8.setTransform(-6.3,-7.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C4C3C1").s().p("AAQByIAHgUIgFAFIgBgBIAFgKIgJAGIgHAFIAKgaIgNAUIgFAIIgBAAIADgKIAAgLIgIAVIgCgVIAAAGQgHgOgCgLIAAgKIAAAKIAAAGIgBAAIgIgPIgCAIIAAAFIgEgKIgBgEIAAgCIAAgBIAAABIgDAKIgEgZIAAAAIAAAAIgEAGIgEAGIAAgCIABgJIACgMIgEADIgBAAIACgOQAAgGgLgWIgKgbIAAgEIABgFIACAAIABAAIAIgDIgEATIABAKIAIgEIADAaIAHgHIABAAIABANIAAAJIACARIACAMIADAEQgCgQAGgPIAAgBIgBAMIABAOIACAHIAAAAIACgTIABATIAEAQIAAAAIAAAAQgCgGAEgPIAFgSIABAAIgCAOIAAAMIAAACIAAADIAEANIACgRIACgFIABgCQAEgNAGgNIAAAAQgBAFgCATIgBAEIgBAEIgDATIAAAAIAAAAQAEgKAEgKIAHgJIAFgGIAIgRIAIgRIAAAAIgGAcIgFAQIgBADIgOAoIAGgIIAHgJIgEAUIAKgOIAAAOQAAgEAHgGIgBAMIgBAAIAAAAIABAAIAIgPIAHgXQABAIgEAaIAAAAIAEgNIACAQIABgEIACgEIACgGIABAAIACAIIAAABIABAAIABgMIAAAAIAEAJIABADIAAAAIAAgDQgDgIAFgOIAIgUIAAAAIAAAEQAAAGAAAGIABAHIADgHQACgHADgCIABAAIAEAJIABgIIACgKIACADIADAFIACgHIACADIAEAEIgCgKIAEACIABAAIgBgDIgEgIIgBAAIAAABIgGgFIAAAAIgDAEIgEgCIAAgEIABAAIAGgHIACAJIADgEIAAAAIABADIAFgBIABAAIAAACIABABQAFgKAAgJIACgCIABgCIACgFIAEAOIAAAOIAAACIgFgLIgFAUIABAAIgDAFIACgBIgIAXQAHgEAEgMIABADIgFAUIABAAIAFgKIACgKIAEAYIABgEIAAgNIAAgVIAAAAIgBgEQAEgFABgJIADAOIAAAFIABADIgBAJIgBATIAAASIgDgFIAAAEQAAAGADADIgBAAIgFgHIgGALIAAAAIgBgIIgEgGIAAAJIgEgGIgCgGIABAMIAAABIgCgDIgEgOIAAgCIgBgHIgBAEIAAADIgBgHIgFALIAAABIAAgBIADgYIgIAZIgDAGIgDADIgEAEIAAAAIAAgDIgPAQIAEgMIAAgBIgRASIABgMIgMARIgBAAIABgKIABgGIgEAFIgHAKIAAgBIAEgLIABgJIAAgEIgDAGIgDAEIgMARgAhog2QgDgDgBABIgCgGIgGACIgHgFIgHgFIAAAAIAKgMIALgNQAPgSAEAAQAGgBALAMIAAAAIAAAAIABAAIgBAAIgCgBQgMgDAAADIgDABIADABIADADIgMAEIgJAHIAAABIALAAIgEAEIgCAHIALgBIgDAHIACAFIgJgBIgFABIAIAEIAHAFIgCACIgEAEg");
	this.shape_9.setTransform(0.9,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#292421").s().p("AgCADIACgCIABgEIACAAIgBAEIgCADg");
	this.shape_10.setTransform(11.6,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAASIgBgCIgCgGIgGgDIAAAAQgEgDgBgDIgBgBQgBgHALgDIAEgBIAHAAQADgCABgGIAEANIABABIABAFIAAACIAAACIgCADIgBABIgCAGIgBACIgCACIgDACIgDAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAgAAFAFIgCAEIgCADIACABIADgDIABgFg");
	this.shape_11.setTransform(11.2,-0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("ABNBHIgBABIACgGIAJgZIgDAYIAAABIAAABIgBABIgJANgAAWBCQgHAHAAADIAAgOIgKAOIAEgUIgHAJIgFAIIANgoIABgDIAFgQIAGgcIAAAAIAAAAIgIARIgJARIgEAGIgGAJQgGAKgDAKIAAAAIADgTIABgEIABgEQACgTACgFIAAAAQgHANgFANIgBACIgCAFIgBARIgEgNIAAgDIAAgCIAAgMIACgOIAAAAIgBAAIgGASQgDAPACAGIAAAAIgEgQIgBgTIgCATIgBAAIgBgHIgBgOIABgMIAAABQgGAPABAQIgCgEIgCgMIgCgQIAAgJIgBgOIgCAAIgGAHIgEgaIgHAEIgBgKIAEgTIgIADIgBAAIgCAAIgDgCIABgDIAAgBIAAAAIgCABIgHACIgIgBIgBABIgGgFIgIgEIAEgBIAKABIAGABQACAAAAgFIAIAAIAKAEIAEAAIAEgDIAGgBIgCAEIgCAFIgBACIAEgBIgDAGIAFAAIACAFIgCAGIAAADIABALIADAAIADAGIAGAGIgEgVIAAgCIABgFIAFgJIAIgKIABAIIgCAHIABAEIABACIABgCIAGgDIgDANIgFAOIgFAHIAAABIAGgHIAJgLIAAAUIACgHIAGgMIAAANIAAAEIABAOIABAFQAAgHADgMIACgFQADgLAEgEIAAAAIACAKIACgEIgBgBIAEgFIAAgBIABACIADAHIAAAAIAFgMIAAAAIABAAIABAFIgBAXIAAAAIAFgUIABgEIAJgHIAAABIAAgBIAKgIIACAGIACABIADgBIABAAIgCACIAAABIAAAAIAFgCIAAAAIgGAIIgBACIgCACIAAABIABAAIAEgCIgIALIgFAOQgEAOACAJIABAEIABgGIAFgOIAEgJQgFANAAAIIAAAHIADAPIABgNQAAgIACgEIAAAXIAAAFIgCAWIAFgXIAGgYIACgHQAEgPAFgHIAGAKIACAEIADALIAAAMIgEANIgEAKIAGgKIAFgMIAAgBIAFACIADgEIAAAAIAGAFIAAgBIABAAIAEAIIAAADIgBAAIgDgCIACAKIgEgEIgCgDIgCAHIgDgFIgDgDIgBAKIgCAIIgDgJIgBAAQgDACgCAHIgDAHIgBgHQgBgGABgGIAAgEIAAAAIgIAUQgFAOACAIIABADIgBAAIAAgDIgEgJIAAAAIgBAMIgBAAIAAgBIgDgIIAAAAIAAAAIgDAGIgBAEIgBAEIgDgQIgDANIgBAAQAFgagCgIIgGAXIgIAPgABaBBIAAgBIgBgCIAAgBIAAgDIACgEIABAHIAAACIADAOgABtAkIgCAKIgFAKIgBAAIAEgUIAAgDQgFAMgGAEIAIgXIAGgEIADgCIACgCIAAAEIAAAAIABAVIgBANIAAAEgABnAWIgBAAIAFgUIAFALIgIAJIgEAFgABgAKIAAgCIgBAAIgEABIgBgDIgBAAIgCAEIgCgJIgHAHIAAAAIgBgVIAAAAIgDgOIAAgEQACAJAEAFIAAgDIADADIADAFIAHAFIAAAAQACAEAEgCIAEgCQgBAIgEAKgAAtgXIgDAGIADgGg");
	this.shape_12.setTransform(1.8,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777C88").s().p("ABcAVIACAGIgJAHQAEgLADgCgAhcgCIgBgCQgBgNAEgDIAOgGIAJgFIADgCIgBADIgFACIAAACQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAIgBABIgDABIgDAIIgLAPg");
	this.shape_13.setTransform(-4.7,-5.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF00FF").s().p("ACFBnIAAAAIAAABgAB7BjIAAgBIAAABgAAtBhIABAAIgBAAgABFBSIABAAIAAAAgAgEBKIABAAIAAACgAAKBKIAAAAIAAAAgAgGBEIAAAAIAAAAgAgkAhIABAAIgBABgAAAAdIABAAIAAAAgABnAbIABAAIgBAAgAB2ALIAAgBIAAABgAAvAEIAAAAIAAAAgAgbgRIABABIAAACgABDgUIAAABIgBAAgAA2gfIAAAAIAAABgABLggIABAAIgBAAgAgFgzIABAAIAAAAgABVg0IAAAAIAAAAgAgig0IAAAAIAAAAgAiEg9IgBgCIABACgABahHIABAAIgBABgABihKIAAAAIABgBIAAABgABqhLIAAAAIACABgAgDhMIgBAAIABAAgABfhQIABAAIgBABgAg5hbIgBAAIABAAgAAQhcIAAAAIAAAAgAgyhmIgBgBIACABg");
	this.shape_14.setTransform(-0.7,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444655").s().p("ABfAyQABAIgDAFIAAgLIgEgOIABgCIgBgDIAJAPIADAJIAAAQgAAaA8IgBgGQABgJAEgLIAFgLIgLAJIAAAAIAOgWIgEADIgBAAIABgGIACgHIgCABIgCgKIgDgGIABABIAJAFIgBgCIABAAIAIAEIAAgDIABgBIABgCIgEgBIgFgBIADgEIgHgBIAAgBIADgFIgGgEIAAgBIACgDIAAgCIACgDIADgDIAAACIgEAIIAFgEIAIgDIAAABIgEAIIAHgEIAAABIABADIAAACIAAAIIgBAFQAAABAAAAQAAAAABABQAAAAABAAQAAABABAAIAAABIAGACIAAABIgEAAIAGAFIACACIAAABIgCAAIAKAFIAEADIAGAEIABACQgBAGgDACIgJAAIgEABIABgEIgHAGIAAgKQgFADgBAFIgBgLQgGADAAAIIACAPIgDgHIgDgJIgHAMQgGAKgEAQgAAsgeIABAAIgBAAgAglAyIgBgOIAAgFIAAgNIgGAMIgCAIIAAgVIgJAMIgGAGIAAAAIAFgHIAFgOIADgOIgGAEIAAgCQADgHAMgHIgFAAIgBABIgCAAIgEABIABgBIAEgGIAAAAIgFADIAAgBIABgEIAEgDIgHABIAAgBIAEgFIAEgEIgKgBIAFgDIABAAIgBgBIgGABIAHgFIAEgBIgCADIAIAAIgCAIIAAAAIAGgGIgBAFIABAAIAFgGIADgBQADgDAEgBIACgBIAAAAIAGABIAAgBIgCgCIgCgCIADABIAGADIAEgJIABAIIgBACIAJgIIgEALIAAAAIAFgDIADgDIgEAIIAAAAIAKgCIACAAIgGAGIgBABIACAFQABACAEAAIgGAFIADAGIgEAAIAEAIIABADIgFAAIgDAMIAAAAIgCgHQgDACgDAMIgBADIgFAVIAAAAIABgXIgBgGIgBAAIAAABIgFAMIAAAAIgDgHIgBgCIAAAAIgEAFIABABIgDAFIgCgLIAAAAQgEAEgDALIgCAFQgDANAAAGgAhLAMIgCgHIAAAAIAAgFIgCgFIAAgFIgCAAIABgBIAAgBIAAAAIgEABIACgGIADgCIABgBIAEgMIAAgCIABAAIABABIABABIADACIAFgBIgEAHIAHAAIgDAHIABAAIADAAIAAABIgDACIgFADIAFAAIgIAFIgBAHIAAAEIABAEIgBACIgCALgAAYAJIAAgBIAAABgAhfgTIgDgCIABgEIACgCIAAgBIgBgBIADgDIADADIgDgEIAAgBIgDgDIAKAAIAAAAIgGgJIAAAAIABABIAJAHIACADIAAABIAAADIgBAFIgBABQgDAGgFABIgCAAgAhXgyIgBAAIgDgBIAAgBIADgCIgIgIIAAAAIADAAIgHgKIAPAFIAEAEIAIAEIAAABIgCAAQgHgEgBAOg");
	this.shape_15.setTransform(3.9,-4.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#626773").s().p("AA8BJIABgEIAAgXQgCADgBAJIgBAMIgDgOIAAgHQABgKAFgMIADgHIgDAHIgEAJIgFAPIgCAFIgBgEQgBgKADgOIAGgNIAHgLIgEABIAAAAIABgCIACgCIAFgHIABgBIgBAAIgEACIgBgBIACgCIgBABIgDABIgCgBIgCgHIgJAJIACgNIAFAAIAAgDIgEgIIAEAAIgEgGIAGgFQgDAAgCgCIgBgFIABgBIAGgGIgCAAIgKACIAAAAIAEgIIgEADIgEADIgBAAIAFgLIgKAIIAAgCIgBgIIgDAJIgHgDIgCgBIABACIADACIAAABIgGgBIgBAAIgBABQgEABgDADIgEABIgFAGIAAAAIAAgFIgEAGIgBAAIACgIIgHAAIABgDIgEABIgHAFIAGgBIABABIgFADIAKABIgFAEIgEAFIAAABIAIgBIgEADIgBAEIgBABIAFgDIABAAIgFAGIgBABIABAAIAEgBIABAAIACgBIAEAAQgLAHgDAIIgBACIgBACIgBgDIAAgDIABgHIgBgIIgIAKIgEAJIgCAFIABABIADAUIgFgGIAAgCIgBgBIABADIgDgGIgDABIgCgKIABgDIABgGIABAFIAAAAIABAHIADAJIACgKIAAgCIgBgEIAAgEIABgIIAJgFIgFAAIAEgDIAEgCIAAgBIgEAAIgBAAIADgHIgGAAIAEgHIgFABIgDgCIgCgBIgBgBIAAAAIAAACIgFAMIgBABIgCACIACgEIgGACIgFADIgDgBIgKgEIgBgEIABAAIABgBIAEgCIgBgDIgBAAIgCgDIABAAIABAAIAAgBIAAAAIAGABIgCgDIADADIABABIAAABIgEADIABABIABABIgCACIgBAEIADACIADABIACAAQAEgBADgGIABgBIACgFIgBgDIAAgBIgBgDIgJgHIgCgBIAAAAIgLABIgDABIAGgFIgBgBIAAAAIgCgBIgFgDIACgBIADAAIABABIAAgBIgBAAQgLgLgGAAQgEABgPARIgLAOIgKAMIAAAAIgCACIAAAAIgFAGIgHAJQgCAAgBgFIgBgLIABAAIACAEIALgPIACgIIADgCIABgBQABAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIgBgCIAFgCIACgEIAEgDIAIgKIAJgFIAGgIIAQAEIAEACIACAAIAHAKIgCAAIgBAAIAAAAIAIAIIgCACIAAABIADABIAAAAIAEACQABgOAHAEIADAAIgBgBIgHgEIgEgEIACAAQAOgCAJgDIANgGIAIAAIAKgBIACAAIAKAEIAEACQALAFAGgBIADAAIABgBIAMgEIgKAHIACAAIAGgCIAAAAIgGAFIAAAAIAAAAIAEgBIAIAAIABABIAAABIgGACIgBAAIAGAAIAEABIAEgCIAEgDIgCAEIAHgBIANgEIAFAAIABAAIADABIgEAAIgHADIAJAAIgDACIAHAAIACACIgEAAIAGADIgDAAIAGAGIgFABIAAgBIAAABIAAAAIAEAFIAAAAIgEgCIgEABIAFADIAAAAIgCABIgIAEIAAAAIACABIgBABIgDAAIgEABIABgBIgBAAIgIAEIAEgIIABgBIgBAAIgHADIgFAEIADgIIAAgCIgCADIgDADIAAACIgBADIAAABIAFAEIgCAFIAAABIAGABIgDAEIAGABIAEABIgCACIAAABIAAADIgJgEIAAgBIAAABIABACIgJgFIgBgBIACAGIADALIABgBIgBAHIgBAGIAAAAIAEgDIgOAVIABAAIALgJIgFALQgFALAAAJIABAGIABAAQAEgQAFgKIAHgMIADAJIADAHIgCgPQAAgIAGgCIABAKQACgFAEgDIABAKIAGgGIAAAEQgLADABAHIABACQABADAEADIAAAAIAGADIACAGIAAABIgHgFIgCgEIgDgEIgBADQgEgFgBgJIAAAFIADANIAAABIAAAVIAAABIAAAEIAAABIgFAMIgHAKIAFgKIAEgOIAAgMIgEgLIgCgEIgGgLQgFAIgDAOIgCAIIgGAZIgGAWgAAIhCIABAAIgBgBgAB6BDIAHgKIAAgBIAAgPIgEgOIABgBIACgDIAEAOIAAALQADgFgBgIIAGAXIgBgQIACAJIgBAMIAAAEIgBAEIAAgEIgBgEIgDgOQgBAJgEAFIgCABIgDADIgGAEIgCAAgAgqgZIABAAIABAFIgGABgAgugaIAEgBIABABIgBABIgEAAgAhAhFIgBgBIABAAIAAABg");
	this.shape_16.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-13.1,30.2,26.3);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADACQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABAAIAAABIgBABgAgFAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIACABIgCABg");
	this.shape.setTransform(25.3,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAIIgDgHQAAgDACgDQACgDAEgBIAHACIAEAHIgDAGIgGAEgAACADIACABIABgBIAAgCIgCAAQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAgAgGABIACACIACgDIgDAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABg");
	this.shape_1.setTransform(25.5,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626773").s().p("AgKATIgDgKIACgCIACgPIgCAHIgBgBIAAgMIABgDIAAgBIACgCIACgCIADANIACAAIABgFIAEAEIgCAFIAAABIAGABIgCADIAFACIAEABIgCABIAAABIAAAAIAAAEIgJgFIAAAAIAAAAIABADIAAAAIgKgHIgBAAIABAFIgEACIAHAFIgGALIAAAAg");
	this.shape_2.setTransform(29.9,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777C88").s().p("AgJAeIAFAAIAAgDIgEgJIADAAIgDgFIAGgGQgEAAgBgCIABgEIACgBIADgFIAAgBIgCAAIgLADIAAgBIAFgHIgEACIgEAEIAAAAQgBgDAFgIIgKAHIgBgCIgBgHIgDAIIgGgCIgDgCIACADIACABIAAABIgGAAIgBAAIAAAAIAAgEIAAgBIgDAAIAAgBIAJgJIgIABIgIAEQABgIALgCIAIAAIAFAEIANgLIABgBIALgEIgJAIIACgBIAFgCIABABIgGAFIgBAAIABAAIAEgBIAHAAIABABIgGACIAAAAIAFABIAEABIADgCIAFgDIgCAEIAGgBQAFgEAIAAIAFgBIABAAIAAABIgHAEIAJAAIgEACIAIAAIgCABIAGAEIgDAAIAFAFIgEACIgBgBIAAABIABAAIADADIABABIAAABIgFgCIgDAAIAFADIAAABIgCAAIgJAEIAAAAIADACIAAAAIgEAAIgEABIAAgBIAAABIgIACQACgGACgBIAAgBIAAAAQgDAAgEADIgFAEIADgHIAAgCIgCACIgDAEIAAACIgBgBIAAADIgBAAIgBAFIgBAAIgEgMIgCACIgBACIgBABIAAACIAAAMIAAABIADgHIgDAQIgBACIADAKIAAAEIgDABIgBgBIgCgHIgJAJg");
	this.shape_3.setTransform(28.4,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AADACIABgCIABAAIAAACIAAAAgAgEAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIADABIgCABg");
	this.shape_4.setTransform(30.8,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFAHQgCgCAAgEIAAgHIAHgDIAFACIAEAGIgCAHIgGAEgAACADIABAAIABAAIAAgCIgBAAgAgGAAIACACIADgCIgDAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_5.setTransform(30.9,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("Ah6g/IgBACIgBAAIgEAGIgHAJQgCAAgBgFIgBgLIgBgBQgBgOAEgCIAOgHIAJgEIADgDIAEgDIAJgKIAIgFIAHgIIAPAEIAFACIACAAIAPAFIACAAIAXgFIAOgGIAHAAIALgBIABAAIAKAEIAFACIARAEIADAAIABgBIALgEIgJAHIACAAIAFgCIABAAIgGAFIgBAAIABAAIAEgBIAIAAIAAABABAhoIgGACIAAAAIAFAAIAFABIADgCQADgCACgBIgCAEIAGgBIANgEIAFAAIABAAIADABIgDAAIgHADIAJAAIgEACIAHAAIADACIgEAAIAGADIgDAAIAFAGIgEABIADAFIAAAAIgEgCIgDABIAFADIAAAAIgCABIgIAEIgBAAIACABIACABIgDAAIgDAAIgDABIgBAAIABADIAAACIAAAIIgBAFQAAACADABIAAABIAGACIAAABIgEAAIAGAFIACACIAAABIgCAAQABAAAJAGIAEADIAGAEIABACABrhZIgBAAIAAgBgAB5ALIgEACQgEABgCgDIAAgCIgCgGIgGgDIgBAAIgFgFIAAgCQgBgHAKgDIAEgBIAJAAQADgCABgGIAEANIAAABIABAFIABADIgBACIgBACIgBABIgDAGIAAACAh6g/IALgMIAKgOQAPgRAFgBQAGAAALAMIABgBIgEAAIgDABIAFADIACABIABAAIAAABIgGAFIAEgBIALgBIAGAJIAAAAIgKAAAgbA2IAAABIAAAAIgDALIgDgZIAAgBIAAABIgFAFIgDAHIAAgCIABgKIABgMIgDAEIgBAAIAAgBIACgNIgLgdIgKgaIgBgFQAAgDACgCIgDgCIABgDIAAAAIAAAAIgCAAIgHADIgIgBIgBABIgBACIgEADQgDAAgGgEQgDgDgCABIgCgGIgFACIgHgGIgHgFIgBABAgKBDIAAAHIgBACIAAgCIgIgPQgCABAAAGIAAAGIgEgLIgBgEIAAgCACAgHIAJAOIADAJIABAJIAAAMIgBAEIAAAEIgBAIIgBATIAAASIgEgEIAAAEQABAGADADIAAAAIgBAAIgFgHIgGALIAAAAIAAgBIgCgIIgDgGIAAAKIgEgGIgCgGIABAMIAAAAIgBAAIgCgDIgFgLIAAgCIgBgCIAAAAIgBgIIgEALIAAABIAAABABlBWIgJAOIADgKIgBABIgDADIgFAEIAAgBIAAgDIAAAAIgOAQIAEgMIAAAAIAAAAIgRARIABgLIgMARIgBAAIAAgBIABgJIABgGIgEAEIgHAKIAAAAIADgMIACgJIgBgDIgCAFIgDAFIgMAQIgBAAIAAAAIAIgUIgGAEIAAAAIAAAAIAFgLIgJAHIgIAEIAKgZIgMAUIgHAHIAAABIAAgBIADgKIABgKIgJAUIAAgHIgCgOIABAHQgIgPgBgLAgKA6IAAAJ");
	this.shape_6.setTransform(22.5,24.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292421").s().p("AgCADIACgCIABgEIACAAIgBAEIgCADg");
	this.shape_7.setTransform(34.1,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAASIgBgCIgCgGIgGgDIAAAAIgFgGIgBgBQgBgHALgDIAEgBIAHAAQADgCABgGIAEANIABABIABAFIAAACIAAACIgCADIgBABIgCAGIgBACIgCACIgDACIgDAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAgAAFAFIgCAEIgCADIACABIADgDIABgFg");
	this.shape_8.setTransform(33.7,24);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444655").s().p("ABfAyQABAIgDAFIAAgBIAAgKIgEgOIABgCIgBgDIAJAPIADAJIAAAQgAAaA8IgBgGQABgJAEgLIAFgLIgLAJIAAAAIAOgWIgEADIgBAAIABgGIACgHIgCABIgCgKIgDgGIABABIAJAFIgBgCIABAAIAIAEIAAgDIABgBIABgCIgEgBIgFgBIADgEIgHgBIAAgBIADgFIgGgEIAAgBIACgDIAAgCIACgDIADgDIAAACIgEAIIAFgEQAFgDADAAIAAABIgEAIIAHgEIAAABIABADIAAACIAAAIIgBAFQAAABAAAAQAAAAABABQAAAAABAAQAAABABAAIAAABIAGACIAAABIgEAAIAGAFIACACIAAABIgCAAIAKAFIAEADIAGAEIABACQgBAGgDACIgJAAIgEABIABgEIgHAGIAAgKQgFADgBAFIgBgLQgGADAAAIIACARIAAABIgDgKIgDgJIgHAMQgGAKgEAQgAAsgeIABAAIgBAAgAglAyIgBgOIAAgFIAAgNIgGAMIgCAIIAAgVIgJAMIgGAGIAAAAIAFgHIAFgOIADgOIgGAEIAAgCQADgHAMgHIgFAAIgBABIgCAAIgEABIABgBIAEgGIAAAAIgFADIAAgBIABgEIAEgDIgHABIAAgBIAEgFIAEgEIgKgBIAFgDIABAAIgBgBIgGABIAHgFIAEgBIgCADIAIAAIgCAIIAAAAIAGgGIgBAFIABAAIAFgGIADgBQADgDAEgBIACgBIAAAAIAGABIAAgBIgCgCIgCgCIADABIAGADIAEgJIABAIIgBACIAJgIIgEALIAAAAIAFgDIADgDIgEAIIAAAAIAKgCIACAAIgGAGIgBABIACAFQABACAEAAIgGAFIADAGIgEAAIAEAIIABADIgFAAIgDAMIAAAAIgCgHQgDACgDAMIgBADIgFAVIAAAAIABgXIgBgGIgBAAIAAABIgFAMIAAAAIgDgHIgBgCIAAAAIgEAFIABABIgDAFIgCgLIAAAAQgEAEgDALIgCAFQgDANAAAGgAhLAMIgCgHIAAAAIAAgFIgCgFIAAgFIgCAAIABgBIAAgBIAAAAIgEABIACgGIADgCIABgBIAEgMIAAgCIABAAIABABIABABIADACIAFgBIgEAHIAHAAIgDAHIABAAIADAAIAAABIgDACIgFADIAFAAIgIAFIgBAHIAAAEIABAEIgBACQgCAHAAAEgAAYAJIAAgBIAAABgAhfgTIgDgCIABgEIACgCIAAgBIgBgBIADgDIADADIgDgEIAAgBIgDgDIAKAAIAAAAIgGgJIAAAAIABABIAJAHIACADIAAABIAAADIgBAFIgBABQgDAGgFABIgCAAgAhXgyIgBAAIgDgBIAAgBQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAIgIgIIAAAAIADAAIgHgKIAPAFIAEAEIAIAEIAAABIgCAAQgHgEgBAOg");
	this.shape_9.setTransform(26.4,20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("ACFBnIAAAAIAAABgAB7BjIAAgBIAAABgAAtBhIABAAIgBAAgABFBSIABAAIAAAAgAgEBKIABAAIAAACgAAKBKIAAAAIAAAAgAgGBEIAAAAIAAAAgAgkAhIABAAIgBABgAAAAdIABAAIAAAAgABnAbIABAAIgBAAgAB2ALIAAgBIAAABgAAvAEIAAAAIAAAAgAgbgRIABABIAAACgABDgUIAAABIgBAAgAA2gfIAAAAIAAABgABLggIABAAIgBAAgAgFgzIABAAIAAAAgABVg0IAAAAIAAAAgAgig0IAAAAIAAAAgAiEg9IgBgCIABACgABahHIABAAIgBABgABihKIAAAAIABgBIAAABgABqhLIAAAAIACABgAgDhMIgBAAIABAAgABfhQIABAAIgBABgAg5hbIgBAAIABAAgAAQhcIAAAAIAAAAgAgyhmIgBgBIACABg");
	this.shape_10.setTransform(21.8,24.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#977168").s().p("AgJAHIAEgEIgCgBIACgDIgBAAIgIgCIAOgIIAAABIgFAEIADAAIAKgBIAHAHIAAABIgLgBIACADIgGgBIAAABIAAAAIAAAAIgBABIABADIABAAIABACIgDADg");
	this.shape_11.setTransform(16.2,16.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("ABNBHIgBABIACgGIAJgZIgDAYIAAABIAAABIgBABIgJANgAAWBCQgHAHAAADIAAgOIgKAOIAEgUIgHAJIgFAIIANgoIABgDIAFgQIAGgcIAAAAIAAAAIgIARIgJARIgEAGIgGAJQgGAKgDAKIAAAAIADgTIABgEIABgEQACgTACgFIAAAAIgMAaIgBACIgCAFQgDALACAGQgDgFgBgIIAAgDIAAgCIAAgMIACgOIAAAAIgBAAQgCAEgEAOQgDAPACAGIAAAAIgEgQIgBgTIgCATIgBAAIgBgHIgBgOIABgMIAAABQgGAPABAQIgCgEIgCgMIgCgQIAAgJIgBgOIgCAAIgGAHIgEgaIgHAEIgBgKIAEgTIgIADIgBAAIgCAAIgDgCIABgDIAAgBIAAAAIgCABIgHACIgIgBIgBABIgGgFIgIgEIAEgBIAKABIAGABIACgFIAIAAIAKAEIAEAAIAEgDIAGgBIgCAEIgCAFIgBACIAEgBIgDAGIAFAAIACAFIgCAGIAAADIABALIADAAIADAGQADAFADABIgEgVIAAgCIABgFIAFgJIAIgKIABAIQgCADAAAEIABAEIABACIABgCIAGgDIgDANIgFAOIgFAHIAAABIAGgHIAJgLIAAAUIACgHIAGgMIAAANIAAAEIABAOIABAFQAAgHADgMIACgFQADgLAEgEIAAAAIACAKIACgEIgBgBIAEgFIAAgBIABACIADAHIAAAAIAFgMIAAAAIABAAIABAFIgBAXIAAAAIAFgUIABgEIAJgHIAAABIAAgBIAKgIIACAGIACABIADgBIABAAIgCACIAAABIAAAAIAFgCIAAAAIgGAIIgBACIgCACIAAABIABAAIAEgCIgIALIgFAOQgEAOACAJIABAEIABgGIAFgOIAEgJQgFANAAAIIAAAHIADAPIABgNQAAgIACgEIAAAXIAAAFIgCAWIAFgXIAGgYIACgHQAEgPAFgHIAGAKIACAEIADALIAAAMIgEANIgEAKIAGgKIAFgMIAAgBIAFACIADgEIAAAAIAGAFIAAgBIABAAQAAAEAEAEIAAADIgBAAIgDgCIACAKIgEgEIgCgDIgCAHIgDgFIgDgDIgBAKIgCAIIgDgJIgBAAQgDACgCAHIgDAHIgBgHQgBgGABgGIAAgEIAAAAIgIAUQgFAOACAIIABADIgBAAIAAgDIgEgJIAAAAIgBAMIgBAAIAAgBIgDgIIAAAAIAAAAIgDAGIgBAEIgBAEIgDgQIgDANIgBAAQAFgagCgIIgGAXIgIAPgABaBBIAAgBIgBgCIAGAPgABZA9IAAgDIACgEIABAHIAAACIADAOgABtAkIgCAKIgFAKIgBAAIAEgUIAAgDQgFAMgGAEIAIgXIAGgEIADgCIACgCIAAAEIAAAAIABAVIgBANIAAAEgABnAWIgBAAIAFgUIAFALIgIAJIgEAFgABgAKIAAgCIgBAAIgEABIgBgDIgBAAIgCAEIgCgJIgHAHIAAAAIgBgVIAAAAIgDgOIAAgEQACAJAEAFQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIADADIADAFIAHAFIAAAAQACAEAEgCIAEgCQgBAIgEAKgAAtgXIgDAGIADgGg");
	this.shape_12.setTransform(24.3,26.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777C88").s().p("ABcAVIACAGIgJAHQAEgLADgCgAhcgCIgBgCQgBgNAEgDIAOgGIAJgFIADgCIgBADIgFACIAAACIgCACIgBABIgDABIgDAIQgDACgIANg");
	this.shape_13.setTransform(17.8,18.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4C3C1").s().p("AAQByIAHgUIgFAFIgBgBIAFgKIgJAGIgHAFIAKgaIgMAUIgGAIIgBAAIADgKIAAgLIgIAVIgBgIIgBgNIAAAGQgHgOgCgLIAAgKIAAAKIAAAGIgBAAIgIgPQgBACgBAGIAAAFIgEgKIAAgEIgBgCIAAgBIAAAAIAAABIgDAKIgDgZIAAAAIgBAAIgEAGIgDAGIgBgCIABgJIACgMIgEADIAAAAIABgOIgKgcIgLgbIAAgEQAAgDABgCIACAAIACAAIAHgDIgEATIACAKIAHgEIAEAaIAGgHIABAAIACANIAAAJIACARIABAMIADAEQgBgQAFgPIABgBIgBAMIAAAOIACAHIAAAAIACgTIABATIAEAQIABAAIAAAAQgCgGADgPQADgOADgEIAAAAIgBAOIAAAMIAAACIAAADQABAIACAFQgBgGADgLIACgFIABgCIAKgaIABAAQgCAFgCATIgBAEIgBAEIgDATIAAAAIABAAQADgKAFgKIAGgJIAFgGIAIgRIAIgRIABAAIgHAcIgEAQIgCADIgOAoIAGgIIAHgJIgEAUIAKgOIAAAOQAAgEAIgGIgCAMIgBAAIABAAIAAAAIAJgPIAGgXQABAIgEAaIAAAAIAEgNIADAQIABgEIABgEIACgGIABAAIACAIIABABIAAAAIABgMIABAAIADAJIABADIAAAAIAAgDQgCgIAEgOIAIgUIABAAIAAAEQgBAGAAAGIACAHIACgHQADgHADgCIAAAAIAEAJIABgIIACgKIADADIACAFIACgHIACADIAEAEIgCgKIAEACIABAAIgBgDQgDgEgBgEIAAAAIgBABIgFgFIgBAAIgDAEIgEgCIAAgEIABAAIAHgHIABAJIADgEIAAAAIABADIAFgBIABAAIAAACIABABQAFgKAAgJIACgCIABgCIACgFIAEAOIAAAOIAAACIgFgLIgEAUIAAAAIgDAFIACgBIgHAXQAGgEAEgMIABADIgEAUIAAAAIAFgKIADgKIADAYIABgEIAAgNIAAgVIAAAAIgBgEIAFgOIADAOIABAFIAAADIgBAJIgBATIAAASIgDgFIAAAEQAAAGADADIAAAAIgGgHIgFALIgBAAIgBgIIgEgGIABAJIgEgGIgDgGIABAMIAAABIgCgDIgEgOIAAgCIAAgHIgCAEIAAADIgBgHIgEALIAAABIgBgBIADgYIgIAZIgCAGIgEADIgEAEIAAAAIgBgDIABAAIgBgBIAAABIgOAQIAFgMIAAgBIgBABIgRARIABgMIgMARIAAAAIABgKIAAgGIgEAFIgHAKIAAgBIAEgLIABgJIAAgEIgDAGIgDAEIgMARgABjBJIAAABgAhng2QgEgDgBABIgCgGIgGACIgGgFIgHgFIgBABIAKgNIALgNQAPgSAEAAQAGgBAMAMIgDgBQgMgDABADIgEABIADABIADADQgHABgEADIgKAHIAAABIAMAAIgFAEQgDAEABADIAMgBIgEAHIACAFIgJgBIgEABIAIAEIAGAFIgCACIgEAEQgDAAgFgFg");
	this.shape_14.setTransform(23.3,25.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B0928A").s().p("AgBAUIgCgFIADgHIgLABQgBgEADgDIAEgEIgLAAIAAAAIAJgHQAFgDAGgCIgDgCIgCgBIACgBQAAgDAMADIABABIgCAAIgDAAIAGADIACABIAAAAIgOAIIAIACIAAAAIgCAEIADABIgEADIAIAGIgBAAIgBAAIABAEIgIABIgDAEgAAPgNIAAAAIgBgBgAAOgRIACAAIAAAAg");
	this.shape_15.setTransform(14.5,16.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#626773").s().p("AA8BJIABgEIAAgXQgCADgBAJIgBAMIgDgOIAAgHQABgKAFgMIADgHIgDAHIgEAJIgFAPIgCAFIgBgEQgBgKADgOIAGgNIAHgLIgEABIAAAAIABgCIACgCIAFgHIABgBIgBAAIgEACIgBgBIACgCIgBABIgDABIgCgBIgCgHIgJAJIACgNIAFAAIAAgDIgEgIIAEAAIgEgGIAGgFQgDAAgCgCIgBgFIABgBIAGgGIgCAAIgKACIAAAAIAEgIIgEADIgEADIgBAAIAFgLIgKAIIAAgCIgBgIIgDAJIgHgDIgCgBIABACIADACIAAABIgGgBIgBAAIgBABQgEABgDADIgEABIgFAGIAAAAIAAgFIgEAGIgBAAIACgIIgHAAIABgDIgEABIgHAFIAGgBIABABIgFADIAKABIgFAEIgEAFIAAABIAIgBIgEADIgBAEIgBABIAFgDIABAAIgFAGIgBABIABAAIAEgBIABAAIACgBIAEAAQgLAHgDAIIgBACIgBACIgBgDIAAgDQgBgFACgCIgBgIIgIAKIgEAJIgCAFIgBgEIAAgEIABgIIAJgFIgFAAIAEgDIAEgCIAAgBIgEAAIgBAAIADgHIgGAAIAEgHIgFABIgDgCIgCgBIgBgBIAAAAIAAACIgFAMIgBABIgCACIACgEIgGACIgFADIgDgBIgKgEIgBgEIABAAIABgBIAEgCIgBgDIgBAAIgCgDIABAAIABAAIAAgBIAAAAIAGABIgCgDIADADIABABIAAABIgEADIABABIABABIgCACIgBAEIADACIADABIACAAQAEgBADgGIABgBIACgFIgBgDIAAgBIgBgDIgJgHIgCgBIAAAAIgLABIgDABIAGgFIgBgBIAAAAIgCgBIgFgDIACgBIADAAIABABIAAgBIgBAAQgLgLgGAAQgEABgPARIgLAOIgKAMIgCACIAAAAIgFAGIgHAJQgCAAgBgFIgBgLIABAAIACAEQAIgNADgCIACgIIADgCIABgBIADgBIgBgCIAFgCIACgEIAEgDIAIgKIAJgFIAGgIIAQAEIAEACIACAAIAHAKIgCAAIgBAAIAAAAIAIAIQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIAAABIADABIAAAAIAEACQABgOAHAEIADAAIgBgBIgHgEIgEgEIACAAIAXgFIANgGIAIAAIAKgBIACAAIAKAEIAEACIARAEIADAAIABgBIAMgEIgKAHIACAAIAGgCIAAAAIgGAFIAAAAIAAAAIAEgBIAIAAIABABIAAABIgGACIgBAAIAGAAIAEABIAEgCIAEgDIgCAEIAHgBIANgEIAFAAIABAAIADABIgEAAIgHADIAJAAIgDACIAHAAIACACIgEAAIAGADIgDAAIAGAGIgFABIAEAFIAAAAIgEgCIgEABIAFADIAAAAIgCABIgIAEIAAAAIACABIgBABIgDAAIgEABIABgBIgBAAIgIAEIAEgIIABgBIgBAAQgDAAgEADIgFAEIADgIIAAgCIgCADIgDADIAAACIgBADIAAABIAFAEIgCAFIAAABIAGABIgDAEIAGABIAEABIgCACIAAABIAAADIgJgEIAAgBIAAABIABACIgJgFIgBgBIACAGIADALIABgBIgBAHIgBAGIAAAAIAEgDIgOAVIABAAIALgJIgFALQgFALAAAJIABAGIABAAQAEgQAFgKIAHgMIADAJIADAKIAAgBIgCgRQAAgIAGgCIABAKQACgFAEgDIABAKIAGgGIAAAEQgLADABAHIABACIAFAGIAAAAIAGADIACAGIAAABIgHgFIgCgEIgDgEQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAQgEgFgBgJIAAAFIADANIAAABIAAAVIAAABIAAAEIAAABIgFAMIgHAKIAFgKIAEgOIAAgMIgEgLIgCgEIgGgLQgFAIgDAOIgCAIIgGAZIgGAWgABqg/IAAAAIAAgBgAAIhCIABAAIgBgBgAB6BDIAHgKIAAgBIAAgPIgEgOIABgBIACgDIAEAOIAAAKIAAABQADgFgBgIIAGAXIgBgQIACAJIgBAMIAAAEIgBAEIAAgEIgBgEIgDgOIgFAOIgCABIgDADIgGAEIgCAAgAghAKIAAgCIgBgBIABADIgDgGIgDABIgCgKIABgDIABgGIABAFIAAAAIABAHIADAJQgBgEADgGIAAgCIABABIADAUQgDgBgCgFgAgqgZIgEAAIAAgBIAEgBIABABIgBABIABAAIABAFIgGABg");
	this.shape_16.setTransform(22.5,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.4,11.6,30.2,26.2);


(lib.Symbol32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#535764").s().p("ADGBBIgEgCIADgTIAAgFIgZANQgNAGgFABQgHgBAAgGIACgMIgBgFQgkAXgMAAQgHgBABgIQAAgHADgKIAAgDIABgCIgYAPQAAgDAFgJIAEgIIAAABQgdAQgHAGIANgPQgDAAgPAIIgNAIIgCACIgDAEIgBgBIAEgSIAAgCIgcAcQABgEACgUQgDADgFAOIgDAIIgBgBIgDgeIgOAFIgGADIgEAEIADgHQADgIAHgEIgEAAIgJACIgWAEIgDABIAAgBIAAAAIgBABIAAAAIgCAGQgJgCABgKIAAgGIgFAIIgCANIABAGIADAEQgRgLgTgaIgEAPIAEAPIgDABQgJAAgWgSQgGAFAAAJIABAMIgBAAIgBAAQgQgCgRgQIgOgQIgBABIAAAMIgSgJQgJgHgHgNIgMgIIgGgEIgBgKIAAgCIACgKIACgFIAEgKIACADIAEAIIAHgJQAIgNAHAAIABAAIABALIAFALIADgEIAGgGIAFgHIAFgFIALgFQACgBADAFQADAEADABQADAAADgCIAKgHQADAJADAAIAZgKQAGAAATAOIAHAGIAAAAIAJAIIABABIACgBIAUgFQAFAAADAHIADAGIACABIAGgCIABgBIADgCIALgDQAGgBAKANIAMAOQADAAAJgIQAJgHADAAQAJABAEAJQADAKAGAAIABAAIAMgFQAMgHAGAAQACALAEAAIAVgJIAKgFIgQgBIAAAAIAPgIIANgJIAFgEIAFADIAHACIAHABIAEABIABAAIAKACIARAEQAGADACAIIAAAKIABAAIAIgEIALgEQANABAAASQAAAUAEAAQAEAAAJgLIANgUIAAACIgBAMQgCAXgJAQIgPAMQgRALgJAAgAjaAKIAAgBgAiuAGIAAAAgAA5AAIABABIAAgBIAAAAIAAAAgAifg1IAAABIAAgBIAAAAg");
	this.shape_15.setTransform(-0.3,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#626773","#444655"],[0.004,1],-7.7,-2.8,24.5,-2.8).s().p("AAAAAIAAAAg");
	this.shape_16.setTransform(-17.8,1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#777B80").s().p("ABaAwQAMgTAAgFIgCAAIgkAKIgBAAIAFgSIgCgDIgEgBIg0ASIAAgBIACgHQgBgDgDAAIgFABIgIADIgJAGIgCABQgGAAgCgHIgHgLQgEgBgHAGIgIAFIgDAAIgBgFIgCgEQgBgFgCAAIgSAHIgXALQACgCgJgGQgKgGgCAAQgCAAgCAHQgDAHgFAAIgpgNIABAKIgBAAIgcgSIgJgJIgIgJIgHgIIAAABIAAAMIgCAFIAAgBIgGgIIgKgSIgEgJIgCgMIAGAEIAMAIQAHAOAJAHIASAJIAAgMIABgBIAOAQQARAPAQACIABAAIABAAIgBgLQAAgJAGgFQAWARAJAAIADgBIgEgOIAEgPQATAaARAKIgDgEIgBgFIACgNIAFgIIAAAGQgBAKAJACIACgGIABAAIADgBIAWgEIAJgCIAEAAQgHAEgDAIIgDAGIAEgDIAGgDIAOgFIADAdIAAADIABgCIADgIQAEgNAEgDQgCATgCAEIAdgbIAAACIgEARIABABIADgEIACgCIANgHQAPgIADAAIgNAOQAHgGAdgPIAAgBIgEAIQgFAIAAADIAYgOIgBACIAAADQgDAJAAAHQgBAIAHABQAMAAAkgWIABAEIgCAMQAAAGAHABQAFgBANgGIAZgNIAAAFIgDATIAEACIAFACQAJAAARgLIAPgMIgFAIIgVAVIgJgDIgOgDQgKAAgSAHIgRAIIgCgDIABgHQgBgFgDAAIg8AYg");
	this.shape_17.setTransform(-0.8,5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#33FFCC").s().p("AAAAAIABAAIgBABg");
	this.shape_18.setTransform(5.7,13.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#56555E").s().p("AAAAAIAAAAIAAAAg");
	this.shape_19.setTransform(5.5,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E6E6E6").s().p("AAAAEIAAgEIAAgBQACgFgCAGIAAAAIAAAEIAAAAg");
	this.shape_20.setTransform(24.2,7.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4A4851").s().p("AgiAcIACABIgCACgAAigeIAAAAIAAAAg");
	this.shape_21.setTransform(2.1,4.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#888C91").s().p("ABKAlIgLASIAAABIgFgLIgCgCIgBAHIgCAAIgFgKIAAgBIgDgEIgEgGIABADIAAAEIAAAKQgEgPgHgHQgFgFgMgEIAAgBIgBAAIABABIAFAHIAEAFQgNgJgNgFIgKgDIgBAAIgEAAIACACIAGALIAAABIAAgBIgKgHIAAAAQgGgFgLABIAAANQgDgJgGgDIgBgBIgIAGIgJgHQgHgHgEAAIgDAEIgCAFIgLgEIgLgFQgDABgEAHQgEALgHADQgBgGgLgFQgKgGgFACIAAAOQgRgEgZgYIgMgNIgKgMIAcASIABAAIgBgLIApAOQAEAAADgIQADgGACgBQACABAJAFQAJAGgBADIAXgLIASgHQACAAABAEIACAFIABAEIADAAIAIgEQAHgGAEAAIAGAMQADAGAFAAIADgBIAJgFIAIgEIAGgBQACAAAAAEIgBAGIABABIAzgSIAEABIACAEIgGARIACAAIAkgJIACAAQAAAFgMARIAAAFIA8gYQADABAAAFIAAAFIACAEIAQgIQATgHAKAAIAOAEIAJACIgxAwIAAgRQAAgDABgCIAAgHIgEAAQgHACgQANQgQAMgEAHQgFgFAAgMIAAgNIgEAAQgOAHgHAJQgGAHgEALQgDgRAAgDgAhFgrIABgBIAAAAIAAABgAjOg5IgBABg");
	this.shape_22.setTransform(0.3,8.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C4C3C1").s().p("Ag2BlIABAAIAAACgAD4BCIABADIgBABgAD7A2IAAgCIABACgAj6giIAAgFIAEgQIABgGIAAgCIACgHIADgKIADgHIAIgMIAAAAIgDgBIAIgCIAGACIAFADQgIAFgIAUIgHAPIgBACIgGAKIgDAKIgCAGIgDAKg");
	this.shape_23.setTransform(-0.6,0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#444655").s().p("AA7ALIADgBIAAABIgCAAgAAxADIAAgBIABABgAg8AAIADgDIgEADgAg3gGIAFgEIgHAHg");
	this.shape_24.setTransform(-14.5,-3.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3A383F").s().p("AgUALIAAABIgBAAgAAVgLIgDAAIAEAAIAAAAg");
	this.shape_25.setTransform(7.6,-0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#626773").s().p("AhDBEIAAAAIABAAgADeApQgBgUgMAAIgLADIgJAEIgBAAIAAgKQgBgHgHgEIgQgDIgLgCIgBAAIgDgBIgHgBIgIgCIgEgCIgFADIgOAIIgOAIIgEAAIADAAIABAAIAQABIgKAGIgVAJQgEAAgDgLQgFAAgMAGIgMAGIgBAAQgHgBgDgJQgDgKgJAAQgDAAgJAHQgKAHgBAAIgNgNQgKgNgGAAIgLAEIgDABIgCABIgGACIgCgBIgCgFQgDgHgFABIgUAEIAAAAIgDAAIgJgIIgBAAIAAAAIgGgFQgTgPgGAAIgZAKQgEAAgDgJIgKAHQgCACgDAAQgDAAgDgEQgEgFgCAAIgKAGIgKAKIgBABIgFAHIgEADIgEgLIgBgKIgBAAQgHAAgIAMIgHAJIgEgHIgCgEIAFgKIACgCQAOgaAOgHIAAAAIAHgCIAFgDIADACIABgBQAPgIAQACIAIgBIgIAEIgKAIIAAABIgDAEIAAABIABAAIAAAAIADgCIAOgHIAHALIAHAAIgDAEIAIAGIACABIABgXIAOALIAUAAIgQgPIAoAOQAZAIgKABIACAAIgIANIAbgLIACAQIAIgKIAGgGIABgBIALADIAYAEIACAAIgQAQIAHgDQAQgIAHABIAAAOIAFgCIAQgLIAKgGQADAQADADIAOgQIAOgOIAPAXIAMgKIAEAAIABAKIABAOIAUgMIAAAMIAKgEIABAAIABAIIAQgHIgDAFIAAAAIAKgCIAPgIQAGAAAAAKIgDAJIAAABIATgSIAJAIQAFAGgDAIIABAAQAFAAACgaQAAgPgPggIAXAMIAIAdIAFAmIAAALIgMAWQgJALgFgBQgDABAAgUgADVg+IABAAIABAAgADmhBIgBgBIACABg");
	this.shape_26.setTransform(0.1,-2.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#777C88").s().p("ADhA7QADgHgFgIIgJgIIgSATIAAgBIACgKQAAgKgFAAIgQAIIgJACIAAAAIACgEIgQAHIgBgIIgBgBIgKAEIAAgMIgUAMIAAgOIgCgJIgEAAIgMAJIgPgXIgOAPIgOAPQgDgDgDgQIgKAGIgQALIgEADIAAgPQgHAAgSAHIgGADIAQgQIgCAAIgYgDIgLgDIgBAAIgGAGIgIAKIgCgPIgbALIAIgOIgCAAQALAAgagIIgogNIARAOIgVAAIgOgLIgBAXIgCgBIgHgHIACgDIgHAAIgHgLIgNAHIgDACIAAAAIgCAAIAAgBIAEgEIAAAAIAKgIIAHgFIgHABQgRgCgPAIIgBABIgDgCIgFADIgGACIgBAAQgOAHgOAZIAGgPQAJgTAHgFIgEgDIgGgCIgIACIADgDIAIgGQAMgMAUgHIAogKQAjgEApAEIAeAEIAKACIA1AJIADAAIAaAGIAvgEIABAAIAhgBIAQgBIALgDIATgFIACAAIAMAAQAhgBANAgIABACIABAAIAAABIAHANIgXgLQAPAeAAAPQgCAbgFAAgADagNIgBgBIgBAAg");
	this.shape_27.setTransform(-0.2,-7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.8,-13.5,51.1,27.7);


(lib.Symbol30_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AADACIACgCIABABIAAABIgBABgAgFAAIACgCIACACIgCABg");
	this.shape_15.setTransform(2,-19.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDIAGgDIAHADIADAGIgDAHQgDADgEAAQgDAAgDgDgAACADIACABIABgBIAAgBIgBgBgAgGAAIACACIACgCIgCgBg");
	this.shape_16.setTransform(2.2,-19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// Layer 3
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#626773").s().p("AgLATIgCgKIACgDQAEgIAAgGIgDAGIAAgBIABgLIAAgEIABgBIACgBIACgCIACAOIABAAIABgFIAFAFIgDAEIAAABIAGACIgDADIAFACIAEABIgCACIAAAAIAAABIgBAEIgHgHIgBAAIAAAAIABADIAAABIgKgIIAAAAIAAAEIgEACIAGAFIgHAKIgBABg");
	this.shape_17.setTransform(6.6,-19.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#777C88").s().p("AgIAoIgBgHIgKAIIAEgMIAFABIAAgEIgDgJIAEABIgDgGIAHgFQgEAAgBgCIACgEIACgBIAEgFIgBAAIgCgBIgKACIAAgBIAFgHIgEACIgEADIgBAAQAAgDAGgHIgLAFIAAgBIAAgIIgEAJIgHgEIgCgCIABADIACACIAAABIgFgBIgBAAIgBgBIABgEIAAgBIgEAAIAAgBIALgHIgJAAIgIACQADgIALAAIAHABIAFAEIAOgJIABgBIAMgCIgKAGIACAAIAFgBIAAAAIgGAEIAAABIAAAAIAFgBIAHABIAAABIgGACIAAAAIAFABIAEABIAEgBIAEgDIgCAEIAHAAIAMgDIAGAAIABABIgBABIgHACIAJABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABgBAAIAHABIgCABIAGAEIgDAAIAFAGIgFABIAAgBIAAABIAAAAIADAEIAAABIAAAAIgEgCIgDAAIAEADIAAABIgCAAIgJACIAAABIACABIABABIgFgBIgDABIAAgBIgBAAIgIACIAFgGIAAgBIAAAAQgDgBgFADIgFADIAEgGIAAgCIAAgBIAAABIgCACIgDADIgBABIgBgBIAAAEIgBAAIgBAFIgBAAIgDgNIgCACIgBABIgBABIAAADIgBALIAAABIACgGQAAAGgDAJIgCADIACAKIAAAEIgEAAg");
	this.shape_18.setTransform(5.6,-20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// Layer 2
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADACIABgCIACABIAAABIgCABgAgFAAQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABAAIACACQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAg");
	this.shape_19.setTransform(7.6,-19.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGAHIgCgHIACgGIAGgDQAEAAACADIADAGIgDAHQgCADgEAAQgDAAgDgDgAACADIABABIABgBIAAgBIgBgBgAgGAAIACACQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIgCgBQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAg");
	this.shape_20.setTransform(7.7,-19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// Layer 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("Ah0hMIgCACIAAAAIgGAGIgHAHQgCAAgBgFIAAgLIAAgBQABgOAEgCIAOgEIAKgEIADgCIAFgDIAJgJIAJgEIAIgGQADAAAMAFIAEACIACABIAPAHIACAAIAXgCIANgEIAIABIALAAIACAAIAKAFIADACQAMAHAFAAIADAAIACgBIAMgDIgLAHIACAAIAFgBIABAAIgHAEIAAAAIAAAAIAFAAIAIABIAAABABKheIgHACIAAAAIAFABIAFABQADAAABgBIAFgDIgDAEIAHAAIANgDIAFAAIAAABIAEABIgEAAIgHACIAJABIgEACIAHABIADABIgFAAIAGAEIgDAAIAFAGIgEAAIgBAAIAAAAIABAAIACAGIAAAAIgEgCIgDAAIAFADIAAABIgCAAIgKADIAAAAIACACIABABIgCgBIgDAAIgDAAIgBAAIAAADIAAADIgBAIIgCAEQAAACADACIAAAAQACACAEACIAAAAIgFAAIAFAFIADADIAAABIgDAAIAKAHIAEADIAEAFIACACIACANIAAAAIABAFIAHARIABAJIABAJIgCAMIgBAEIgBADIgDAJIgDATIgCARIgDgEIAAADQAAAGACAEIAAAAIgBAAQgEgFAAgDIgHAKIAAABIAAgBIgCgIIgCgHIAAAKIgEgHIgBgGIgBAMIAAABIAAgBIgCgDIgEgMIAAgBIgBgCIAAgBIAAgIIgEALIgBABIAAABAB0AcQgBABgDAAQgEABgCgEIAAgBIgBgHIgGgEIgBAAQgDgDAAgEIgBgBQAAgHALgBIADAAIAKAAIAFgHAB2AaIABgDIADgFIABgBIACgDIABgBIAAgEABHBqIgQAOIAGgLIAAgBIAAABIgUAOIADgLIgPAPIAAAAIAAAAIACgJIABgGIgEAEIgIAJIAAgBIAFgLIACgIIAAgEIgDAFIgEAEIgNAPIgBAAIAAAAQAFgGAFgNIgGAEIAAAAIAAgBIAGgKIgKAGIgHADIAMgYIgNASIgIAHIAAAAIAAAAQABgBADgJQADgIgBgCIgMATIABgHIgBgOIAAAHQgGgQAAgLIABgJIgCAPIAAACIgBgCIgGgPIgCAHIgBAFIgDgLIAAgEIAAgCABHBqIAAgBABXBkIgKAMIAEgJIgBABIgEACIgFADIAAAAIAAgDAgyhTIAKACIAAgBIgFgJIgLAAIgEAAIAHgEIgBgBIAAAAIgCgCIgEgEIACAAIAEABIgBAAQgJgNgGAAQgFAAgRAPIgMAMIgMALAgkA0IgBABIAAAAIgEAKIAAgZIAAAAIAAAAIgFAFIgEAGIAAgCIACgJIADgMIgEADIgBABIAAgBIAEgOQAAgGgHgXIgHgcIAAgFIACgEIgDgDIACgDIAAAAIAAAAIgCAAIgIACIgHgCIgBABIgCABIgFADIgHgFQgEgDgBAAIgBgGIgGACIgGgHIgGgFIgBAA");
	this.shape_21.setTransform(-1.1,-14.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#292421").s().p("AgDADIADgDIACgCIABAAIgBADIgCACg");
	this.shape_22.setTransform(10.1,-12.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgDARIAAgCIgBgGIgGgEIAAgBQgEgDAAgCIgBgCQAAgHALgBIAEgBIAIABIAFgIIACAOIAAABIABAEIAAADIgBACIgCACIgBABIgDAGIgBACIgCACQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAIgBAAQgCAAgCgDgAACAIIgCADIACABIADgDIABgEIgBAAg");
	this.shape_23.setTransform(9.8,-13.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#444655").s().p("ABaA9QAAAJgEAEIAAgBIABgKIgCgPIABgBIAAgEIAHARIABAJIgBAQgAAUA/IAAgHQABgIAGgLIAGgKIgMAHIAAAAIAQgTIgEACIAAAAIABgGIADgGIgCAAIgBgKIgCgGIABAAIAIAHIAAAAIAAgDIAAAAIAIAGIAAgEIABAAIACgCIgEgBIgFgCIADgEIgGgCIAAgBIADgEIgFgFIAAgBIACgDIAAgBIADgEIADgCIAAACIgFAIIAGgEIAHgCIAAABIgFAHIAAAAIAAABIAAgBIAIgCIAAAAIAAADIAAADIgBAIIgCAEQAAABAAAAQABAAAAABQAAAAABABQABAAAAABIAAAAIAGAEIAAAAIgEAAIAFAEIACADIAAABIgDAAIAKAHIAEADIAFAFIABACIgFAHIgJAAIgEAAIABgEIgHAFIAAgKIgGAHIAAgKQgGABgBAJIAAARIgBAAIgBgJIgCgKIgJALIgMAZgAgqAsIABgNIABgFIABgNIgHALIgDAIIACgVIgKALIgHAFIAAAAIAGgHIAHgNIAFgMQgEADgDAAIABgCQAEgIAMgFIgFAAIgBAAIgCAAIgEAAIABAAIAFgGIAAAAIgGACIABgBIABgDIAFgDIgIAAIAAAAIAFgFIAFgEIgKgCIAFgCIABAAIgBgBIgGAAIAHgEIAEAAIgBACIAHABIgDAIIABAAIAGgGIgBAFIAAAAIAGgEIADgCIAIgDIABAAIABAAIAGABIAAAAIgDgDIgBgCIADABIAGAEIADgIIAAAIIgBACIAMgHIgGAKIABAAIAEgCIAEgCIgFAHIAAAAIAKgBIACAAIgGAGIgCABIABAEQACADADAAIgHAFIADAFIgEAAIADAJIAAADIgFAAIgEALIAAAAIgBgHIgIAMIgBAEIgIATIAAAAIAEgWIgBgGIgBAAIAAABIgGALIAAAAIgCgHIAAgCIgBAAIgEAEIAAABIgDAFIAAgLIgBAAIgIAOIgDAFIgFASgAhLADIgBgGIAAgBIAAgFIAAgGIAAgFIgCAAIABgBIAAgBIAAAAIgEAAIADgFIADgCIABgBIAGgLIAAgCIAAAAIABABIACACIACACIAGgBIgFAGIAGACIgEAGIABAAIAEAAIAAACIgEABIgFACIAFABIgJAEIgCAHIAAAFIAAADIgBACIgDALgAAYAMIAAgBIAAABgAhYgdIgCgCIgDgCIABgEIADgCIgBgBIgBgBQAAgBAAAAQABAAAAgBQABAAABAAQAAgBABAAIADAEIgDgEIAAgBIgDgEIALACIAAgBIgGgJIAAAAIACABIAIAIIABADIAAABIAAADIgCAFIgBABQgEAGgFAAgAhPg9IgBAAIgDgBIAAgBIADgBIgHgKIABAAIACABIgFgLIAOAHIAEAEIAHAFIAAABIgDAAQgGgFgDAOg");
	this.shape_24.setTransform(2.8,-17.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF00FF").s().p("AB6ByIAAAAIAAABgABwBsIAAAAIAAAAgAAjBiIABgBIgBABgAA9BWIAAgBIAAABgAADBGIAAAAIABAAgAgLBEIABAAIgBACgAgMA+IAAAAIAAAAgABlAjIABAAIgBAAgAAAAZIAAgBIAAABgAglAYIAAAAIAAABgAB2AUIAAgBIAAACgAAwAFIABAAIAAAAgABGgQIABgBIAAABgAgWgZIABABIAAACgABRgbIAAAAIAAAAgAA8gcIAAAAIAAAAgABdguIAAAAIAAAAgAADg4IABAAIgBAAgAgZg9IAAAAIAAAAgABlhAIAAAAIAAABgAB0hCIABAAIABABgABthCIAAAAIABgBIAAABgABqhIIABAAIgBAAgAAHhRIAAAAIABAAgAh5hSIAAgBIAAABgAAdheIAAgBIABABgAgshmIAAAAIABAAgAgjhxIAAgBIABABg");
	this.shape_25.setTransform(-2.4,-13.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#977168").s().p("AgKAFIAFgDIgDgBIADgDIgBAAIgHgDIANgGIABABIgGAEIAEAAIAKAAIAFAIIAAABIgKgCIABADIgFgBIAAAAIAAAAIgBAAIgBABIACADIAAAAIAAADIgDACg");
	this.shape_26.setTransform(-6.6,-22.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E6E6E6").s().p("ABBBRIgBABIADgGIALgYIgGAYIAAABIAAABIgBAAIgKANgABOBNIAAgCIAAgCIAAgDIADgFIgBAIIAAACIACAOgAAZBBIgFANIAAAAQAHgZAAgIIgJAWIgKAOIADgMIgJAJIACgOQgEAIgHAFIAHgTIgIAIIgHAHQAHgJALgdIABgDIAHgPIAKgbIAAgBIgBABIgKAQIgKAPIgEAGIgIAIIgLATIgBgBIAGgSIABgEIABgEIAIgWIgBAAIgOAXIgBACIgDAFQgFALABAGIgCgNIABgEIAAgCIACgLIADgOIAAAAIgBAAIgIARQgFAOABAGIAAAAIgCgQIABgTIgEATIgBgBIAAgHIABgNIACgLIAAAAQgIAOgBAQIgBgEIAAgMIAAgQIABgJIAAgOIgCAAIgGAFIgBgZIgIADIAAgLIAHgTIgIACIgCAAIgCAAIgCgCIACgDIAAgBIgBAAIgCABIgHABIgHgCIgCABIgFgGIgIgEIAEgBIAKACIAGACQACAAABgFIAIABIAJAFIAEABIAEgCIAHgBIgDAEIgDAFIgBABIAEAAIgEAGIAGAAIAAAFIgCAHIgBACIAAALIADAAIADAHIAEAGIgBgVIAAgCIACgEIAGgJIAJgJIAAAIIgCAHIAAAEIABACIABgBQADgBAEgDIgFAOIgHANIgGAGIAAABIAHgGIAKgKIgCAUIADgHIAHgLIgBANIgBAEIgBAOIABAEIAFgSIADgFIAIgNIABAAIAAAKIACgEIAAgBIAEgFIABAAIAAACIACAHIAAAAIAGgLIAAAAIABAAIABAFIgEAXIAAAAIAIgUIABgDIAKgGIAAABIAAgBIALgHIABAHIACABIADgBIABAAIgCACIAAABIAAAAIAFgCIAAABIgHAHIgBACIgCABIgBABIABAAIAEgBIgIAKIgHANQgGAMAAAKIABAFIACgGIAHgNIAHgLQgIANgCAKIgBAHIABAOIADgMIAEgLIgDAWIgBAFIgFAVIAJgVIAIgYIADgHQAGgOAGgHIAEALIACAFIACALIgCAMIgFANIgGAJIAIgJIAGgLIAAgBIAEACIAEgDIAAAAIAFAFIABgBIAAAAQAAAEADAFIAAADIgBAAIgDgDIABAKIgEgFIgBgDIgDAHIgCgFIgCgEIgDAKIgDAIIgCgKIgBABIgGAIIgDAGIgBgHIACgMIAAgDIAAAAIgKASQgHAOABAIIABADIgBAAIAAgDIgCgKIgBABIgCALIgBAAIAAgBIgCgIIAAAAIAAAAIgEAGIgBADIgCAEgABlAyIgEAKIgGAJIgBAAIAHgUIAAgCQgGAKgHAEIALgWIAGgDIAEgCIACgBIAAADIAAABIgCAVIgCAMIgBAEgABgAkIAAgBIAHgTIADALIgIAJIgGAEgABbAXIAAgDIgBAAIgEABIgBgDIAAAAIgDAEIgBgJIgHAFIgBAAIACgVIAAAAIgBgOIABgEQAAAJADAFIABgDIADAEIACAFIAGAFIAAABQACADAEAAQABAAAAAAQABAAABgBQAAAAAAAAQABAAAAgBQgBAJgHAJgAAtgRIgCAEIACgEg");
	this.shape_27.setTransform(0.4,-12.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#777C88").s().p("ABaAfIABAHIgKAFgAhagPIAAgBQABgOAEgCIAOgEIAKgEIADgCIgCADIgFACIAAACQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgBABIgEABIgDAIIgNAOg");
	this.shape_28.setTransform(-5.5,-20.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C4C3C1").s().p("AAWB5IADgJIABgGIgFAEIgIAJIAAgBIAFgLIADgIIAAgEIgEAFIgDAEIgOAPIAAAAQAFgGAEgNIgFAEIgBgBIAGgKIgJAGIgHADIAMgYIgOASIgHAHIgBAAQACgBACgJQADgIAAgCIgMATIAAgHIAAgOIgBAHQgFgQAAgLIABgJIgCAPIgBAAIgGgPIgDAHIgBAFIgCgLIAAgEIgBgCIAAgBIAAABIAAAAIgEAKIAAgZIAAAAIgBAAIgFAFIgEAGIAAgCIACgJIADgMIgEADIAAAAIADgOQAAgGgHgXIgHgcIAAgFIACgEIACAAIACAAIAIgCIgHATIAAAKIAIgDIABAaIAGgGIACAAIAAANIgBAJIAAARIAAAMIABAFQABgQAIgPIAAgBIgCAMIgBAOIAAAHIABAAIAEgSIgBASIACARIAAAAIAAAAQgBgGAFgOIAIgRIABAAIgDANIgCAMIAAACIgBADIACANQgBgGAFgKIADgFIABgCIAOgYIAAAAIgHAXIgBAEIgBAEIgGASIAAAAIABAAIALgSIAHgJIAFgFIAKgQIAKgRIABAAIgKAdIgHAPIgBADQgMAcgGAJIAGgGIAIgJIgHAUQAHgFAFgJIgCAPIAJgJIgDALIAKgNIAJgXQAAAJgHAZIAAAAIAFgNIABARIACgEIABgEIAEgFIAAAAIACAHIAAACIABAAIACgMIABAAIACAKIAAACIABAAIgBgCQgBgIAHgPIAKgSIAAAAIAAAEIgCALIABAIIADgHIAGgIIABAAIACAKIADgJIADgJIACAEIACAEIADgGIABADIAEAEIgBgJIADACIABAAIAAgDQgDgFAAgEIAAAAIgBACIgFgGIAAAAIgEADIgEgCIABgEIABAAIAHgGIABAJIADgDIAAAAIABADIAEgBIABAAIAAACIABABQAHgJABgIIACgCIABgDIADgFIACAPIgBAOIgBACIgDgLIgHATIAAAAIgEAEIADAAIgLAWQAHgEAGgLIAAADIgHAUIABAAIAGgKIAEgKIABAZIABgEIACgNIACgVIAAAAIAAgEIAGgNIACAOIAAAFIAAADIgCAJIgEATIgCARIgDgEIAAADQAAAGACAEIAAAAQgFgFAAgDIgHAKIAAAAIgBgIIgDgHIAAAKIgEgHIgBgGIgBAMIAAAAIgCgDIgCgOIAAgBIABgIIgDAEIAAAEIAAgBIAAgIIgFALIgBABIAAgBIAGgXIgLAXIgDAHIgEACIgFADIAAAAIAAgDIgQAOIAGgLIAAgBIAAABIgUAOIADgLIgOAPgABABkIAAgBgAAQBhIAAAAIABgBgAhig/QgDgDgCAAIgBgGIgGACIgFgHIgHgFIgBAAIAMgLIAMgMQASgPAEAAQAGAAAKANIgCgBIgMgCIgEAAIAEACIACAEIgMADIgKAFIAAABIALABIgFAEIgDAGIAMABIgFAHIACAFIgKgCIgEAAIAIAFIAFAGIgCABIgEADg");
	this.shape_29.setTransform(-0.5,-13.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B0928A").s().p("AgEASIgCgEIAEgHIgMgBIADgGIAGgDIgLgCIAAAAIAKgFIALgEIgDgDIgCgCIADAAIALABIADABIAAABIgEgBIgCAAIAEAEIACACIABAAIgPAGIAIADIAAAAIgCADIACABIgFADIAHAGIgBAAIgBABIAAAEIgIAAQAAAEgCAAgAAPgMIAAAAIgBAAg");
	this.shape_30.setTransform(-8.3,-22.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#626773").s().p("AA0BRIABgEIADgXIgFAMIgCAMIgBgPIABgHQACgKAIgNIACgEIgCAEIgHAKIgHAPIgDAFIAAgEQAAgLAFgNIAIgNIAIgJIgEABIgBgBIACgCIACgCIAGgHIABAAIgBAAIgEABIAAgBIACgCIgBABIgDAAIgDgBIgBgGIgKAHIAEgLIAFAAIAAgDIgDgJIAEAAIgDgFIAHgFQgDAAgCgDIgBgEIABgBIAHgGIgCAAIgKABIAAAAIAFgHIgEACIgFACIAAAAIAGgKIgMAHIABgCIAAgIIgEAIIgHgEIgCgBIABACIACADIAAAAIgFgBIgBAAIgBAAIgIADIgEACIgFAEIAAAAIABgFIgHAGIAAAAIACgIIgFgBIAAgCIgDAAIgIAEIAGAAIABABIgFACIAJACIgFAEIgEAFIAAAAIAHAAIgEADIgBADIgBABIAFgCIABAAIgFAGIgBAAIAAAAIAEAAIABAAIACAAIADAAQgKAFgFAIIgBACIgBACIAAgDIAAgEIACgGIAAgIIgKAIIgFAJIgCAFIgBgEIABgFIACgHIAJgEIgFgBIAEgCIAFgBIAAgCIgEAAIgBAAIAEgGIgHgCIAGgGIgGABIgCgCIgCgCIgBgBIgBAAIAAACIgFALIgBABIgDACIADgEIgHABIgFACIgDAAIgKgGIAAgEIABAAIABAAIAFgCIgBgDIAAAAIgDgDIABgBIABAAIABAAIAAAAIAFABIgBgDIACAEIABABIAAAAQgBAAgBABQAAAAgBAAQgBABAAAAQAAAAAAABIABABIAAABIgCACIgBAEIACACIADACIACAAQAEAAAEgGIACgBIACgFIAAgDIAAgBIgBgDIgIgIIgCgBIAAAAIgLAAIgEAAIAHgEIAAgBIgBAAIgCgCIgEgEIACAAIAEABIAAAAQgKgNgGAAQgFAAgRAPIgMAMIgMALIgBACIgBAAIgFAGIgIAHQgCAAAAgFIAAgLIAAAAIABAFIANgOIAEgIIADgBIABgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAIAAgCIAEgCIACgDIAFgDIAKgJIAJgEIAIgGQACAAAMAFIAFACIABABIAGALIgDgBIgBAAIABAAIAHAKIgDABIAAABIADABIAAAAIAEADQADgOAGAFIADAAIAAgBIgIgFIgDgEIACAAIAYgCIAMgEIAIABIALAAIACAAIAJAFIAFACQAKAHAHAAIACAAIABgBIANgDIgLAHIACAAIAFgBIABAAIgGAEIgBAAIABAAIAEAAIAIABIAAABIAAAAIgHACIAAAAIAGABIAEABIAEgBIAEgDIgCAEIAHAAIAMgDIAGAAIABABIADABIgEAAIgHACIAJABIgEACIAHABIADABIgFAAIAGAEIgDAAIAFAGIgFAAIAAAAIAAAAIAAAAIADAGIAAAAIgEgCIgDAAIAEADIAAABIgCAAIgJADIAAAAIACACIgBAAIgDAAIgDAAIAAgBIgBABIgIACIAFgHIAAgBIAAAAIgIACIgFAEIAEgIIAAgCIgCACIgDAEIAAABIgCADIgBABIAGAFIgDAEIAAABIAFACIgCAEIAEACIAFABIgCACIgBAAIAAAEIgIgGIAAAAIAAAAIAAADIAAAAIgIgHIgBAAIACAGIABALIABAAIgCAFIgBAGIAAAAIAEgCIgRATIABAAIAMgHIgGAKQgGALgCAIIAAAHIABAAIANgZIAJgLIABAKIACAJIAAAAIAAgRQACgJAFgBIAAAKIAHgHIAAAKIAGgFIgBAEQgKABAAAIIAAABQABAEAEADIAAAAIAFAEIABAHIAAABIgFgHIgCgEIgDgEIgBADQgEgGABgJIgBAFIABANIAAABIgCAWIAAAAIgBAEIgBABIgFALIgIAJIAGgJIAFgNIABgMIgCgMIgBgEIgFgLQgGAHgFAOIgDAIIgIAXIgJAVgAARhAIABAAIgBAAgACCBVIAAgFIgBgOIgHANIgCACIgDACIgGADIgDAAIAFgEIAJgIIAAgCIACgOIgCgPIABgBIACgDIACAPIgBAKIAAABQADgEAAgJIADAYIACgQIABAJIgDAMIgBAEIgBADgAghAHIAAgCIgBgBIADgKIABgCIAAABIABAVgAgkABIgDAAIAAgKIABgDIACgGIAAAFIAAABIABAHIABAJIABADgAgqgYIAEgFIgEAAIAAgCIAEAAIABABIgBABIACAAIAAAFg");
	this.shape_31.setTransform(-1.1,-16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-28.1,28.9,27.5);


(lib.Symbol29_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AADADIACgCIABABIAAABIgBAAgAgDABIgCgBQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAIABACQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgBAAg");
	this.shape_16.setTransform(-1.6,-22.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAAAKQgEgBgDgDIgCgGIAEgHIAGgCQAEABADACQACAEAAADQAAAEgEACQgCADgEAAIAAAAgAACAEIABAAIABAAIAAgBIgBgBgAgGAAIACACQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBIgCgBQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_17.setTransform(-1.5,-22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Layer 3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#626773").s().p("AgNAWIABgDIgBgKIACgDIAGgNIgEAGIAAgCIACgLIABgDIABgBIABgBIACgDIACAPIAAAAIACgFIAFAFIgEAFIAAABIAGACIgDACIAEADIAEACIgCABIAAABIAAAAIgBADIgHgGIgBAAIAAAAIABADIAAAAIgJgJIgBAAIAAAEIgEACIAFAFIgHAKg");
	this.shape_18.setTransform(2.8,-21.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#777C88").s().p("AgLAoIgCAAIAAgIIgLAHIAFgLIAFABIAAgDIgCgKIAEABIgDgGIAIgEIgFgDIACgDIADgBIAEgFIgBgBIgCAAIgKAAIAAAAIAGgHIgEACIgFADIgBAAIAHgKIgLAEIAAgBIAAgIIgFAIIgFgEIgDgCIABADIACACIAAAAIgFgBIgBAAIgBAAIACgEIgBgBIgDgBIAAgBIALgGIgIgBIgJACQAEgIALACIAHABIAFAEIAPgHIABgBIALgCIgKAGIACAAIAEAAIABAAIgGADIAEAAIAHACIAAACIgGAAIgBAAIABABIAAgBIAEACQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAIADAAIAGgCIgDADIAGABIAOgCIAFAAIABABIgBABIgHACIAJACIgEABIAGABIgCACIAGAFIgEgBIAFAGIgFAAIACAEIABABIAAAAIgEgBIgDgBIAEADIAAAAIgCABIgKABIAAABIACACIABABIgFgBIgDAAIAAgCIgBABIgIACIAGgHIAAgBIAAAAIgIABIgGADIAFgFIABgDIAAAAIAAAAIgDACIgDADIgCABIAAgBIgBADIAAABIgCAFIgCAAIgBgOIgCADIgBABIAAAAIgBADIgDALIAAACIAEgGIgGAOIgCADIABAKIgBADgAAtgEIAAAAIAAAAgAgEgfIgBAAg");
	this.shape_19.setTransform(2.3,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).wait(1));

	// Layer 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AADADIABgCIABABIAAABIgBAAgAgEAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIACACIgCABg");
	this.shape_20.setTransform(3.9,-22);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGAGQgBgDAAgDIADgHIAFgCIAGADIABAHQAAAEgDACQgBADgEAAQgEgBgCgDgAACADIABABIABgBIAAgBIgBgBgAgFAAIABACIACgCIgBgBIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_21.setTransform(4.1,-22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	// Layer 1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("AhuhUIgBABIgBAAIgGAFIgIAHIgCgFIABgLIAAgCQACgNAFgBIAOgDIAKgDIAEgCIAEgDIALgHIAJgEIAJgFQADAAAKAHIAEACIACABIAOAIIACABIAYgBIANgCIAIABIALACIACgBIAJAGIADADQALAIAFAAIADABIABgBIANgCIgLAGIACAAIAFgBIABAAIgHAEIgBAAIABAAIAEAAIAIACIAAABABRhUIgHAAIAAAAIAFABQACACADAAIADgBIAGgBIgDACIAGABIANgBIAFAAIABABIAEACIgEgBIgHABIAJACIgFABIAIACIACACIgEgBIAFAEIgDAAIAEAHIgEAAIgBAAIAAgBIABABIACAFIAAABIgEgDIgDAAIAEAEIAAAAIgCABIgJABIgBABIACABIABABIgCAAIgDgBIgDAAIgBAAIAAADIAAADIgDAHIgCAFIADAEIAAAAIAFAEIAAABIgEgBIAFAGIABACIAAABIgCAAIAJAIIAEAEIAEAEIABACIABAOIAAABIAAAFIAAADIgBABIgCADIgBAAIgEAGIgBACABmAkIgBgHIgFgEIAAgBQgEgDAAgDIAAgCQABgHAKAAIAEAAIAJABIAGgHABwAoQgCABgCAAQgFAAgBgEIAAAAAB7AXIAGAQIAAAKIAAAJIgDALIgCAEIgBAEIgDAIIgFATIgEARIgCgFIgBAEQAAAGACADIAAABIgBgBIgEgIIgIAKIAAAAIAAgBIAAgIIgCgHIgCAKIgCgHIgBgGIgCAMIAAAAIAAAAIgCgDIgDgNIABgBIgBgCIAAgBIABgIIgGALIgBABIAAABABMBtIgLAMIAEgJIgBABIgEACIgFACIAAAAIABgEIAAABIgSANIAHgLIAAgBIAAABIgUAMIADgKIgPANIgBAAIAAgBIAEgIIABgGIgFAEIgJAIIAAgBIAHgKIADgIIAAgEIgEAFIgEAEIgOANIAAAAIAAgBQAFgFAFgMIgFADIAAAAIAAAAQABgBAFgJIgJAFIgJADIAPgYIgPARIgJAHIAAAAIAAgBIAFgJIADgKIgOASIACgHIAAgOIgBAHQgEgQABgLIABgFIgCALIgBACIAAgCIgFgRIgDAHIgCAGIgBgMIAAgEIAAgCAgqAyIAAABIgBAAIgEAKIACgZIAAgBIgBABIgFAEIgFAGIABgCIACgJIAEgLQgCgBgCADIAAABIAAgBIAEgOQABgFgFgYIgEgdIABgEIACgFIgCgCIACgDIAAgBIAAAAIgCABIgIAAIgHgCIgBABIgDABIgEADIgHgGIgFgEIgBgGIgGABIgFgHIgGgGIgBABIANgKIAOgLQASgOAFABQAGAAAIAOIAAABIgDgCIgCAAIADAFIACABIAAABIABAAIgHADIADABIALABIAFAKIAAAAIgKgCAgbA5IgBAF");
	this.shape_22.setTransform(-5.1,-17.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#292421").s().p("AAAADIgDAAIADgDIACgCIACAAIgCADQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAIAAAAg");
	this.shape_23.setTransform(5.8,-15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFAPIAAAAIAAgBIAAgHIgFgEIgBgBQgDgCAAgDIgBgCQABgHALAAIADAAIAJABIAFgHIACAOIgBABIABAEIgBADIAAABIgDADIgBAAIgDAGIgBACIgDACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgDAAgCgEgAABAHIgCADIABABQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAIACgFIgCAAg");
	this.shape_24.setTransform(5.6,-15.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#444655").s().p("ABVBFQAAAJgEADIAAAAIACgKIgBgQIABgBIAAgDIAGAQIAAALIgDAOgAAPBAIABgHIAJgSIAHgKIgNAHIAAAAIASgSIgEACIgBAAIADgGIADgGIgCAAIAAgKIgBgGIABAAIAHAIIAAAAIAAgDIAAAAIAHAFIABgCIABgBIACgBIgEgCIgFgDIADgCIgFgDIAAgBIADgEIgFgGIABgBIACgCIAAgBIAEgEIACgCIAAACIgFAHIAGgDIAIgBIAAABIgGAHIgBAAIAAAAIABAAIAIgCIAAAAIAAAEIAAACIgDAIIgCAEIADAEIAAAAIAFADIAAABIgEgBIAFAGIABACIAAABIgCAAIAJAIIAEAEIAEAFIABACIgGAHIgJgBIgEAAIABgEQgGACgBACIABgKIgHAHIABgKQgGAAgCAJIgBARIgBABIAAgLIgBgKIgKALQgHAIgIAPgAgsAoIACgNIABgFIADgNIgJALIgDAHIAEgUIgMAKQgGAEgBAAIAAgBIAHgFIAIgNIAGgLIgHACIABgBQAFgJAMgEIgEAAIgCAAIgBAAIgEgBIAAAAIAGgFIAAAAIgGABIABAAIABgDIAFgDIgHgBIAAAAIAFgEIAFgEIgJgDIAFgBIAAAAIgBgBIgGAAIAIgFIAEABIgBADIAGABIgDAIIABAAIAGgGIgBAGIAAAAQABgDAFgCIAEgBIAIgCIABAAIABAAIAFACIAAgBIgCgCIAAgDIACABIAFAFIAFgIIgBAIIgBACIAMgFIgGAJIAAAAIAEgCIAFgCIgGAHIAAAAIAKAAIACAAIgHAGIgCAAIABAEIAFAEQgGACgCACIADAGIgEgBIACAJIAAADIgFAAIgFAKIAAAAIgBgHIgIAMIgCADIgKATIAAAAQAGgSAAgEIAAgGIgBAAIAAABIgHAKIgBAAIAAgHIgBgCIAAAAIgFAEIAAABIgEAEIABgKIAAAAIgKAMIgDAFIgHASgAAYAPIAAgCIAAACgAhKgEIAAgGIAAgBIABgGIAAgFIAAgFIgBAAIABgBIAAgBIAAAAIgEAAIAEgFIACgCIABgBIAHgKIAAgCIABAAIABAAIABADIADACIAFAAIgFAGIAGACIgFAFIABAAIAEABIAAACIgEAAIgFACIAFABIgKAEQgCABAAAFIgBAGIAAADIgBACIgEALgAhRglIgCAAIgDgCIgCgDIABgDIADgCIAAgBIgBgCIAEgCIACAEIgCgFIAAAAIgCgEIAKADIAAgBIgFgJIAAgBIACABIAHAJIABADIAAAAIgBAEIgCAEIgBABQgEAGgFAAIAAAAgAhIhEIAAAAIgDgCIAAAAIADgBIgGgKIAAAAIADABIgFgLIAOAHIADAFIAHAGIAAAAIgDAAQgFgFgFANg");
	this.shape_25.setTransform(-1.1,-20.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF00FF").s().p("ABqB4IAAABIAAAAgABhByIAAAAIAAAAgAAVBgIACAAIgBAAgAAxBXIAAgBIAAABgAgHBCIAAgBIAAABgAgWA/IABAAIgBACgAgWA4IAAAAIAAAAgABdAnIABAAIgBABgABvAbIAAAAgABvAaIAAABgAgHAUIABAAIAAAAgAgsAQIAAAAIAAABgAArAGIAAgBIAAABgABDgNIAAgBIABABgABOgYIABAAIgBABgAA6gbIABAAIgBABgAgYgfIABABIAAACgABcgpIAAgBIABABgABmg7IAAAAIAAABgAB1g7IABgBIABABgABvg8IAAAAIABgBIgBABgAAEg8IABAAIgBAAgABshDIAAAAIAAABgAgYhDIABAAIAAAAgAAKhUIgBAAIABAAgAAhhfIAAgBIABABgAh2hhIAAgCIAAACgAgnhtIAAgBIABABgAgdh4IAAAAIAAAAg");
	this.shape_26.setTransform(-6,-16.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#977168").s().p("AgKAEIAFgCIgCgCIACgCIAAgBQgFAAgDgDIAOgEIABAAIgGADIADABIAKABIAEAJIAAAAIgJgCIAAADIgEgCIgBAAIAAAAIgBAAIgBAAIACAEIABAAIAAADIgEABg");
	this.shape_27.setTransform(-9.9,-26.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E6E6E6").s().p("ABEBVIAAgCIAAgCIABgDIACgEIgBAIIAAABIAAAOgAA2BYIgBABIAEgGIANgWQgDAPgFAHIAAACIgBABIAAAAIgLALgAAQBFIgFAMIgBAAQAKgYAAgIIgKAVQgHAIgEAEIADgLIgIAIIADgOQgGAIgHAFIAIgTIgJAIIgHAFQAHgIAPgcIABgCIAHgPIANgaIAAAAIAAAAIgMAPIgLAPIgGAEIgIAIQgIAIgFAJIAAAAIAHgSIACgDIABgEIAJgWIAAAAIgRAWIgBACIgCAFQgHAKAAAGIAAgNIABgDIAAgCIADgMIAEgNIAAAAIAAAAIgKAQIgGAUIAAAAIgBgRIADgTIgFASIgBAAIAAgHIACgNIAEgLIgBAAQgIANgDARIgBgFIABgMIABgQIACgJIACgNIgCAAIgGAEIABgaIgIADIABgLIAIgSIgIABIgBAAIgCAAIgDgDIADgCIAAgBIAAAAIgDABIgHAAIgHgCIgBABIgGgHIgHgGIAFAAIAJAEIAFACQADgBABgEIAIACIAJAGIADAAQAAABABAAQAAAAABgBQAAAAABAAQABAAABgBIAGgBIgDAFIgDAEIgCABIAFABIgFAFIAFABIAAAFIgCAGIgBADIgBALIADAAIACAHIADAHIACgWIAAgBIACgFIAHgIIAKgIIgBAIIgDAGIgBAEIABADIABgBIAIgDIgGANIgIAMIgHAGIAAABQABgBAGgEIALgKIgDAUIADgGIAJgLIgDANIgBAEIgDAOIABAEIAHgRIADgFIAJgMIAAAAIAAAKIADgFIAAgBIAEgDIABAAIAAACIABAHIABAAIAHgKIAAgBIABAAIAAAFQgBAFgFASIAAAAIAKgTIABgEIAKgEIAAABIABgBIAKgGIABAHIACABIADAAIABgBIgCACIAAABIAAAAIAFgBIgBAAIgGAHIgCACIgDABIAAABIABAAIAEgBIgJAJIgIAMQgGAMgCAKIAAAEIADgFIAIgOIAHgHQgIAKgCAKIgCAHIAAAOIADgLIAFgLIgFAWIgBAFIgHAUIAKgUIALgXIAEgIQAHgMAGgHQABAIADACIABAFIABAMIgDAMIgGANIgIAIIAJgIIAIgKIAAgBIAEACQABAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAABIAEAFIABgBIABAAQAAAEACAFIAAADIgBAAIgDgDIgBAKIgCgFIgCgDIgEAGIgBgFIgCgEIgDAJIgEAJIgBgKIgBAAIgHAIIgDAFIAAgHIACgMIABgDIgBAAIgLARQgIAOAAAIIAAADIAAgBIAAgCIgBgKIgBAAIgEALIAAAAIgBgBIAAgIIAAAAIAAAAIgEAGIgCADIgCAEgABeA8IgGAKIgGAJIgBAAIAIgTIABgDQgIAKgGADIAMgVIAHgDIADgBIADgCIAAAEIAAAAIgFAWIgDAMIgBAEgABaAuIAAgBIAIgSIADALIgJAIIgHAEgABWAhIAAgDIgBgBIgFACIAAgEIAAAAIgEAEIABgJIgIAEIgBAAIAFgVIAAgBIAAgNIABgDQgBAIADAEIABgBIACADIACAFQACAFADACIAAAAQACAEAFAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQgCAJgHAJgAAsgLIgEAFIAEgFg");
	this.shape_28.setTransform(-3.6,-15.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#777C88").s().p("ABYAmIAAAHIgKAEgAhXgYIAAgCQABgOAFgBIAOgCIALgEIADgCIgCAEIgFABIAAACIgDABIgBAAIgDACIgFAHIgOAMg");
	this.shape_29.setTransform(-9.1,-24.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C4C3C1").s().p("ABaB9IAAgIIgCgHIgBAJIgDgGIgBgHIgBAMIgBAAIgCgDIAAgOIAAgBIABgIIgCAEIgBADIAAAAIAAgIIgGAKIAAABIAAgBQAFgIADgPIgOAXIgDAGIgEACIgFADIAAgBIAAgDIAAAAIAAAAIAAAAIgRANIAHgLIAAAAIgBAAIgUANIAEgLIgQANIAAAAIADgIIACgGIgFADIgJAIIAAAAIAGgKIADgJIABgDIgEAEIgEAEIgOANIgBAAQAGgFAGgNIgGAEIgBgBQADgBAEgIIgKAEIgIADIAPgXIgQARIgIAGIgBAAIAFgJIAEgKIgOASIABgIIABgNIgBAGQgEgQABgLIABgFIgDALIgBAAIgEgQIgEAHIgBAFIgCgLIABgEIgBgCIABgBIgBAAIAAABIgFAJIACgZIAAAAIAAAAIgGAFIgEAGIAAgCIADgKIAEgLQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABAAABIgBgBIAFgNQABgGgFgYIgEgcIAAgFIADgEIABAAIACAAIAIgBIgIASIgBALIAHgDIgBAaIAHgFIACAAIgCAOIgCAIIgBARIgBAMIABAEQACgQAJgOIABAAIgEALIgCAOIAAAHIAAAAIAGgSIgDATIABAQIAAABIAAgBIAGgTIAKgQIAAAAIgEANIgDALIAAACIgBAEIAAANQAAgGAGgKIADgFIABgCIARgWIAAAAIgJAWIgCAEIgBADIgHASIgBAAIABAAQAFgJAIgIIAIgIIAFgFIAMgOIALgQIABAAIgNAbIgIAPIgBACQgOAcgIAIIAIgGIAIgHIgIASQAIgEAFgIIgEAOIAKgIIgEALQAFgEAGgIIALgWQAAAJgKAYIAAAAIAGgMIAAARIACgEIACgEIAEgFIAAAAIAAAIIABABIAAAAIAEgLIAAAAIABAKIABACIAAABIAAgDQAAgIAHgOIAMgRIABAAIgBADIgDAMIAAAHIAEgGIAHgHIABgBIABAKIADgIIAEgJIACAEIABAFIAEgGIABADIADAFIABgKIACADIABAAIABgDQgDgFABgEIgBAAIgBABIgEgGIgBAAQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgEgDIABgEIABAAIAIgFIgBAJIAEgDIAAAAIAAADIAFgBIABABIAAACIABABQAHgIACgJIADgBIABgDIADgFIABAPIgDAOIgBACIgCgLIgIASIAAABIgFADIADAAIgNAVQAHgDAIgKIgBACIgIATIAAABIAHgJIAFgKIgBAZIABgEIADgNIAEgVIAAAAIAAgEQAFgEADgIIAAAOIAAAFIAAADIgDAJIgFASIgEASIgDgFIAAADQgBAGACAEIAAAAIgEgIIgIAJgAAFBlIABAAIABgBgAgiA4IABgEgAhdhFIgFgDIAAgGIgGABIgFgHIgGgGIgBAAIANgKIANgKQATgOAEAAQAGABAIAOIgCgCQgKgFgBADIgEAAIAEACIACAEIgNABIgKAFIAAAAIALADIgGADIgDAGIALACIgFAGIACAFIgKgDIgEAAIAHAGIAFAGIgCABIgFADg");
	this.shape_30.setTransform(-4.5,-17.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B0928A").s().p("AgHASIgBgFIAFgGIgMgCIAEgFIAGgDIgMgDIAAAAIALgFIAMgBIgCgEIgEgCIAEAAQABgDAKAFIACACIAAAAIgDgBIgCAAIAEAEIABACIAAAAIgOAEQADADAEABIAAAAIgCADIACABIgEADIAFAHIgBAAIAAAAIgBAEIgIgBQAAAEgCAAgAAPgKIABAAIgBgBg");
	this.shape_31.setTransform(-11.5,-26.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#626773").s().p("AAtBXIACgFIAEgWIgFALIgDAMIAAgPIACgHQACgKAJgLIADgFIgDAFIgHAJIgJANIgCAGIAAgFQABgKAGgMIAIgNIAJgIIgEAAIAAgBIACgBIACgCIAHgGIABgBIgBAAIgFABIAAgBIACgCIgBABIgDAAIgCgBIAAgHIgLAGIAFgKIAFAAIAAgDIgCgJIAEABIgDgGQACgCAGgCIgFgEIgBgEIACgBIAHgFIgCgBIgKABIAAAAIAGgHIgFACIgEACIAAAAIAGgKIgMAGIABgCIABgIIgFAIIgGgFIgCgBIAAACIADADIAAAAIgGgBIgBAAIgBAAIgIACIgEABQgFACgBACIAAAAIABgFIgGAGIgBAAIADgIIgGgCIABgCIgEgBIgHAEIAFABIABAAIgEACIAIADIgFAEIgEAEIAAAAIAGABIgEACIgBADIgBABIAFgBIAAAAIgFAFIgBAAIABAAIAEABIAAAAIACAAIAEAAQgLAEgFAIIgBACIgBABIgBgCIAAgEIADgHIABgIIgKAIIgHAJIgCAEIAAgEIABgFQAAgGACAAIAKgEIgFgBIAFgCIAEgBIAAgBIgEgBIgBAAIAFgGIgGgCIAFgFIgFAAIgDgDIgBgCIgBAAIgBAAIAAABIgHAKIgBABIgCADIACgEIgGAAQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBIgJgGIABgEIAAgBIABAAIAEgBIAAgDIAAAAIgCgEIAAAAIABAAIABAAIAAAAIAFACIAAgDIACADIAAABIAAABIgEACIABACIAAABIgDABIgBAEIACADIADABIACAAQAEABAFgGIABgBIACgEIABgEIAAAAIgBgEIgHgIIgCgBIAAAAIgLgBIgDgBIAHgDIgBAAIAAgBIgCgBIgDgFIACAAIADACIAAgBQgIgOgGAAQgFgBgSAOIgOALIgNAKIgBABIgBAAIgGAFIgIAHIgCgFIABgLIAAAAIACAFIAOgNIAEgHIADgBIABgBIADgBIAAgCIAFgBIADgDIAEgDIALgHIAJgEIAJgFQADAAAKAHIAEACIACABIAFALIgDgBIgBAAIABAAIAGAKIgDACIAAAAIADACIAAAAIADACQAFgMAFAFIADAAIAAgBIgHgFIgDgFIACABIAYgBIANgCIAIABIALACIACgBIAJAGIADADQALAIAFAAIADABIABgBIANgCIgLAGIACAAIAFgBIABAAIgHAEIgBAAIABAAIAEAAIAIACIAAABIAAABIgHAAIAAAAIAFABQABABAAAAQABAAAAAAQABABABAAQAAAAABAAIADgBIAGgBIgDACIAGABIANgBIAFAAIABABIAEACIgEgBIgHABIAJACIgFABIAIACIACACIgEgBIAFAEIgDAAIAEAHIgEAAIgBgBIAAABIABAAIACAFIAAABIgEgDIgDAAIAEAEIAAAAIgCABIgJABIgBABIACABIgBABIgDgBIgDAAIAAgBIgBABIgIABIAGgHIAAgBIAAAAIgIACIgGADIAFgHIAAgCIgCACIgEADIAAACIgCACIgBABIAFAFIgDAFIAAABIAFACIgDADIAFADIAEACIgCABIgBAAIgBAEIgHgGIAAgBIAAABIAAACIAAABIgHgIIgBgBIABAGIAAALIACAAIgDAGIgDAGIABAAIAEgCIgSASIAAAAIANgHIgHAKIgJASIgBAHIABAAQAIgPAHgIIAKgLIABAKIAAAKIABAAIABgRQACgJAGgBIgBALIAHgHIgBAKQABgCAGgCIgBAEQgKAAgBAHIAAACQAAADAEADIAAABIAFAEIABAHIAAABQgDgCgDgFIgBgFIgDgEIgBADQgDgFABgJIgBAEIAAANIAAABIgEAVIgBABIgBAEIAAABIgHAKIgJAIIAHgIIAGgMIADgMIgBgNIgBgEQgCgEgBgHQgHAGgHAOIgEAHIgKAXIgLAUgAAYg9IABAAIgBgBgAB7BhIABgEIAAgOQgDAIgFAEIgCABIgEACIgGACIgDABIAGgEIAJgIIABgBIACgOIAAgQIABAAIACgDIABAPIgCAKIAAABQAEgEAAgIIABAXIADgPIAAAJIgDALIgCAEIgBAEgAghAFIAAgCIAAgBIAAADIgCgGIgDAAIABgLIABgCIADgHIgBAFIAAABIAAAHIABAKIAEgKIABgCIAAABIgBAVgAgngbIAFgFIgEAAIABgCIAEABIAAAAIgBABIABAAIAAAGg");
	this.shape_32.setTransform(-5.1,-20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-32,27.9,28.2);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("AhdhrIACgCIABAAIAKgHIgIgCIAQgEIANgEIAGADIACABIADACIADACIAAAAIAAgDIACABIADADIAAgEIAFAGIABgFIAAAAQADAEABANIAJABIASgBIAJABIAJADQAEgEAFABIAAgHIACAAIAAAAIgCgFIAAgEIAEAAIACAAIACgEIAJgIIAAAAIABgBIADgBIABgBIAKgDIACAAIAAAAIAAAAIgCACIAMAEIgDACIAJACIAEACABOh7IgEABIAHABIAIACIABAAIgFADIAAAAIAMAFIAPAFQgCACgDAAIAAABIAIAAIADgBIgCADIgCACQAAABACABIAFABIgTAZQgEAGgMAGIgLAFIgCAAIABgEIgBAAIABgLIgBgBIgBgCIAAgCIAAgEIgFgIIgIgTIgJgKABJg2IACAEIABACIgEgBIgDAAIADALABAgZIAAAAIACgBIgBAAIgEgDIAGgEIgEgEIACgHIAEAEIADACIAAABIAAAAIgBAAIABAAAA/gYIgDADIAAAAIAIgBIAGABIAAABIgLADIAIAJIgHgEIgCAAIAHAJIgEgBIACACIACACIAEAIIgFgBIACAIIAAAEIgDgBIADAGQAFAGAEgCAhkhoIgGABIAIACIgTAHIAEABIgHAHIAAADIACAAQgCAIANALIAEAHIAAAEQAAAGADABIADAAIAEgCAgxhlIAAAHIgFgDIABAIIgCgCIgEgFIgBAGIABAIIgEAAIgJABIAHAHIgCgBIgHACIgBAAIgBABIACACIACADQgBACgCABIAFAFIgGAGAgyhoIgBgDIgBgBIgHgGIgLAGIgKAWIAAACIgBABIgBADQgGAYgFAIIAFgGIAAAAIACAEIAEAFIABAAIgCgJIABAAIAEACIACgBIgBABIABAAIAFAAIgBAGIAAABIABAEIAAAAIACAFIAAACIAAABIgFAGIAAABIAFABIgDAFIgCAEIgBAEQABABAFACIgFAEIACAEQAAABgJANIAAABIAAAAIAHgCIgFAJIgEAIIADAAIgGALIgCASIAFgKIAAAAIgFAPIgDAQIgBACIACgCIAFgKIgCAOIAAACIgBAIIAAgHIABgBAgmCBIgCADIgBABIABgFIAAgBIAAAAQABgLgDgCIAAABIgCAKIABAHIAAABIgBgBQgGgHAAgNIAAgIIgDAKIAAAAIgBAAIgEgHIABAIIAAABIAAAAIgBgBIgEgHIABgDIgCAHIgBADIgBAGIAAAAIABAIIAAACIADAFIABABQgGABgHgKQgHgIAAgIIAAAOIgEgIIgBgLIABgCIgFAGIACgaABPAcIgJADIAAAAQAEAAADAIIAGAKIAAABIgBAAQgHgKgEABQAHAEAEARIAAABIgEgEIgBgBIABAEIABAJIAJAYIAAABIgBAAIgGgGIAAAAIABAIIAAAFIAAAAIgBAAIgBgFIgCgEIgBARAA2B3IgKALIAFgNIgJAKAAhB9IAJgNIABAEIgCAIIgBADIgDAEABMByIAAABIgBgBIAAgBAA0CAIAAAAIAAgBIAAgBABJBxIABADIgBAGIgBgC");
	this.shape.setTransform(0,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4DFDE").s().p("AgIABQAAgBAIgBIAJABIAAABIgDgBIgOACg");
	this.shape_1.setTransform(-0.8,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#292421").s().p("AgQAFIgBgFQAAgEAGgBIADAAIADAAIARgCQAHAAgBAHIgCAEIgDACIgIgEQgIAAgEADIgGADgAgIAAIAAABIAOgBIADAAIAAAAIgJgCQgIABAAABg");
	this.shape_2.setTransform(-0.8,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmADIABgCIABABIAAABIgBABgAAuACIABgCIACABIAAABIgCABgAgwAAIACgCQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAgAAkgBIACgCIABAAQAAABABAAQAAAAAAAAQABAAAAAAQAAABAAAAIgDABQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBg");
	this.shape_3.setTransform(-0.3,-5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFBAIgMgDIgDgDQgJgGAAgKQABgLAHgCIAEgBIAGgBIAEAAIADAAIAGAAIACAAIAFgBIAHACIABACQADADAAAEQgBAPgIAHQgHAFgHAAIgCAAgAgRAhQgFABgBAFIACAFIADADIAFgDQAEgDAJAAIAHAEIADgCIADgFQAAgHgHAAIgRACIgCAAgAgxguQgDgDAAgFIADgHIAIgCIACAAIABALIgBACIABABIABgBIAAgBIgBgBIAEgJIABABIgBAOIAAAAQgDADgFAAQgEAAgDgDgAgxg2IACADQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAgBAAgAAqgsQgEAAgDgDQgDgDAAgFIAAgBIAAgBIALAAIgHgEIAAgBIAGACIAJgBIAAABIACAGQAAAEgDADQgDADgEAAIgBAAgAAtgzIABABIACgBIAAgBIgCgBgAAjg3QAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIADgDQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgBAAgAghgxIACgFIAAABQAAADgCADg");
	this.shape_4.setTransform(-0.2,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E6E6").s().p("AAlB2IAAAAIAFgFIABgGIAAgCIAAgBIAAgBIACgFIAAgCIAAgBIgBgKIgEgOIgGgSIgBgBIABAAQgCgFgEgDIgFgGIgDgBIAAAAIgBgBIgHgBIABABQAEADAAAKIgFgDIgBAAIABADIgBAGIgCACIgDgBIgBAAIADACIgCACIgIgCIgEAFQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAIgIADIgEgFQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABAAAAIgBABQACgEgEAAQgFAAgEAEIgHgKIgEgGQgDADABAOIACAJIAAANIgDAFIAAAHIgEgIIgBgEIgCgFIgBAAIAAAAIAAABIgBAAIgBgFIABgJQAAgLAEgGQADgGAKgGQgGABgGAFIgHAIIAAAAIAAABIgBAAIgHASIgGAXIAAABIAAAHIAAABIABAHIgJgPIgCAFIAAABQgFgQAAgOIAEgTIAAAFQABASAEAIIAAABIAAAAIAAgBIAAgRIABgNIAEAOIACgcQAEgMAJgFIAIgCIAEAAIAKABIADAAIAAgBIADABQgHACgBALQAAAKAJAGIADADIAMADQAJABAHgGQAIgHABgPQAAgEgDgDIgBgCIABAAIADAAIAHgBIABABIABgBIACgBIAGABIAAAAIgFgEIACAAIAGABIALAMQAFAJADAQQAAgWgHgMIAHAGIAFAFIACAGIAAAAIAAAAIABAAIgBAAIAAgEIAGAIIAEAKIgDgCIgHgEIAHAKIAAAOIAAAFIgFgIIACAgIAAAFIgIALQgHAIgFAAIgCgBgAAzBVIABABIAAgBIAAAAIAAgBIAAABgAAzA8IAAAAIgBgBgAAJAiIABAAIgBAAgAgwBrIAAAAIACgFIAAAGIgBABIgBADIgCAAgAhgBCIAAgBIgBAIgAgdA/IAAgDIADADgAAVAyIgBAAIAEAKIgBAAIgCgDIAAgBIgCgFIABgFQAKABAHAQgAhshDIgDgDIAGgGQAFgFAAgDIgBgCIAFgGIAAgCIgCABIADgGIAEgDIACgBIgCACQgGAZgEAHIgEADgABAhLIABgEIgBABIABgMIgBgBIAAgBIAAAAIACgEIAAAAIAAgBIABgCIABABIgCABIAEAFIgBAEIAAAGIAIgEIAAABIABAAIAFgGIAKgEQAAgGAEgDIAEgFIAFgHIABgCIAFACIgTAZQgEAGgMAGIgLAEg");
	this.shape_5.setTransform(0.9,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C4C3C1").s().p("AhGCAQgHgIAAgIIABAOIgFgIIgBgLIABgCIgEAGIABgaIACgEIABgDIAHgKIABgBIAAADIgEAUQAAAOAEAPIABAAIABgGIAKAQIAAACIADAFIACABIgCAAQgFAAgHgJgAgoCEQgHgHAAgNIAAgIIgDAJIgBABIgEgHIABAIIAAABIAAAAIgBgBIgDgHIABgDIgBADIAAAAIgCAEIgBADIgBAGIgBgHIAAgCIAHgXIAHgRIABgBIAAAAIAAAAIAHgIQAFgFAHgBQgKAFgEAGQgDAGAAALIgBAKIABAEIAAABIABgBIAAAAIACAEIABAFIAFAIIAAgHIACgGIAAATIgCAFIAAAAQABgLgDgCIAAABIgCAKIABAHgABHB2IAAACIAAgFIgCgfIAEAHIABgFIgBgNIgGgLIAGAEIAEADIACAFIAAACIAAABIgHgHIAQAUIACAFIAAABIAAAAIgHgGIAAAAIACAIIAAAFIgBAAIgBgFIgCgEIgBARIAAAEIgBgBIAAABIgBgBIAAgBIgCgEIABACIgBACIABADIgBAGIgBgCIgBACIgDAGIgBACgAA0B1IgJAKIAAgDIACgIIAAgEIgJANIACgUIAAgEIAAgEIgCgDIAAgBIAAgIIgCgEIABgBIgDgJIABAAIAQAMQgIgQgJAAIgBAFIgDgBIgFAFIABgGIgBgDIABAAIAEACQABgKgEgDIgBAAIAHABIABAAIAAAAIACABIAGAGQAEAEABAFIAAAAIABABIAGASIADANIABAKIAAACIAAACIgKALgAA2CAIAAgBIABgBIAAACgAA/BqIAAgBIAAAAIABAAIgBAAIAAABgAglBSQAAgOACgDIAFAFIAGAKQAFgEAEAAQAFAAgCAFIABgBQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAEAFIAGgDQABAAAAAAQABABAAAAQAAABAAAAQABABAAABIAEgFIAJACIgCACIgCAAQgFAAgCADIgWgBIgCgDIgBACIgGAAIgBAAIgJgIIAAAAIgBgBIABABIAAABIAAAPgAA+BQIAAAAIAAABgAARBMIAAAAIAEABIgCACgAgiBLgAAUA2IACAAIgBABgAhPgtIgEgFIgBgEIgBAAIgFAGQAFgIAGgYIABgDIABgBIABgCIABAAIAAABIgDAFIAAAIIACgBIABgCIAEgCIAAAEIgBAAIgBABIACACIACADIgDADIAGAFIgHAGIgBABIgFgCIgBAAIACAJgABKhIIAAgCIAAgEIgEgIIgIgTIgKgKIgJABIAAAJIgBgIIgDAFIgBAAIAAgHIADgLIACgEIAAAAIABgBIAEgBIABgBIAKgDIgDAGIADAAIAEACIAEADIgGAAIADAEQAFAFACAAIABAAIAAABIgHAAIALAQIAAABIgFAAIAFAGIAAABIAAAAIACACIgEABIAFAJIgBACIAAABIAAABIgCAEIAAgBIAAACg");
	this.shape_6.setTransform(-0.3,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#977168").s().p("ABEAQIgDgEIgBAAIAAgCIABgCIgBAAIgEACIgCACIABgMIgEADIgBgKIAAgBIABAAIAKAJIgDgGIAHAHIABAPgAg3AIQgOgDAAgEIACgCIAIgGIgDgDIAJgBIAAgBIgCgEIABACIAGALIAAADIgEgFIgBAFIACAIg");
	this.shape_7.setTransform(-0.7,-9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B0928A").s().p("ABJAWIgBgFIAAAAIgCAEIgCgCIgBgOIgHgHIADAGIgKgJIgBAAIAAABIABAKIgBABIAAAAIgBgKIgBAAIgCADIAAAAQgDgDgBgFIABgDIAAAAIABgJIAJgBIAJAKIAIASIAFAIIAAAEIgBABIgCACgAhMANIADgGIAAAAIgBAAIAJgVIALgGIAIAGIAAABIABACIABAEIAAAGIgFgCIABAHIgCgCIAAgDIgGgKIgBgCIACAEIAAABIgJAAIADAEIgIAEIgCAEQAAADAOADIgJACIAGAGIgCAAIgHABIAAgDIgEACIgBABIgCACg");
	this.shape_8.setTransform(-0.5,-10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444655").s().p("AAzBMIgLgMIgGgBIgCAAIAFAEIAAAAIgGgBIgCABIgBABIgBgBIgFABIgFAAIgBAAIgHgCIgFABIgCAAIgGAAIgDAAIgEAAIgGABIgEABIgDgBIgBAAIgNgEQACgCAHAAIAJACIAAAAIgJgCIAFgBIAFABQgGgFgFAAIgLADIgHAHQADgKAHgFIgBAAIgBABIgDAAIgGADIABgEIgCAAIgGAGIgFAGIgBgDIAAgBIgBAAIgHAJQAAgGAFgHIABAAIAEgFIgBAAIAAAAIACgCIALgFQALgEAQgBIgEgCIgNAAIgGAEIAAAAIACgDIADgCIgJACIAAgBIAKgFIAHgCIABAAIgBAAIgHgBIANgGIABAAIAMgCIgDgEIgHgEIABgBIAEABIAEACIABAAIgBgBIgEgHIAHAAIAAgDIgBgIIABAAIABACIACgKIAAAAIACADIAAAAIAFgMIAAgBIAAgCIABAAIAAAAIACAAIABAQIAEgCIAAAEIgBAGIAAAAIAFgEIAAADIgBACIgBACQADgCAEgBIAAAAIgBACIAAADIADgCIAEgBIAEABIABAAIgOAKIAMgEQgGACgJAIIAAABIAEgBIAMAEIAIAFIAAABIgIgDIgDAAIACADIAEABQAOAFAGAHIgHgDIgBAAIgHgCIgJAAIgLgBIAAABQATACALAHIABAAIABAAIABABIACABIAAAAIAGAGIAAABIAGAGIgLgEQAMAIADAPIAAAEIABAAIgBAAIAAAAIAAAAIgCgGIgFgFIgHgGQAHAMAAAWQgDgQgFgJgAAmAKIAAgBIAKgCIgCAAIgHgCIAAgDIgDgCIgDABIgEAAIABgBIAEgGIgMAEIAAgCIgFgIIgBgBIAAAAIAFABIgCgDIgCgDIgEgEIACABIAGACIACABIADAAIAAAAIgDgFIAAAAIACACIACABIAEADIABABIAAABQAAAFADADQADADAEAAQAFAAADgDQADgDAAgEIgCgGIAEgBIAAAAIAAAAIgFgFIANAAIgHgGIAIACIAIAEIABAAIgEgEIAAAAIgCgEIgCgBIgBgCIgDgCIgFgCIgCgBIgDAAIgFgBIgBABIADgDIgJgBIgGgBIgGABIAEgFIAAAAQgEAAgHAGIgKAHIACgHIgHAKIgDAGIgBACIgBAAIAAgLIgBAAIAAAEIgBABIAAAAIgHgMIgHgHIACAGIgNgIIgBAAIgBAAIABAAIADAEIgIgCIgHACIgBAAIACAEIgMgBIAAABIAAAAIACACIAAABIgBAAIgDAAIgHADIABABIgBAAIADABIAAAAIABABIgCABIgDABIgDAFIAAAAIACAAIABAAIAAABIAAAAIgCACIAAABIgBABIAAAAIAGgDIAAgBIAHABIAAACIABAAIAEgCIAHABIAAAEIgCAAIgIACIgDAHQAAAFADADQADADAEAAQAFAAADgDIAAAAIAAABIABgCQACgDAAgDIAAgBIAEgIIABgBIABAAIAAABIgCAHIAAADIADgGIABgCIACgDIABgBIACAFIADgGIABAAIgBABIABABIACgCIACAAIgDAHIAAAAQgDAIACAFIAAABIgBAAIgEgCIgBAEIgFgCIAAAAIAAABIABADIgNgCIADABIAFAFQgGgEgEAAIAAAFIgEgFIABAEIgBAAIgIgFIAAAIIgBAAIgDgEIgEADIgEACIADgIIAAAAIAAAAIgEACIgCAAIAGgGIgFAAIgCAAIAAAAIAGgGIAAAAIgDAAIgEgCIgBgDIAAgBIAAgHIgFAAIAAAAIAHgGIgGgGIAEgCIgDgEIgBgCIAAgBIABAAIAHgBIACAAIgGgHIAJgBIAEAAIgCgHIABgGIAEAFIACABIgBgHIAFACIAAgGIAEACIAAgJIgBgEIADADIgDgIIgBgEIADADIAAgBIgBgCIACAAIADADIAAgEIAFAGIABgFIABAAQACAFABAMIAJACIASgCIAJACIAJADQAEgEAFABIAAgHIACAAIAAgBIgCgEIAAgFIAEAAIACABIACgFIAJgHIgDADIgCAMIAAAGIAAAAIADgFIABAIIAAABIgBADQABAFADADIAAABIAAgBIACgDIABAAIABALIAAAAIABgBIAEgDIgBALIACgCIAEgBIABgBIgBACIAAADIABAAIADADIACABIACABIACgDIAAAAIABAFIABAAIACgCIABAAIABACIABABIgBAMIABgBIgBAEIACAFIABABIgEgBIgDAAIADAMIgDgDIgEgDIgCAHIAEADIgGAEIAEACIgBABIAAAAIgBACIgCAAIgCgCQgCABAAAGIgBAAIgGgCIAEAFgAgigVIABgCIAAADgAADgYIAAgBIAUACIAAAAgAgKgZIAAAAIALAAIAAABgAABgZIACgBIAAABIAAAAgAgOgZIAAgBIADAAIgBABgAgLgaIACgCIAAABIgBACgAgngbIAAAAIAYABIAAABgAgPgaIAAAAIABAAIAAAAgAgugcIACgBIABgBIAEgBIAAAEgAgzgcIAAAAIAFAAIAAAAIAAAAgAhpgjQgNgLACgIIgBAAIAAgCIAHgIIgEgBIASgHIgHgBIAGgCIAGgDIAFAAIgCACIgGAGIgHAKIgBABIABAAIAIgCIgCABIAAAAIgDADIgEAFIAAACIABgBIAFgCIgDAOIAAABIAAAAIAHgIIgCACIAAABQgBAIgGAHgAg6gdIAHgDIAAACIAAACgAg9gdIADAAIAAAAgABYgkIAAgBIgFgMIADgBIgBgBIgGgEIAAAAIABgBIADAAIgFgNIACAAIACABIAFAJIADANIACgMIAAAAIABAEIACAFIAAgJIgDgLIgDgFIACABIgEgHIABAAIAKAEIAJACIAJACIACAAIgCADIACABIgBACIgFAHIgEAFQgEADAAAGIgKAEIgFAGgAhcgxIADgGQgBAAgBgBQgBAAAAAAQgBAAAAgBQAAAAAAAAIADgEIADgEIgGgBIAFgGIAHgHIABAAIACgCIALgGIgJAIIADAAIABAAIgHAIIADAAIABAAIgGAJIADAAIgCAEIAAABIgBACIgBABIAAABIgFAFIgFACg");
	this.shape_9.setTransform(-0.2,-3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#777C88").s().p("AhNBWIAAgFIAAgEIgBACIgGAKIgCADIgCAEIAAgCIACgOIgEAKIgBAAIACgRIAGgPIAAABIgGAJIADgRIAFgMIgCABIAEgJIAFgIIgHACIAAgBIAAgBQAJgNAAgCIgCgDIAEgFIgFgBIABgEIAJgEIgDAFIAAAEQAHgEADAAIABABIgQAVIAAAAIAEgBIAFgDIABABQgGAHgDAMIAAABIAJgIQAGgDALgCIAFgEIANAAIAEACQgQABgLAEIgLAFIgCACIAAAAIABAAIgEAFIgBAAQgFAHABAGIAHgJIABAAIgBABIACADIAEgGIAGgGIACAAIgBAEIAHgDIACAAIABgBIABAAQgHAFgDAKIAHgHIALgDQAGAAAFAFIgFgBIgFABIAJACIAAAAIgJgCQgHAAgCACIANAEIABAAIAAABIgDAAIgKgBIgEAAIgIACQgJAFgEAMIgCAcIgEgOIgBANIAAARIAAAAQgEgIgBgSgAg+A0IABAAIAAgBgABUBkIgPgUIAGAHIAAAAIAAgDIgCgFIgEgKIgGgIQgDgPgMgIIALAEIgFgGIgBgBIgGgGIAAAAIgCgBIgBgBIgBAAIAAAAQgMgHgTgCIAAgBIALABIAKAAIAGACIABAAIAAABIAQANIABgFIgCgEIgBgCIAGADIABAAIgBgEIgBgGIAEAEIABgNIACABIACACIAEAJIgEgCIABAJIAAAEIgDgBIAEAFQAEAGAEgCIAAABIgIACIgBAAQAEABAEAHIAFALIgBAAQgHgJgDAAQAGAEAEASIAAAAIgDgDIgBgCIABAFIABAJIAIAXgAgyATIgBAAIgEABIgFABIAOgLIAKgHIAAgBIAAAAIgGABIgDACIAAgBIAJgIIAIgGIgBAAIgHgCIAEgCIAFgDIAGgEIADgCIABAAIAAgBIAAgEIABgJIAAAAQAGACADgHIAFgJIgBAKIAAABIgFAMIAAAAIgBgDIgBgBIAAABIgBAKIgBgCIgCAAIABAJIAAADIgHAAIAEAHIAAABIgEgCIgEgBIgBABIAHAEIADADIgMACIAAAAIgOAGIAHABIABAAIgBAAIgHACIgKAFIAAABIAJgCIgDACIgCADIgJACgAApAQQgFgEgHgBIgCAAIgDgBIgDgDIAEAAIAHADIAAgBIgIgFIgMgEIgEABIAAgBQAJgHAHgCIgNAEIAOgKIAAAAIgFgBIgEABIgDACIAAgDIACgCIgBAAQgEABgCACIAAgCIABgDIAAgDIgEAFIAAgBIABgGIAAgEIgFACIgBgRIABgGIABAAIADAIIACAJIAHABIABABIgGAHIAIAAIgBAGIAAABIAAAAIABgBIAAAAIAKAAIgBABIAEAAIgHAHIABAAIANACIgNAHQAEABAIAFQAKAHAAAGIAAABgAgkgZIAAgOIAAgDIAAACIgFAJIgBgLIAAgIIgDABIgBAAIgDACIgEACIgBAAIAAgEIAAgCIgHAEIgFADIgBAAIABgBIABgBIABgCIAAAAIAAgBIAAgBIAAAAIgDABIADgFIADgBIACgBIgBgBIAAAAIgCgBIgBgBIAHgDIADAAIABAAIAAgBIgCgCIAAgBIAMABIAAAAIgCgEIABAAIAHgCIAIACIABAAIAAAAIgEgEIABAAIANAMIABABIgEAAIgHgCIgBAAIAKAJIgGACIgCADIAHgCIAEAAIAAACIgBAEIgBgBIgBAAIgDAGIgCgEIgBAAIgCAEIgBACIgCAGIAAgEIABgGIAAgBIAAgBIAAABIgBABIgFAIIgCAFIAAACIAAACgAAdgkIgBAAIgEgDIgBgBIgDgCIAAAAIAEAFIgBAAIgDAAIgDgCIgIgFIAAgBIAGgEIAEgDIABAAIABgBIgCABIgDgBIAAgBIALgDIAAgBIgFgDIAKgDIAEgBIAJABIgDADIACgBIAEABIADAAIACABIAGACIACACIABACIACABIACAEIAAAAIAEAEIAAAAIgJgEIgHgCIAHAGIgOAAIAGAFIgBAAIgEAAIgJABIgGgCIAAABIAIAEgAAUgqIgBgBgABUhOIgFgJIgGgOIABAAIAFACIAAAAIgFgJIABAAIALAJIgCAAIAFAHIgDgBIADAFIADALIAAAJIgCgFIAAgEIgBgBIAAABIgBAMgAgyhaIgBgEIgBgDIAAAAIgIgHIgLAHIgBgCIgHABIAJgIIgLAGIADgCIAJgGIAAAAIAFgBIAFACIgBgEIABAAQAFABAFAJIAEAEIgBAJg");
	this.shape_10.setTransform(0.1,-1.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#626773").s().p("AhOB4IAAgBIAAgBIAAACgAhEA6IABAAIAAABgAhOAoQADgLAGgIIgBAAIgFACIgEACIAAgBIAQgWIgBAAQgDAAgHAEIAAgFIADgDIgJACIACgDIACgFIgEgBIAAgBIAEgGIACAAIAFgBIgGAHIADAAIADgCIAAAAIAAABIgCAHIADgBIAEgDIAEAEIAAAAIAAgKIAIAGIABAAIAAgEIADAFIAAgFQAEAAAGAEIgFgGIgDgBIANADIgBgDIAAgBIABAAIAEABIABgEIAEACIgDADIgGADIgFADIgEADIAHABIABAAIgIAFIgJAJIAAABIADgBIAGgCIAAAAIAAABIgKAIIgOALIAFgBIAEgBIABAAIgGAEIAJgBIABAAQgLACgGADIgJAHgAAiAbIAAAAIAHADQgGgIgOgEIACAAQAHAAAFAEIAFAEIAAgBQAAgGgKgIQgIgGgEAAIANgGIgNgDIgBAAIAHgHIAEgBIACACIAAAEIAHACIACAAIgKACIAAAAIASADIgEgFIAGADIABAAQAAgGADgCIABADIACgBIgCADIgBAAIAIgBIAGABIAAABIgLADIAIAIIgHgEIgBAAIAHAJIgFgBIACACIgCgBIgBANIgEgEIABAGIABAFIgBgBIgGgCIABABIACAFIgBAFgAAKgLIAAgBIABgFIgIgBIAGgGIAEAHIAAADIANgEIgFAGIgKAAIAAABIgBAAgAhLgTIgCgFIAAAAIAFACIACgBIAAABIgGAFgAgWgeIgBAIIAAAFQgCgGADgHgAgjgcIABgHIgBAHIAAAEgAAHgaIABABIgHgBIgBgJIgDgIIgBAAIgBAFIAAgBIgCACIAAABIgCACIABgKIgFAJQgDAHgGgCIAFgKIgBgBIgFAGIgBgBIABgCIABAAIABgDIAAgDIgEAAIgHACIACgCIAGgCIgKgJIABAAIAHABIAEABIgBgCIgNgMIAAAAIANAIIgBgGIAHAHIAGANIAAAAIABgBIABgFIAAAAIACALIAAAAIABgCIADgGIAGgJIgBAHIAJgIQAHgFAEgBIAAABIgEAEIAGAAIAGAAIgEACIgKADIAFADIAAAAIgLAEIAAABIADABIACgBIgBABIgBAAIgEACIgGAFIAAAAIAIAFIADACIgCAAIgGgDIgCgBIAFAFIACADIABACgAAWgeIgEgCIAEACIABABIAAAAgAhugkIAAgEQAHgHAAgJIAAAAIACgDIAFgCIAFgFIAAAAIABgCIABgCIABAAIABgEIgCgBIAFgIIAAgBIgBAAIgCABIAHgJIgBABIgEAAIAHgBIABABIgJAWIgBACIAAABIgCABIgEADIgDAGIACAAIAAACIgEAFIABACQgBADgFAGIgFAGIACADQgEgBAAgGgAgdgkIgBAAIgCADIACgDIABgBIACAFIADgGIgDAGgAAqghIAEgBIABABIgFAAgAAOgkIAAABgAgigjIAAgBIAAABgAANgkIABAAgAhHgnIABgCIgBACIgBABgAg0gqIABgBIgCABIgCACgAhJgrIADAAIAAAAIAAAAIAAAAIgDABgABIgyIABgEIgFgGIACgBIgBgBIgEgJIADgBIgCgCIAAgBIgEgGIAEAAIABAAIgBgBIgKgQIAHAAIAAgBIgBAAQgDAAgEgFIgEgEIAGAAIgDgDIgFgCIgCAAIACgGIACAAIAAAAIgCACIAMAEIgDACIAJACIAEACIAAABIgEABIAHABIAJACIAAAAIgFADIAAAAIANAFIAOAFQgCACgCAAIAAABIAHAAIADgBIgBADIgDAAIgJgCIgIgDIgKgDIgLgJIgBAAIAFAIIAAABIgFgCIgBAAIAGAOIgCgBIgCgBIAFAOIgCAAIgBAAIAAABIAFAEIABABIgDAAIAGANIAAAAIgJAFgAhCgyIAAAAIgDgCIABAAIACABIAAAAIABABgAhsgzIADgPIgFACIgBAAIAEgFIADgEIAAAAIACAAIgIABIAAAAIAHgLIAGgFIACgDIgEABIACgCIABAAIAKgHIgJgCIARgEIANgEIAGADIABABIAEACIACAEIACAHIgCgCIABAEIgEgFQgFgJgFgBIgBAAIABAEIgFgBIgFABIAAAAIgJAFIgDADIgCABIgBAAIgGAHIgGAGIAGABIgDAEIgDAEQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAIgDAHIAAACIgGAIgAg8g7IAAAAIACADgAgwg7IgCgDIACADgAgig/IgDgDIAEADIAAABgAgmhDIACAAIgBABg");
	this.shape_11.setTransform(0.7,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-15.4,26.1,29.4);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#820000","#990000","#4B0101"],[0.208,0.51,1],1.4,1.7,0,1.4,1.7,19).s().p("AgBDAQgkgIgOgeQgOgegahvQgahugBgWIgFgbQB0hfCCBgQAEBSgLA5QgFAkgCAfIgJBGQgIAogdAOQgSAJgWAAQgMAAgMgCg");
	this.shape.setTransform(2.5,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-15.4,24.9,38.9);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AgIAOIgBgBIgDgFIgCgEIgDgIQgBgOAGAGIAFgCIgCAJIgBABIgBgCIABgFIgBABIgBABIgBAEIAAAIIACAFIAEAFIACAAIABAAIAEACIAFgBIAAAAIAAgBIACAAIABgBIABAAIAEgFIAAgCIAAgEIAAgBIAAgFIAAgCIgBgEQACAEAAgEQgFgIAJAIIgBAMIgFAKIgDAEIgJABgAAJAMIAAAAIAAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#733D26").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(0.9,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#101112").s().p("AgEALIgBAAIgCgBIgEgFIgBgEIgBgIIACgFIAAAAIAAAJIABADIAAAAIACAHIAAAAIABABIABAAIAAAAIAAgBIgBgCIAAgBIgBgBIAAgBIAAgBIABABIgBgCIABAAIAAgBIAAAAIgCAAIABgBIACgBIAAACIAAAFIAAABIABAAIAAAAIAAABIAAABIABABIABAAIADAAIAAAAIAAACIAAAAIgBgBIgBAAIgBAAIAAAAIABABIACABIADgBIAAAAIABgBIABAAIABAAIAAgBIAAAAIAAADIAAAAIgBAAIgFABgAAJADIAAABIAAAAIAAABIgBACIABAAIgBABIABgBIAAAAIAAgBIABABIABgGIAAAAIABgDIAAgBIAAgFIAAgEIAAAAIABACIABACIAAAFIAAACIgBADIAAACIgDAFIgBABIgCABgAAHAHIgBABIAAAAgAAGAIIABAAIgBAAgAAHAHIAAAAIAAAAgAAHAFIAAAAIAAACgAAIADIAAACIgBAAgAAHgDIACAAIAAgBIAAgEIABABIAAABIgBAFIAAAAIgBAAIABABIAAAAIgBADgAAJACIAAAAIAAABgAAJABIAAAAIABABIgBAAgAAJABIAAgBIAAAAIAAgBIABAAIgBACIAAABIAAgBgAAKgBIAAAAIAAAAIABgFIAAAAIAAABIAAAFgAAKgGIACgGIgBAGg");
	this.shape_2.setTransform(0,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#292825").s().p("AAFADIAAABgAAFADIACAAgAgEAAIgBAAIAAgBIABABgAgGgBIAAgBIABABg");
	this.shape_3.setTransform(0,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#650101").s().p("AAAAAIABAAIAAAAg");
	this.shape_4.setTransform(0.7,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A8947D").s().p("AAFAJIAAgBIABAAIABAAIgBAAIgBABgAACAIIABAAIABgBQAAAAAAAAQABgBAAAAQAAAAAAABQAAAAAAAAIgBABIAAABIgCAAgAALgGIAAgDIABADIgBABgAgLgGIABgDIAAADIAAABIAAAAg");
	this.shape_5.setTransform(0,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDE2D3").s().p("AgDAJIAAAAIABAAIAAAAIABAAIABABIgCAAIAAAAgAAEAJIAAgBIAAABIgBABgAAFAJIABgBIAAABgAAAAIIABAAIgBABgAAJAHIgBAAIABgBIAAgBIAAgBIAAAAIABgBIgBACIABACIgBgBIAAABIAAAAIgBABgAgHAIIgBgBIAAAAIABgCIgCgCIACABIAAABIAAACIABAAIAAABgAgJAAIAAABIAAgCIACAAIgBABIABAAIgBAAIgBABgAAJgBIABAAIAAAAIABABgAgLgCIABgDIAAABIAAADgAALgFIAAgBIABACIAAABIAAABgAALgJIABABIAAABgAgLgHIABgCIgBACg");
	this.shape_6.setTransform(0,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D3B996").s().p("AgCALIAAgBIACAAIAAABIAAgCIAAAAIABAAIAAgBIAAAAIAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAABgBIAAgBIAAABIAAABIACgBIgBABIAAABIgDABgAAEAKIAAgBIABgBIAAABIAAAAIAAABgAgDAJIABAAIAAABgAgHAIIABAAIAAABgAgHAHIAAgBIABACgAgKAAIAAAAIgBgCIAAgEIAAAAIABABIAAAAIAAgBIABgBIgBADIgBADIABAAIAAgCIAAADIABAAIABgBIAAAAIgBABIAAABIAAAAIAAABIABgCIABADIgBgBIAAABIAAABIABABIgCgBIACACIgBACgAAJAGIABgCIgBABIAAgCIABAAIgBgBQgBABABgCIAAgBIAAAAIgBgBIABAAIACACIgBgBIABAAIAAgEIABADIAAgBIAAgBIgBgCIgBgCIABABIAAABIABgBIAAgBIAAgEIAAADIAAAGIAAABIgBADIAAAAIgBAFgAAJAGIAAABIgBAAgAgIAAIABgBIAAABIAAAAgAgLgHIAAgEIAAAFg");
	this.shape_7.setTransform(0,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#A90101","#320101"],[0,1],0.1,0.2,0,0.1,0.2,1.2).s().p("AAEAGIAAgBQAAAAAAAAQAAgBAAAAQAAAAgBABQAAAAAAAAIgBABIgBAAIAAAAIgBAAIAAgBIAAABIAAAAIgEAAIgCgCIAAAAIAAAAIgBgBIAAgGIAEgBIAHgBIABAAIABAAIAAAAIACAAIAAABIgCAAIABAIIgBAAIAAABIgBABg");
	this.shape_8.setTransform(0.1,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#857058").s().p("AABAKIABAAIAAABIgBABIAAgCgAAAALIAAgBIABAAIAAABgAgKABIAAgCIAAgBIABgDIABgBIAAAGIgBABgAgLgJIAAAAIAAgBIABgBIAAAFIgBABgAALgGIAAgBIAAgDIgBgBIABABIABABIAAAAIAAAEg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#760101","#320101"],[0,1],0.1,0.1,0,0.1,0.1,1.3).s().p("AgIAGIgCABIAAAAIAAgGIAAABIABgIIACADIAOgBIACABIAAADIAAAAIAAACIgBAAIgBgBIAAAEIgBAAIgBAAIgCAAIgHABIgEACgAAKgCIgBgBIABgBIABAEg");
	this.shape_10.setTransform(0.2,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-1.6,3.7,3.3);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4C3C1").s().p("AAKAnIABgGIABgKIgBgNIgHAOIAAAAIgBgEIAAADIABACIADAIQgGgBgCgJIgBAGIgBAAIgBgJIgDALIgDgEIABgBIAFgJIABgGQADgLgBgGIAAAAIAHAIIAFACIAFACIgFgFIAAAAIADABIAHADIAIADIgGgFIgBgBIgDgCIgDgGIABgBIAAABIABABIAHACIAEACIABABIAQACIALAAQgdgGgGgOQADACAGACIAGAAQgHgCgCgEIAAgBIAPAEIABAAIACAAIgBgBQgJgDgBgLIABAAIAQAMQgIgQgJAAIgCAHIABAGIgBAAIgCgCIgBAAIgIAHIgBAAIAAgBIgDAAIAAAFIgBAAIgLgCIAAABIABACIgDgBIgEgDIgGAEIgIgJIgCAIIgCgBIgDgDIgBADIgBADIgDgJIAAAAQgDAJAKAPQgNgKgCgOQAAgOACgDIAFAFIAGAKQAFgDAEAAQAFgBgCAFIABgBQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABABIAEAEIAGgDQABAAAAABQABAAAAAAQAAABAAABQABAAAAABIAEgEIALABIACAAIgCAAIgDgDIAAAAIAFABIABgBIABgHIgBgDIABAAIAEADQABgKgEgEIgBAAIAHABIABABIAAAAIACABIAGAFQAEAEABAFIAAAAIABABIAGASIADANIABAGIgBAJIgHAHIgBACIACgFIAEgDIgCABIgBABIACgHIgJAKIAAgDIACgIIAAgEIgLAPIAAgDIAAgGIgLAQQACgLgCgGIgIASIgBAAIACgMIABgHIAAAAIgBAHIgFAOIgBAFIgFAKgAAfAAIAAAAIgBAAgAglAdQgHgIAAgNIAAgIIgDAJIgBABIgEgHIABAIIAAABIAAAAIgBAAIgDgIIABgCIgBACIAAAAIgCAFIgBACIAAACIAAgDIgBgDIAAgEIABgCIAFgPIAHgRIABgBIAAAAIAAAAIADgEIAEgEQAFgFAHgBQgKAFgEAHQgDAFAAAMIgBAJIABAEIAAABIABgBIAAAAIACAEIABAEIAFAIIAAgHIACgFIABABIABAKIgEAMIAAAAQABgLgDgBIAAAAIgCAKIABAIg");
	this.shape.setTransform(-0.6,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("AghAtIAAgBIADgMIAAgLIgBgBIgDAGIAAAHIgEgIIgBgFIgCgEIgBgBIAAABIAAABIgBgBIgBgEIABgKQAAgKAEgGQADgGAKgFQgGABgGAFIgEAEIgDAEIAAAAIAAAAIgBABIgHAQIgFAQIAAACQgBgGgDgFIgDgVQgBgRAIgIQAIgIAHAAIAIgCIACgBIAKACIADgBIAAAAIADABQgHACgBAKQAAAKAJAHIADACIAMAEQAIAAAIgFQAIgIABgPQAAgEgDgDIgBgBIABAAIADAAIAHgBIABAAIABAAIACgBIAGABIAAgBIgFgEIACAAIAGABIAEABQAEgBAIAOQAJAOgEAUIgFAdIgBgHIgEgNIgGgRIgBgBIABAAQgCgFgEgEIgFgGIgDgBIAAAAIgBAAIgHgBIABAAQAEADAAAKIgFgCIgBAAIABADIgBAHIgBAAIgEgBIgBAAIADAEIACAAIgCAAIgLgCIgEAEQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgHADIgEgFQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAABIgBABQACgFgEAAQgFAAgEAEIgHgKIgEgFQgDADABAOQABANANALQgKgRADgHIAAAAIAEAIIABgDIABgDIACACIADACIABgHIAJAIIAFgEIAEADIADABIgBgCIAAgCIALADIABAAIAAgFIAEAAIgBABIACAAIAHgGIABgBIACADIABAAIgBgGIACgHQAKAAAHAPIgQgLIgBAAQACALAIACIABAAIgCABIgBAAIgPgDIAAAAQACAEAIACIgHAAQgGgCgCgCQAFAOAeAGIgMABIgPgEIgCAAIgEgCIgHgDIgBgBIAAgBIgBABIADAHIADADIABABIAHAFIgJgDIgGgDIgDgCIgBAAIABABIAEAFIgEgCIgGgCIgHgJIAAAAQABAGgCALIgCAHIgFAJIABgFIACgOIAAgJIgBgBIAAABQgBAIgGAEIAHADIgIgCIgKAEIAHgFIgJgGQABAFgDAHIAAAAIgBADIAAACIAAAAIgDAHIgCABgAgQAeIAAgBIgBAAgAAYgbIABgBIgBAAg");
	this.shape_1.setTransform(-0.6,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,2.6,13.3,11.9);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADADIACgCIABABIAAABIgBAAgAgDABIgCgBQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAIABACQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgBAAg");
	this.shape.setTransform(-1.6,-22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAKQgEgBgDgDIgCgGIAEgHIAGgCQAEABADACQACAEAAADQAAAEgEACQgCADgEAAIAAAAgAACAEIABAAIABAAIAAgBIgBgBgAgGAAIACACQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBIgCgBQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_1.setTransform(-1.5,-22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626773").s().p("AgNAWIABgDIgBgKIACgDIAGgNIgEAGIAAgCIACgLIABgDIABgBIABgBIACgDIACAPIAAAAIACgFIAFAFIgEAFIAAABIAGACIgDACIAEADIAEACIgCABIAAABIAAAAIgBADIgHgGIgBAAIAAAAIABADIAAAAIgJgJIgBAAIAAAEIgEACIAFAFIgHAKg");
	this.shape_2.setTransform(2.8,-21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777C88").s().p("AgLAoIgCAAIAAgIIgLAHIAFgLIAFABIAAgDIgCgKIAEABIgDgGIAIgEIgFgDIACgDIADgBIAEgFIgBgBIgCAAIgKAAIAAAAIAGgHIgEACIgFADIgBAAIAHgKIgLAEIAAgBIAAgIIgFAIIgFgEIgDgCIABADIACACIAAAAIgFgBIgBAAIgBAAIACgEIgBgBIgDgBIAAgBIALgGIgIgBIgJACQAEgIALACIAHABIAFAEIAPgHIABgBIALgCIgKAGIACAAIAEAAIABAAIgGADIAEAAIAHACIAAACIgGAAIgBAAIABABIAAgBIAEACQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAIADAAIAGgCIgDADIAGABIAOgCIAFAAIABABIgBABIgHACIAJACIgEABIAGABIgCACIAGAFIgEgBIAFAGIgFAAIACAEIABABIAAAAIgEgBIgDgBIAEADIAAAAIgCABIgKABIAAABIACACIABABIgFgBIgDAAIAAgCIgBABIgIACIAGgHIAAgBIAAAAIgIABIgGADIAFgFIABgDIAAAAIAAAAIgDACIgDADIgCABIAAgBIgBADIAAABIgCAFIgCAAIgBgOIgCADIgBABIAAAAIgBADIgDALIAAACIAEgGIgGAOIgCADIABAKIgBADgAAtgEIAAAAIAAAAgAgEgfIgBAAg");
	this.shape_3.setTransform(2.3,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AADADIABgCIABABIAAABIgBAAgAgEAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIACACIgCABg");
	this.shape_4.setTransform(3.9,-22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAGQgBgDAAgDIADgHIAFgCIAGADIABAHQAAAEgDACQgBADgEAAQgEgBgCgDgAACADIABABIABgBIAAgBIgBgBgAgFAAIABACIACgCIgBgBIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_5.setTransform(4.1,-22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("AhuhUIgBABIgBAAIgGAFIgIAHIgCgFIABgLIAAgCQACgNAFgBIAOgDIAKgDIAEgCIAEgDIALgHIAJgEIAJgFQADAAAKAHIAEACIACABIAOAIIACABIAYgBIANgCIAIABIALACIACgBIAJAGIADADQALAIAFAAIADABIABgBIANgCIgLAGIACAAIAFgBIABAAIgHAEIgBAAIABAAIAEAAIAIACIAAABABRhUIgHAAIAAAAIAFABQACACADAAIADgBIAGgBIgDACIAGABIANgBIAFAAIABABIAEACIgEgBIgHABIAJACIgFABIAIACIACACIgEgBIAFAEIgDAAIAEAHIgEAAIgBgBIAAABIABAAIACAFIAAABIgEgDIgDAAIAEAEIAAAAIgCABIgJABIgBABIACABIABABIgCAAIgDgBIgDAAIgBAAIAAADIAAADIgDAHIgCAFIADAEIAAAAIAFAEIAAABIgEgBIAFAGIABACIAAABIgCAAIAJAIIAEAEIAEAEIABACIABAOIAAABIAAAFABmAkIgBgHIgFgEIAAgBQgEgDAAgDIAAgCQABgHAKAAIAEAAIAJABIAGgHABwAoQgCABgCAAQgFAAgBgEIAAAAAByAmIABgCIAEgGIABAAIACgDIABgBIAAgDIAGAQIAAAKIAAAJIgDALIgCAEIgBAEIgDAIIgFATIgEARIgCgFIgBAEQAAAGACADIAAABIgBgBIgEgIIgIAKIAAAAIAAgBIAAgIIgCgHIgCAKIgCgHIgBgGIgCAMIAAAAIAAAAIgCgDIgDgNIABgBIgBgCIAAgBIABgIIgGALIgBABIAAABABMBtIgLAMIAEgJIgBABIgEACIgFACIAAAAIABgEIAAABIgSANIAHgLIAAgBIAAABIgUAMIADgKIgPANIgBAAIAAgBIAEgIIABgGIgFAEIgJAIIAAgBIAHgKIADgIIAAgEIgEAFIgEAEIgOANIAAAAIAAgBQAFgFAFgMIgFADIAAAAIAAAAQABgBAFgJIgJAFIgJADIAPgYIgPARIgJAHIAAAAIAAgBIAFgJIADgKIgOASIACgHIAAgOIgBAHQgEgQABgLIABgFIgCALIgBACIAAgCIgFgRIgDAHIgCAGIgBgMIAAgEIAAgCAgqAyIAAABIgBAAIgEAKIACgZIAAgBIgBABIgFAEIgFAGIABgCIACgJIAEgLQgCgBgCADIAAABIAAgBIAEgOQABgFgFgYIgEgdIABgEIACgFIgCgCIACgDIAAgBIAAAAIgCABIgIAAIgHgCIgBABIgDABIgEADIgHgGIgFgEIgBgGIgGABIgFgHIgGgGIgBABAgrhVIAKACIAAAAIgFgKIgLgBIgDgBIAHgDIgBAAIAAgBIgCgBIgDgFIACAAIADACIAAgBQgIgOgGAAQgFgBgSAOIgOALIgNAKAgbA5IgBAF");
	this.shape_6.setTransform(-5.1,-17.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292421").s().p("AAAADIgDAAIADgDIACgCIACAAIgCADQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAIAAAAg");
	this.shape_7.setTransform(5.8,-15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAPIAAAAIAAgBIAAgHIgFgEIgBgBQgDgCAAgDIgBgCQABgHALAAIADAAIAJABIAFgHIACAOIgBABIABAEIgBADIAAABIgDADIgBAAIgDAGIgBACIgDACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgDAAgCgEgAABAHIgCADIABABQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAIACgFIgCAAg");
	this.shape_8.setTransform(5.6,-15.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444655").s().p("ABVBFQAAAJgEADIAAAAIACgKIgBgQIABgBIAAgDIAGAQIAAALIgDAOgAAPBAIABgHIAJgSIAHgKIgNAHIAAAAIASgSIgEACIgBAAIADgGIADgGIgCAAIAAgKIgBgGIABAAIAHAIIAAAAIAAgDIAAAAIAHAFIABgCIABgBIACgBIgEgCIgFgDIADgCIgFgDIAAgBIADgEIgFgGIABgBIACgCIAAgBIAEgEIACgCIAAACIgFAHIAGgDIAIgBIAAABIgGAHIgBAAIAAAAIABAAIAIgCIAAAAIAAAEIAAACIgDAIIgCAEIADAEIAAAAIAFADIAAABIgEgBIAFAGIABACIAAABIgCAAIAJAIIAEAEIAEAFIABACIgGAHIgJgBIgEAAIABgEQgGACgBACIABgKIgHAHIABgKQgGAAgCAJIgBARIgBABIAAgLIgBgKIgKALQgHAIgIAPgAgsAoIACgNIABgFIADgNIgJALIgDAHIAEgUIgMAKQgGAEgBAAIAAgBIAHgFIAIgNIAGgLIgHACIABgBQAFgJAMgEIgEAAIgCAAIgBAAIgEgBIAAAAIAGgFIAAAAIgGABIABAAIABgDIAFgDIgHgBIAAAAIAFgEIAFgEIgJgDIAFgBIAAAAIgBgBIgGAAIAIgFIAEABIgBADIAGABIgDAIIABAAIAGgGIgBAGIAAAAQABgDAFgCIAEgBIAIgCIABAAIABAAIAFACIAAgBIgCgCIAAgDIACABIAFAFIAFgIIgBAIIgBACIAMgFIgGAJIAAAAIAEgCIAFgCIgGAHIAAAAIAKAAIACAAIgHAGIgCAAIABAEIAFAEQgGACgCACIADAGIgEgBIACAJIAAADIgFAAIgFAKIAAAAIgBgHIgIAMIgCADIgKATIAAAAQAGgSAAgEIAAgGIgBAAIAAABIgHAKIgBAAIAAgHIgBgCIAAAAIgFAEIAAABIgEAEIABgKIAAAAIgKAMIgDAFIgHASgAAYAPIAAgCIAAACgAhKgEIAAgGIAAgBIABgGIAAgFIAAgFIgBAAIABgBIAAgBIAAAAIgEAAIAEgFIACgCIABgBIAHgKIAAgCIABAAIABAAIABADIADACIAFAAIgFAGIAGACIgFAFIABAAIAEABIAAACIgEAAIgFACIAFABIgKAEQgCABAAAFIgBAGIAAADIgBACIgEALgAhRglIgCAAIgDgCIgCgDIABgDIADgCIAAgBIgBgCIAEgCIACAEIgCgFIAAAAIgCgEIAKADIAAgBIgFgJIAAgBIACABIAHAJIABADIAAAAIgBAEIgCAEIgBABQgEAGgFAAIAAAAgAhIhEIAAAAIgDgCIAAAAIADgBIgGgKIAAAAIADABIgFgLIAOAHIADAFIAHAGIAAAAIgDAAQgFgFgFANg");
	this.shape_9.setTransform(-1.1,-20.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("ABqB4IAAABIAAAAgABhByIAAAAIAAAAgAAVBgIACAAIgBAAgAAxBXIAAgBIAAABgAgHBCIAAgBIAAABgAgWA/IABAAIgBACgAgWA4IAAAAIAAAAgABdAnIABAAIgBABgABvAbIAAAAgABvAaIAAABgAgHAUIABAAIAAAAgAgsAQIAAAAIAAABgAArAGIAAgBIAAABgABDgNIAAgBIABABgABOgYIABAAIgBABgAA6gbIABAAIgBABgAgYgfIABABIAAACgABcgpIAAgBIABABgABmg7IAAAAIAAABgAB1g7IABgBIABABgABvg8IAAAAIABgBIgBABgAAEg8IABAAIgBAAgABshDIAAAAIAAABgAgYhDIABAAIAAAAgAAKhUIgBAAIABAAgAAhhfIAAgBIABABgAh2hhIAAgCIAAACgAgnhtIAAgBIABABgAgdh4IAAAAIAAAAg");
	this.shape_10.setTransform(-6,-16.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#977168").s().p("AgKAEIAFgCIgCgCIACgCIAAgBQgFAAgDgDIAOgEIABAAIgGADIADABIAKABIAEAJIAAAAIgJgCIAAADIgEgCIgBAAIAAAAIgBAAIgBAAIACAEIABAAIAAADIgEABg");
	this.shape_11.setTransform(-9.9,-26.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("ABEBVIAAgCIAAgCIABgDIACgEIgBAIIAAABIAAAOgAA2BYIgBABIAEgGIANgWQgDAPgFAHIAAACIgBABIAAAAIgLALgAAQBFIgFAMIgBAAQAKgYAAgIIgKAVQgHAIgEAEIADgLIgIAIIADgOQgGAIgHAFIAIgTIgJAIIgHAFQAHgIAPgcIABgCIAHgPIANgaIAAAAIAAAAIgMAPIgLAPIgGAEIgIAIQgIAIgFAJIAAAAIAHgSIACgDIABgEIAJgWIAAAAIgRAWIgBACIgCAFQgHAKAAAGIAAgNIABgDIAAgCIADgMIAEgNIAAAAIAAAAIgKAQIgGAUIAAAAIgBgRIADgTIgFASIgBAAIAAgHIACgNIAEgLIgBAAQgIANgDARIgBgFIABgMIABgQIACgJIACgNIgCAAIgGAEIABgaIgIADIABgLIAIgSIgIABIgBAAIgCAAIgDgDIADgCIAAgBIAAAAIgDABIgHAAIgHgCIgBABIgGgHIgHgGIAFAAIAJAEIAFACQADgBABgEIAIACIAJAGIADAAQAAABABAAQAAAAABgBQAAAAABAAQABAAABgBIAGgBIgDAFIgDAEIgCABIAFABIgFAFIAFABIAAAFIgCAGIgBADIgBALIADAAIACAHIADAHIACgWIAAgBIACgFIAHgIIAKgIIgBAIIgDAGIgBAEIABADIABgBIAIgDIgGANIgIAMIgHAGIAAABQABgBAGgEIALgKIgDAUIADgGIAJgLIgDANIgBAEIgDAOIABAEIAHgRIADgFIAJgMIAAAAIAAAKIADgFIAAgBIAEgDIABAAIAAACIABAHIABAAIAHgKIAAgBIABAAIAAAFQgBAFgFASIAAAAIAKgTIABgEIAKgEIAAABIABgBIAKgGIABAHIACABIADAAIABgBIgCACIAAABIAAAAIAFgBIgBAAIgGAHIgCACIgDABIAAABIABAAIAEgBIgJAJIgIAMQgGAMgCAKIAAAEIADgFIAIgOIAHgHQgIAKgCAKIgCAHIAAAOIADgLIAFgLIgFAWIgBAFIgHAUIAKgUIALgXIAEgIQAHgMAGgHQABAIADACIABAFIABAMIgDAMIgGANIgIAIIAJgIIAIgKIAAgBIAEACQABAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAABIAEAFIABgBIABAAQAAAEACAFIAAADIgBAAIgDgDIgBAKIgCgFIgCgDIgEAGIgBgFIgCgEIgDAJIgEAJIgBgKIgBAAIgHAIIgDAFIAAgHIACgMIABgDIgBAAIgLARQgIAOAAAIIAAADIAAgBIAAgCIgBgKIgBAAIgEALIAAAAIgBgBIAAgIIAAAAIAAAAIgEAGIgCADIgCAEgABeA8IgGAKIgGAJIgBAAIAIgTIABgDQgIAKgGADIAMgVIAHgDIADgBIADgCIAAAEIAAAAIgFAWIgDAMIgBAEgABaAuIAAgBIAIgSIADALIgJAIIgHAEgABWAhIAAgDIgBgBIgFACIAAgEIAAAAIgEAEIABgJIgIAEIARgMQACAEAFAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQgCAJgHAJgABEAaIAFgVIAAgBIAAgNIABgDQgBAIADAEIABgBIACADIACAFQACAFADACIgRAMgAAsgLIgEAFIAEgFg");
	this.shape_12.setTransform(-3.6,-15.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777C88").s().p("ABYAmIAAAHIgKAEgAhXgYIAAgCQABgOAFgBIAOgCIALgEIADgCIgCAEIgFABIAAACIgDABIgBAAIgDACIgFAHIgOAMg");
	this.shape_13.setTransform(-9.1,-24.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4C3C1").s().p("ABaB9IAAgIIgCgHIgBAJIgDgGIgBgHIgBAMIgBAAIgCgDIAAgOIAAgBIABgIIgCAEIgBADIAAAAIAAgIIgGAKIAAABIAAgBQAFgIADgPIgOAXIgDAGIgEACIgFADIAAgBIAAgDIAAAAIAAAAIAAAAIgRANIAHgLIAAAAIgBAAIgUANIAEgLIgQANIAAAAIADgIIACgGIgFADIgJAIIAAAAIAGgKIADgJIABgDIgEAEIgEAEIgOANIgBAAQAGgFAGgNIgGAEIgBgBQADgBAEgIIgKAEIgIADIAPgXIgQARIgIAGIgBAAIAFgJIAEgKIgOASIABgIIABgNIgBAGQgEgQABgLIABgFIgDALIgBAAIgEgQIgEAHIgBAFIgCgLIABgEIgBgCIABgBIgBAAIAAABIgFAJIACgZIAAAAIAAAAIgGAFIgEAGIAAgCIADgKIAEgLQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABAAABIgBgBIAFgNQABgGgFgYIgEgcIAAgFIADgEIABAAIACAAIAIgBIgIASIgBALIAHgDIgBAaIAHgFIACAAIgCAOIgCAIIgBARIgBAMIABAEQACgQAJgOIABAAIgEALIgCAOIAAAHIAAAAIAGgSIgDATIABAQIAAABIAAgBIAGgTIAKgQIAAAAIgEANIgDALIAAACIgBAEIAAANQAAgGAGgKIADgFIABgCIARgWIAAAAIgJAWIgCAEIgBADIgHASIgBAAIABAAQAFgJAIgIIAIgIIAFgFIAMgOIALgQIABAAIgNAbIgIAPIgBACQgOAcgIAIIAIgGIAIgHIgIASQAIgEAFgIIgEAOIAKgIIgEALQAFgEAGgIIALgWQAAAJgKAYIAAAAIAGgMIAAARIACgEIACgEIAEgFIAAAAIAAAIIABABIAAAAIAEgLIAAAAIABAKIABACIAAABIAAgDQAAgIAHgOIAMgRIABAAIgBADIgDAMIAAAHIAEgGIAHgHIABgBIABAKIADgIIAEgJIACAEIABAFIAEgGIABADIADAFIABgKIACADIABAAIABgDQgDgFABgEIgBAAIgBABIgEgGIgBAAQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgEgDIABgEIABAAIAIgFIgBAJIAEgDIAAAAIAAADIAFgBIABABIAAACIABABQAHgIACgJIADgBIABgDIADgFIABAPIgDAOIgBACIgCgLIgIASIAAABIgFADIADAAIgNAVQAHgDAIgKIgBACIgIATIAAABIAHgJIAFgKIgBAZIABgEIADgNIAEgVIAAAAIAAgEQAFgEADgIIAAAOIAAAFIAAADIgDAJIgFASIgEASIgDgFIAAADQgBAGACAEIAAAAIgEgIIgIAJgAAFBlIABAAIABgBgAgiA4IABgEgAhdhFIgFgDIAAgGIgGABIgFgHIgGgGIgBAAIANgKIANgKQATgOAEAAQAGABAIAOIgCgCQgKgFgBADIgEAAIAEACIACAEIgNABIgKAFIAAAAIALADIgGADIgDAGIALACIgFAGIACAFIgKgDIgEAAIAHAGIAFAGIgCABIgFADg");
	this.shape_14.setTransform(-4.5,-17.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B0928A").s().p("AgHASIgBgFIAFgGIgMgCIAEgFIAGgDIgMgDIAAAAIALgFIAMgBIgCgEIgEgCIAEAAQABgDAKAFIACACIAAAAIgDgBIgCAAIAEAEIABACIAAAAIgOAEQADADAEABIAAAAIgCADIACABIgEADIAFAHIgBAAIAAAAIgBAEIgIgBQAAAEgCAAgAAPgKIABAAIgBgBg");
	this.shape_15.setTransform(-11.5,-26.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#626773").s().p("AAtBXIACgFIAEgWIgFALIgDAMIAAgPIACgHQACgKAJgLIADgFIgDAFIgHAJIgJANIgCAGIAAgFQABgKAGgMIAIgNIAJgIIgEAAIAAgBIACgBIACgCIAHgGIABgBIgBAAIgFABIAAgBIACgCIgBABIgDAAIgCgBIAAgHIgLAGIAFgKIAFAAIAAgDIgCgJIAEABIgDgGQACgCAGgCIgFgEIgBgEIACgBIAHgFIgCgBIgKABIAAAAIAGgHIgFACIgEACIAAAAIAGgKIgMAGIABgCIABgIIgFAIIgGgFIgCgBIAAACIADADIAAAAIgGgBIgBAAIgBAAIgIACIgEABQgFACgBACIAAAAIABgFIgGAGIgBAAIADgIIgGgCIABgCIgEgBIgHAEIAFABIABAAIgEACIAIADIgFAEIgEAEIAAAAIAGABIgEACIgBADIgBABIAFgBIAAAAIgFAFIgBAAIABAAIAEABIAAAAIACAAIAEAAQgLAEgFAIIgBACIgBABIgBgCIAAgEIADgHIABgIIgKAIIgHAJIgCAEIAAgEIABgFQAAgGACAAIAKgEIgFgBIAFgCIAEgBIAAgBIgEgBIgBAAIAFgGIgGgCIAFgFIgFAAIgDgDIgBgCIgBAAIgBAAIAAABIgHAKIgBABIgCADIACgEIgGAAQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBIgJgGIABgEIAAgBIABAAIAEgBIAAgDIAAAAIgCgEIAAAAIABAAIABAAIAAAAIAFACIAAgDIACADIAAABIAAABIgEACIABACIAAABIgDABIgBAEIACADIADABIACAAQAEABAFgGIABgBIACgEIABgEIAAAAIgBgEIgHgIIgCgBIAAAAIgLgBIgDgBIAHgDIgBAAIAAgBIgCgBIgDgFIACAAIADACIAAgBQgIgOgGAAQgFgBgSAOIgOALIgNAKIgBABIgBAAIgGAFIgIAHIgCgFIABgLIAAAAIACAFIAOgNIAEgHIADgBIABgBIADgBIAAgCIAFgBIADgDIAEgDIALgHIAJgEIAJgFQADAAAKAHIAEACIACABIAFALIgDgBIgBAAIABAAIAGAKIgDACIAAAAIADACIAAAAIADACQAFgMAFAFIADAAIAAgBIgHgFIgDgFIACABIAYgBIANgCIAIABIALACIACgBIAJAGIADADQALAIAFAAIADABIABgBIANgCIgLAGIACAAIAFgBIABAAIgHAEIgBAAIABAAIAEAAIAIACIAAABIAAABIgHAAIAAAAIAFABQABABAAAAQABAAAAAAQABABABAAQAAAAABAAIADgBIAGgBIgDACIAGABIANgBIAFAAIABABIAEACIgEgBIgHABIAJACIgFABIAIACIACACIgEgBIAFAEIgDAAIAEAHIgEAAIgBgBIAAABIABAAIACAFIAAABIgEgDIgDAAIAEAEIAAAAIgCABIgJABIgBABIACABIgBABIgDgBIgDAAIAAgBIgBABIgIABIAGgHIAAgBIAAAAIgIACIgGADIAFgHIAAgCIgCACIgEADIAAACIgCACIgBABIAFAFIgDAFIAAABIAFACIgDADIAFADIAEACIgCABIgBAAIgBAEIgHgGIAAgBIAAABIAAACIAAABIgHgIIgBgBIABAGIAAALIACAAIgDAGIgDAGIABAAIAEgCIgSASIAAAAIANgHIgHAKIgJASIgBAHIABAAQAIgPAHgIIAKgLIABAKIAAAKIABAAIABgRQACgJAGgBIgBALIAHgHIgBAKQABgCAGgCIgBAEQgKAAgBAHIAAACQAAADAEADIAAABIAFAEIABAHIAAABQgDgCgDgFIgBgFIgDgEIgBADQgDgFABgJIgBAEIAAANIAAABIgEAVIgBABIgBAEIAAABIgHAKIgJAIIAHgIIAGgMIADgMIgBgNIgBgEQgCgEgBgHQgHAGgHAOIgEAHIgKAXIgLAUgAAYg9IABAAIgBgBgAB7BhIABgEIAAgOQgDAIgFAEIgCABIgEACIgGACIgDABIAGgEIAJgIIABgBIACgOIAAgQIABAAIACgDIABAPIgCAKIAAABQAEgEAAgIIABAXIADgPIAAAJIgDALIgCAEIgBAEgAghAFIAAgCIAAgBIAAADIgCgGIgDAAIABgLIABgCIADgHIgBAFIAAABIAAAHIABAKIAEgKIABgCIAAABIgBAVgAgngbIAFgFIgEAAIABgCIAEABIAAAAIgBABIABAAIAAAGg");
	this.shape_16.setTransform(-5.1,-20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-32,27.9,28.2);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#820000","#990000","#4B0101"],[0.208,0.51,1],-1.1,0,0,-1.1,0,4.9).s().p("AgrAnQgEgHAFgaQAGgZAHgIIALgPQAogNAYAYQgKASgNALQgNAJgDAKIgGATQgCAIgJADIgTABQgJgDgFgGg");
	this.shape.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.8,9.1,9.5);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADACIACgCIABABIAAABIgBABgAgFAAIACgCIACACIgCABg");
	this.shape.setTransform(2,-19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDIAGgDIAHADIADAGIgDAHQgDADgEAAQgDAAgDgDgAACADIACABIABgBIAAgBIgBgBgAgGAAIACACIACgCIgCgBg");
	this.shape_1.setTransform(2.2,-19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626773").s().p("AgLATIgCgKIACgDQAEgIAAgGIgDAGIAAgBIABgLIAAgEIABgBIACgBIACgCIACAOIABAAIABgFIAFAFIgDAEIAAABIAGACIgDADIAFACIAEABIgCACIAAAAIAAABIgBAEIgHgHIgBAAIAAAAIABADIAAABIgKgIIAAAAIAAAEIgEACIAGAFIgHAKIgBABg");
	this.shape_2.setTransform(6.6,-19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777C88").s().p("AgIAoIgBgHIgKAIIAEgMIAFABIAAgEIgDgJIAEABIgDgGIAHgFQgEAAgBgCIACgEIACgBIAEgFIgBAAIgCgBIgKACIAAgBIAFgHIgEACIgEADIgBAAQAAgDAGgHIgLAFIAAgBIAAgIIgEAJIgHgEIgCgCIABADIACACIAAABIgFgBIgBAAIgBgBIABgEIAAgBIgEAAIAAgBIALgHIgJAAIgIACQADgIALAAIAHABIAFAEIAOgJIABgBIAMgCIgKAGIACAAIAFgBIAAAAIgGAEIAAABIAAAAIAFgBIAHABIAAABIgGACIAAAAIAFABIAEABIAEgBIAEgDIgCAEIAHAAIAMgDIAGAAIABABIgBABIgHACIAJABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABgBAAIAHABIgCABIAGAEIgDAAIAFAGIgFABIAAgBIAAABIAAAAIADAEIAAABIAAAAIgEgCIgDAAIAEADIAAABIgCAAIgJACIAAABIACABIABABIgFgBIgDABIAAgBIgBAAIgIACIAFgGIAAgBIAAAAQgDgBgFADIgFADIAEgGIAAgCIAAgBIAAABIgCACIgDADIgBABIgBgBIAAAEIgBAAIgBAFIgBAAIgDgNIgCACIgBABIgBABIAAADIgBALIAAABIACgGQAAAGgDAJIgCADIACAKIAAAEIgEAAg");
	this.shape_3.setTransform(5.6,-20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AADACIABgCIACABIAAABIgCABgAgFAAQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABAAIACACQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAg");
	this.shape_4.setTransform(7.6,-19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAHIgCgHIACgGIAGgDQAEAAACADIADAGIgDAHQgCADgEAAQgDAAgDgDgAACADIABABIABgBIAAgBIgBgBgAgGAAIACACQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIgCgBQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAg");
	this.shape_5.setTransform(7.7,-19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(68,70,85,0)").ss(1,1,1,3,true).p("Ah0hMIgCACIAAAAIgGAGIgHAHQgCAAgBgFIAAgLIAAgBQABgOAEgCIAOgEIAKgEIADgCIAFgDIAJgJIAJgEIAIgGQADAAAMAFIAEACIACABIAPAHIACAAIAXgCIANgEIAIABIALAAIACAAIAKAFIADACQAMAHAFAAIADAAIACgBIAMgDIgLAHIACAAIAFgBIABAAIgHAEIAAAAIAAAAIAFAAIAIABIAAABABKheIgHACIAAAAIAFABIAFABQADAAABgBIAFgDIgDAEIAHAAIANgDIAFAAIAAABIAEABIgEAAIgHACIAJABIgEACIAHABIADABIgFAAIAGAEIgDAAIAFAGIgEAAIgBAAIAAAAIABAAIACAGIAAAAIgEgCIgDAAIAFADIAAABIgCAAIgKADIAAAAIACACIABABIgCgBIgDAAIgDAAIgBAAIAAADIAAADIgBAIIgCAEQAAACADACIAAAAQACACAEACIAAAAIgFAAIAFAFIADADIAAABIgDAAIAKAHIAEADIAEAFIACACIACANIAAAAIABAFIAAAEIgBABIgCADIgBABIgDAFIgBADAB0AcQgBABgDAAQgEABgCgEIAAgBIgBgHIgGgEIgBAAQgDgDAAgEIgBgBQAAgHALgBIADAAIAKAAIAFgHABHBqIgQAOIAGgLIAAgBIAAABIgUAOIADgLIgPAPIAAAAIAAAAIACgJIABgGIgEAEIgIAJIAAgBIAFgLIACgIIAAgEIgDAFIgEAEIgNAPIgBAAIAAAAQAFgGAFgNIgGAEIAAAAIAAgBIAGgKIgKAGIgHADIAMgYIgNASIgIAHIAAAAIAAAAQABgBADgJQADgIgBgCIgMATIABgHIgBgOIAAAHQgGgQAAgLIABgJIgCAPIAAACIgBgCIgGgPIgCAHIgBAFIgDgLIAAgEIAAgCAB+AJIAHARIABAJIABAJIgCAMIgBAEIgBADIgDAJIgDATIgCARIgDgEIAAADQAAAGACAEIAAAAIgBAAQgEgFAAgDIgHAKIAAABIAAgBIgCgIIgCgHIAAAKIgEgHIgBgGIgBAMIAAABIAAgBIgCgDIgEgMIAAgBIgBgCIAAgBIAAgIIgEALIgBABIAAABABHBqIAAgBABXBkIgKAMIAEgJIgBABIgEACIgFADIAAAAIAAgDAh0hMIAMgLIAMgMQARgPAFAAQAGAAAJANIABAAIgEgBIgCAAIAEAEIACACIAAAAIABABIgHAEIAEAAIALAAIAFAJIAAABIgKgCAgkA0IgBABIAAAAIgEAKIAAgZIAAAAIAAAAIgFAFIgEAGIAAgCIACgJIADgMIgEADIgBABIAAgBIAEgOQAAgGgHgXIgHgcIAAgFIACgEIgDgDIACgDIAAAAIAAAAIgCAAIgIACIgHgCIgBABIgCABIgFADIgHgFQgEgDgBAAIgBgGIgGACIgGgHIgGgFIgBAA");
	this.shape_6.setTransform(-1.1,-14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292421").s().p("AgDADIADgDIACgCIABAAIgBADIgCACg");
	this.shape_7.setTransform(10.1,-12.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDARIAAgCIgBgGIgGgEIAAgBQgEgDAAgCIgBgCQAAgHALgBIAEgBIAIABIAFgIIACAOIAAABIABAEIAAADIgBACIgCACIgBABIgDAGIgBACIgCACQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAIgBAAQgCAAgCgDgAACAIIgCADIACABIADgDIABgEIgBAAg");
	this.shape_8.setTransform(9.8,-13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444655").s().p("ABaA9QAAAJgEAEIAAgBIABgKIgCgPIABgBIAAgEIAHARIABAJIgBAQgAAUA/IAAgHQABgIAGgLIAGgKIgMAHIAAAAIAQgTIgEACIAAAAIABgGIADgGIgCAAIgBgKIgCgGIABAAIAIAHIAAAAIAAgDIAAAAIAIAGIAAgEIABAAIACgCIgEgBIgFgCIADgEIgGgCIAAgBIADgEIgFgFIAAgBIACgDIAAgBIADgEIADgCIAAACIgFAIIAGgEIAHgCIAAABIgFAHIAAAAIAAABIAAgBIAIgCIAAAAIAAADIAAADIgBAIIgCAEQAAABAAAAQABAAAAABQAAAAABABQABAAAAABIAAAAIAGAEIAAAAIgEAAIAFAEIACADIAAABIgDAAIAKAHIAEADIAFAFIABACIgFAHIgJAAIgEAAIABgEIgHAFIAAgKIgGAHIAAgKQgGABgBAJIAAARIgBAAIgBgJIgCgKIgJALIgMAZgAgqAsIABgNIABgFIABgNIgHALIgDAIIACgVIgKALIgHAFIAAAAIAGgHIAHgNIAFgMQgEADgDAAIABgCQAEgIAMgFIgFAAIgBAAIgCAAIgEAAIABAAIAFgGIAAAAIgGACIABgBIABgDIAFgDIgIAAIAAAAIAFgFIAFgEIgKgCIAFgCIABAAIgBgBIgGAAIAHgEIAEAAIgBACIAHABIgDAIIABAAIAGgGIgBAFIAAAAIAGgEIADgCIAIgDIABAAIABAAIAGABIAAAAIgDgDIgBgCIADABIAGAEIADgIIAAAIIgBACIAMgHIgGAKIABAAIAEgCIAEgCIgFAHIAAAAIAKgBIACAAIgGAGIgCABIABAEQACADADAAIgHAFIADAFIgEAAIADAJIAAADIgFAAIgEALIAAAAIgBgHIgIAMIgBAEIgIATIAAAAIAEgWIgBgGIgBAAIAAABIgGALIAAAAIgCgHIAAgCIgBAAIgEAEIAAABIgDAFIAAgLIgBAAIgIAOIgDAFIgFASgAhLADIgBgGIAAgBIAAgFIAAgGIAAgFIgCAAIABgBIAAgBIAAAAIgEAAIADgFIADgCIABgBIAGgLIAAgCIAAAAIABABIACACIACACIAGgBIgFAGIAGACIgEAGIABAAIAEAAIAAACIgEABIgFACIAFABIgJAEIgCAHIAAAFIAAADIgBACIgDALgAAYAMIAAgBIAAABgAhYgdIgCgCIgDgCIABgEIADgCIgBgBIgBgBQAAgBAAAAQABAAAAgBQABAAABAAQAAgBABAAIADAEIgDgEIAAgBIgDgEIALACIAAgBIgGgJIAAAAIACABIAIAIIABADIAAABIAAADIgCAFIgBABQgEAGgFAAgAhPg9IgBAAIgDgBIAAgBIADgBIgHgKIABAAIACABIgFgLIAOAHIAEAEIAHAFIAAABIgDAAQgGgFgDAOg");
	this.shape_9.setTransform(2.8,-17.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("AB6ByIAAAAIAAABgABwBsIAAAAIAAAAgAAjBiIABgBIgBABgAA9BWIAAgBIAAABgAADBGIAAAAIABAAgAgLBEIABAAIgBACgAgMA+IAAAAIAAAAgABlAjIABAAIgBAAgAAAAZIAAgBIAAABgAglAYIAAAAIAAABgAB2AUIAAgBIAAACgAAwAFIABAAIAAAAgABGgQIABgBIAAABgAgWgZIABABIAAACgABRgbIAAAAIAAAAgAA8gcIAAAAIAAAAgABdguIAAAAIAAAAgAADg4IABAAIgBAAgAgZg9IAAAAIAAAAgABlhAIAAAAIAAABgAB0hCIABAAIABABgABthCIAAAAIABgBIAAABgABqhIIABAAIgBAAgAAHhRIAAAAIABAAgAh5hSIAAgBIAAABgAAdheIAAgBIABABgAgshmIAAAAIABAAgAgjhxIAAgBIABABg");
	this.shape_10.setTransform(-2.4,-13.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#977168").s().p("AgKAFIAFgDIgDgBIADgDIgBAAIgHgDIANgGIABABIgGAEIAEAAIAKAAIAFAIIAAABIgKgCIABADIgFgBIAAAAIAAAAIgBAAIgBABIACADIAAAAIAAADIgDACg");
	this.shape_11.setTransform(-6.6,-22.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("ABBBRIgBABIADgGIALgYIgGAYIAAABIAAABIgBAAIgKANgABOBNIAAgCIAAgCIAAgDIADgFIgBAIIAAACIACAOgAAZBBIgFANIAAAAQAHgZAAgIIgJAWIgKAOIADgMIgJAJIACgOQgEAIgHAFIAHgTIgIAIIgHAHQAHgJALgdIABgDIAHgPIAKgbIAAgBIgBABIgKAQIgKAPIgEAGIgIAIIgLATIgBgBIAGgSIABgEIABgEIAIgWIgBAAIgOAXIgBACIgDAFQgFALABAGIgCgNIABgEIAAgCIACgLIADgOIAAAAIgBAAIgIARQgFAOABAGIAAAAIgCgQIABgTIgEATIgBgBIAAgHIABgNIACgLIAAAAQgIAOgBAQIgBgEIAAgMIAAgQIABgJIAAgOIgCAAIgGAFIgBgZIgIADIAAgLIAHgTIgIACIgCAAIgCAAIgCgCIACgDIAAgBIgBAAIgCABIgHABIgHgCIgCABIgFgGIgIgEIAEgBIAKACIAGACQACAAABgFIAIABIAJAFIAEABIAEgCIAHgBIgDAEIgDAFIgBABIAEAAIgEAGIAGAAIAAAFIgCAHIgBACIAAALIADAAIADAHIAEAGIgBgVIAAgCIACgEIAGgJIAJgJIAAAIIgCAHIAAAEIABACIABgBQADgBAEgDIgFAOIgHANIgGAGIAAABIAHgGIAKgKIgCAUIADgHIAHgLIgBANIgBAEIgBAOIABAEIAFgSIADgFIAIgNIABAAIAAAKIACgEIAAgBIAEgFIABAAIAAACIACAHIAAAAIAGgLIAAAAIABAAIABAFIgEAXIAAAAIAIgUIABgDIAKgGIAAABIAAgBIALgHIABAHIACABIADgBIABAAIgCACIAAABIAAAAIAFgCIAAABIgHAHIgBACIgCABIgBABIABAAIAEgBIgIAKIgHANQgGAMAAAKIABAFIACgGIAHgNIAHgLQgIANgCAKIgBAHIABAOIADgMIAEgLIgDAWIgBAFIgFAVIAJgVIAIgYIADgHQAGgOAGgHIAEALIACAFIACALIgCAMIgFANIgGAJIAIgJIAGgLIAAgBIAEACIAEgDIAAAAIAFAFIABgBIAAAAQAAAEADAFIAAADIgBAAIgDgDIABAKIgEgFIgBgDIgDAHIgCgFIgCgEIgDAKIgDAIIgCgKIgBABIgGAIIgDAGIgBgHIACgMIAAgDIAAAAIgKASQgHAOABAIIABADIgBAAIAAgDIgCgKIgBABIgCALIgBAAIAAgBIgCgIIAAAAIAAAAIgEAGIgBADIgCAEgABlAyIgEAKIgGAJIgBAAIAHgUIAAgCQgGAKgHAEIALgWIAGgDIAEgCIACgBIAAADIAAABIgCAVIgCAMIgBAEgABgAkIAAgBIAHgTIADALIgIAJIgGAEgABbAXIAAgDIgBAAIgEABIgBgDIAAAAIgDAEIgBgJIgHAFIgBAAIACgVIAAAAIgBgOIABgEQAAAJADAFIABgDIADAEIACAFIAGAFIAAABQACADAEAAQABAAAAAAQABAAABgBQAAAAAAAAQABAAAAgBQgBAJgHAJgAAtgRIgCAEIACgEg");
	this.shape_12.setTransform(0.4,-12.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777C88").s().p("ABaAfIABAHIgKAFgAhagPIAAgBQABgOAEgCIAOgEIAKgEIADgCIgCADIgFACIAAACQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgBABIgEABIgDAIIgNAOg");
	this.shape_13.setTransform(-5.5,-20.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4C3C1").s().p("AAWB5IADgJIABgGIgFAEIgIAJIAAgBIAFgLIADgIIAAgEIgEAFIgDAEIgOAPIAAAAQAFgGAEgNIgFAEIgBgBIAGgKIgJAGIgHADIAMgYIgOASIgHAHIgBAAQACgBACgJQADgIAAgCIgMATIAAgHIAAgOIgBAHQgFgQAAgLIABgJIgCAPIgBAAIgGgPIgDAHIgBAFIgCgLIAAgEIgBgCIAAgBIAAABIAAAAIgEAKIAAgZIAAAAIgBAAIgFAFIgEAGIAAgCIACgJIADgMIgEADIAAAAIADgOQAAgGgHgXIgHgcIAAgFIACgEIACAAIACAAIAIgCIgHATIAAAKIAIgDIABAaIAGgGIACAAIAAANIgBAJIAAARIAAAMIABAFQABgQAIgPIAAgBIgCAMIgBAOIAAAHIABAAIAEgSIgBASIACARIAAAAIAAAAQgBgGAFgOIAIgRIABAAIgDANIgCAMIAAACIgBADIACANQgBgGAFgKIADgFIABgCIAOgYIAAAAIgHAXIgBAEIgBAEIgGASIAAAAIABAAIALgSIAHgJIAFgFIAKgQIAKgRIABAAIgKAdIgHAPIgBADQgMAcgGAJIAGgGIAIgJIgHAUQAHgFAFgJIgCAPIAJgJIgDALIAKgNIAJgXQAAAJgHAZIAAAAIAFgNIABARIACgEIABgEIAEgFIAAAAIACAHIAAACIABAAIACgMIABAAIACAKIAAACIABAAIgBgCQgBgIAHgPIAKgSIAAAAIAAAEIgCALIABAIIADgHIAGgIIABAAIACAKIADgJIADgJIACAEIACAEIADgGIABADIAEAEIgBgJIADACIABAAIAAgDQgDgFAAgEIAAAAIgBACIgFgGIAAAAIgEADIgEgCIABgEIABAAIAHgGIABAJIADgDIAAAAIABADIAEgBIABAAIAAACIABABQAHgJABgIIACgCIABgDIADgFIACAPIgBAOIgBACIgDgLIgHATIAAAAIgEAEIADAAIgLAWQAHgEAGgLIAAADIgHAUIABAAIAGgKIAEgKIABAZIABgEIACgNIACgVIAAAAIAAgEIAGgNIACAOIAAAFIAAADIgCAJIgEATIgCARIgDgEIAAADQAAAGACAEIAAAAQgFgFAAgDIgHAKIAAAAIgBgIIgDgHIAAAKIgEgHIgBgGIgBAMIAAAAIgCgDIgCgOIAAgBIABgIIgDAEIAAAEIAAgBIAAgIIgFALIgBABIAAgBIAGgXIgLAXIgDAHIgEACIgFADIAAAAIAAgDIgQAOIAGgLIAAgBIAAABIgUAOIADgLIgOAPgABABkIAAgBgAAQBhIAAAAIABgBgAhig/QgDgDgCAAIgBgGIgGACIgFgHIgHgFIgBAAIAMgLIAMgMQASgPAEAAQAGAAAKANIgCgBIgMgCIgEAAIAEACIACAEIgMADIgKAFIAAABIALABIgFAEIgDAGIAMABIgFAHIACAFIgKgCIgEAAIAIAFIAFAGIgCABIgEADg");
	this.shape_14.setTransform(-0.5,-13.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B0928A").s().p("AgEASIgCgEIAEgHIgMgBIADgGIAGgDIgLgCIAAAAIAKgFIALgEIgDgDIgCgCIADAAIALABIADABIAAABIgEgBIgCAAIAEAEIACACIABAAIgPAGIAIADIAAAAIgCADIACABIgFADIAHAGIgBAAIgBABIAAAEIgIAAQAAAEgCAAgAAPgMIAAAAIgBAAg");
	this.shape_15.setTransform(-8.3,-22.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#626773").s().p("AA0BRIABgEIADgXIgFAMIgCAMIgBgPIABgHQACgKAIgNIACgEIgCAEIgHAKIgHAPIgDAFIAAgEQAAgLAFgNIAIgNIAIgJIgEABIgBgBIACgCIACgCIAGgHIABAAIgBAAIgEABIAAgBIACgCIgBABIgDAAIgDgBIgBgGIgKAHIAEgLIAFAAIAAgDIgDgJIAEAAIgDgFIAHgFQgDAAgCgDIgBgEIABgBIAHgGIgCAAIgKABIAAAAIAFgHIgEACIgFACIAAAAIAGgKIgMAHIABgCIAAgIIgEAIIgHgEIgCgBIABACIACADIAAAAIgFgBIgBAAIgBAAIgIADIgEACIgFAEIAAAAIABgFIgHAGIAAAAIACgIIgFgBIAAgCIgDAAIgIAEIAGAAIABABIgFACIAJACIgFAEIgEAFIAAAAIAHAAIgEADIgBADIgBABIAFgCIABAAIgFAGIgBAAIAAAAIAEAAIABAAIACAAIADAAQgKAFgFAIIgBACIgBACIAAgDIAAgEIACgGIAAgIIgKAIIgFAJIgCAFIgBgEIABgFIACgHIAJgEIgFgBIAEgCIAFgBIAAgCIgEAAIgBAAIAEgGIgHgCIAGgGIgGABIgCgCIgCgCIgBgBIgBAAIAAACIgFALIgBABIgDACIADgEIgHABIgFACIgDAAIgKgGIAAgEIABAAIABAAIAFgCIgBgDIAAAAIgDgDIABgBIABAAIABAAIAAAAIAFABIgBgDIACAEIABABIAAAAQgBAAgBABQAAAAgBAAQgBABAAAAQAAAAAAABIABABIAAABIgCACIgBAEIACACIADACIACAAQAEAAAEgGIACgBIACgFIAAgDIAAgBIgBgDIgIgIIgCgBIAAAAIgLAAIgEAAIAHgEIAAgBIgBAAIgCgCIgEgEIACAAIAEABIAAAAQgKgNgGAAQgFAAgRAPIgMAMIgMALIgBACIgBAAIgFAGIgIAHQgCAAAAgFIAAgLIAAAAIABAFIANgOIAEgIIADgBIABgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAIAAgCIAEgCIACgDIAFgDIAKgJIAJgEIAIgGQACAAAMAFIAFACIABABIAGALIgDgBIgBAAIABAAIAHAKIgDABIAAABIADABIAAAAIAEADQADgOAGAFIADAAIAAgBIgIgFIgDgEIACAAIAYgCIAMgEIAIABIALAAIACAAIAJAFIAFACQAKAHAHAAIACAAIABgBIANgDIgLAHIACAAIAFgBIABAAIgGAEIgBAAIABAAIAEAAIAIABIAAABIAAAAIgHACIAAAAIAGABIAEABIAEgBIAEgDIgCAEIAHAAIAMgDIAGAAIABABIADABIgEAAIgHACIAJABIgEACIAHABIADABIgFAAIAGAEIgDAAIAFAGIgFAAIAAAAIAAAAIAAAAIADAGIAAAAIgEgCIgDAAIAEADIAAABIgCAAIgJADIAAAAIACACIgBAAIgDAAIgDAAIAAgBIgBABIgIACIAFgHIAAgBIAAAAIgIACIgFAEIAEgIIAAgCIgCACIgDAEIAAABIgCADIgBABIAGAFIgDAEIAAABIAFACIgCAEIAEACIAFABIgCACIgBAAIAAAEIgIgGIAAAAIAAAAIAAADIAAAAIgIgHIgBAAIACAGIABALIABAAIgCAFIgBAGIAAAAIAEgCIgRATIABAAIAMgHIgGAKQgGALgCAIIAAAHIABAAIANgZIAJgLIABAKIACAJIAAAAIAAgRQACgJAFgBIAAAKIAHgHIAAAKIAGgFIgBAEQgKABAAAIIAAABQABAEAEADIAAAAIAFAEIABAHIAAABIgFgHIgCgEIgDgEIgBADQgEgGABgJIgBAFIABANIAAABIgCAWIAAAAIgBAEIgBABIgFALIgIAJIAGgJIAFgNIABgMIgCgMIgBgEIgFgLQgGAHgFAOIgDAIIgIAXIgJAVgAARhAIABAAIgBAAgACCBVIAAgFIgBgOIgHANIgCACIgDACIgGADIgDAAIAFgEIAJgIIAAgCIACgOIgCgPIABgBIACgDIACAPIgBAKIAAABQADgEAAgJIADAYIACgQIABAJIgDAMIgBAEIgBADgAghAHIAAgCIgBgBIADgKIABgCIAAABIABAVgAgkABIgDAAIAAgKIABgDIACgGIAAAFIAAABIABAHIABAJIABADgAgqgYIAEgFIgEAAIAAgCIAEAAIABABIgBABIACAAIAAAFg");
	this.shape_16.setTransform(-1.1,-16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-28.1,28.9,27.5);


(lib.Symbol16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFACIAAgBIABgBIABACIgBABgAACAAIACgCQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIgCABg");
	this.shape_10.setTransform(0.1,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAHIgEgHIAEgHIAGgCIAHACIAEAHIgEAHIgHADgAgEACIAAABIABABIABgBIgBgCgAADAAIACACIACgCQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2.1,2.1);


(lib.Symbol15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#535764").s().p("AgJBdIAJgNIgKgBIgPgFIAAAAQAJgBAIgFQgIgFgDgQIAKAFQgBgSAEgIIAHAPIADgIIABAOIAAABIAFgFIACABIgEAbIAIgGIgDAKIAGABIgWARgAgUAMIAAAHIgBAAIgSgVIgJANIgIgWIAXgVQgEgEADgEIAOgOIgCgFIACgDIAAgDIAUgTIAEgCIAMgCIACgCIAAgBIgBgBIAnACQAEAHgIgDIgTgCIgFAAIgEADIAAABIgIAAIACABIgBABIgTADIgHANIAFAYIAFANIgDABIgFgBIAEAKIgPgHIgBAAIAAAAIAKAaIAJgGIgCAUIgKAKg");
	this.shape_11.setTransform(-5.1,-4.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#977168").s().p("AgEAQIgBgDIgCAGIgDgEIABgNIAEACIAEgYIABAKIAKgFIgCAFQgFAKAEgDIAEgDIgFARIAFAAIgEAEIgEAAIABAEIgEACg");
	this.shape_12.setTransform(-4.2,-9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777C88").s().p("Ag7AxIABgCIACADgAg0AfQAMgJAGgMQALgWAKgKIAEgDIAkgYIAEAAIAUAGIAJAGIgngCIAAABIABABIgCACIgMACIgFACIgTATIgJAPIgEADIgEAGQgEAHgFAGIgMANg");
	this.shape_13.setTransform(-5.4,-9.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B0928A").s().p("AAFAXIAEgFIgFAAIAFgRIgEADQgFAEAGgKIACgFIgKAFIgCgKIgDAYIgEgDIgCAOIgCgEIgGgWIAHgOIAUgDIACAAIgBgBIgDAAIAJgBIABAAIgBgBIAEgDIAEAAIgBANIgGAPIACgBIgHALIAKAEIgHADIAJAHg");
	this.shape_14.setTransform(-3.9,-10.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C4C3C1").s().p("AgYA5IgCATIAAABIgCgFIgEgVIgEgIQgIgRACgUIgHAPIAEgVIgHAFIAGgJIgMAHIgBgKIgJACIgDgDIgFABIgJgFIAXgRIgFgBIADgKIgIAGIADgbIAAgEIACgIQgBAKAJABIgEAKIAHAGIgBAPIAHAAIAEAIIAHgFIgFAHIAAABIABAAIAMgFIgGAHQgDAMACANIAKgXIAGAdIAGguIACAkIAGgMIgCANQgCAGACAEIADAGIAGAIIgCgPIAAgGIAEgPIABgGIABAJIgBADIABgDIABgUIABABIADAIQABAKAFAJQAGALAKgBQgMgFACgNQABgLgCgLIgEgMIgDgEIAXAPIgKgXIARAJIgKgOIAPANIAAACIgEACIADAFIAAAAQgHgDABADIACAJIgBgDIABALIgEgGQAAATAFATIADAHIABABIglAiIADgFQAHgJABgKIADgNIgFALIgEAFIgKALIABgBIAEgSIgMAdIgDgTIAAADIAAAOQABAIAEAKIgTgXQAEALgEANIgCAIgAAtgCIAAAAIAHAPIABABIgFAHgABCgMIgEAKIgOgbIAIAJIgEgJIAAAAIAGAEIgCgKQAKAIgDAPIAAAAIABAAIADgKQAAgJgFgIIgGgHIAHAAQgIgBgDgJIgDgKQAEALAOAEQALADAFAIIgBgCQgDgMgKgIQgMgKADgGIABgBIgBgBIARACIgGABIAPAVIgGgEIABAEIAEASQACAJgDAAIAAABIgBAFQgDAQgHANIgEAFIgFAHgAAvgQIAOAOIAAABIgIAOg");
	this.shape_15.setTransform(3.1,6.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4A4A4F").s().p("AgOAHIABAAIAAABgAANgGIABgBIABABg");
	this.shape_16.setTransform(5.1,-2.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#56555E").s().p("AgBADIABgFIACgBIgCAHg");
	this.shape_17.setTransform(1.8,-4.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4A4851").s().p("AgMAUIACgDIAAAEgAgsgEIABAAIAAACgAAsgUIABABIgBACg");
	this.shape_18.setTransform(-2.8,-1.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E6E6E6").s().p("AAlA/IAAgBIgDgHQgGgUABgTIAEAFIgBgKIABACIgCgIQgBgEAHAEIAAAAIAAAAIgDgFIADgCIAAgCIgPgMIALAOIgRgJIAKAWIgYgOIAEADIADAMQADAKgCAMQgBAOAMAFQgLAAgFgKQgFgKAAgKIgDgIIgBgBIgBAUIgBAAIAAgJIgCAGIgEAQIAAAGIACAPIgHgIIgCgGQgCgEACgGIACgOIgGANIgCgmIgHAvIgFgeIgKAZQgDgPAEgLIAGgIIgNAGIAAgBIAFgHIgHAEIgFgHIgGAAIABgOIgHgHIADgJIgCgHIASgCIgJgIIAGgCIgFgHIAFgIQAHgMAMgBIABAEIgBADIgBABIAKgCIgFAcIAIgHIABANIAGgFIAHAPIAEgIIAHAFIAKAAIgFgHIABgBIANAGIgGgMIAPgBIgGgLIARALIgCgGIAIADIADgEIADADIABABIgBABQgDAHAMAKQAJAIAEAMIAAACQgEgIgMgDQgNgEgFgLIAEAKQADAJAIABIgIAAIAHAGQAFAHAAAKIgEAKIAAAAQADgPgKgJIACALIgGgEIAAgBIAAABIADAJIgHgJIAOAbIgBAAIgPgPIAAAAIAAAAIAAAAIAHAfIgBAAIgHgQIAAgBIAAABIADAYIAGAJgAAlADIAAgBIAAAAg");
	this.shape_19.setTransform(4,2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#33FFCC").s().p("ABHBJIABAAIAAABgABQA5IABAAIgBABgAAWA2IAAAAIgBADgABAA5IAAgBIAAABgABSAvIABAAIgBAAgABBAqIAAAAIABAAgAgZAnIAAgBIABABgABHAeIAAgBIAAABgABBAZIAAAAIAAAAgABBAWIABAAIAAABgAAhgKIABAAIgBABgAAEg4IABAAIgBABgAgug8IABAAIAAAAgAhShJIABAAIAAABg");
	this.shape_20.setTransform(1.2,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#626773").s().p("ABzBBIAAgBQADAAgCgJIgEgSIgBgEIAGAEIgPgVIAGgBIgRgCIgCgEIgEAFIgIgEIACAGIgRgKIAHAKIgQABIAGAMIgNgFIgBAAIAAAAIAGAIIgLgBIgIgFIgEAIIgHgPIgFAFIgBgNIgJAHIAFgbIgKACIABgBIABgDIgBgEQgLABgHAMIgEAHIAEAHIgGACIAJAJIgRABIACAHQgJgBABgKIgCAIIgCADIgEAEIgBAAIAAgOIgEAHIgIgOQgEAIACASIgKgGQACARAJAFQgIAFgJAAIgCAAIgCAAQAJgCADgHQgRgCgKgMQAGACAFgFQgNgFgOgPIAKgFIgPgEIgGgHQALgBACgKIgDgCIgBgEIADgJIANgMQAFgGAEgHIADgGIAFgEIAJgPIAAADIgDADIACAFIgNAOQgDADADAFIgXAUIAIAYIAJgPIASAWIABABIAAgBIAAgHIAIALIAKgKIAGgEIAAAIIgBAIIAGACIADAAIgCgFIgBgHQAHACAGgCIgGgBIgDgCIANgSIgLAEIgDAAQAFgGABgGIAAAAIgBAAIgLgCIAIgKIAEgFIgDgDIAAgBIgBgEIAEAAIAPAEIgIgIIAGgCIgKgFIAIgLIgCABIAFgQIABATIAtAUIgLAMIAAAQIAAAAIABAAIAEgFIgEALIgBAGIAAADIABgCIADgIIAAANQABAGACAGIACgHIALAKIABABIAAgBIgBgGIAEADIAEgHIABAFIABgBIABgCQAHgGALABIACAAIANAGIAOAAIADAEIARAGIACAEIgIgCIAFAGIAFAJQAGAJgCAKIAAADIgEgNIABAGIABAIQAAAOgEAQIgCADg");
	this.shape_21.setTransform(0,-3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#888C91").s().p("Ag0AjIgGgCIABgIIAAgJIgGAGIACgVIgJAGIgJgZIAAAAIAPAHIgDgKIAFABIADgBIgFgNIACADIADAFIACgHIACAEIAEAEIAFgCIAAABIADAEIgEAEIgIALIALACIABAAQgBAFgFAFIADAAIALgEIgNAUIADACIAGAAQgGADgHgDIABAHIACAFgAAPgJIgEAEIgEAEIgBAAIAAgPIALgNIA/AFIgNAGIAHAEIgKADIACABQAIABgFABIgWABIAIgGIgMADIAIgKIgQAKIgHgEIABAHIAAAAIgFgCIgBAAIgGAJg");
	this.shape_22.setTransform(1,-5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#444655").s().p("AhOBQIACAAIAAAAgAAjAeIgLgJIgBAHQgDgHgBgHIAAgMIgCAAIADgJIAFgEIABAJIAHgJIABAAIAEACIAAAAIgBgHIAHAEIAQgKIgIAKIAMgDIgIAGIAXgBIgYAMIAHABIgIAEIAHABIAFAGQABADgDgCIAAABQgKAAgIAGIgBACIgBABIAAgEIgFAGIgEgDIABAGgAghhMIABgBIABABgAgahPIABAAIgBABg");
	this.shape_23.setTransform(0.1,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-14.5,24.5,29.1);


(lib.Symbol13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#820000","#990000","#4B0101"],[0.208,0.51,1],4,6.2,0,4,6.2,16.2).s().p("AAoBHQgDgDACgIIABgbQgCgRgkgYIgsggQgVgPAIgPIAXABIAFAFIAFAJIAfAcQAWARAPARQAOASgCAOQgCAOgGAKQgFAIgEAAIgBAAg");
	this.shape_9.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-6.8,11.6,14.2);


(lib.Symbol12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#888C91").s().p("AgSATIgLATIAAABIgFgLIgCgCIgBAHIgCAAIgFgKIAAgBIgDgFIgEgFIABADIAAAEIAAAKQgEgPgHgHQgFgFgMgDIAFAGIAEAFQgNgJgOgEIgKgDIgBAAIgLgQIAJgFIAIgEIAGgBQADAAAAAEIgCAGIABABIA0gSIAEABIACADIgGATIACAAIAkgLIACABQAAAEgMATIAAAEIA7gYQADAAAAAGIAAAGIACADIAQgHQATgIAKAAIAOAEIAJACIgxAwIAAgRQAAgDABgCIAAgIIgEAAQgHADgQANQgQAMgEAGQgFgEAAgMIAAgNIgEAAQgOAHgGAJQgGAHgEALQgDgRAAgEgAhOgBIAAgBIgBAAg");
	this.shape_10.setTransform(9.6,10.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#777B80").s().p("AgRAeQAMgSAAgFIgCAAIgkAKIgCAAIAGgRIgCgEIgEgBIg0ARIgBgBIACgGQAAgEgDAAIgGABIgIAEIgJAFIgOgdIAGgEIANgEIAEAcIAAAEIAEgKQAFgNAEgDQgDAUgCACIAegbIAAACIgEASIABABIADgEIACgBIAMgIQAPgJAEAAIgNAQQAGgGAegRIAAgBIgEAIQgFAKAAACIAYgOIgBACIgBACQgDAKAAAHQAAAIAHAAQALAAAkgVIABAEIgCANQAAAFAHAAQAEAAAOgGIAYgNIABAGIgDASIAEACIAFABQAJAAAQgKIAQgLIgFAHIgVAVIgJgDIgOgEQgKAAgTAIIgQAIIgCgEIAAgGQAAgFgDgBIg7AZgAiMggIAJgCIAEAAQgHAEgDAIg");
	this.shape_11.setTransform(10,6.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#535764").s().p("ABcA2IgFgDIAEgTIgBgFIgYANQgOAHgEAAQgHAAgBgGIACgNIgBgEQgkAWgKAAQgHAAAAgJQAAgHADgKIABgCIABgCIgYAOQAAgDAEgJIAFgIIAAABQgeAQgGAHIAMgQQgDAAgPAJIgMAIIgCABIgEAEIgBgBIAFgSIAAgCIgeAcQACgDADgUQgEADgFANIgFAKIAAgDIgDgeIgNAFIgGAEIgBgEQADgIAHgEIgFAAIgJACIgDgRIgBghIABgFIABgBIAEgBIALgEQAGAAAKANIAMANQADAAAJgHQAJgHAEAAQAJAAADAKQADAJAGABIABAAIANgGQAMgGAFAAQADALADAAIAVgKIAKgFIgTgBQAHgCAKgGIANgJIAGgDIAEACIAIACIAHACIADABIABAAIAKACIARADQAGAEACAHIAAAKIABAAIAIgEIALgDQANAAABAUQAAASADAAQAFAAAJgKIAMgVIAAACIgBANQgBAWgJARIgQAMQgQAKgKAAg");
	this.shape_12.setTransform(10.4,2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#626773").s().p("AB3AqQAAgUgNAAIgLADIgIAEIgBAAIAAgKQgCgHgGgEIgRgDIgKgCIgBAAIgEgBIgHgCIgHgBIgFgCIgFADIgOAIQgJAGgIACIATABIgKAGIgUAJQgEAAgCgLQgGAAgMAGIgMAGIgBAAQgGgBgDgJQgEgKgJAAQgDAAgJAHQgJAHgDAAIgNgNQgKgNgGAAIgLAEIgDABIgBABQADgYAKgUIABgBIALADIAZAEIACAAIgRAQIAHgDQASgIAGABIAAAOIAFgCIAQgLIAKgGQADAQADADIAOgQIAOgOIAPAXIALgKIAEAAIACAKIAAAOIAUgMIAAAMIAKgEIABAAIABAIIAQgHIgCAFIAAAAIAJgCIAQgIQAFAAAAAKIgCAJIAAABIASgSIAJAIQAFAGgDAIIABAAQAFAAACgaQAAgPgPggIAXAMIAIAdIAGAmIAAALIgNAWQgJALgEgBQgEABAAgUg");
	this.shape_13.setTransform(10.4,-2.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#777C88").s().p("AB3A2QADgHgFgIIgJgHIgTATIAAgBIADgKQAAgLgGAAIgPAIIgKADIAAgBIADgEIgQAHIgBgIIgBAAIgKAEIAAgMIgUAMIgBgOIgBgKIgEAAIgLAKIgPgXIgOAOIgOAPQgDgCgDgQIgKAGIgQAKIgFADIAAgOQgHgBgRAIIgHADIARgRIgCAAIgZgDIgLgDIgBABQAQgeAegTIACgBIAaAFIAvgDIABAAIAggCIAQAAIALgDIATgFIABAAIAMgBQAiAAANAfIABACIABAAIAAACIAHANIgXgMIgBAAIgBAAIACAAQAPAeAAAQQgCAbgFAAg");
	this.shape_14.setTransform(10.4,-7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-12.6,29.8,26.8);


(lib.Symbol11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#888C91").s().p("AgdAfQgLgGgEACIAAAOQgRgEgZgZIgKgLIgCgCIgKgMIAMAJIAQAJIAAgBIAAgJIApAMQAEAAADgHQACgGADAAQACAAAJAGQAJAFgBADIAWgKIARgIQADAAABAFIABAFIABADIADAAIAIgEQAHgFAFAAIAGALQADAGAFAAIACgBIAJgFIAJgEIAGgBQADAAAAAEIgCAGIAAABIAIgDIgUASIgBAAIgEgBIACADIAGALIAAABIgBgBIgJgHIgBgBQgGgEgKABIgBAMQgCgIgGgDIgCgBIgHAFIgJgGQgHgHgEAAIgDAEIgDAFIgKgEIgLgFQgDAAgDAIQgEAKgHAEQgBgGgLgFgAhogpIgBABg");
	this.shape_9.setTransform(-9.9,6.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#777B80").s().p("AB1AoIACgGQAAgEgDAAIgGABIgIAEIgJAFIgDABQgFAAgDgGIgGgMQgEAAgHAGIgIAEIgDAAIgBgEIgCgFQgBgEgCAAIgSAHIgXALQABgDgIgGQgJgFgCgBQgCABgDAGQgDAIgEAAIgpgOIABALIgBAAIgPgJIgNgJIgJgLIgIgIIgHgIIAAACIgBAKIgBAFIAAgBIgGgGIgKgSIgEgJIgDgNIAGAFIANAIQAHAOAIAHIATAIIAAgMIABgBIAKALIAEAEQARARAQABIABAAIABAAIgBgLQAAgKAFgEQAXARAJAAIACgBIgDgNIADgPQATAZAQAKIgCgDIgBgGIACgNIAFgHIgBAFQAAAKAIABIADgFIABAAIADgBIAWgEIAJgCIAEAAQgHAEgDAHIgDAHIAKgHIANgEIAEAdIAAAEIAEgLQAFgNAEgDQgDAUgCADIAegcIAAACIgEASIABABIADgEIACgBIgQAUIgIACg");
	this.shape_10.setTransform(-11.6,3.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444655").s().p("AgEAFIAEgEIgEAFgAABAAIAEgFIgFAGg");
	this.shape_11.setTransform(-20.1,-4.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C4C3C1").s().p("AgRAbIAAgFIAEgRIABgFIAAgBIACgHIADgKIADgHIAHgMIAAAAIgDgBIAIgCIAGACIAFADQgIAFgIAUIgGANIgBACIgGALIgDAKIgCAGIgDAJg");
	this.shape_12.setTransform(-23.9,-5.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#535764").s().p("ABcA9IgDgdIgOAEIgJAHIACgHQAEgIAGgEIgEAAIgJACIgWAFIgDABIAAgBIAAAAIAAABIAAAAIgDAFQgIgBAAgLIABgFIgFAHIgDAOIACAGIACADQgRgKgSgaIgDAPIADAOIgCABQgJAAgXgSQgGAFAAAKIABALIAAAAIgBAAQgQgBgSgRIgEgEIgKgMIgBABIAAANIgSgJQgJgHgHgOIgMgHIgGgFIgBgKIAAgBIACgKIABADIAFAHIAFAHQAAADAMAFIARAFQAFAAAAgFQAAgMACAAIAOANIADADIAOAKIAAAAIgBgHQAAgOAFgHQAeAYAGACIgBgEIACgLIAEgDIAIAHIAVAPIAAgDIgBgHQAAgHADgCIAHAMIAGALIAJgJIALgIIADAAIgBANIACAKIAEgDIAHgEQAFgDAEgCIAHgBIACAAIABAJQAFgDAJgEIAEgBIAIADIAFAEQAAAIADAAIANgDIAEACIACABIAVgGIACAAIgCAAIgVAGIgCgBIgEgCIgNADQgDAAAAgIIgFgEIgIgDIgEABQgJAEgFADIgBgJIgCAAIgHABQgEACgFADIgHAEIgEADIgCgKIABgNIgDAAIgLAIIgJAJIgGgLIgHgMQgDACAAAHIABAHIAAADIgVgPIgIgHIgEADIgCALIABAEQgGgCgegYQgFAHAAAOIABAHIAAAAIgOgKIgDgDIgOgNQgCAAAAAMQAAAFgFAAIgRgFQgMgFAAgDIgFgHIgFgHIgBgDIACgGIAEgKIACAEIAFAHIAGgJQAIgMAHAAIACAAIABAKIAEALIADgDIAGgHIAGgHIAEgEIAJgGIACAAQACAAADAFQAEAEACAAQADAAADgCIAKgHQADAJADAAIAZgKQAHAAARAPIAHAFIAAAAIAKAIIAAABIAWgFQAFgBADAIIADAFIACABIAGgCIABgBIADgBIAMgEQAFAAAKANIANANQADAAAJgHQAJgHADAAQAKAAADAKQADAJAGABIgEAUIgQAgIgCABIgDAEIgBgBIAEgSIAAgCIgdAcQACgDACgUQgEADgFANIgEALgAhzANIAAgBgAg4gyIAAABIAAgBIAAAAg");
	this.shape_13.setTransform(-10.6,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#626773").s().p("ACKAoQgDgKgKAAQgDAAgJAHQgJAHgDAAIgNgNQgKgNgFAAIgMAEIgDABIgBABIgGACIgCgBIgDgFQgDgIgFABIgWAFIAAgBIgKgIIAAAAIAAAAIgGgFQgSgOgHAAIgZAKQgDAAgDgJIgKAHQgDACgDAAQgCAAgEgEQgDgFgCAAIgCAAIgJAGIgKAJIAAABIgGAHIgDADIgEgLIgBgJIgCAAQgHAAgIALIgGAJIgFgHIgCgEIAGgJIABgCQAPgaANgHIABAAIAGgCIAFgDIAEACIABgBIAOgFIARgBIAHgBIgHAEIgKAIIAAABIgDAEIgBABIACAAIAAAAIADgCIANgHIAIALIAHAAIgDAEIAHAGIACABIABgXIAPALIAUAAIgRgPIAnAOQAaAIgKABIACAAIgJANIAbgLIACAQIAIgKIAHgGIAAgBIAMADIAYAEIACAAIgRAPIAIgCQARgIAHABIAAANIAEgCIARgKQAEAVgBAYIgBAMQgGgBgDgJg");
	this.shape_14.setTransform(-10.1,-4.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#777C88").s().p("AB6AhQgHgBgRAIIgHADIARgRIgCAAIgZgDIgLgDIgBABIgGAGIgIAJIgCgPIgbALIAIgNIgCAAQAKgBgZgIIgngNIAQAOIgUgBIgOgKIgBAXIgCgBIgIgGIADgEIgHAAIgHgMIgOAHIgDACIAAABIgBgBIAAAAIADgEIAAgBIAKgHIAIgEIgIAAIgRACIgOAFIgBAAIgDgBIgFACIgHACIAAAAQgOAHgOAZIAGgOQAJgUAHgEIgEgDIgHgCIgHACIADgEIAIgFQAMgMATgHIAPgFIAagFQAjgFAnAFIAeAEIALABIA2AJIABACQAVAcAHAiIgQAKIgFADg");
	this.shape_15.setTransform(-10,-8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.8,-13.5,30.6,24.6);


(lib.Symbol10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#535764").s().p("AhKA4IAAgEIAAgBIABggIACAAIAKAXQADACAGgIIAMgPIALgLIgQAIIAQgdIgEgEIAIgFQgHgFgEgJIgDgJIgCgJIAIACIgIgUIACgBQACAGAGAAIgGgYIAJAKQAHAJAFADIAAAAIgLgCIAUAPIAAACIgMADQAEAKATAGIACAAIgCgCIgEgHIADAAIAQAHIAFAAQAJgGAOgEQANgJAOgiIABAGQADAigdAQIgZAOIgLAIIgGAJIgMAMIABgFIgGAHIgLAJIgRATIgLAPIgGAHQgNAKgEARgAhKA0IAAAAg");
	this.shape_10.setTransform(4.9,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#33FFCC").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_11.setTransform(-2.6,7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#56555E").s().p("AABAAIAAAAIgBAAg");
	this.shape_12.setTransform(-2.3,4.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C4C3C1").s().p("Ag9ApIAAgBIAAAAIABAAIAAAEgAAegRIgEAFIgBAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBABgBAAIAHgJIALgIIAYgNIggAfg");
	this.shape_13.setTransform(3.6,3.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4A4851").s().p("AgcAmIABAIIgCABgAAbgnIAAgBIADACIgDgBgAACguIACADIgCABg");
	this.shape_14.setTransform(0.5,-0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#626773").s().p("AhGAdIgHgaIgHgOIAEgEIgGABIgFgHIAXgSIACAXIAGgDIABAYIAFgEIACgFIAHAUIgBgoIAIADQAAgIAEgGIADACIgJgaIABgCQAJgKAOAEIgIgHIAMABIgCgJIAGgKIAWgEQAfAEAaAUQAPALAGASQgOAigNAJQgOADgJAGIgFAAIgQgHIgEAAIAFAHIACACIgCAAQgUgGgDgJIALgDIAAgCIgTgPIAKACQAFACgFgCQgEgDgHgJIgJgKIAGAYQgGAAgCgGIgCgCIAAADIAIAUIgIgCIACAIIADAJQAEAJAHAFIgIAFIAEAEIgQAeIAQgIIgLALIgMAPQgGAIgDgCIgKgXIAAgBIgBgIIgBAJIgBAgIAAAAIgBABg");
	this.shape_15.setTransform(3.1,-2.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#777C88").s().p("AAJAhIgCAGIgFAEIgBgZIgFAEIgCgWIgXARIgXgTIAEgBIATgIIAcgPQAbgMAbgQIgGALIABAJIgLgBIAIAGQgOgEgKALIAAABIAJAZIgDgCQgEAGAAAJIgJgDIACApgAgYAYIAGgBIgEAEg");
	this.shape_16.setTransform(-3,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-11.8,20.8,23.3);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4C3C1").s().p("AAYAPIAAAAIgPgEIgIgCIgBgBIgDgCIgIgFQgKgGgHAAQAJgHAKgCIAJABQgDABgBAIIAPgEIgDAGIAAACIAIAAIAGgBIADAAIgMAIIAQACIAAABIgDAFgAAFAFIABAAIgBgBg");
	this.shape.setTransform(-1.1,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A4F").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(-0.5,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444655").s().p("AAZAbIAEgFIAAgBIgQgCIALgJIgDAAIgGACIgIAAIAAgDIAEgGIgQAEQABgHAEgBIgKgBQgKACgJAGIgDgBIgFAEIgBgJIgFAEIgDAGIgCgLIAAgHIgJADIAHgIIALgIIAAgBIgMAAIAAAAIAHgCIAIgCIAJAEIA7ARIADAAIgCAAIAJABQAQAAAAALQAAAUgfAAg");
	this.shape_2.setTransform(-1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-2.3,11.5,5.4);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#535764").s().p("AAKBEIgJgMIgDgDIgMAPIgDgLIACgIIgDgEIAHAAIgBgHIgDgHIgBgIIACgRIgIgFIARgRIgOACIADgEIAPgbIAAgBIAAAAIgeARIAHgVIgKAGIACgDIAIgHQAUgQAYACIgMAPIAbAGIgPARIAPAUIgSAPIALAWIgFAHIgLAGIAEAQQADAJgHAEg");
	this.shape.setTransform(-2.3,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A383F").s().p("AAAAAIAAAAIABABg");
	this.shape_1.setTransform(-6.3,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4851").s().p("AgFANIABAAIAAABgAADgNIACAAIgBABg");
	this.shape_2.setTransform(-5.7,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#888C91").s().p("AgJAzQgEAAgEADIgFAEIAAAAIAKgSIAAgZIgSAdQACgFAFgbIgCAAQgFABgDALQAHguAaglIABgBIAKgGIgIAVIAegRIABAAIgQAbIgUAVIAEAEIALAKIACAEIgLABIAKAOIgIgGIgCgBIABACIAEAaIgFgCIgHABIgBABIgBAAIACABQAFACAAAFQABAKgEAIIgRABQADgKAGgGgAgJAzIABAAIAAAAgAgeAsIgBABg");
	this.shape_3.setTransform(-5.8,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6E6E6").s().p("AAEAFIgZALIANgNIgOADIAMgIIAKgMIACAGIADAAIASgLIAAAFQgGAOgKALIgHAJg");
	this.shape_4.setTransform(6.5,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C4C3C1").s().p("AgfBJIACgIIAFAFIAAgKIAAgBIgBgHIgCgNIAAgMIACgHIAFgIIgJgHIATgSIgPABIAdgUIgOAAIAAgBIAOgMIADgVIADgPIAIAOIAFgGIAGAGIADAnIgHgCIAEARIgSALIgDAAIgDgGIgJALIgMAJIANgDIgMAOIAZgLIgGAOIgBAHIgBABQgCAGgEgEIgKAiIgGgHIgJASg");
	this.shape_5.setTransform(6,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#33FFCC").s().p("AhAA8IAAABIAAAAgABAgnIABgBIAAABgAgIg8IABAAIAAABg");
	this.shape_6.setTransform(-1.6,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#626773").s().p("AgYBfIgLAJIgKgTIgPAKIADgLIgOAHIgBgHQAFgJgBgJQAAgGgGgCIAAgBIAIgCIAFACIgEgaIABgBIAIAGIgKgOIALgBIgCgEIgLgLIgFgDIAVgUIgDAEIAOgCIgRARIAJAFIgDARIACAIIACAHIACAHIgIAAIADAEIgBAIIADALIALgPIAEADIAKAMIABABQAHgEgDgJIgEgQIAMgGIAEgHIgKgWIARgPIgOgUIAOgRIgbgGIANgPQgZgCgUAQIgJAHIANgbQAKgUAjgNIAAgBIACAAIACABIAGAAIASABIAUAHIAIAEIACABIAFAEQANAJAHANIACAIIgFgGIgGAGIgIgOIgCAPIgDAVIgPAMIgBABIABAAIAPgBIgeAUIAPAAIgTASIAJAGIgFAJIgCAHIAAAMIACANIABAGIAAACIgBAKIgEgGIgCAJIgNAaIgHgLIgLAMg");
	this.shape_7.setTransform(1.3,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-8.9,18.4,21.5);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FFCC").s().p("AAAAAIAAAAIAAAAg");
	this.shape.setTransform(-4.4,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4C3C1").s().p("Ag+BNIAUgUIAAgBIgJAEIAAgBIAPgeIgMAGIAagcIgIAVIAVgaIgDAOIATgUIAEAFIAAAIQAQgZAJgeIACgFQAEgJADgQIgGgLIAGAFQANAMgFATIAAABIAAAAIABAJIgFgHIAAAFIgBAkIgBgDIgBAAIgDAIQgDAKgIAIIgfAdIgIAIQgcAbgiAIgABEhLIACgEIgBAFg");
	this.shape_1.setTransform(0.8,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626773").s().p("AAWArIAAgNIgMALIgCgUIgOALIgHgWIgTARIAFgZIgPAIIAFgMIgFgFIgLAHIAAAAIgBABQAMgQAQgMQAagUAfgDIATAEIAFAMQgCAQgFAIIgCAFQgIAegQAagAgQABIABAAIgBAAg");
	this.shape_2.setTransform(-0.3,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444655").s().p("AAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(-1.9,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#888C91").s().p("AgtAiIgTAKQARgRAEgVIgNALIALgiIgYAQIAYgmIgMAEIAHgVIAAAAIACgBIABgBIALgIIAEAFIgEANIAPgIIgGAZIAUgRIAHAWIAOgLIACATIAMgKIgBAMIgDgFIgVAVIAEgPIgVAZIAIgUIgaAbIAMgGIgPAeIAAABIAAAAIAJgEIAAABIgUAUIgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBABIgLALgABFhEIABgBIAAABg");
	this.shape_4.setTransform(-0.8,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-9.6,15.6,18);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AAHAAIABAAIAAAAIgBAAIgTAUIARglIgKAMIAFgOIgSABIAegYIgDASIAHgCIgFARIAGgKIgDASIAEgDIABgFIAAANQAAATgIATIgBgXIgKAYg");
	this.shape.setTransform(3.2,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4C3C1").s().p("AgZBBIgMAGIADgMIgTADIAHgNIgWAFIAVgQIABgKQgEAFgJACIgHABIAQgRQAKgKAFgQIAKgcQAEgPAMgKQAXgVAfAIIAGADQAHAKgCAMIAFAgIgEgCIADAOIgHgCIAQANIgIgBIgEACIAHANIgHABIADALIgGAAIgDgEIgGAaIgLgIIgEALIgVgKIgIAUIgRgEIgEAJIgIADgAAfAwIAKgYIABAWQAIgSABgUIAAgMIgCAEIgEACIAEgQIgGAJIAFgRIgIACIAEgSIggAZIATgBIgFANIAKgLIgSAkIAVgUgAAnAEIAAgBIAAABg");
	this.shape_1.setTransform(0,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-8.9,13.8,15.3);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#535764").s().p("AAHBJIgFADIgIADIgLgJIAFgDQAIgFAAgKIgUgDIAFgFIADgQIgRACIgEgBIAKgZIgGAAIAHgPQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQgHgBAAgFIAGgNQADgKABgKIgHADIgCgnIAKgLIAKAcIAGgDIAGAoIAQgJIABAoIAMgHIgEAeIANgIQAAARgDARIgDAJIgEAKQgHATgQAPg");
	this.shape.setTransform(-4.7,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1D0CF").s().p("AgKgQIACABQAEgIgEgQIAFAJIAAgJIACACIAAgJIgBgDIAPAKIgGAAIAEAOIgJgMIAHAZIgJgJIACAgIgCgGIgEAgIgCgOIgGAbgAAAgVIAAAAIAAAAg");
	this.shape_1.setTransform(3.2,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4C3C1").s().p("AAQB5IgIAGIgDgPQgDgKgDgJIAOAVIAFgtIAFANIAAgRIAAgWIADACIAFAJIABgyIAIADIgDBEIAHgcIACAPIAEghIACAHIgCghIAJAJIgGgZIAJAMIgFgNIAHAAIAGAJQgFgBACAFIAAAAIgDgFIgCgDIAAAbIgGgIIABAIQADANgDAMIgFAZIgEgIIAAAWIgEgEIAAAoIgNgJIgDAXgAAxADIAAgBIABABgAApgPIgBgBIAHACIAAAIgAhAgrIgEgoQgBgKAFgLQAIgRAQgKIgCABIgGAHQgMAOAAAVIABAnIAIgDQgCAKgDAKIgFAMgAA9gYIABAAIAAAAgAAygZIAAAAIAAABg");
	this.shape_2.setTransform(-1.8,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777C88").s().p("AAPBKIgIgDIgBgKIAHAGIgHgeIAKgBIgLgKIACgXIgBgBIgaACIAEgSIgYAMIADgmIgQgDIApgfIAVAHQAOAGAJAKIgBgBIgBAAIgRgGIARAgIgLAAIAZAyIAEgMIAFAXIgFAXIAAgCIgEAFIgFgJIgQgLIAAAEIAAAJIgBgCIgHgCIABABQAEAQgEAIgAAkAqIAAAAIAAAAgAAZAqIAAgBIgBAAgAAJhDgAABhGIAFABIADACg");
	this.shape_3.setTransform(0.7,-5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#626773").s().p("AgLBtIgUAFQAPgPAHgTIAEgKIADgJQACgRAAgRIgMAJIAEggIgMAIIgBgnIgRAIIgGgoIgGADIgJgcIgKALQAAgUAMgOIAGgHIACgCIADgCQASgLAZABIABAAIAYAHIgFgBIAIAEIgWgIIgoAfIAQADIgDAnIAYgMIgEASIAagBIABAAIgCAYIALAJIgKABIAHAeIgHgHIABAKIgBAzIgGgKIgDgCIABAWIgBASIgEgOIgFAtgABAgnIgEAMIgZgyIALgBIgRggIARAGIABABIATAbIAEAQIAAAeIgBAOg");
	this.shape_4.setTransform(-0.9,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-12.8,14.9,27.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#535764").s().p("AhGAqIgQAHIAageIAHAOIAKgKIABADIAGgBIANgSIAYgDIAAgBIADgJIAXgHQAGgFgBgLIAAgCIgCgIIAPgKIgIgQQANACAaAYIAKAQIgigJIAOAPIgXgBIAHAVIgMgGIgBAEIgBANIAAABIgEAEIgBAGIgcgKIgBAZIgSgJIACAPIgXgIQgIAFgBALIgEAGIgGgHIgOANg");
	this.shape.setTransform(1.2,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FFCC").s().p("AgMANIAAAAIAAAAgAANgMIABABIgBABg");
	this.shape_1.setTransform(-6.2,6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E6E6").s().p("AAAAAIABgBIgBADg");
	this.shape_2.setTransform(1.3,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4C3C1").s().p("AhDAiIgVAMIAAgBQAQgIAKgQIABAAIAFAWIAGgWIALANIACgNIADgMIAOAOIgCgdQANAGAGAOQgCgJAHgHIARgTQAHAOgDANIAMgdIASALIAEgRIAMAAIAAgTIAGACIAJAMIgCgVIAHADQgBAagJAYIgHAWIgEAJIgEgRIgGAbIgJgFIgCAMIgKgGIAAABIgLAHIgBgKIgPAJIgEgKIgMAGIAFgMIACgEIgBACIgeAUIgBgKIgTARIgBgOIgTAPgABSg3IgBgBIABAAIAAABg");
	this.shape_3.setTransform(1.4,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#626773").s().p("AhXBFIALgmIgOAMIAFgOIAPgWIAAAYIAOgNIAHAHIADgGQACgLAHgFIAXAIIgCgOIATAIIAAgYIAdAKIABgHIADgDIAAgBIABgOIACgEIAMAGIgIgVIAYABIgPgQIAjAJIAEAeIgIgDIAAAAIAAAAIAAAAIADAWIgKgNIgFgBIAAASIgNABIgDAQIgSgLIgMAeQACgPgGgOIgSAUQgGAHACAJQgHgOgNgHIADAfIgPgPIgCAMIgCANIgMgNIgFAWIgGgWIAAgBIAAACQgKAQgQAIgAABggIAAAAIAAABg");
	this.shape_4.setTransform(1.2,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444655").s().p("AgwAjIAFgKIgMgBIAhgaIgOABIAYgaQAagWAjAAIAHAQIgOAKIACAIIAAADQABAKgGAEIgXAHIgDAKIgBAAIAAABIgXADIgNASIgGACIgCgDIgKAKg");
	this.shape_5.setTransform(0,-4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-9.3,18.3,18.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FFCC").s().p("AAAABIAAgBIAAABg");
	this.shape.setTransform(-5.3,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("AATAXIgTASIAJgPQAIgMABgPIAWAOIAFALIgSgQIAJAaIAAgBIgHgNIgCAIQgDAMgMAJgAgUAHIgKAbQgKgTAIgRIgBABIgLAOQACgUAPgNIAggcIgPAXQgEAFAAAFIAAAFIAAAFIAKgIIgPAygAAkAiIAAAAIAAAAg");
	this.shape_1.setTransform(2,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4C3C1").s().p("AgGBDIgIAGIAAgEIgOAEIAAgSIgOAGIgEgSIgGAEIgBgBIABgcIgXAQIAPgiIgKACQAKgcAQgXQAJgOASgGQAogMAlAZIAMAOQAFAIgBAJIgDAQQgEAJAEAJIgPgJIASAbIgNgIIAJAcIgKgHIgBAPIgFgGIAAABIgJgaIASAQIgFgLIgWgQQgCARgHALIgLAQIAVgTIgHAaQAMgIADgNIABgIIAHAOIgDgEIgVAYIgCgOIgQALIgGgLIgOATgAAAA1IAPg0IgKAIIAAgEIAAgFQgBgFAFgFIAQgWIghAbQgOANgCAVIALgQIABAAQgJASALATIAKgbg");
	this.shape_2.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-9.3,15.3,14.8);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#626773").s().p("AgeAIIAKgEIACABIABgFQABgCAKAOgAASgGIACACIgCgEIgBgDIABABIANAHQgEAAADAHIgHgDIgBAFIgEACg");
	this.shape.setTransform(1.2,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#888C91").s().p("AgPAFIgBAFIgBgBIgKAEIgNABIAFgFIAHgHIAJAFIgFgHIADgIQALAFAKAJIgBgKIALAIIgBgUIAFACIATACIAIANIgIAAIgMgGIgBgBIABADIABADIgBgBIAAAOIgZAEQgJgPgCADg");
	this.shape_1.setTransform(0.9,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4C3C1").s().p("AgnAeIgDAAIAAgFIABAAQgHgNAAgJQAAgLAIgKQAMgNAWgBQATgCAPAQIAAAAIAFAHIABAAQAFAKAKAHIgTgDIgFgBIABAVIgMgJIABALQgKgKgKgGIgDAJIAFAIIgJgFIgHAHIgFAFgAAXAIIAAgBg");
	this.shape_2.setTransform(-0.7,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-4.2,10.6,6.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,11.5).s().p("AhPAFIghgFIAhgEIBPgCIBQACIAhAEIghAFIhQACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-0.7,22.6,1.5);


(lib.Symbol69复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 26
	this.instance = new lib.Symbol11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(254.7,55.1);

	this.instance_1 = new lib.Symbol14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(254.7,55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},2).to({state:[]},1).to({state:[{t:this.instance}]},4).to({state:[]},1).to({state:[{t:this.instance_1}]},2).to({state:[]},1).wait(1));

	// Level 25
	this.instance_2 = new lib.Symbol10("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(254.7,55.1);

	this.instance_3 = new lib.Symbol12("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(254.7,55.1);

	this.instance_4 = new lib.Symbol13("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(254.7,55.1);

	this.instance_5 = new lib.Symbol15("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(254.7,55.1);

	this.instance_6 = new lib.Symbol16("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(254.7,55.1);

	this.instance_7 = new lib.Symbol17("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(254.7,55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(256.5,55.2,26,20.5);


(lib.Symbol69复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 33
	this.instance = new lib.Symbol55("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Symbol56("synched",0);
	this.instance_1.parent = this;

	this.instance_2 = new lib.Symbol57("synched",0);
	this.instance_2.parent = this;

	this.instance_3 = new lib.Symbol59("synched",0);
	this.instance_3.parent = this;

	this.instance_4 = new lib.Symbol60("synched",0);
	this.instance_4.parent = this;

	this.instance_5 = new lib.Symbol61("synched",0);
	this.instance_5.parent = this;

	this.instance_6 = new lib.Symbol62("synched",0);
	this.instance_6.parent = this;

	this.instance_7 = new lib.Symbol63("synched",0);
	this.instance_7.parent = this;

	this.instance_8 = new lib.Symbol64("synched",0);
	this.instance_8.parent = this;

	this.instance_9 = new lib.Symbol65("synched",0);
	this.instance_9.parent = this;

	this.instance_10 = new lib.Symbol67("synched",0);
	this.instance_10.parent = this;

	this.instance_11 = new lib.Symbol68("synched",0);
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

	// Level 30
	this.instance_12 = new lib.Symbol58("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Symbol66("synched",0);
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},3).to({state:[]},1).to({state:[{t:this.instance_13}]},7).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.7,32.3,31.5);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 16
	this.instance = new lib.Symbol29("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(223,150.9);

	this.instance_1 = new lib.Symbol32("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(223,150.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},3).to({state:[]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},3).to({state:[]},1).wait(1));

	// Level 15
	this.instance_2 = new lib.Symbol28("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(223,150.9);

	this.instance_3 = new lib.Symbol30("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(223,150.9);

	this.instance_4 = new lib.Symbol31("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(223,150.9);

	this.instance_5 = new lib.Symbol33("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(223,150.9);

	this.instance_6 = new lib.Symbol34("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(223,150.9);

	this.instance_7 = new lib.Symbol35("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(223,150.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(223,152.8,19.9,16);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 4
	this.instance = new lib.Symbol43("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Symbol45("synched",0);
	this.instance_1.parent = this;

	this.instance_2 = new lib.Symbol46("synched",0);
	this.instance_2.parent = this;

	this.instance_3 = new lib.Symbol47("synched",0);
	this.instance_3.parent = this;

	this.instance_4 = new lib.Symbol48("synched",0);
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},32).to({state:[]},2).to({state:[{t:this.instance_4}]},2).to({state:[]},1).wait(33));

	// Level 2
	this.instance_5 = new lib.Symbol16_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(4,-4.9,1,1,-6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(43).to({_off:false},0).wait(33));

	// Level 1
	this.instance_6 = new lib.Symbol44("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-5.1,0.9);

	this.instance_7 = new lib.Symbol15_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,1,1,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},2).to({state:[]},2).to({state:[{t:this.instance_6}]},36).to({state:[]},2).to({state:[{t:this.instance_7}]},1).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-10.6,30.2,26.2);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 4
	this.instance = new lib.Symbol38("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Symbol39("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-13.1,30.2,26.3);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 2
	this.instance = new lib.Symbol16_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.3,-5.3,0.995,0.995,-13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1,scaleY:0.99,rotation:0,skewX:-14.9,skewY:-15.3,y:-5.6},0).wait(2));

	// Level 1
	this.instance_1 = new lib.Symbol15_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.995,0.995,-13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({scaleX:1,scaleY:0.99,rotation:0,skewX:-14.9,skewY:-15.3,x:0.1,y:-0.2},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-13.4,25,27.3);


(lib.Symbol35_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 23
	this.instance = new lib.Symbol16_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(6.2,-19.6,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({scaleX:1,scaleY:1,x:14.5,y:-20},0).wait(3).to({x:22.9,y:-20.5},0).wait(3).to({x:31.2,y:-20.9},0).wait(3).to({scaleX:1,scaleY:1,x:39.6,y:-21.4},0).wait(12));

	// Level 22
	this.instance_1 = new lib.Symbol15_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.2,-14.7,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({scaleX:1,scaleY:1,x:10.6,y:-15.1},0).wait(3).to({x:18.9,y:-15.6},0).wait(3).to({x:27.2,y:-16},0).wait(3).to({scaleX:1,scaleY:1,x:35.6,y:-16.5},0).wait(12));

	// Level 21
	this.instance_2 = new lib.Symbol5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-34.6,15.5,0.998,0.998,0,-149.7,-147.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({scaleX:1,scaleY:1,skewX:-110.1,skewY:-108.3,x:-25.8,y:11.2},0).wait(3).to({scaleX:1,scaleY:1,skewX:-70.6,skewY:-68.9,x:-20.7,y:9.4},0).wait(3).to({scaleX:1,scaleY:1,skewX:-41.3,skewY:-39.3,x:-20.6,y:4.6},0).wait(3).to({scaleX:1,scaleY:1,skewX:-29.2,skewY:-27.4,x:-16.5,y:-1},0).wait(12));

	// Level 20
	this.instance_3 = new lib.Symbol4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-31.2,13.1,1,1,0,-11.5,-9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({scaleX:1,scaleY:1,skewX:7.5,skewY:9.3,x:-26.9,y:14.5},0).wait(3).to({scaleX:1,scaleY:1,skewX:26.6,skewY:28.5,x:-22,y:15.5},0).wait(3).to({scaleX:0.99,scaleY:0.99,skewX:14.7,skewY:16.5,x:-25.4,y:14.3},0).wait(3).to({scaleX:1,scaleY:1,skewX:30.5,skewY:32.3,x:-20,y:8.6},0).wait(12));

	// Level 19
	this.instance_4 = new lib.Symbol3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-30.4,24.4,1,1,0,-11.5,-9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({scaleX:1,scaleY:1,skewX:-0.5,skewY:1.3,x:-28.5,y:24.6},0).wait(3).to({scaleX:0.99,scaleY:1,skewX:10.3,skewY:12.2,x:-26.2,y:24.8},0).wait(3).to({scaleX:0.99,scaleY:0.99,skewX:-10.1,skewY:-8.3,x:-27.2,y:24},0).wait(3).to({scaleX:0.99,scaleY:0.99,skewX:-2.5,skewY:-0.7,x:-24.3,y:17.9},0).wait(12));

	// Level 18
	this.instance_5 = new lib.Symbol2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-25.1,28.7,1.118,1.118,0,-1.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({x:-25.2,y:28.6},0).wait(3).to({x:-25.1,y:28.7},0).wait(6).to({scaleX:1.12,scaleY:1.12,skewX:31.6,skewY:33.4,x:-23.9,y:22.7},0).wait(12));

	// Level 17
	this.instance_6 = new lib.Symbol8("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-14.8,2.5,1,1.012,0,-8.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({scaleX:1,scaleY:1.01,skewX:-0.7,skewY:7.8,x:-8.6,y:2},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-16.6,skewY:-8.1,x:-0.5,y:2.4},0).wait(3).to({skewX:-5,skewY:3.3,x:5,y:2.2},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:6.1,skewY:14.8,x:10.8,y:1.8},0).wait(12));

	// Level 16
	this.instance_7 = new lib.Symbol7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-14.1,17,1,1.012,0,-8.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({scaleX:1,scaleY:1.01,skewX:-90.7,skewY:-82.2,x:-6.9,y:11.7},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-16.6,skewY:-8.1,x:2.1,y:16.6},0).wait(3).to({skewX:-5,skewY:3.3,x:4.9,y:16.4},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:6.1,skewY:14.8,x:7.8,y:15.9},0).wait(12));

	// Level 15
	this.instance_8 = new lib.Symbol6("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-14.4,24.6,1,1.012,0,-8.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({scaleX:1,scaleY:1.01,skewX:-12.5,skewY:-4,x:-4.8,y:16.5},0).wait(3).to({scaleX:1,skewX:-16.6,skewY:-8.1,x:2.9,y:24.1},0).wait(3).to({skewX:-5,skewY:3.3,x:4.2,y:23.8},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:6.1,skewY:14.8,x:5.5,y:23.2},0).wait(12));

	// Level 14
	this.instance_9 = new lib.Symbol2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-11.7,29,1,1.004,0,-5.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({scaleX:1,scaleY:1,skewX:34.6,skewY:39.6,x:-2.8,y:23.8},0).wait(3).to({scaleX:1,scaleY:1,skewX:-5.2,skewY:0,x:6,y:29},0).wait(3).to({skewX:-5},0).wait(3).to({skewX:-5.2},0).wait(12));

	// Level 13
	this.instance_10 = new lib.Symbol12_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-22.3,10.8,1,1,-53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({scaleX:1,scaleY:1,rotation:-40.8,x:-17.5,y:7.8},0).wait(3).to({scaleX:1,scaleY:1,rotation:-28.6,x:-12.6,y:4.7},0).wait(3).to({scaleX:1,scaleY:1,rotation:-16.3,x:-7.8,y:1.6},0).wait(3).to({scaleX:1,scaleY:1,rotation:-4.3,x:-3.1,y:-1.4},0).wait(12));

	// Level 12
	this.instance_11 = new lib.Symbol11_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-22.3,10.8,1,1,-53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({scaleX:1,scaleY:1,rotation:-40.8,x:-17.5,y:7.8},0).wait(3).to({scaleX:1,scaleY:1,rotation:-28.6,x:-12.6,y:4.7},0).wait(3).to({scaleX:1,scaleY:1,rotation:-16.3,x:-7.8,y:1.6},0).wait(3).to({scaleX:1,scaleY:1,rotation:-4.3,x:-3.1,y:-1.4},0).wait(12));

	// Level 11
	this.instance_12 = new lib.Symbol10_1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-10.2,-8.3,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({scaleX:1,scaleY:1,x:-1.9,y:-8.8},0).wait(3).to({x:6.5,y:-9.2},0).wait(3).to({x:14.8,y:-9.7},0).wait(3).to({scaleX:1,scaleY:1,x:23.2,y:-10.1},0).wait(12));

	// Level 10
	this.instance_13 = new lib.Symbol9("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-44.4,17.9,0.999,0.999,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({scaleX:1,scaleY:1,rotation:31.4,x:-41.1,y:9.1},0).wait(3).to({scaleX:1,scaleY:1,rotation:29.8,x:-36.6,y:1.6},0).wait(3).to({scaleX:1,scaleY:1,rotation:28,x:-32.2,y:-6},0).wait(3).to({scaleX:1,scaleY:1,rotation:26.3,x:-27.7,y:-13.6},0).wait(12));

	// Level 9
	this.instance_14 = new lib.Symbol8("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-13.4,1.2,1,1.016,0,-10.2,0);
	this.instance_14.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_14.cache(-11,-11,22,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({scaleX:1,scaleY:1.01,skewX:0,skewY:9.8,x:-7.9,y:0.7},0).wait(3).to({scaleY:1.01,skewX:9.8,skewY:19.9,x:-2.1,y:0.2},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:12.5,skewY:22.4,x:4.3,y:0.7},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-25.2,skewY:-15.1,x:14.8,y:1.5},0).wait(12));

	// Level 8
	this.instance_15 = new lib.Symbol7("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-12.5,15.7,1,1.016,0,-10.2,0);
	this.instance_15.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_15.cache(-10,-12,20,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(3).to({scaleX:1,scaleY:1.01,skewX:0,skewY:9.8,x:-9.4,y:15.2},0).wait(3).to({scaleY:1.01,skewX:9.8,skewY:19.9,x:-6.3,y:14.3},0).wait(3).to({scaleX:1.08,scaleY:0.98,skewX:-80.7,skewY:-70.9,x:6.2,y:9.7},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-25.2,skewY:-15.1,x:19.4,y:15.2},0).wait(12));

	// Level 7
	this.instance_16 = new lib.Symbol6("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-12.6,23.3,1,1.016,0,-10.2,0);
	this.instance_16.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_16.cache(-9,-11,18,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3).to({scaleX:1,scaleY:1.01,skewX:0,skewY:9.8,x:-10.7,y:22.4},0).wait(3).to({scaleY:1.01,skewX:9.8,skewY:19.9,x:-8.8,y:21.5},0).wait(3).to({scaleY:1.01,skewX:-7.6,skewY:2.3,x:5.9,y:15.3},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-25.2,skewY:-15.1,x:21.4,y:22.7},0).wait(12));

	// Level 6
	this.instance_17 = new lib.Symbol2("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-8.9,27.7,1,1.016,0,-10.2,0);
	this.instance_17.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_17.cache(-8,-6,15,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(3).to({scaleY:1.01,skewX:-10},0).wait(3).to({scaleY:1.02,skewX:-10.2},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:23.8,skewY:33.8,x:8.3,y:19.7},0).wait(3).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:25.5,y:27.7},0).wait(12));

	// Level 5
	this.instance_18 = new lib.Symbol5("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-32.9,15.7,0.998,0.998,0,-142.5,-140.7);
	this.instance_18.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_18.cache(-11,-15,19,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(3).to({scaleX:1,scaleY:1,skewX:-107,skewY:-105.3,x:-24.3,y:11.3},0).wait(3).to({scaleX:1,scaleY:1,skewX:-71.7,skewY:-69.9,x:-19.3,y:8.9},0).wait(3).to({scaleX:1,scaleY:1,skewX:-39.7,skewY:-37.9,x:-20.4,y:4},0).wait(3).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:-18.7,y:0.4},0).wait(12));

	// Level 4
	this.instance_19 = new lib.Symbol4("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(-27,12,1,1.001,0,-2.1,-0.3);
	this.instance_19.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_19.cache(-10,-11,22,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({scaleX:1,scaleY:1,skewX:12.8,skewY:14.5,x:-23.9,y:13.1},0).wait(3).to({skewX:28,skewY:29.8,x:-20.3,y:13.9},0).wait(3).to({scaleX:1,scaleY:1,skewX:17.5,skewY:19.3,x:-22.6,y:13.2},0).wait(3).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:-26.9,y:12},0).wait(12));

	// Level 3
	this.instance_20 = new lib.Symbol3("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-27.9,23.3,1,1.001,0,-2.1,-0.3);
	this.instance_20.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_20.cache(-10,-11,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(3).to({scaleX:1,scaleY:1,skewX:12.8,skewY:14.5,x:-27.4,y:23.6},0).wait(3).to({skewX:28,skewY:29.8,x:-26.7,y:23.2},0).wait(3).to({scaleX:1,scaleY:1,skewX:17.5,skewY:19.3,x:-26.9,y:23.3},0).wait(3).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:-27.8},0).wait(12));

	// Level 2
	this.instance_21 = new lib.Symbol2("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-23.3,27.9,1.118,1.118,0,-1.8,0);
	this.instance_21.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_21.cache(-8,-6,15,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(3).to({startPosition:0},0).wait(3).to({x:-23.2},0).wait(3).to({startPosition:0},0).wait(3).to({x:-23.3},0).wait(12));

	// Level 1
	this.instance_22 = new lib.Symbol1("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-17.4,29.9,3.325,4.083,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(3).to({scaleX:3.48,x:-14.1,y:30},0).wait(3).to({scaleX:3.64,x:-10.9,y:29.9},0).wait(3).to({scaleX:3.8,x:-7.7,y:30},0).wait(3).to({scaleX:3.96,x:-4.5,y:29.9},0).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.9,-28.8,75,61.8);


(lib.Symbol34_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 23
	this.instance = new lib.Symbol16_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.6,-22,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({scaleX:1,scaleY:1,x:36.2,y:-21.7},0).wait(3).to({x:29.5,y:-21.2},0).wait(3).to({scaleX:1,scaleY:1,x:22.8,y:-20.7},0).wait(3).to({x:19.5,y:-20.5},0).wait(3).to({x:12.8,y:-20},0).wait(3).to({scaleX:1,scaleY:1,x:6.2,y:-19.6},0).wait(6));

	// Level 22
	this.instance_1 = new lib.Symbol15_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.6,-17.1,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({scaleX:1,scaleY:1,x:32.3,y:-16.8},0).wait(3).to({x:25.5,y:-16.3},0).wait(3).to({scaleX:1,scaleY:1,x:18.8,y:-15.8},0).wait(3).to({x:15.5,y:-15.5},0).wait(3).to({x:8.8,y:-15},0).wait(3).to({scaleX:1,scaleY:1,x:2.2,y:-14.7},0).wait(6));

	// Level 21
	this.instance_2 = new lib.Symbol5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-20.6,1.1,1,1.001,0,-1.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({scaleX:1,scaleY:1,skewX:-14.8,skewY:-12.8,x:-20.7,y:3.7},0).wait(3).to({scaleX:0.99,scaleY:0.99,skewX:-40.8,skewY:-38.9,x:-21.7,y:7.6},0).wait(3).to({scaleX:0.99,skewX:-66.7,skewY:-65,x:-24.3,y:10.4},0).wait(3).to({scaleY:1,skewX:-83.4,skewY:-81.7,x:-25,y:10.8},0).wait(3).to({skewX:-116.6,skewY:-114.6,x:-28.6,y:12.2},0).wait(3).to({scaleX:1,scaleY:1,skewX:-149.7,skewY:-147.9,x:-34.6,y:15.5},0).wait(6));

	// Level 20
	this.instance_3 = new lib.Symbol4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-28.5,12.7,1,1.001,0,-1.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({scaleX:1,scaleY:1,skewX:3.8,skewY:5.6,x:-27.6,y:13.4},0).wait(3).to({scaleX:1,scaleY:1,skewX:15,skewY:17,x:-25.6,y:14.4},0).wait(3).to({scaleX:1,skewX:26.6,skewY:28.6,x:-23.2,y:15.4},0).wait(3).to({scaleX:1,scaleY:1,skewX:18.8,skewY:20.8,x:-24.9,y:15.1},0).wait(3).to({scaleX:1,scaleY:1,skewX:3.5,skewY:5.3,x:-28.2,y:14.2},0).wait(3).to({scaleX:1,scaleY:1,skewX:-11.5,skewY:-9.7,x:-31.2,y:13.1},0).wait(6));

	// Level 19
	this.instance_4 = new lib.Symbol3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-29.6,24.1,1,1.001,0,-1.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({scaleX:1,scaleY:1,skewX:3.8,skewY:5.6,y:24.4},0).wait(3).to({scaleX:1,scaleY:1,skewX:15,skewY:17,x:-29.5,y:24.8},0).wait(3).to({scaleX:1,skewX:26.6,skewY:28.6,x:-29.3,y:24.9},0).wait(3).to({scaleX:1,scaleY:1,skewX:18.8,skewY:20.8,x:-29.7,y:25},0).wait(3).to({scaleX:1,scaleY:1,skewX:3.5,skewY:5.3,x:-30.2,y:24.9},0).wait(3).to({scaleX:1,scaleY:1,skewX:-11.5,skewY:-9.7,x:-30.4,y:24.4},0).wait(6));

	// Level 18
	this.instance_5 = new lib.Symbol2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-25.1,28.7,1.118,1.118,0,-1.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({y:28.6},0).wait(3).to({x:-25.2},0).wait(3).to({startPosition:0},0).wait(3).to({x:-25.3},0).wait(3).to({x:-25.2},0).wait(3).to({x:-25.1,y:28.7},0).wait(6));

	// Level 17
	this.instance_6 = new lib.Symbol8("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(12.2,2.5,1,1.012,0,-8.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({scaleX:1,scaleY:1.01,skewX:-5.5,skewY:3,x:9.3,y:2.4},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:17.8,skewY:26.1,x:1.7,y:1.2},0).wait(3).to({scaleY:1.01,skewX:23.8,skewY:32.3,x:-4,y:0.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:8,skewY:16.5,x:-5.6,y:1.6},0).wait(3).to({scaleY:1.01,skewX:-0.3,skewY:8.1,x:-10.3,y:2.1},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-8.7,skewY:0,x:-14.8,y:2.5},0).wait(6));

	// Level 16
	this.instance_7 = new lib.Symbol7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(12.9,17,1,1.012,0,-8.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({scaleX:1,scaleY:1.01,skewX:-78.4,skewY:-69.9,x:12.7,y:12.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-41.9,skewY:-33.6,x:-0.8,y:8.8},0).wait(3).to({scaleX:0.99,scaleY:1,skewX:-43.2,skewY:-34.7,x:-7,y:12.5},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:8,skewY:16.5,x:-9.6,y:16.7},0).wait(3).to({scaleY:1.01,skewX:-0.3,skewY:8.1,x:-11.8,y:16.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-8.7,skewY:0,x:-14.1,y:17},0).wait(6));

	// Level 15
	this.instance_8 = new lib.Symbol6("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(12.6,24.6,1,1.012,0,-8.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({scaleX:1,scaleY:1.01,skewX:-16.8,skewY:-8.3,x:13.3,y:20.3},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-16.3,skewY:-8,x:2.2,y:16.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:5.3,skewY:13.8,x:-9.8,y:20.6},0).wait(3).to({scaleX:1,skewX:8,skewY:16.5,x:-12.1,y:24.4},0).wait(3).to({scaleY:1.01,skewX:-0.3,skewY:8.1,x:-13.2,y:24.6},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-8.7,skewY:0,x:-14.4},0).wait(6));

	// Level 14
	this.instance_9 = new lib.Symbol2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(15.3,29,1,1.004,0,-5.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({scaleX:1,scaleY:1,skewX:25.3,skewY:30.4,x:15.4,y:26},0).wait(3).to({scaleX:1,skewX:29.1,skewY:34.1,x:3,y:22.2},0).wait(3).to({scaleX:1,skewX:19.3,skewY:24.3,x:-9.6,y:26},0).wait(3).to({scaleX:1,scaleY:1,skewX:-5.2,skewY:0,x:-11.7,y:29},0).wait(3).to({skewX:-5},0).wait(3).to({skewX:-5.2},0).wait(6));

	// Level 13
	this.instance_10 = new lib.Symbol12_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-3.1,-2,1,1,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({scaleX:1,scaleY:1,rotation:-9.1,x:-5,y:-0.7},0).wait(3).to({scaleX:1,scaleY:1,rotation:-18.6,x:-8.8,y:1.9},0).wait(3).to({scaleX:1,scaleY:1,rotation:-28.3,x:-12.6,y:4.4},0).wait(3).to({scaleX:1,scaleY:1,rotation:-33.3,x:-14.5,y:5.7},0).wait(3).to({rotation:-43.3,x:-18.4,y:8.3},0).wait(3).to({scaleX:1,scaleY:1,rotation:-53.1,x:-22.3,y:10.8},0).wait(6));

	// Level 12
	this.instance_11 = new lib.Symbol11_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-3.1,-2,1,1,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({scaleX:1,scaleY:1,rotation:-9.1,x:-5,y:-0.7},0).wait(3).to({scaleX:1,scaleY:1,rotation:-18.6,x:-8.8,y:1.9},0).wait(3).to({scaleX:1,scaleY:1,rotation:-28.3,x:-12.6,y:4.4},0).wait(3).to({scaleX:1,scaleY:1,rotation:-33.3,x:-14.5,y:5.7},0).wait(3).to({rotation:-43.3,x:-18.4,y:8.3},0).wait(3).to({scaleX:1,scaleY:1,rotation:-53.1,x:-22.3,y:10.8},0).wait(6));

	// Level 11
	this.instance_12 = new lib.Symbol10_1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(23.2,-10.7,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({scaleX:1,scaleY:1,x:19.8,y:-10.5},0).wait(3).to({x:13.1,y:-10},0).wait(3).to({scaleX:1,scaleY:1,x:6.4,y:-9.5},0).wait(3).to({x:3,y:-9.2},0).wait(3).to({x:-3.6,y:-8.8},0).wait(3).to({scaleX:1,scaleY:1,x:-10.2,y:-8.3},0).wait(6));

	// Level 10
	this.instance_13 = new lib.Symbol9("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-28.6,-12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({rotation:-4.8,x:-30.6,y:-8.8},0).wait(3).to({scaleX:1,scaleY:1,rotation:11.8,x:-35.1,y:-3.5},0).wait(3).to({scaleX:1,scaleY:1,rotation:28.9,x:-37.5,y:2.4},0).wait(3).to({scaleX:0.99,scaleY:0.99,rotation:29.6,x:-38.9,y:5.6},0).wait(3).to({rotation:31.3,x:-41.4,y:11.7},0).wait(3).to({scaleX:1,scaleY:1,rotation:33.2,x:-44.4,y:17.9},0).wait(6));

	// Level 9
	this.instance_14 = new lib.Symbol8("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(11.3,-1,0.998,1.014,0,23.2,33.4);
	this.instance_14.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_14.cache(-11,-11,22,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({scaleX:1,scaleY:1.01,skewX:11,skewY:21.2,x:8.2,y:1.9},0).wait(3).to({scaleX:0.99,scaleY:1.01,skewX:2.5,skewY:12.8,x:4,y:1.6},0).wait(3).to({skewX:-5.5,skewY:4.5,x:-0.3,y:1.2},0).wait(3).to({skewX:-9.8,skewY:0.5,x:-2.6,y:0.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewY:0,x:-8,y:1.1},0).wait(3).to({scaleX:1,scaleY:1.02,skewX:-10.2,x:-13.4,y:1.2},0).wait(6));

	// Level 8
	this.instance_15 = new lib.Symbol7("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(6,11.6,0.997,1.013,0,-0.9,9.3);
	this.instance_15.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_15.cache(-10,-12,20,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(3).to({scaleX:1,scaleY:1.01,skewX:3,skewY:13,x:4.1,y:14.8},0).wait(3).to({skewX:-5.3,skewY:4.1,x:1.9},0).wait(3).to({skewX:-13.8,skewY:-4.3,x:-0.2,y:14.5},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-18.1,skewY:-8.7,x:-1.3,y:14.4},0).wait(3).to({scaleY:1.01,skewX:-79.7,skewY:-70,x:-5.9,y:12.9},0).wait(3).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:-12.5,y:15.7},0).wait(6));

	// Level 7
	this.instance_16 = new lib.Symbol6("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(4.7,19.2,0.997,1.013,0,-0.9,9.3);
	this.instance_16.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_16.cache(-9,-11,18,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3).to({scaleX:1,scaleY:1.01,skewX:3,skewY:13,x:2.3,y:22.2},0).wait(3).to({skewX:-5.3,skewY:4.1,x:1.4,y:22.1},0).wait(3).to({skewX:-13.8,skewY:-4.3,x:0.4,y:21.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-18.1,skewY:-8.7,x:-0.2,y:21.8},0).wait(3).to({scaleX:1,skewX:-14,skewY:-4.3,x:-5.5,y:18.1},0).wait(3).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:-12.6,y:23.3},0).wait(6));

	// Level 6
	this.instance_17 = new lib.Symbol2("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(6.2,24.1,0.992,1.008,0,19.4,29.6);
	this.instance_17.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_17.cache(-8,-6,15,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(3).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:3.4,y:27.7},0).wait(3).to({scaleY:1.01,skewX:-10},0).wait(3).to({startPosition:0},0).wait(3).to({scaleY:1.02,skewX:-10.2},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:19.3,skewY:29.3,x:-2.7,y:23.9},0).wait(3).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:-8.9,y:27.7},0).wait(6));

	// Level 5
	this.instance_18 = new lib.Symbol5("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-18.7,0.4,1,1.001,0,-1.8,0);
	this.instance_18.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_18.cache(-11,-15,19,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(3).to({scaleX:1,scaleY:1,skewX:-15.3,skewY:-13.5,x:-18.2,y:3},0).wait(3).to({scaleX:0.99,scaleY:0.99,skewX:-42.4,skewY:-40.6,x:-17.9,y:6.8},0).wait(3).to({skewX:-69.7,skewY:-67.9,x:-19.3,y:9.3},0).wait(3).to({scaleX:0.99,scaleY:1,skewX:-84.2,skewY:-82.5,x:-20.8,y:10.2},0).wait(3).to({scaleX:1,skewX:-113.3,skewY:-111.5,x:-25.7,y:12.3},0).wait(3).to({scaleX:1,scaleY:1,skewX:-142.5,skewY:-140.7,x:-32.9,y:15.7},0).wait(6));

	// Level 4
	this.instance_19 = new lib.Symbol4("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(-26.9,12,1,1.001,0,-1.8,0);
	this.instance_19.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_19.cache(-10,-11,22,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({scaleX:1,scaleY:1,skewX:4,skewY:5.8,x:-25.4,y:12.6},0).wait(3).to({scaleX:1,scaleY:1,skewX:15.8,skewY:17.5,x:-22.2,y:13.8},0).wait(3).to({scaleX:1,scaleY:1,skewX:27.8,skewY:29.6,x:-18.8,y:14.8},0).wait(3).to({scaleX:1,scaleY:1,skewX:21.8,skewY:23.6,x:-20.6,y:14.4},0).wait(3).to({skewX:9.8,skewY:11.5,x:-24,y:13.2},0).wait(3).to({scaleX:1,scaleY:1,skewX:-2.1,skewY:-0.3,x:-27,y:12},0).wait(6));

	// Level 3
	this.instance_20 = new lib.Symbol3("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-27.8,23.3,1,1.001,0,-1.8,0);
	this.instance_20.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_20.cache(-10,-11,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(3).to({scaleX:1,scaleY:1,skewX:4,skewY:5.8,x:-27.3,y:23.7},0).wait(3).to({scaleX:1,scaleY:1,skewX:15.8,skewY:17.5,x:-26.4,y:24},0).wait(3).to({scaleX:1,scaleY:1,skewX:27.8,skewY:29.6,x:-25.3,y:24.2},0).wait(3).to({scaleX:1,scaleY:1,skewX:21.8,skewY:23.6,x:-25.9},0).wait(3).to({skewX:9.8,skewY:11.5,x:-26.9,y:23.9},0).wait(3).to({scaleX:1,scaleY:1,skewX:-2.1,skewY:-0.3,x:-27.9,y:23.3},0).wait(6));

	// Level 2
	this.instance_21 = new lib.Symbol2("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-23.3,27.9,1.118,1.118,0,-1.8,0);
	this.instance_21.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_21.cache(-8,-6,15,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(3).to({x:-23.2},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(3).to({x:-23.3},0).wait(6));

	// Level 1
	this.instance_22 = new lib.Symbol1("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-4.5,29.9,3.958,4.083,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(3).to({scaleX:3.9,x:-5.7},0).wait(3).to({scaleX:3.77,x:-8.3,y:30},0).wait(3).to({scaleX:3.64,x:-10.9},0).wait(3).to({scaleX:3.58,x:-12.1},0).wait(3).to({scaleX:3.45,x:-14.6},0).wait(3).to({scaleX:3.33,x:-17.4,y:29.9},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-31.2,97.2,64.2);


(lib.Symbol33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 22
	this.instance = new lib.Symbol16_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(38.9,-22.4,0.999,0.999,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({rotation:-6.3,x:39.5,y:-21.5},0).wait(3).to({rotation:-5.5,x:39.7,y:-21.1},0).wait(3).to({rotation:-6.3,x:39.5,y:-21.5},0).wait(3).to({rotation:-8,x:38.9,y:-22.4},0).wait(3).to({rotation:-6.3,x:39.5,y:-21.5},0).wait(3).to({rotation:-5.5,x:39.7,y:-21.1},0).wait(3).to({rotation:-6.3,x:39.5,y:-21.5},0).wait(3));

	// Level 21
	this.instance_1 = new lib.Symbol15_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.1,-17.4,0.999,0.999,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({rotation:-6.3,x:35.5,y:-16.5},0).wait(3).to({rotation:-5.5,x:35.7,y:-16.2},0).wait(3).to({rotation:-6.3,x:35.5,y:-16.5},0).wait(3).to({rotation:-8,x:35.1,y:-17.4},0).wait(3).to({rotation:-6.3,x:35.5,y:-16.5},0).wait(3).to({rotation:-5.5,x:35.7,y:-16.2},0).wait(3).to({rotation:-6.3,x:35.5,y:-16.5},0).wait(3));

	// Level 20
	this.instance_2 = new lib.Symbol5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-16.5,-1,0.999,0.999,0,-29.2,-27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({scaleX:1,scaleY:1,skewX:-44.2,skewY:-42.4,x:-15,y:-3},0).wait(3).to({scaleX:1,scaleY:1,skewX:-25.9,skewY:-24.1,x:-17,y:-0.8},0).wait(3).to({scaleX:1,skewX:-17.8,skewY:-16,x:-18.1,y:0},0).wait(3).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:-20.6,y:1.1},0).wait(3).to({scaleX:1,scaleY:1,skewX:6.8,skewY:8.5,x:-22,y:1.4},0).wait(3).to({scaleY:1,skewX:11.2,skewY:13,x:-22.8,y:1.5},0).wait(3).to({scaleY:1,skewX:-1,skewY:1,x:-20.9,y:1.3},0).wait(3));

	// Level 19
	this.instance_3 = new lib.Symbol4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-20,8.6,0.996,0.997,0,30.5,32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({skewX:-24.4,skewY:-22.6,x:-14.4,y:10.1},0).wait(3).to({scaleX:1,scaleY:1,skewX:-25.9,skewY:-24.1,x:-19.5,y:13.1},0).wait(3).to({scaleX:1,skewX:-17.8,skewY:-16,x:-22.6,y:13},0).wait(3).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:-28.5,y:12.7},0).wait(3).to({scaleX:1,scaleY:1,skewX:6.8,skewY:8.5,x:-32.2},0).wait(3).to({scaleY:1,skewX:11.2,skewY:13,x:-33.8,y:12.5},0).wait(3).to({scaleX:1,scaleY:1,skewX:18.8,skewY:20.6,x:-29.8,y:11},0).wait(3));

	// Level 18
	this.instance_4 = new lib.Symbol3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-24.3,17.9,0.994,0.994,0,-2.5,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({scaleX:1,scaleY:1,skewX:-3.3,skewY:-1.3,x:-13,y:20.7},0).wait(3).to({scaleX:1,scaleY:1,skewX:-25.9,skewY:-24.1,x:-15.9,y:23.9},0).wait(3).to({scaleX:1,skewX:-17.8,skewY:-16,x:-20.5,y:24.1},0).wait(3).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:-29.6},0).wait(3).to({scaleX:1,scaleY:1,skewX:6.8,skewY:8.5,x:-34.8,y:24.3},0).wait(3).to({scaleY:1,skewX:11.2,skewY:13,x:-37.3,y:24.4},0).wait(3).to({scaleX:1,scaleY:1,skewX:6.5,skewY:8.3,x:-34.4,y:21.5},0).wait(3));

	// Level 17
	this.instance_5 = new lib.Symbol2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-23.9,22.7,1.116,1.116,0,31.6,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({skewX:26.3,skewY:28.1,x:-12.2,y:25.7},0).wait(3).to({scaleX:1.12,scaleY:1.12,skewX:-1.8,skewY:0,x:-12.8,y:28.7},0).wait(3).to({skewX:-1.8,x:-16.9,y:28.6},0).wait(3).to({x:-25.1,y:28.7},0).wait(3).to({x:-32,y:28.6},0).wait(3).to({x:-35.3,y:28.7},0).wait(3).to({scaleX:1.12,scaleY:1.12,skewX:18.6,skewY:20.4,x:-33.4,y:26.5},0).wait(3));

	// Level 16
	this.instance_6 = new lib.Symbol8("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(10.8,1.8,0.999,1.011,0,6.1,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({scaleX:1,scaleY:1.01,skewX:10,skewY:18.8,x:10.7},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-1.4,skewY:7.3,x:11.7,y:2.2},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-12.6,skewY:-4,x:12.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-24,skewY:-15.3,x:14.2,y:2.3},0).wait(3).to({scaleY:1.01,skewX:-13.8,skewY:-5,x:12.8,y:2.4},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-8.7,skewY:0,x:12.2,y:2.5},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-3.8,skewY:4.8,x:11.7,y:2.2},0).wait(3));

	// Level 15
	this.instance_7 = new lib.Symbol7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(7.8,15.9,0.999,1.011,0,6.1,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({scaleX:0.99,scaleY:1,skewX:-60.7,skewY:-52.1,x:9.9,y:12.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-75.9,skewY:-67.2,x:13.2,y:12.3},0).wait(3).to({scaleX:0.99,scaleY:1,skewX:-95.3,skewY:-86.6,x:16.4,y:11.2},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-24,skewY:-15.3,x:18.7,y:16.1},0).wait(3).to({scaleY:1.01,skewX:-13.8,skewY:-5,x:14.9,y:16.4},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-8.7,skewY:0,x:12.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-3.8,skewY:4.8,x:11.2,y:16.2},0).wait(3));

	// Level 14
	this.instance_8 = new lib.Symbol6("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(5.5,23.2,0.999,1.011,0,6.1,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({skewX:-6.3,skewY:2.3,x:10.3,y:18.3},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-8.7,skewY:0,x:14.1,y:17.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-22.1,skewY:-13.3,x:19.1,y:18.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-24,skewY:-15.3,x:20.5,y:23.5},0).wait(3).to({scaleY:1.01,skewX:-13.8,skewY:-5,x:15.2,y:24.4},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-8.7,skewY:0,x:12.6,y:24.6},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-3.8,skewY:4.8,x:10.3,y:24.2},0).wait(3));

	// Level 13
	this.instance_9 = new lib.Symbol2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(6,29,1,1.004,0,-5.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({scaleX:1,scaleY:1,skewX:33.8,skewY:38.8,x:10.5,y:24.6},0).wait(3).to({skewX:41.6,skewY:46.6,x:15.5,y:23.5},0).wait(3).to({scaleY:1,skewX:33.3,skewY:38.3,x:21.1,y:24.2},0).wait(3).to({scaleX:1,scaleY:1,skewX:-5.2,skewY:0,x:25.2,y:29},0).wait(3).to({skewX:-5,x:18.6},0).wait(3).to({skewX:-5.2,x:15.3},0).wait(3).to({skewX:-5.1,x:12.2},0).wait(3));

	// Level 12
	this.instance_10 = new lib.Symbol32_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-3.1,-1.4,1,1,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({scaleX:1,scaleY:1,y:-1.8},0).wait(3).to({scaleX:1,scaleY:1,y:-2},0).wait(3).to({y:-1.7},0).wait(3).to({y:-1.4},0).wait(3).to({scaleX:1,scaleY:1,y:-1.8},0).wait(3).to({scaleX:1,scaleY:1,y:-2},0).wait(3).to({y:-1.7},0).wait(3));

	// Level 11
	this.instance_11 = new lib.Symbol10_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(23.2,-10.5,0.999,0.999,-9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({rotation:-5,x:22.9,y:-10.3},0).wait(3).to({rotation:-3,x:22.8},0).wait(3).to({rotation:-5,x:22.9},0).wait(3).to({rotation:-9.6,x:23.2,y:-10.5},0).wait(3).to({rotation:-5,x:22.9,y:-10.3},0).wait(3).to({rotation:-3,x:22.8},0).wait(3).to({rotation:-5,x:22.9},0).wait(3));

	// Level 10
	this.instance_12 = new lib.Symbol9("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-26.9,-13,0.999,0.999,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({rotation:8.8,x:-27.8,y:-12.4},0).wait(3).to({scaleX:1,scaleY:1,rotation:0,x:-28.2,y:-12},0).wait(3).to({scaleX:1,scaleY:1,rotation:8.8,x:-27.8,y:-12.4},0).wait(3).to({rotation:26.3,x:-26.9,y:-13},0).wait(3).to({rotation:8.8,x:-27.8,y:-12.4},0).wait(3).to({scaleX:1,scaleY:1,rotation:0,x:-28.2,y:-12},0).wait(3).to({scaleX:1,scaleY:1,rotation:8.8,x:-27.8,y:-12.4},0).wait(3));

	// Level 9
	this.instance_13 = new lib.Symbol8("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(14.8,1.5,0.999,1.015,0,-25.2,-15.1);
	this.instance_13.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_13.cache(-11,-11,22,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({scaleY:1.01,skewX:-15,skewY:-5,x:14,y:1.3},0).wait(3).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:13.6,y:1.2},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-5,skewY:5,x:13},0).wait(3).to({skewX:4.9,skewY:15,x:12,y:1},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:5.8,skewY:16,x:11.7,y:0.7},0).wait(3).to({skewX:6.6,skewY:16.7,x:11.4},0).wait(3).to({skewX:-13.6,skewY:-3.5,x:13.5,y:1.4},0).wait(3));

	// Level 8
	this.instance_14 = new lib.Symbol7("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(19.4,15.2,0.999,1.015,0,-25.2,-15.1);
	this.instance_14.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_14.cache(-10,-12,20,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({scaleY:1.01,skewX:-15,skewY:-5,x:16.1,y:15.5},0).wait(3).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:14.5,y:15.7},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-5,skewY:5,x:12.6,y:15.6},0).wait(3).to({skewX:4.9,skewY:15,x:9,y:15.3},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-54.9,skewY:-44.6,x:13.3,y:12.8},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-84.7,skewY:-74.6,x:13.9,y:9.7},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-74.5,skewY:-64.2,x:19,y:11.5},0).wait(3));

	// Level 7
	this.instance_15 = new lib.Symbol6("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(21.4,22.7,0.999,1.015,0,-25.2,-15.1);
	this.instance_15.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_15.cache(-9,-11,18,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(3).to({scaleY:1.01,skewX:-15,skewY:-5,x:16.7,y:23.2},0).wait(3).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:14.4,y:23.3},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-5,skewY:5,x:11.9,y:23.1},0).wait(3).to({skewX:4.9,skewY:15,x:7,y:22.6},0).wait(3).to({skewX:-5,skewY:5,x:11.1,y:16.7},0).wait(3).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:14.8,y:16},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-15.1,skewY:-5,x:19.1,y:17.4},0).wait(3));

	// Level 6
	this.instance_16 = new lib.Symbol2("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(25.5,27.7,1,1.016,0,-10.2,0);
	this.instance_16.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_16.cache(-8,-6,15,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3).to({scaleY:1.01,skewX:-10,x:20.6},0).wait(3).to({scaleY:1.02,skewX:-10.2,x:18.1},0).wait(3).to({scaleY:1.01,skewX:-10,x:14.4},0).wait(3).to({scaleY:1.02,skewX:-10.2,x:7},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:28.6,skewY:38.7,x:11.4,y:23.3},0).wait(3).to({scaleY:1.01,skewX:27,skewY:37.1,x:16.6,y:22.2},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:22.3,skewY:32.3,x:21.7,y:23},0).wait(3));

	// Level 5
	this.instance_17 = new lib.Symbol5("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-18.7,0.4,1,1.001,0,-1.8,0);
	this.instance_17.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_17.cache(-11,-15,19,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(3).to({scaleX:1,scaleY:1,skewX:5.5,skewY:7.3,x:-19.7,y:0.9},0).wait(3).to({skewX:9.3,skewY:11.1,x:-20.2,y:1.1},0).wait(3).to({scaleY:1,skewX:-2.5,skewY:-0.5,x:-18.5,y:0.6},0).wait(3).to({skewX:-26.1,skewY:-24.3,x:-15.3,y:-1.8},0).wait(3).to({scaleX:1,scaleY:1,skewX:-35.4,skewY:-33.7,x:-14.4,y:-3.3},0).wait(3).to({scaleX:1,scaleY:1,skewX:-25.6,skewY:-23.8,x:-15.9,y:-2.2},0).wait(3).to({scaleX:1,skewX:-17.6,skewY:-15.8,x:-16.8,y:-1.1},0).wait(3));

	// Level 4
	this.instance_18 = new lib.Symbol4("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-26.9,12,1,1.001,0,-1.8,0);
	this.instance_18.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_18.cache(-10,-11,22,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(3).to({scaleX:1,scaleY:1,skewX:5.5,skewY:7.3,x:-29.7,y:12.3},0).wait(3).to({skewX:9.3,skewY:11.1,x:-31.1,y:12.4},0).wait(3).to({scaleX:1,scaleY:1,skewX:21.1,skewY:22.9,x:-28.7,y:11},0).wait(3).to({scaleX:1,scaleY:1,skewX:16,skewY:17.8,x:-19.1,y:8.8},0).wait(3).to({scaleX:1,skewX:-21.6,skewY:-19.8,x:-15.1,y:10.6},0).wait(3).to({scaleX:1,scaleY:1,skewX:-25.6,skewY:-23.8,x:-18.4,y:12.3},0).wait(3).to({scaleX:1,skewX:-17.6,skewY:-15.8,x:-21.3},0).wait(3));

	// Level 3
	this.instance_19 = new lib.Symbol3("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(-27.8,23.3,1,1.001,0,-1.8,0);
	this.instance_19.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_19.cache(-10,-11,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({scaleX:1,scaleY:1,skewX:5.5,skewY:7.3,x:-32,y:23.5},0).wait(3).to({skewX:9.3,skewY:11.1,x:-34.2,y:23.4},0).wait(3).to({scaleX:1,scaleY:1,skewX:5.8,skewY:7.5,x:-32.3,y:20.2},0).wait(3).to({scaleX:1,scaleY:1,skewX:-1.3,skewY:0.5,x:-21.4,y:16.1},0).wait(3).to({scaleX:1,scaleY:1,skewX:-17.3,skewY:-15.6,x:-12.5,y:19.8},0).wait(3).to({scaleX:1,scaleY:1,skewX:-25.6,skewY:-23.8,x:-14.6,y:23},0).wait(3).to({scaleX:1,skewX:-17.6,skewY:-15.8,x:-19,y:23.2},0).wait(3));

	// Level 2
	this.instance_20 = new lib.Symbol2("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-23.3,27.9,1.118,1.118,0,-1.8,0);
	this.instance_20.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_20.cache(-8,-6,15,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(3).to({x:-29.8},0).wait(3).to({x:-33.2},0).wait(3).to({scaleX:1.12,scaleY:1.12,skewX:23.8,skewY:25.6,x:-32.3,y:25.3},0).wait(3).to({scaleY:1.12,skewX:40.3,skewY:42.1,x:-22.1,y:20.8},0).wait(3).to({scaleX:1.12,skewX:20,skewY:21.8,x:-10.6,y:24.9},0).wait(3).to({scaleX:1.12,scaleY:1.12,skewX:-1.8,skewY:0,x:-11.5,y:27.9},0).wait(3).to({skewX:-1.8,x:-15.4},0).wait(3));

	// Level 1
	this.instance_21 = new lib.Symbol1("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-4.5,29.9,3.958,4.083,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-31.4,96.8,64.3);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 1
	this.instance = new lib.Symbol25("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-9.9,-15.4,24.9,38.9), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 1
	this.instance = new lib.Symbol23("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-1.8,-1.6,3.7,3.3), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 1
	this.instance = new lib.Symbol19("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-4.5,-4.8,9.1,9.5), null);


(lib.Symbol14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 1
	this.instance = new lib.Symbol13_1("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14_1, new cjs.Rectangle(-5.8,-6.8,11.6,14.2), null);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 4
	this.instance = new lib.Symbol27("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-0.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(2).to({y:-2.1},0).wait(2).to({y:-0.6},0).to({_off:true},1).wait(6));

	// Level 2
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,6.6,3.085,3.012,0,0,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(2).to({y:5.9},0).wait(2).to({y:6.8},0).to({_off:true},1).wait(6));

	// Level 1
	this.instance_2 = new lib.Symbol44("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0.3);

	this.instance_3 = new lib.Symbol22("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{y:0.3}}]}).to({state:[{t:this.instance_2,p:{y:0.8}}]},2).to({state:[{t:this.instance_3,p:{y:2.8}}]},2).to({state:[{t:this.instance_3,p:{y:2.1}}]},2).to({state:[{t:this.instance_3,p:{y:3}}]},2).to({state:[{t:this.instance_2,p:{y:0}}]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-15.1,26.1,30.9);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 21
	this.instance = new lib.Symbol49();
	this.instance.parent = this;
	this.instance.setTransform(35.6,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:-16.9},0).wait(3).to({y:-17.1},0).wait(3).to({y:-16.9},0).wait(3).to({y:-16.5},0).wait(3).to({y:-16.9},0).wait(3).to({y:-17.1},0).wait(3).to({y:-16.9},0).wait(3));

	// Level 20
	this.instance_1 = new lib.Symbol5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16.5,-1,0.999,0.999,0,-29.2,-27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({scaleX:1,scaleY:1,skewX:-44.2,skewY:-42.4,x:-15,y:-3},0).wait(3).to({scaleX:1,scaleY:1,skewX:-25.9,skewY:-24.1,x:-17,y:-0.8},0).wait(3).to({scaleX:1,skewX:-17.8,skewY:-16,x:-18.1,y:0},0).wait(3).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:-20.6,y:1.1},0).wait(3).to({scaleX:1,scaleY:1,skewX:6.8,skewY:8.5,x:-22,y:1.4},0).wait(3).to({scaleY:1,skewX:11.2,skewY:13,x:-22.8,y:1.5},0).wait(3).to({scaleY:1,skewX:-1,skewY:1,x:-20.9,y:1.3},0).wait(3));

	// Level 19
	this.instance_2 = new lib.Symbol4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-20,8.6,0.996,0.997,0,30.5,32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({skewX:-24.4,skewY:-22.6,x:-14.4,y:10.1},0).wait(3).to({scaleX:1,scaleY:1,skewX:-25.9,skewY:-24.1,x:-19.5,y:13.1},0).wait(3).to({scaleX:1,skewX:-17.8,skewY:-16,x:-22.6,y:13},0).wait(3).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:-28.5,y:12.7},0).wait(3).to({scaleX:1,scaleY:1,skewX:6.8,skewY:8.5,x:-32.2},0).wait(3).to({scaleY:1,skewX:11.2,skewY:13,x:-33.8,y:12.5},0).wait(3).to({scaleX:1,scaleY:1,skewX:18.8,skewY:20.6,x:-29.8,y:11},0).wait(3));

	// Level 18
	this.instance_3 = new lib.Symbol3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-24.3,17.9,0.994,0.994,0,-2.5,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({scaleX:1,scaleY:1,skewX:-3.3,skewY:-1.3,x:-13,y:20.7},0).wait(3).to({scaleX:1,scaleY:1,skewX:-25.9,skewY:-24.1,x:-15.9,y:23.9},0).wait(3).to({scaleX:1,skewX:-17.8,skewY:-16,x:-20.5,y:24.1},0).wait(3).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:-29.6},0).wait(3).to({scaleX:1,scaleY:1,skewX:6.8,skewY:8.5,x:-34.8,y:24.3},0).wait(3).to({scaleY:1,skewX:11.2,skewY:13,x:-37.3,y:24.4},0).wait(3).to({scaleX:1,scaleY:1,skewX:6.5,skewY:8.3,x:-34.4,y:21.5},0).wait(3));

	// Level 17
	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-23.9,22.7,1.116,1.116,0,31.6,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({skewX:26.3,skewY:28.1,x:-12.2,y:25.7},0).wait(3).to({scaleX:1.12,scaleY:1.12,skewX:-1.8,skewY:0,x:-12.8,y:28.7},0).wait(3).to({skewX:-1.8,x:-16.9,y:28.6},0).wait(3).to({x:-25.1,y:28.7},0).wait(3).to({x:-32,y:28.6},0).wait(3).to({x:-35.3,y:28.7},0).wait(3).to({scaleX:1.12,scaleY:1.12,skewX:18.6,skewY:20.4,x:-33.4,y:26.5},0).wait(3));

	// Level 16
	this.instance_5 = new lib.Symbol8("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(10.8,1.8,0.999,1.011,0,6.1,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({scaleX:1,scaleY:1.01,skewX:10,skewY:18.8,x:10.7},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-1.4,skewY:7.3,x:11.7,y:2.2},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-12.6,skewY:-4,x:12.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-24,skewY:-15.3,x:14.2,y:2.3},0).wait(3).to({scaleY:1.01,skewX:-13.8,skewY:-5,x:12.8,y:2.4},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-8.7,skewY:0,x:12.2,y:2.5},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-3.8,skewY:4.8,x:11.7,y:2.2},0).wait(3));

	// Level 15
	this.instance_6 = new lib.Symbol7("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(7.8,15.9,0.999,1.011,0,6.1,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({scaleX:0.99,scaleY:1,skewX:-60.7,skewY:-52.1,x:9.9,y:12.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-75.9,skewY:-67.2,x:13.2,y:12.3},0).wait(3).to({scaleX:0.99,scaleY:1,skewX:-95.3,skewY:-86.6,x:16.4,y:11.2},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-24,skewY:-15.3,x:18.7,y:16.1},0).wait(3).to({scaleY:1.01,skewX:-13.8,skewY:-5,x:14.9,y:16.4},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-8.7,skewY:0,x:12.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-3.8,skewY:4.8,x:11.2,y:16.2},0).wait(3));

	// Level 14
	this.instance_7 = new lib.Symbol6("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(5.5,23.2,0.999,1.011,0,6.1,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({skewX:-6.3,skewY:2.3,x:10.3,y:18.3},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-8.7,skewY:0,x:14.1,y:17.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-22.1,skewY:-13.3,x:19.1,y:18.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-24,skewY:-15.3,x:20.5,y:23.5},0).wait(3).to({scaleY:1.01,skewX:-13.8,skewY:-5,x:15.2,y:24.4},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-8.7,skewY:0,x:12.6,y:24.6},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-3.8,skewY:4.8,x:10.3,y:24.2},0).wait(3));

	// Level 13
	this.instance_8 = new lib.Symbol2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(6,29,1,1.004,0,-5.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({scaleX:1,scaleY:1,skewX:33.8,skewY:38.8,x:10.5,y:24.6},0).wait(3).to({skewX:41.6,skewY:46.6,x:15.5,y:23.5},0).wait(3).to({scaleY:1,skewX:33.3,skewY:38.3,x:21.1,y:24.2},0).wait(3).to({scaleX:1,scaleY:1,skewX:-5.2,skewY:0,x:25.2,y:29},0).wait(3).to({skewX:-5,x:18.6},0).wait(3).to({skewX:-5.2,x:15.3},0).wait(3).to({skewX:-5.1,x:12.2},0).wait(3));

	// Level 12
	this.instance_9 = new lib.Symbol32_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-3.1,-1.4,1,1,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({scaleX:1,scaleY:1,y:-1.8},0).wait(3).to({scaleX:1,scaleY:1,y:-2},0).wait(3).to({y:-1.7},0).wait(3).to({y:-1.4},0).wait(3).to({scaleX:1,scaleY:1,y:-1.8},0).wait(3).to({scaleX:1,scaleY:1,y:-2},0).wait(3).to({y:-1.7},0).wait(3));

	// Level 11
	this.instance_10 = new lib.Symbol10_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(23.2,-10.1,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({scaleX:1,scaleY:1,y:-10.5},0).wait(3).to({scaleX:1,scaleY:1,y:-10.7},0).wait(3).to({scaleX:1,scaleY:1,x:23.1,y:-10.5},0).wait(3).to({scaleX:1,scaleY:1,x:23.2,y:-10.1},0).wait(3).to({scaleX:1,scaleY:1,y:-10.5},0).wait(3).to({scaleX:1,scaleY:1,y:-10.7},0).wait(3).to({scaleX:1,scaleY:1,x:23.1,y:-10.5},0).wait(3));

	// Level 10
	this.instance_11 = new lib.Symbol9("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-27.7,-13.6,0.999,0.999,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({rotation:8.8,x:-28.5,y:-13},0).wait(3).to({scaleX:1,scaleY:1,rotation:0,x:-28.9,y:-12.6},0).wait(3).to({scaleX:1,scaleY:1,rotation:8.8,x:-28.6,y:-13},0).wait(3).to({rotation:26.3,x:-27.7,y:-13.6},0).wait(3).to({rotation:8.8,x:-28.5,y:-13},0).wait(3).to({scaleX:1,scaleY:1,rotation:0,x:-28.9,y:-12.6},0).wait(3).to({scaleX:1,scaleY:1,rotation:8.8,x:-28.6,y:-13},0).wait(3));

	// Level 9
	this.instance_12 = new lib.Symbol8("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(14.8,1.5,0.999,1.015,0,-25.2,-15.1);
	this.instance_12.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_12.cache(-11,-11,22,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({scaleY:1.01,skewX:-15,skewY:-5,x:14,y:1.3},0).wait(3).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:13.6,y:1.2},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-5,skewY:5,x:13},0).wait(3).to({skewX:4.9,skewY:15,x:12,y:1},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:5.8,skewY:16,x:11.7,y:0.7},0).wait(3).to({skewX:6.6,skewY:16.7,x:11.4},0).wait(3).to({skewX:-13.6,skewY:-3.5,x:13.5,y:1.4},0).wait(3));

	// Level 8
	this.instance_13 = new lib.Symbol7("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(19.4,15.2,0.999,1.015,0,-25.2,-15.1);
	this.instance_13.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_13.cache(-10,-12,20,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({scaleY:1.01,skewX:-15,skewY:-5,x:16.1,y:15.5},0).wait(3).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:14.5,y:15.7},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-5,skewY:5,x:12.6,y:15.6},0).wait(3).to({skewX:4.9,skewY:15,x:9,y:15.3},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-54.9,skewY:-44.6,x:13.3,y:12.8},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-84.7,skewY:-74.6,x:13.9,y:9.7},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-74.5,skewY:-64.2,x:19,y:11.5},0).wait(3));

	// Level 7
	this.instance_14 = new lib.Symbol6("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(21.4,22.7,0.999,1.015,0,-25.2,-15.1);
	this.instance_14.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_14.cache(-9,-11,18,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({scaleY:1.01,skewX:-15,skewY:-5,x:16.7,y:23.2},0).wait(3).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:14.4,y:23.3},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-5,skewY:5,x:11.9,y:23.1},0).wait(3).to({skewX:4.9,skewY:15,x:7,y:22.6},0).wait(3).to({skewX:-5,skewY:5,x:11.1,y:16.7},0).wait(3).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:14.8,y:16},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-15.1,skewY:-5,x:19.1,y:17.4},0).wait(3));

	// Level 6
	this.instance_15 = new lib.Symbol2("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(25.5,27.7,1,1.016,0,-10.2,0);
	this.instance_15.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_15.cache(-8,-6,15,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(3).to({scaleY:1.01,skewX:-10,x:20.6},0).wait(3).to({scaleY:1.02,skewX:-10.2,x:18.1},0).wait(3).to({scaleY:1.01,skewX:-10,x:14.4},0).wait(3).to({scaleY:1.02,skewX:-10.2,x:7},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:28.6,skewY:38.7,x:11.4,y:23.3},0).wait(3).to({scaleY:1.01,skewX:27,skewY:37.1,x:16.6,y:22.2},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:22.3,skewY:32.3,x:21.7,y:23},0).wait(3));

	// Level 5
	this.instance_16 = new lib.Symbol5("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-18.7,0.4,1,1.001,0,-1.8,0);
	this.instance_16.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_16.cache(-11,-15,19,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3).to({scaleX:1,scaleY:1,skewX:5.5,skewY:7.3,x:-19.7,y:0.9},0).wait(3).to({skewX:9.3,skewY:11.1,x:-20.2,y:1.1},0).wait(3).to({scaleY:1,skewX:-2.5,skewY:-0.5,x:-18.5,y:0.6},0).wait(3).to({skewX:-26.1,skewY:-24.3,x:-15.3,y:-1.8},0).wait(3).to({scaleX:1,scaleY:1,skewX:-35.4,skewY:-33.7,x:-14.4,y:-3.3},0).wait(3).to({scaleX:1,scaleY:1,skewX:-25.6,skewY:-23.8,x:-15.9,y:-2.2},0).wait(3).to({scaleX:1,skewX:-17.6,skewY:-15.8,x:-16.8,y:-1.1},0).wait(3));

	// Level 4
	this.instance_17 = new lib.Symbol4("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-26.9,12,1,1.001,0,-1.8,0);
	this.instance_17.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_17.cache(-10,-11,22,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(3).to({scaleX:1,scaleY:1,skewX:5.5,skewY:7.3,x:-29.7,y:12.3},0).wait(3).to({skewX:9.3,skewY:11.1,x:-31.1,y:12.4},0).wait(3).to({scaleX:1,scaleY:1,skewX:21.1,skewY:22.9,x:-28.7,y:11},0).wait(3).to({scaleX:1,scaleY:1,skewX:16,skewY:17.8,x:-19.1,y:8.8},0).wait(3).to({scaleX:1,skewX:-21.6,skewY:-19.8,x:-15.1,y:10.6},0).wait(3).to({scaleX:1,scaleY:1,skewX:-25.6,skewY:-23.8,x:-18.4,y:12.3},0).wait(3).to({scaleX:1,skewX:-17.6,skewY:-15.8,x:-21.3},0).wait(3));

	// Level 3
	this.instance_18 = new lib.Symbol3("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-27.8,23.3,1,1.001,0,-1.8,0);
	this.instance_18.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_18.cache(-10,-11,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(3).to({scaleX:1,scaleY:1,skewX:5.5,skewY:7.3,x:-32,y:23.5},0).wait(3).to({skewX:9.3,skewY:11.1,x:-34.2,y:23.4},0).wait(3).to({scaleX:1,scaleY:1,skewX:5.8,skewY:7.5,x:-32.3,y:20.2},0).wait(3).to({scaleX:1,scaleY:1,skewX:-1.3,skewY:0.5,x:-21.4,y:16.1},0).wait(3).to({scaleX:1,scaleY:1,skewX:-17.3,skewY:-15.6,x:-12.5,y:19.8},0).wait(3).to({scaleX:1,scaleY:1,skewX:-25.6,skewY:-23.8,x:-14.6,y:23},0).wait(3).to({scaleX:1,skewX:-17.6,skewY:-15.8,x:-19,y:23.2},0).wait(3));

	// Level 2
	this.instance_19 = new lib.Symbol2("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(-23.3,27.9,1.118,1.118,0,-1.8,0);
	this.instance_19.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_19.cache(-8,-6,15,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({x:-29.8},0).wait(3).to({x:-33.2},0).wait(3).to({scaleX:1.12,scaleY:1.12,skewX:23.8,skewY:25.6,x:-32.3,y:25.3},0).wait(3).to({scaleY:1.12,skewX:40.3,skewY:42.1,x:-22.1,y:20.8},0).wait(3).to({scaleX:1.12,skewX:20,skewY:21.8,x:-10.6,y:24.9},0).wait(3).to({scaleX:1.12,scaleY:1.12,skewX:-1.8,skewY:0,x:-11.5,y:27.9},0).wait(3).to({skewX:-1.8,x:-15.4},0).wait(3));

	// Level 1
	this.instance_20 = new lib.Symbol1("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-4.5,29.9,3.958,4.083,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-26.1,95.1,59.1);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 25
	this.instance = new lib.Symbol37("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Symbol41("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},50).to({state:[]},2).to({state:[{t:this.instance_1}]},34).to({state:[]},2).wait(24));

	// Level 23
	this.instance_2 = new lib.Symbol16_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(39.6,-21.4,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({scaleX:1,scaleY:1,rotation:-7.8,x:37.4,y:-12},0).wait(2).to({scaleX:1,scaleY:1,rotation:-9.8,x:35.2,y:-2.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:-11.8,x:33.2,y:6.6},0).wait(2).to({scaleX:0.99,scaleY:0.99,rotation:-12.8,x:32.2,y:11.3},0).wait(2).to({scaleX:1,scaleY:1,rotation:-14,x:31.1,y:16.1},0).wait(2).to({rotation:-13.8,x:31.2,y:16},0).to({_off:true},2).wait(91).to({_off:false,scaleX:1,scaleY:1,rotation:-11.8,x:35.7,y:6.6},0).wait(2).to({scaleX:1,scaleY:1,rotation:-9.8,x:40.3,y:-3},0).wait(2).to({scaleX:1,scaleY:1,rotation:-7.8,x:44.8,y:-12.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:-6,x:49.5,y:-22},0).wait(1));

	// Level 22
	this.instance_3 = new lib.Symbol15_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(35.6,-16.5,1,1,-6);

	this.instance_4 = new lib.Symbol36();
	this.instance_4.parent = this;
	this.instance_4.setTransform(27.9,21.3);

	this.instance_5 = new lib.Symbol40();
	this.instance_5.parent = this;
	this.instance_5.setTransform(21.9,24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[]},36).to({state:[{t:this.instance_5}]},2).to({state:[]},34).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_3}]},17).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({scaleX:1,scaleY:1,rotation:-7.8,x:33.6,y:-6.9},0).wait(2).to({scaleX:1,scaleY:1,rotation:-9.8,x:31.7,y:2.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:-11.8,x:29.7,y:11.8},0).wait(2).to({scaleX:0.99,scaleY:0.99,rotation:-12.8,x:28.7,y:16.6},0).wait(2).to({scaleX:1,scaleY:1,rotation:-14,x:27.8,y:21.5},0).wait(2).to({rotation:-13.8,x:27.9,y:21.3},0).to({_off:true},2).wait(91).to({_off:false,scaleX:1,scaleY:1,rotation:-11.8,x:32.3,y:11.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:-9.8,x:36.8,y:2.1},0).wait(2).to({scaleX:1,scaleY:1,rotation:-7.8,x:41.2,y:-7.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:-6,x:45.5,y:-17.1},0).wait(1));

	// Level 21
	this.instance_6 = new lib.Symbol5("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-16.5,-1,0.999,0.999,0,-29.2,-27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({scaleX:1,scaleY:1,skewX:-1.7,skewY:-0.5,x:-21.4,y:1.1},0).wait(2).to({scaleX:1,scaleY:1,skewX:-2.5,skewY:-1.5,x:-21.9,y:1},0).wait(2).to({scaleX:1,scaleY:1,skewX:-3.5,skewY:-2.8,x:-22.5,y:0.9},0).wait(2).to({skewX:-4,skewY:-3.5,x:-22.8,y:0.7},0).wait(2).to({scaleX:1,scaleY:1,skewX:-4.5,skewY:-4.3,x:-23.1,y:0.6},0).wait(2).to({scaleX:1,scaleY:1,rotation:-5,skewX:0,skewY:0,x:-23.3,y:0.5},0).wait(93).to({scaleX:1,scaleY:1,rotation:0,skewX:-20.6,skewY:-20.3,x:-17.8,y:-0.5},0).wait(2).to({skewX:-33.9,skewY:-33.1,x:-12.6,y:-1.8},0).wait(2).to({scaleX:1,skewX:-37.8,skewY:-36.6,x:-8.7,y:-2.3},0).wait(2).to({scaleX:1,scaleY:1,skewX:-25.9,skewY:-24.1,x:-7.1,y:-0.8},0).wait(1));

	// Level 20
	this.instance_7 = new lib.Symbol4("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-20,8.6,0.996,0.997,0,30.5,32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({scaleX:0.99,scaleY:0.99,skewX:-4.6,skewY:-3.3,x:-28.9,y:13.8},0).wait(2).to({scaleX:0.99,skewX:-4.8,skewY:-3.8,x:-29.3},0).wait(2).to({scaleY:0.99,skewX:-5.3,skewY:-4.6,x:-29.5,y:13.9},0).wait(2).to({scaleX:0.99,scaleY:1,skewX:-5.5,skewY:-5,x:-29.6,y:13.8},0).wait(2).to({skewX:-5.8,skewY:-5.5,x:-29.8,y:13.9},0).wait(2).to({scaleX:1,scaleY:1,rotation:-6.1,skewX:0,skewY:0,y:13.8},0).wait(93).to({scaleX:0.99,scaleY:1,rotation:0,skewX:-3.8,skewY:-3.5,x:-22.3,y:12.2},0).wait(2).to({scaleY:0.99,skewX:12,skewY:12.8,x:-16.5,y:9},0).wait(2).to({scaleX:1,scaleY:1,skewX:-22.7,skewY:-21.5,x:-9.7,y:10.8},0).wait(2).to({scaleX:1,scaleY:1,skewX:-25.9,skewY:-24.1,x:-9.6,y:13.1},0).wait(1));

	// Level 19
	this.instance_8 = new lib.Symbol3("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-24.3,17.9,0.994,0.994,0,-2.5,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({rotation:-5,skewX:0,skewY:0,x:-29.9,y:24.5},0).wait(2).to({scaleX:0.99,scaleY:0.99,rotation:-5.1,x:-30},0).wait(2).to({rotation:-5.3,x:-30.1},0).wait(2).to({rotation:-5.5},0).wait(2).to({rotation:-5.8,x:-30},0).wait(2).to({scaleX:0.99,scaleY:0.99,rotation:-6.1,x:-30.1},0).wait(93).to({rotation:0,skewX:-10.8,skewY:-10.5,x:-23.6,y:20.4},0).wait(2).to({scaleX:1,scaleY:1,skewX:-15.8,skewY:-15,x:-17.9,y:18.5},0).wait(2).to({scaleX:1,skewX:-20.8,skewY:-19.5,x:-9.2,y:19.8},0).wait(2).to({scaleX:1,scaleY:1,skewX:-25.9,skewY:-24.1,x:-6,y:23.9},0).wait(1));

	// Level 18
	this.instance_9 = new lib.Symbol2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-23.9,22.7,1.116,1.116,0,31.6,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({skewX:0,skewY:0,x:-27.1,y:27.9},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(95).to({scaleX:1.12,scaleY:1.12,skewX:21.3,skewY:21.6,x:-23.4,y:24.5},0).wait(2).to({skewX:35.6,skewY:36.3,x:-15.5,y:22.3},0).wait(2).to({scaleX:1.12,scaleY:1.12,skewX:17.9,skewY:19.1,x:-6.3,y:24.7},0).wait(2).to({scaleX:1.12,scaleY:1.12,skewX:-1.8,skewY:0,x:-2.9,y:28.7},0).wait(1));

	// Level 17
	this.instance_10 = new lib.Symbol8("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(10.8,1.8,0.999,1.011,0,6.1,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({scaleX:1,scaleY:1.01,skewX:19.5,skewY:28.3,x:7,y:6.2},0).wait(2).to({scaleX:0.99,scaleY:1.01,skewX:33.1,skewY:41.8,x:3.3,y:10.4},0).wait(2).to({scaleX:0.99,scaleY:1,skewX:46.6,skewY:55.4,x:-0.1,y:14.3},0).wait(2).to({scaleY:1,skewX:53.4,skewY:62.2,x:-1.7,y:16.4},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:60,skewY:68.7,x:-3.2,y:18.5},0).wait(40).to({x:-3.8,y:18.2},0).wait(2).to({skewX:59.2,skewY:67.9,x:-3.9,y:18.1},0).wait(34).to({skewX:60,skewY:68.7,x:-3.8,y:18.2},0).wait(2).to({x:-3.2,y:18.5},0).wait(17).to({scaleX:1,scaleY:1.01,skewX:50.9,skewY:59.6,x:2.3,y:14},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:41.8,skewY:50.4,x:8,y:9.7},0).wait(2).to({scaleY:1.01,skewX:20.1,skewY:28.8,x:14.6,y:6.3},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-1.4,skewY:7.3,x:21.6,y:2.2},0).wait(1));

	// Level 16
	this.instance_11 = new lib.Symbol7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(7.8,15.9,0.999,1.011,0,6.1,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2).to({scaleX:1,scaleY:1.01,skewX:-22.3,skewY:-13.6,x:6.2,y:18.7},0).wait(2).to({scaleX:0.99,scaleY:1,skewX:-50.9,skewY:-42.1,x:4.1,y:19.8},0).wait(2).to({scaleX:0.99,skewX:-79.5,skewY:-70.7,x:1,y:19.6},0).wait(2).to({scaleX:0.99,scaleY:1.01,skewX:-93.5,skewY:-85,x:-1.2,y:19.3},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-107.8,skewY:-99.1,x:-4,y:19.2},0).wait(40).to({scaleX:1,skewX:-111.5,skewY:-102.8,x:-4.7,y:19.9},0).wait(2).to({skewX:-113.3,skewY:-104.6,x:-5,y:20.2},0).wait(34).to({skewX:-112,skewY:-103.3,x:-4.8,y:20},0).wait(2).to({scaleX:1,skewX:-107.8,skewY:-99.1,x:-4,y:19.2},0).wait(17).to({scaleX:0.99,scaleY:1.01,skewX:-84.5,skewY:-75.9,x:1.1,y:17.7},0).wait(2).to({skewX:-61.2,skewY:-52.6,x:4.9,y:16},0).wait(2).to({skewX:-68.7,skewY:-59.9,x:14,y:14.2},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-75.9,skewY:-67.2,x:23.1,y:12.3},0).wait(1));

	// Level 15
	this.instance_12 = new lib.Symbol6("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(5.5,23.2,0.999,1.011,0,6.1,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({scaleX:1,scaleY:1.01,skewX:-14.8,skewY:-6.3,x:4.8,y:25.4},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-35.8,skewY:-27.3,x:4,y:26.6},0).wait(2).to({scaleX:0.99,scaleY:1,skewX:-56.9,skewY:-48.4,x:2.8,y:27},0).wait(2).to({scaleX:0.99,skewX:-67.7,skewY:-58.9,x:2,y:26.9},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-78.2,skewY:-69.5,x:0.9,y:26.5},0).wait(40).to({skewX:-81.9,skewY:-73.2,x:0.7,y:26.8},0).wait(2).to({skewX:-83.7,skewY:-75,x:0.6,y:27},0).wait(34).to({skewX:-82.5,skewY:-73.8,x:0.7,y:26.9},0).wait(2).to({skewX:-78.2,skewY:-69.5,x:0.9,y:26.5},0).wait(17).to({scaleX:0.99,scaleY:1,skewX:-45.4,skewY:-36.6,x:2.9,y:26},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-12.8,skewY:-4,x:3.6,y:23.8},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-10.6,skewY:-2,x:13.9,y:20.8},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-8.7,skewY:0,x:24,y:17.9},0).wait(1));

	// Level 14
	this.instance_13 = new lib.Symbol2("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(6,29,1,1.004,0,-5.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({skewX:-5},0).wait(2).to({scaleY:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({scaleY:1,skewX:-5.2},0).wait(95).to({skewX:-5.1},0).wait(2).to({skewX:-5.2},0).wait(2).to({scaleX:1,scaleY:1,skewX:18.1,skewY:23.3,x:15.8,y:26.3},0).wait(2).to({skewX:41.6,skewY:46.6,x:25.4,y:23.5},0).wait(1));

	// Level 13
	this.instance_14 = new lib.Symbol12_1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-3.1,-1.4,1,1,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(2).to({scaleX:1,scaleY:1,rotation:4.8,x:-5.3,y:1.1},0).wait(2).to({scaleX:1,scaleY:1,rotation:14,x:-7.5,y:3.6},0).wait(2).to({scaleX:1,scaleY:1,rotation:23.3,x:-9.7,y:6.2},0).wait(2).to({scaleX:1,scaleY:1,rotation:28.1,x:-10.8,y:7.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:32.8,x:-12,y:8.7},0).wait(40).to({rotation:32.9,x:-12.1,y:8.5},0).wait(2).to({x:-12.3,y:8.4},0).wait(34).to({x:-12.1,y:8.5},0).wait(2).to({rotation:32.8,x:-12,y:8.7},0).wait(17).to({scaleX:1,scaleY:1,rotation:23.5,x:-7.3,y:6.1},0).wait(2).to({scaleX:1,scaleY:1,rotation:14.3,x:-2.6,y:3.4},0).wait(2).to({scaleX:1,scaleY:1,rotation:4.8,x:2.2,y:0.7},0).wait(2).to({scaleX:1,scaleY:1,rotation:-4.3,x:6.8,y:-2},0).wait(1));

	// Level 12
	this.instance_15 = new lib.Symbol11_1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-3.1,-1.4,1,1,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(2).to({scaleX:1,scaleY:1,rotation:4.8,x:-5.3,y:1.1},0).wait(2).to({scaleX:1,scaleY:1,rotation:14,x:-7.5,y:3.6},0).wait(2).to({scaleX:1,scaleY:1,rotation:23.3,x:-9.7,y:6.2},0).wait(2).to({scaleX:1,scaleY:1,rotation:28.1,x:-10.8,y:7.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:32.8,x:-12,y:8.7},0).wait(40).to({rotation:32.9},0).wait(38).to({rotation:32.8},0).wait(17).to({scaleX:1,scaleY:1,rotation:23.5,x:-7.3,y:6.1},0).wait(2).to({scaleX:1,scaleY:1,rotation:14.3,x:-2.6,y:3.4},0).wait(2).to({scaleX:1,scaleY:1,rotation:4.8,x:2.2,y:0.7},0).wait(2).to({scaleX:1,scaleY:1,rotation:-4.3,x:6.8,y:-2},0).wait(1));

	// Level 11
	this.instance_16 = new lib.Symbol10_1("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(23.2,-10.1,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(2).to({scaleX:1,scaleY:1,rotation:7.3,x:19.4,y:-3.3},0).wait(2).to({scaleX:1,scaleY:1,rotation:20.8,x:15.6,y:3.6},0).wait(2).to({scaleX:0.99,scaleY:0.99,rotation:34.3,x:11.8,y:10.5},0).wait(2).to({rotation:41.1,x:10,y:13.9},0).wait(2).to({scaleX:1,scaleY:1,rotation:48.7,x:11.2,y:18.4},0).wait(2).to({scaleX:1,scaleY:1,rotation:47.9,x:11.3},0).wait(40).to({x:11,y:18.3},0).wait(34).to({x:11.3,y:18.4},0).wait(19).to({scaleX:1,scaleY:1,rotation:34.3,x:17.7,y:10.6},0).wait(2).to({scaleX:1,scaleY:1,rotation:20.8,x:24,y:2.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:7.3,x:30,y:-5},0).wait(2).to({scaleX:1,scaleY:1,rotation:-6,x:33.1,y:-10.7},0).wait(1));

	// Level 10
	this.instance_17 = new lib.Symbol9("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-27.7,-13.6,0.999,0.999,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(2).to({scaleX:1,scaleY:1,rotation:35.6,x:-26.8,y:-14.4},0).wait(2).to({scaleX:0.99,scaleY:0.99,rotation:44.9,x:-26,y:-15},0).wait(2).to({scaleX:0.99,scaleY:0.99,rotation:54.2,x:-25,y:-15.6},0).wait(2).to({scaleX:0.99,scaleY:0.99,rotation:58.9,x:-24.5,y:-15.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:63.4,x:-24.1,y:-15.9},0).wait(95).to({scaleX:1,scaleY:1,rotation:47.6,x:-23,y:-15.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:31.6,x:-22,y:-14.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:15.8,x:-20.7,y:-13.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:0,x:-19,y:-12.6},0).wait(1));

	// Level 9
	this.instance_18 = new lib.Symbol8("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(14.8,1.5,0.999,1.015,0,-25.2,-15.1);
	this.instance_18.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_18.cache(-11,-11,22,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(2).to({scaleX:1,scaleY:1.01,skewX:-36.1,skewY:-26.1,x:11.9,y:6.2},0).wait(2).to({scaleX:0.99,scaleY:1.01,skewX:-47.1,skewY:-37.1,x:9,y:10.8},0).wait(2).to({scaleX:0.99,scaleY:1.01,skewX:-58.2,skewY:-48.1,x:6,y:15.2},0).wait(2).to({scaleY:1.01,skewX:-63.7,skewY:-53.7,x:4.5,y:17.4},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-69.3,skewY:-59.1,x:3,y:19.3},0).wait(95).to({scaleX:0.99,scaleY:1.01,skewX:-54.4,skewY:-44.4,x:8.4,y:15.2},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-39.6,skewY:-29.6,x:13.5,y:10.8},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-24.8,skewY:-14.8,x:18.5,y:6.2},0).wait(2).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:23.5,y:1.2},0).wait(1));

	// Level 8
	this.instance_19 = new lib.Symbol7("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(19.4,15.2,0.999,1.015,0,-25.2,-15.1);
	this.instance_19.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_19.cache(-10,-12,20,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(2).to({scaleX:1,scaleY:1.01,skewX:-38.9,skewY:-28.6,x:17.7,y:17.2},0).wait(2).to({scaleX:0.99,scaleY:1.01,skewX:-52.7,skewY:-42.4,x:15.9,y:18.9},0).wait(2).to({scaleX:0.99,skewX:-66.7,skewY:-56.4,x:13.8,y:20.3},0).wait(2).to({scaleX:0.99,scaleY:1.01,skewX:-73.5,skewY:-63.2,x:12.6,y:21},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-80.2,skewY:-70.1,x:11.4,y:21.6},0).wait(95).to({scaleX:1,scaleY:1.01,skewX:-62.7,skewY:-52.6,x:15.3,y:20.8},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-45.1,skewY:-35.1,x:18.6,y:19.6},0).wait(2).to({scaleX:1,skewX:-27.6,skewY:-17.5,x:21.5,y:18},0).wait(2).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:24.4,y:15.7},0).wait(1));

	// Level 7
	this.instance_20 = new lib.Symbol6("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(21.4,22.7,0.999,1.015,0,-25.2,-15.1);
	this.instance_20.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_20.cache(-9,-11,18,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(2).to({scaleX:1,scaleY:1.01,skewX:-38.9,skewY:-28.6,x:21,y:23.6},0).wait(2).to({scaleX:0.99,scaleY:1.01,skewX:-52.7,skewY:-42.4,x:20.5,y:24},0).wait(2).to({scaleX:0.99,skewX:-66.7,skewY:-56.4,x:19.8,y:24.3},0).wait(2).to({scaleX:0.99,scaleY:1.01,skewX:-73.5,skewY:-63.2,x:19.3},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-80.2,skewY:-70.1,x:18.6},0).wait(95).to({scaleX:1,scaleY:1.01,skewX:-62.7,skewY:-52.6,x:20.6,y:24.7},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-45.1,skewY:-35.1,x:22.1},0).wait(2).to({scaleX:1,skewX:-27.6,skewY:-17.5,x:23.3,y:24.3},0).wait(2).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:24.3,y:23.3},0).wait(1));

	// Level 6
	this.instance_21 = new lib.Symbol2("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(25.5,27.7,1,1.016,0,-10.2,0);
	this.instance_21.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_21.cache(-8,-6,15,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(2).to({scaleY:1.01,skewX:-10},0).wait(2).to({scaleY:1.01},0).wait(2).to({startPosition:0},0).wait(2).to({scaleY:1.01},0).wait(2).to({scaleY:1.02,skewX:-10.2},0).wait(95).to({scaleY:1.01,skewX:-10,x:26.1},0).wait(2).to({x:26.8},0).wait(2).to({x:27.4},0).wait(2).to({scaleY:1.02,skewX:-10.2,x:28},0).wait(1));

	// Level 5
	this.instance_22 = new lib.Symbol5("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-18.7,0.4,1,1.001,0,-1.8,0);
	this.instance_22.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_22.cache(-11,-15,19,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(2).to({scaleY:1,skewX:-3.3,skewY:-1.5,x:-19.5,y:0.3},0).wait(2).to({scaleX:1,skewX:-4.8,skewY:-3,x:-20.3,y:0.1},0).wait(2).to({scaleY:1,skewX:-6.3,skewY:-4.6,x:-21,y:0},0).wait(2).to({skewX:-7.3,skewY:-5.5,x:-21.3,y:-0.1},0).wait(2).to({scaleX:1,scaleY:1,skewX:-8.3,skewY:-6.5,x:-21.6,y:0},0).wait(95).to({scaleX:1,skewX:-4,skewY:-2,x:-18.7,y:0.4},0).wait(2).to({skewX:0.3,skewY:2.3,x:-15.9,y:0.7},0).wait(2).to({skewX:4.8,skewY:6.5,x:-13.1,y:1},0).wait(2).to({skewX:9.3,skewY:11.1,x:-10.3,y:1.1},0).wait(1));

	// Level 4
	this.instance_23 = new lib.Symbol4("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(-26.9,12,1,1.001,0,-1.8,0);
	this.instance_23.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_23.cache(-10,-11,22,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(2).to({scaleY:1,skewX:-3.3,skewY:-1.5,x:-27.3},0).wait(2).to({scaleX:1,skewX:-4.8,skewY:-3,x:-27.8},0).wait(2).to({scaleY:1,skewX:-6.3,skewY:-4.6,x:-28.3,y:12.1},0).wait(2).to({skewX:-7.3,skewY:-5.5,x:-28.4,y:12.2},0).wait(2).to({scaleX:1,scaleY:1,skewX:-8.3,skewY:-6.5,x:-28.5,y:12.4},0).wait(95).to({scaleX:1,skewX:-4,skewY:-2,x:-26.6,y:12.5},0).wait(2).to({skewX:0.3,skewY:2.3,x:-24.8},0).wait(2).to({skewX:4.8,skewY:6.5,x:-23,y:12.4},0).wait(2).to({skewX:9.3,skewY:11.1,x:-21.2},0).wait(1));

	// Level 3
	this.instance_24 = new lib.Symbol3("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(-27.8,23.3,1,1.001,0,-1.8,0);
	this.instance_24.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_24.cache(-10,-11,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(2).to({scaleY:1,skewX:-3.3,skewY:-1.5,x:-27.9,y:23.5},0).wait(2).to({scaleX:1,skewX:-4.8,skewY:-3},0).wait(2).to({scaleY:1,skewX:-6.3,skewY:-4.6,x:-28.1},0).wait(2).to({skewX:-7.3,skewY:-5.5,x:-28.2,y:23.6},0).wait(2).to({scaleX:1,scaleY:1,skewX:-8.3,skewY:-6.5,x:-28.1,y:23.8},0).wait(95).to({scaleX:1,skewX:-4,skewY:-2,x:-27},0).wait(2).to({skewX:0.3,skewY:2.3,x:-26.1,y:23.7},0).wait(2).to({skewX:4.8,skewY:6.5,x:-25,y:23.5},0).wait(2).to({skewX:9.3,skewY:11.1,x:-24.3,y:23.4},0).wait(1));

	// Level 2
	this.instance_25 = new lib.Symbol2("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(-23.3,27.9,1.118,1.118,0,-1.8,0);
	this.instance_25.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_25.cache(-8,-6,15,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(2).to({x:-23.2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({x:-23.3},0).wait(95).to({x:-23.2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({x:-23.3},0).wait(1));

	// Level 1
	this.instance_26 = new lib.Symbol1("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(-4.5,29.9,3.958,4.083,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(2).to({y:30},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({y:29.9},0).wait(95).to({x:-4.4,y:30},0).wait(2).to({y:29.9},0).wait(2).to({x:-4.5,y:30},0).wait(2).to({y:29.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-30.6,97.2,63.6);


(lib.Symbol28_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 6
	this.instance = new lib.Symbol27("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:-0.2},0).wait(2).to({y:-0.4},0).wait(2).to({y:-0.2},0).wait(2));

	// Level 4
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.4,7.2,0.275,0.309,0,1.9,0);
	this.instance_1.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 51, 51, 51, 0)];
	this.instance_1.cache(-12,-17,29,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({skewX:1.8,y:6.3},0).wait(2).to({skewX:1.9,y:5.4},0).wait(2).to({skewX:1.8,y:6.3},0).wait(2));

	// Level 2
	this.instance_2 = new lib.Symbol24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,7.4,3.085,3.012,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({scaleX:3.08,skewY:0,y:6.8},0).wait(2).to({scaleX:3.09,skewY:-0.1,y:6.4},0).wait(2).to({scaleX:3.08,skewY:0,y:6.9},0).wait(2));

	// Level 1
	this.instance_3 = new lib.Symbol22("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({y:3.1},0).wait(2).to({y:2.6},0).wait(2).to({y:3.1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-15.4,26.1,33.5);


(lib.Symbol17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 4
	this.instance = new lib.Symbol16_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(4,-4.9,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1,scaleY:1,rotation:-8.3,x:3.9,y:-5.3},0).wait(2).to({rotation:-10.8,x:3.8,y:-5.8},0).wait(2).to({rotation:-8.3,x:3.9,y:-5.3},0).wait(2));

	// Level 3
	this.instance_1 = new lib.Symbol15_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({scaleX:1,scaleY:1,rotation:-8.3,x:0.1,y:-0.2},0).wait(2).to({rotation:-10.8,x:0.2,y:-0.5},0).wait(2).to({rotation:-8.3,y:-0.3},0).wait(2));

	// Level 1
	this.instance_2 = new lib.Symbol14_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.8,5.2,1,1,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({scaleX:1,scaleY:1,rotation:-1.5,y:4.8},0).wait(2).to({rotation:-5,x:2.7,y:4.2},0).wait(2).to({rotation:-1.5,x:2.8,y:4.8},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-14.1,25,28.5);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 25
	this.instance = new lib.Symbol51("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Symbol53("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},6).to({state:[]},2).to({state:[{t:this.instance_1}]},45).to({state:[]},2).wait(13));

	// Level 23
	this.instance_2 = new lib.Symbol16_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(39.6,-21.4,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({scaleX:1,scaleY:1,x:41.4,y:-21.5},0).wait(2).to({x:43.2,y:-21.7},0).to({_off:true},2).wait(49).to({_off:false,x:51.4,y:-22.4},0).wait(2).to({x:55.9,y:-21.7},0).wait(3).to({x:60.5,y:-22.1},0).wait(3).to({x:62.8,y:-21.7},0).wait(3).to({scaleX:1,scaleY:1,x:65,y:-21.4},0).wait(2));

	// Level 22
	this.instance_3 = new lib.Symbol15_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(35.6,-16.5,1,1,-6);

	this.instance_4 = new lib.Symbol52();
	this.instance_4.parent = this;
	this.instance_4.setTransform(37.8,-18.8,0.999,0.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[]},2).to({state:[{t:this.instance_4}]},2).to({state:[]},45).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},3).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({scaleX:1,scaleY:1,x:37.4,y:-16.6},0).wait(2).to({x:39.2,y:-16.8},0).to({_off:true},2).wait(49).to({_off:false,x:47.3,y:-17.6},0).wait(2).to({x:51.9,y:-16.8},0).wait(3).to({x:56.4,y:-17.3},0).wait(3).to({x:58.7,y:-16.9},0).wait(3).to({scaleX:1,scaleY:1,x:61,y:-16.5},0).wait(2));

	// Level 21
	this.instance_5 = new lib.Symbol5("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-16.5,-1,0.999,0.999,0,-29.2,-27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({scaleX:1,scaleY:1,skewX:-22.3,skewY:-20.5,x:-15.6,y:-0.3},0).wait(2).to({scaleX:1,scaleY:1,skewX:-6.1,skewY:-4.3,x:-15.4,y:0.7},0).wait(2).to({skewX:-3.8,skewY:-2,x:-14.4,y:0.9},0).wait(2).to({scaleY:1,skewX:-1.8,skewY:0,x:-13.4,y:1.1},0).wait(45).to({scaleY:1,skewX:1.8,skewY:3.5,x:-11.6,y:1.7},0).wait(2).to({scaleX:1,skewX:5.3,skewY:7.1,x:-9.7,y:2.2},0).wait(2).to({skewX:12.7,skewY:14.6,x:-6.3,y:3.1},0).wait(3).to({scaleY:1,skewX:20.3,skewY:22.1,x:-2.3,y:4.1},0).wait(3).to({skewX:-4.3,skewY:-2.5,x:3.6,y:2.4},0).wait(3).to({skewX:-29.2,skewY:-27.4,x:8.9,y:-1},0).wait(2));

	// Level 20
	this.instance_6 = new lib.Symbol4("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-20,8.6,0.996,0.997,0,30.5,32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({scaleY:1,skewX:22.3,skewY:24.1,x:-20.5,y:9.6},0).wait(2).to({scaleX:1,scaleY:1,skewX:-6.1,skewY:-4.3,x:-22.5,y:12.8},0).wait(2).to({skewX:-3.8,skewY:-2,x:-21.9,y:12.7},0).wait(2).to({scaleY:1,skewX:-1.8,skewY:0,x:-21.3},0).wait(45).to({scaleY:1,skewX:1.8,skewY:3.5,x:-20.3},0).wait(2).to({scaleX:1,skewX:5.3,skewY:7.1,x:-19.2,y:12.6},0).wait(2).to({skewX:12.7,skewY:14.6,x:-16.8,y:12.4},0).wait(3).to({scaleY:1,skewX:20.3,skewY:22.1,x:-14.6,y:12.8},0).wait(3).to({scaleX:1,scaleY:1,skewX:25.3,skewY:27.1,x:-4.6,y:10.8},0).wait(3).to({skewX:30.5,skewY:32.3,x:5.4,y:8.6},0).wait(2));

	// Level 19
	this.instance_7 = new lib.Symbol3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-24.3,17.9,0.994,0.994,0,-2.5,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({scaleX:1,scaleY:1,skewX:-2.3,skewY:-0.5,x:-23.9,y:19.5},0).wait(2).to({scaleX:1,scaleY:1,skewX:-6.1,skewY:-4.3,x:-22.7,y:24.3},0).wait(2).to({skewX:-3.8,skewY:-2,x:-22.6,y:24.2},0).wait(2).to({scaleY:1,skewX:-1.8,skewY:0,x:-22.4,y:24.1},0).wait(45).to({scaleY:1,skewX:1.8,skewY:3.5,x:-22,y:23.8},0).wait(2).to({scaleX:1,skewX:5.3,skewY:7.1,x:-21.5,y:23.7},0).wait(2).to({skewX:12.7,skewY:14.6,x:-20.7,y:23.1},0).wait(3).to({scaleY:1,skewX:20.3,skewY:22.1,x:-20.2,y:23},0).wait(3).to({scaleX:1,scaleY:1,skewX:8.8,skewY:10.6,x:-9.4,y:20.4},0).wait(3).to({scaleX:0.99,scaleY:0.99,skewX:-2.5,skewY:-0.7,x:1.1,y:17.9},0).wait(2));

	// Level 18
	this.instance_8 = new lib.Symbol2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-23.9,22.7,1.116,1.116,0,31.6,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({scaleX:1.12,skewX:23.1,skewY:25,x:-22.4,y:24.2},0).wait(2).to({scaleX:1.12,scaleY:1.12,skewX:-1.8,skewY:0,x:-17.9,y:28.7},0).wait(49).to({skewX:-1.8,x:-17.8,y:28.6},0).wait(2).to({x:-17.9},0).wait(2).to({y:28.7},0).wait(6).to({scaleX:1.12,scaleY:1.12,skewX:14.8,skewY:16.6,x:-8.1,y:25.8},0).wait(3).to({scaleY:1.12,skewX:31.6,skewY:33.4,x:1.5,y:22.7},0).wait(2));

	// Level 17
	this.instance_9 = new lib.Symbol8("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(10.8,1.8,0.999,1.011,0,6.1,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({scaleX:1,scaleY:1.01,skewX:13.2,skewY:21.9,x:11.9,y:1.5},0).wait(2).to({skewX:15,skewY:23.6,x:13.6,y:1.3},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-4.8,skewY:3.5,x:17.2,y:2.4},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-8.7,skewY:0,x:19.4,y:2.5},0).wait(45).to({scaleX:1,scaleY:1.01,skewX:4.8,skewY:13.3,x:20.5,y:1.8},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:12.8,skewY:21.1,x:22,y:1.3},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-7.1,skewY:1.5,x:28.5,y:2.2},0).wait(3).to({scaleX:1,skewX:-0.3,skewY:8,x:32.3,y:2.1},0).wait(3).to({skewX:2.8,skewY:11.3,x:34.4,y:2},0).wait(3).to({scaleX:1,skewX:6.1,skewY:14.8,x:36.2,y:1.8},0).wait(2));

	// Level 16
	this.instance_10 = new lib.Symbol7("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(7.8,15.9,0.999,1.011,0,6.1,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({scaleX:1,scaleY:1.01,skewX:-32.9,skewY:-24.2,x:10.6,y:14.2},0).wait(2).to({scaleX:0.99,scaleY:1.01,skewX:-51.6,skewY:-43.1,x:13.8,y:12.3},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-47.5,skewY:-39.1,x:20.6,y:14.7},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-8.7,skewY:0,x:20.1,y:17},0).wait(45).to({scaleX:1,scaleY:1.01,skewX:-40.9,skewY:-32.3,x:22.9,y:15},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-64.9,skewY:-56.6,x:24.2,y:12.9},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-7.1,skewY:1.5,x:28.7,y:16.6},0).wait(3).to({scaleX:1,skewX:-0.3,skewY:8,x:30.9,y:16.3},0).wait(3).to({skewX:2.8,skewY:11.3,x:32.1,y:16.1},0).wait(3).to({scaleX:1,skewX:6.1,skewY:14.8,x:33.2,y:15.9},0).wait(2));

	// Level 15
	this.instance_11 = new lib.Symbol6("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(5.5,23.2,0.999,1.011,0,6.1,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2).to({skewX:2.3,skewY:11,x:7.3,y:21.1},0).wait(2).to({skewX:-1.3,skewY:7.3,x:12.7,y:19},0).wait(2).to({skewX:-4.8,skewY:3.5,x:19.3,y:20.7},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-8.7,skewY:0,x:19.8,y:24.6},0).wait(45).to({scaleY:1.01,skewX:-8.3,skewY:0.3,x:21.8,y:21.4},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:-7.8,skewY:0.5,x:24.3,y:21.1},0).wait(2).to({scaleY:1.01,skewX:-7.1,skewY:1.5,x:28.3,y:24.3},0).wait(3).to({scaleX:1,skewX:-0.3,skewY:8,x:29.6,y:23.8},0).wait(3).to({skewX:2.8,skewY:11.3,x:30.3,y:23.5},0).wait(3).to({scaleX:1,skewX:6.1,skewY:14.8,x:30.9,y:23.2},0).wait(2));

	// Level 14
	this.instance_12 = new lib.Symbol2("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(6,29,1,1.004,0,-5.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({scaleX:1,scaleY:1,skewX:21.8,skewY:26.8,x:7.6,y:26},0).wait(2).to({scaleX:1,skewX:34.8,skewY:39.8,x:13.8,y:25.2},0).wait(2).to({skewX:23.5,skewY:28.5,x:21.4,y:26.5},0).wait(2).to({scaleX:1,scaleY:1,skewX:-5.2,skewY:0,x:22.5,y:29},0).wait(45).to({scaleX:1,scaleY:1,skewX:9,skewY:14,x:24,y:27},0).wait(2).to({scaleX:1,scaleY:1,skewX:22.8,skewY:27.8,x:27,y:26.1},0).wait(2).to({scaleX:1,scaleY:1,skewX:-5.2,skewY:0,x:31.4,y:29},0).wait(3).to({skewX:-5.1},0).wait(3).to({skewX:-5},0).wait(3).to({skewX:-5.2},0).wait(2));

	// Level 13
	this.instance_13 = new lib.Symbol12_1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-3.1,-1.4,1,1,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({x:-1.3,y:-1.5},0).wait(2).to({scaleX:1,scaleY:1,x:0.5,y:-1.7},0).wait(2).to({x:2.2,y:-1.8},0).wait(2).to({scaleX:1,scaleY:1,x:4.1,y:-2},0).wait(45).to({scaleX:1,scaleY:1,x:6.4,y:-2.2},0).wait(2).to({x:8.6,y:-2.4},0).wait(2).to({scaleX:1,scaleY:1,x:13.2,y:-1.7},0).wait(3).to({scaleX:1,scaleY:1,x:17.7,y:-2.1},0).wait(3).to({x:20,y:-1.7},0).wait(3).to({scaleX:1,scaleY:1,x:22.3,y:-1.4},0).wait(2));

	// Level 12
	this.instance_14 = new lib.Symbol11_1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-3.1,-1.4,1,1,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(2).to({x:-1.3,y:-1.5},0).wait(2).to({scaleX:1,scaleY:1,x:0.5,y:-1.7},0).wait(2).to({x:2.2,y:-1.8},0).wait(2).to({scaleX:1,scaleY:1,x:4.1,y:-2},0).wait(45).to({scaleX:1,scaleY:1,x:6.4,y:-2.2},0).wait(2).to({x:8.6,y:-2.4},0).wait(2).to({scaleX:1,scaleY:1,x:13.2,y:-1.7},0).wait(3).to({scaleX:1,scaleY:1,x:17.7,y:-2.1},0).wait(3).to({x:20,y:-1.7},0).wait(3).to({scaleX:1,scaleY:1,x:22.3,y:-1.4},0).wait(2));

	// Level 11
	this.instance_15 = new lib.Symbol10_1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(23.2,-10.1,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(2).to({scaleX:1,scaleY:1,x:25,y:-10.3},0).wait(2).to({x:26.7,y:-10.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:-8.8,x:27.9,y:-10.9},0).wait(2).to({scaleX:1,scaleY:1,rotation:-10.8,x:29.2,y:-10.8},0).wait(45).to({rotation:-6,x:32.7,y:-10.9},0).wait(2).to({x:34.9,y:-11.2},0).wait(2).to({x:39.5,y:-10.4},0).wait(3).to({x:44,y:-10.9},0).wait(3).to({x:46.3,y:-10.5},0).wait(3).to({scaleX:1,scaleY:1,x:48.6,y:-10.1},0).wait(2));

	// Level 10
	this.instance_16 = new lib.Symbol9("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-27.7,-13.6,0.999,0.999,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(2).to({scaleX:1,scaleY:1,rotation:19.8,x:-26.2,y:-13.5},0).wait(2).to({rotation:13.1,x:-24.7,y:-13.3},0).wait(2).to({scaleX:1,scaleY:1,rotation:6.5,x:-23.2,y:-13},0).wait(2).to({scaleX:1,scaleY:1,rotation:0,x:-21.7,y:-12.6},0).wait(45).to({scaleX:1,scaleY:1,rotation:3.3,x:-19.3,y:-13},0).wait(2).to({rotation:6.5,x:-16.8,y:-13.5},0).wait(2).to({rotation:13.1,x:-12.1,y:-13.2},0).wait(3).to({scaleX:1,scaleY:1,rotation:19.6,x:-7.2,y:-14},0).wait(3).to({scaleX:1,scaleY:1,rotation:22.8,x:-4.8,y:-13.7},0).wait(3).to({scaleX:1,scaleY:1,rotation:26.3,x:-2.3,y:-13.6},0).wait(2));

	// Level 9
	this.instance_17 = new lib.Symbol8("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(14.8,1.5,0.999,1.015,0,-25.2,-15.1);
	this.instance_17.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_17.cache(-11,-11,22,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(2).to({scaleY:1.01,skewX:-21.3,skewY:-11.3,x:16.3,y:1.4},0).wait(2).to({skewX:-17.5,skewY:-7.5,x:17.8,y:1.3},0).wait(2).to({skewX:-13.8,skewY:-3.8,x:19.2,y:1.2},0).wait(2).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:20.8},0).wait(45).to({scaleY:1.01,skewX:-6.6,skewY:3.3,x:22.3,y:1.3},0).wait(2).to({scaleX:1,skewX:-3,skewY:6.8,x:23.8,y:1.4},0).wait(2).to({skewX:3.7,skewY:13.8,x:26.9,y:1.6},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:4.3,skewY:14.5,x:31.8,y:1.8},0).wait(3).to({scaleX:1,skewX:-23.9,skewY:-13.8,x:37.6,y:1.7},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-25.2,skewY:-15.1,x:40.2,y:1.5},0).wait(2));

	// Level 8
	this.instance_18 = new lib.Symbol7("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(19.4,15.2,0.999,1.015,0,-25.2,-15.1);
	this.instance_18.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_18.cache(-10,-12,20,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(2).to({scaleY:1.01,skewX:-21.3,skewY:-11.3,x:19.9,y:15.4},0).wait(2).to({skewX:-17.5,skewY:-7.5,x:20.5,y:15.5},0).wait(2).to({skewX:-13.8,skewY:-3.8,x:21.1,y:15.6},0).wait(2).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:21.7,y:15.7},0).wait(45).to({scaleY:1.01,skewX:-6.6,skewY:3.3,x:22.3,y:15.8},0).wait(2).to({scaleX:1,skewX:-3,skewY:6.8,x:22.9},0).wait(2).to({skewX:3.7,skewY:13.8,x:24.2,y:15.9},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-83.7,skewY:-73.5,x:33.8,y:10.4},0).wait(3).to({skewX:-77,skewY:-66.9,x:44.7,y:11},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:-25.2,skewY:-15.1,x:44.8,y:15.2},0).wait(2));

	// Level 7
	this.instance_19 = new lib.Symbol6("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(21.4,22.7,0.999,1.015,0,-25.2,-15.1);
	this.instance_19.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_19.cache(-9,-11,18,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(2).to({scaleY:1.01,skewX:-21.3,skewY:-11.3,y:22.9},0).wait(2).to({skewX:-17.5,skewY:-7.5,y:23.1},0).wait(2).to({skewX:-13.8,skewY:-3.8,x:21.5,y:23.3},0).wait(2).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:21.6},0).wait(45).to({scaleY:1.01,skewX:-6.6,skewY:3.3,x:21.8,y:23.4},0).wait(2).to({scaleX:1,skewX:-3,skewY:6.8,x:22},0).wait(2).to({skewX:3.7,skewY:13.8,x:22.4,y:23.3},0).wait(3).to({scaleY:1.01,skewX:-10.8,skewY:-0.5,x:35,y:17.3},0).wait(3).to({skewX:-17.8,skewY:-7.8,x:44.8,y:20.3},0).wait(3).to({scaleY:1.01,skewX:-25.2,skewY:-15.1,x:46.8,y:22.7},0).wait(2));

	// Level 6
	this.instance_20 = new lib.Symbol2("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(25.5,27.7,1,1.016,0,-10.2,0);
	this.instance_20.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_20.cache(-8,-6,15,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(2).to({scaleY:1.01,skewX:-10,x:25.4},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({scaleY:1.02,skewX:-10.2,x:25.3},0).wait(45).to({scaleY:1.01,skewX:-10},0).wait(2).to({startPosition:0},0).wait(2).to({scaleY:1.02,skewX:-10.2},0).wait(3).to({scaleX:1,scaleY:1.01,skewX:18.5,skewY:28.5,x:37.7,y:22.4},0).wait(3).to({scaleX:1,skewX:14,skewY:24.1,x:47,y:24.5},0).wait(3).to({scaleX:1,scaleY:1.02,skewX:-10.2,skewY:0,x:50.9,y:27.7},0).wait(2));

	// Level 5
	this.instance_21 = new lib.Symbol5("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-18.7,0.4,1,1.001,0,-1.8,0);
	this.instance_21.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_21.cache(-11,-15,19,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(2).to({scaleY:1,skewX:0.8,skewY:2.8,x:-17.5,y:0.8},0).wait(2).to({skewX:3.7,skewY:5.5,x:-16.3,y:1.2},0).wait(2).to({scaleX:1,skewX:-6.7,skewY:-4.8,x:-12.5,y:0.3},0).wait(2).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:-11.5,y:0.4},0).wait(45).to({scaleX:1,scaleY:1,skewX:-17,skewY:-15.1,x:-6.7,y:-0.3},0).wait(2).to({scaleX:1,scaleY:1,skewX:-26.3,skewY:-24.5,x:-3.1,y:-1.5},0).wait(2).to({scaleX:1,scaleY:1,skewX:-23.7,skewY:-21.8,x:0.5,y:-1},0).wait(3).to({scaleX:1,skewX:-12.5,skewY:-10.8,x:3.6,y:-0.1},0).wait(3).to({scaleX:1,skewX:-7,skewY:-5.3,x:5.2,y:0.2},0).wait(3).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:6.7,y:0.4},0).wait(2));

	// Level 4
	this.instance_22 = new lib.Symbol4("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-26.9,12,1,1.001,0,-1.8,0);
	this.instance_22.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_22.cache(-10,-11,22,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(2).to({scaleY:1,skewX:0.8,skewY:2.8,x:-26.2},0).wait(2).to({skewX:3.7,skewY:5.5,x:-25.5,y:11.9},0).wait(2).to({scaleX:1,scaleY:1,skewX:-0.4,skewY:1.5,x:-20.3,y:12},0).wait(2).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:-19.7},0).wait(45).to({scaleX:1,scaleY:1,skewX:5.5,skewY:7.5,x:-13.9,y:10.6},0).wait(2).to({scaleX:1,scaleY:1,skewX:1.6,skewY:3.4,x:-5,y:9},0).wait(2).to({scaleX:1,scaleY:1,skewX:-23.7,skewY:-21.8,x:-2.7,y:12.7},0).wait(3).to({scaleX:1,skewX:-12.5,skewY:-10.8,x:-2.3,y:12.5},0).wait(3).to({scaleX:1,skewX:-7,skewY:-5.3,x:-1.9,y:12.3},0).wait(3).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:-1.5,y:12},0).wait(2));

	// Level 3
	this.instance_23 = new lib.Symbol3("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(-27.8,23.3,1,1.001,0,-1.8,0);
	this.instance_23.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_23.cache(-10,-11,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(2).to({scaleY:1,skewX:0.8,skewY:2.8,x:-27.6,y:23.2},0).wait(2).to({skewX:3.7,skewY:5.5,x:-27.5,y:23.1},0).wait(2).to({skewX:0.8,skewY:2.8,x:-21.3,y:20.9},0).wait(2).to({scaleY:1,skewX:-1.8,skewY:0,x:-20.6,y:23.3},0).wait(45).to({scaleX:1,scaleY:1,skewX:-7.3,skewY:-5.3,x:-15.3,y:20.5},0).wait(2).to({scaleY:1,skewX:-12.6,skewY:-10.8,x:-7,y:17},0).wait(2).to({skewX:-23.7,skewY:-21.8,x:0.7,y:23.6},0).wait(3).to({scaleX:1,skewX:-12.5,skewY:-10.8,x:-0.8},0).wait(3).to({scaleX:1,skewX:-7,skewY:-5.3,x:-1.6,y:23.4},0).wait(3).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:-2.4,y:23.3},0).wait(2));

	// Level 2
	this.instance_24 = new lib.Symbol2("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(-23.3,27.9,1.118,1.118,0,-1.8,0);
	this.instance_24.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_24.cache(-8,-6,15,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(6).to({scaleX:1.12,scaleY:1.12,skewX:12.5,skewY:14.3,x:-19.6,y:25.6},0).wait(2).to({scaleX:1.12,scaleY:1.12,skewX:-1.8,skewY:0,x:-16.1,y:27.9},0).wait(45).to({scaleX:1.12,scaleY:1.12,skewX:18.1,skewY:19.8,x:-14,y:24.6},0).wait(2).to({scaleX:1.12,skewX:28.3,skewY:30.1,x:-6.8,y:22.5},0).wait(2).to({scaleX:1.12,scaleY:1.12,skewX:-1.8,skewY:0,x:2.1,y:27.9},0).wait(3).to({skewX:-1.8},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(2));

	// Level 1
	this.instance_25 = new lib.Symbol1("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(-4.5,29.9,3.958,4.083,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(2).to({x:-4.4},0).wait(2).to({x:-4.5,y:30},0).wait(2).to({startPosition:0},0).wait(2).to({y:29.9},0).wait(45).to({x:-4.4,y:30},0).wait(2).to({x:0.6},0).wait(2).to({x:5.6,y:29.9},0).wait(3).to({x:5.5,y:30},0).wait(3).to({x:15.5},0).wait(3).to({x:20.5,y:29.9},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-30.6,97.2,63.6);


(lib.Symbol31_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 26
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(8.7,-6.6,0.511,0.511,0,22.5,-157.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).wait(2).to({x:4,y:-9.2},0).to({_off:true},2).wait(48).to({_off:false},0).wait(2).to({x:8.7,y:-6.6},0).wait(2));

	// Level 25
	this.instance_1 = new lib.Symbol18("synched",0);
	this.instance_1.parent = this;

	this.instance_2 = new lib.Symbol21("synched",0);
	this.instance_2.parent = this;

	this.instance_3 = new lib.Symbol29_1("synched",0);
	this.instance_3.parent = this;

	this.instance_4 = new lib.Symbol30_1("synched",0);
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},44).to({state:[{t:this.instance_2}]},2).to({state:[]},2).to({state:[{t:this.instance_3}]},48).to({state:[{t:this.instance_4}]},2).wait(2));

	// Level 22
	this.instance_5 = new lib.Symbol17_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(2.2,-14.7);

	this.instance_6 = new lib.Symbol28_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-5.7,-19.2,0.998,0.998,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[]},44).to({state:[{t:this.instance_6}]},4).to({state:[]},48).wait(4));

	// Level 21
	this.instance_7 = new lib.Symbol5("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-34.6,15.5,0.998,0.998,0,-149.7,-147.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(100));

	// Level 20
	this.instance_8 = new lib.Symbol4("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-31.2,13.1,1,1,0,-11.5,-9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(100));

	// Level 19
	this.instance_9 = new lib.Symbol3("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-30.4,24.4,1,1,0,-11.5,-9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(100));

	// Level 18
	this.instance_10 = new lib.Symbol2("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-25.1,28.7,1.118,1.118,0,-1.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100));

	// Level 17
	this.instance_11 = new lib.Symbol8("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-14.8,2.5,1,1.012,0,-8.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(44).to({skewX:-8.4,skewY:0.3,x:-14.7},0).wait(2).to({scaleY:1.01,skewX:-8.3,y:2.2},0).wait(2).to({scaleY:1.01,skewX:-8.4,y:1.8},0).wait(48).to({scaleY:1.01,skewX:-8.3,y:2.2},0).wait(2).to({scaleY:1.01,skewX:-8.4,y:2.5},0).wait(2));

	// Level 16
	this.instance_12 = new lib.Symbol7("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-14.1,17,1,1.012,0,-8.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(44).to({skewX:-8.4,skewY:0.3},0).wait(2).to({scaleY:1.01,skewX:-8.3,y:16.8},0).wait(2).to({scaleY:1.01,skewX:-8.4,y:16.5},0).wait(48).to({scaleY:1.01,skewX:-8.3,y:16.8},0).wait(2).to({scaleY:1.01,skewX:-8.4,y:17},0).wait(2));

	// Level 15
	this.instance_13 = new lib.Symbol6("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-14.4,24.6,1,1.012,0,-8.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(44).to({skewX:-8.4,skewY:0.3,y:24.7},0).wait(2).to({scaleY:1.01,skewX:-8.3,y:24.5},0).wait(2).to({scaleY:1.01,skewX:-8.4,y:24.2},0).wait(48).to({scaleY:1.01,skewX:-8.3,y:24.5},0).wait(2).to({scaleY:1.01,skewX:-8.4,y:24.7},0).wait(2));

	// Level 14
	this.instance_14 = new lib.Symbol2("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-11.7,29,1,1.004,0,-5.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(100));

	// Level 13
	this.instance_15 = new lib.Symbol12_1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-22.3,10.8,1,1,-53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(44).to({scaleX:1,scaleY:1,rotation:-52.6,x:-22.4},0).wait(2).to({scaleX:1,scaleY:1,rotation:-54.1,x:-22.1,y:10.7},0).wait(2).to({scaleX:1,scaleY:1,rotation:-55.6,x:-21.9,y:10.5},0).wait(48).to({scaleX:1,scaleY:1,rotation:-54.1,x:-22.1,y:10.7},0).wait(2).to({scaleX:1,scaleY:1,rotation:-52.6,x:-22.4,y:10.8},0).wait(2));

	// Level 12
	this.instance_16 = new lib.Symbol11_1("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-22.3,10.8,1,1,-53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(100));

	// Level 11
	this.instance_17 = new lib.Symbol10_1("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-10.2,-8.3,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(44).to({rotation:-4.2,y:-8},0).wait(2).to({scaleX:1,scaleY:1,rotation:-18.6,x:-10,y:-10.4},0).wait(2).to({rotation:-29.5,x:-10.3,y:-12.2},0).wait(48).to({rotation:-18.6,x:-10,y:-10.4},0).wait(2).to({scaleX:1,scaleY:1,rotation:-4.2,x:-10.2,y:-8},0).wait(2));

	// Level 10
	this.instance_18 = new lib.Symbol9("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-44.4,17.9,0.999,0.999,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(100));

	// Level 9
	this.instance_19 = new lib.Symbol8("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(-13.4,1.2,1,1.016,0,-10.2,0);
	this.instance_19.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_19.cache(-11,-11,22,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(44).to({skewX:-9.6,skewY:0.5,y:1.3},0).wait(56));

	// Level 8
	this.instance_20 = new lib.Symbol7("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-12.5,15.7,1,1.016,0,-10.2,0);
	this.instance_20.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_20.cache(-10,-12,20,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100));

	// Level 7
	this.instance_21 = new lib.Symbol6("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-12.6,23.3,1,1.016,0,-10.2,0);
	this.instance_21.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_21.cache(-9,-11,18,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(100));

	// Level 6
	this.instance_22 = new lib.Symbol2("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-8.9,27.7,1,1.016,0,-10.2,0);
	this.instance_22.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_22.cache(-8,-6,15,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(100));

	// Level 5
	this.instance_23 = new lib.Symbol5("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(-32.9,15.7,0.998,0.998,0,-142.5,-140.7);
	this.instance_23.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_23.cache(-11,-15,19,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(100));

	// Level 4
	this.instance_24 = new lib.Symbol4("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(-27,12,1,1.001,0,-2.1,-0.3);
	this.instance_24.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_24.cache(-10,-11,22,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(100));

	// Level 3
	this.instance_25 = new lib.Symbol3("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(-27.9,23.3,1,1.001,0,-2.1,-0.3);
	this.instance_25.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_25.cache(-10,-11,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(100));

	// Level 2
	this.instance_26 = new lib.Symbol2("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(-23.3,27.9,1.118,1.118,0,-1.8,0);
	this.instance_26.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_26.cache(-8,-6,15,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(100));

	// Level 1
	this.instance_27 = new lib.Symbol1("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(-17.4,29.9,3.325,4.083,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.9,-30.4,75,63.4);


(lib.Symbol55_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 1
	this.instance = new lib.Symbol31_1();
	this.instance.parent = this;
	this.instance.setTransform(226.1,30.9,0.801,0.801,0,0,180);

	this.instance_1 = new lib.Symbol33_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(226.1,30.9,0.8,0.8,0,0,180);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol34_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-19.9,30.9,0.799,0.8);

	this.instance_3 = new lib.Symbol35_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-20,30.9,0.801,0.801);

	this.instance_4 = new lib.Symbol42();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-20,30.9,0.799,0.801);

	this.instance_5 = new lib.Symbol50();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-10,30.9,0.8,0.799);
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol54();
	this.instance_6.parent = this;
	this.instance_6.setTransform(67.5,30.9,0.8,0.801);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{skewY:180,x:226.1}}]}).to({state:[{t:this.instance_1}]},101).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.799,scaleY:0.8,skewY:0,x:-19.9}}]},1).to({state:[{t:this.instance,p:{skewY:0,x:-20}}]},20).to({state:[{t:this.instance_3}]},74).to({state:[{t:this.instance_4}]},16).to({state:[{t:this.instance_5}]},111).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_1}]},67).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.8,scaleY:0.799,skewY:180,x:226.2}}]},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(101).to({_off:false},0).wait(1).to({x:224.3},0).wait(1).to({x:222.5},0).wait(1).to({x:220.7},0).wait(1).to({x:218.9},0).wait(1).to({x:217.1},0).wait(1).to({x:215.3},0).wait(1).to({x:213.5},0).wait(1).to({x:211.6},0).wait(1).to({x:209.8},0).wait(1).to({x:208},0).wait(1).to({x:206.2},0).wait(1).to({x:204.4},0).wait(1).to({x:202.6},0).wait(1).to({x:200.8},0).wait(1).to({x:199},0).wait(1).to({x:197.2},0).wait(1).to({x:195.4},0).wait(1).to({x:193.6},0).wait(1).to({x:191.7},0).wait(1).to({x:189.9},0).wait(1).to({x:188.1},0).wait(1).to({x:186.3},0).wait(1).to({x:184.5},0).wait(1).to({x:182.7},0).wait(1).to({x:180.9},0).wait(1).to({x:179.1},0).wait(1).to({x:177.3},0).wait(1).to({x:175.5},0).wait(1).to({x:173.6},0).wait(1).to({x:171.8},0).wait(1).to({x:170},0).wait(1).to({x:168.2},0).wait(1).to({x:166.4},0).wait(1).to({x:164.6},0).wait(1).to({x:162.8},0).wait(1).to({x:161},0).wait(1).to({x:159.2},0).wait(1).to({x:157.4},0).wait(1).to({x:155.6},0).wait(1).to({x:153.7},0).wait(1).to({x:151.9},0).wait(1).to({x:150.1},0).wait(1).to({x:148.3},0).wait(1).to({x:146.5},0).wait(1).to({x:144.7},0).wait(1).to({x:142.9},0).wait(1).to({x:141.1},0).wait(1).to({x:139.3},0).wait(1).to({x:137.5},0).wait(1).to({x:135.6},0).wait(1).to({x:133.8},0).wait(1).to({x:132},0).wait(1).to({x:130.2},0).wait(1).to({x:128.4},0).wait(1).to({x:126.6},0).wait(1).to({x:124.8},0).wait(1).to({x:123},0).wait(1).to({x:121.2},0).wait(1).to({x:119.4},0).wait(1).to({x:117.6},0).wait(1).to({x:115.7},0).wait(1).to({x:113.9},0).wait(1).to({x:112.1},0).wait(1).to({x:110.3},0).wait(1).to({x:108.5},0).wait(1).to({x:106.7},0).wait(1).to({x:104.9},0).wait(1).to({x:103.1},0).wait(1).to({x:101.3},0).wait(1).to({x:99.5},0).wait(1).to({x:97.6},0).wait(1).to({x:95.8},0).wait(1).to({x:94},0).wait(1).to({x:92.2},0).wait(1).to({x:90.4},0).wait(1).to({x:88.6},0).wait(1).to({x:86.8},0).wait(1).to({x:85},0).wait(1).to({x:83.2},0).wait(1).to({x:81.4},0).wait(1).to({x:79.6},0).wait(1).to({x:77.7},0).wait(1).to({x:75.9},0).wait(1).to({x:74.1},0).wait(1).to({x:72.3},0).wait(1).to({x:70.5},0).wait(1).to({x:68.7},0).wait(1).to({x:66.9},0).wait(1).to({x:65.1},0).wait(1).to({x:63.3},0).wait(1).to({x:61.5},0).wait(1).to({x:59.6},0).wait(1).to({x:57.8},0).wait(1).to({x:56},0).wait(1).to({x:54.2},0).wait(1).to({x:52.4},0).wait(1).to({x:50.6},0).wait(1).to({x:48.8},0).wait(1).to({x:47},0).wait(1).to({x:45.2},0).wait(1).to({x:43.4},0).wait(1).to({x:41.6},0).wait(1).to({x:39.7},0).wait(1).to({x:37.9},0).wait(1).to({x:36.1},0).wait(1).to({x:34.3},0).wait(1).to({x:32.5},0).wait(1).to({x:30.7},0).wait(1).to({x:28.9},0).wait(1).to({x:27.1},0).wait(1).to({x:25.3},0).wait(1).to({x:23.5},0).wait(1).to({x:21.6},0).wait(1).to({x:19.8},0).wait(1).to({x:18},0).wait(1).to({x:16.2},0).wait(1).to({x:14.4},0).wait(1).to({x:12.6},0).wait(1).to({x:10.8},0).wait(1).to({x:9},0).wait(1).to({x:7.2},0).wait(1).to({x:5.4},0).wait(1).to({x:3.5},0).wait(1).to({x:1.7},0).wait(1).to({x:-0.1},0).wait(1).to({x:-1.9},0).wait(1).to({x:-3.7},0).wait(1).to({x:-5.5},0).wait(1).to({x:-7.3},0).wait(1).to({x:-9.1},0).wait(1).to({x:-10.9},0).wait(1).to({x:-12.7},0).wait(1).to({x:-14.5},0).wait(1).to({x:-16.4},0).wait(1).to({x:-18.2},0).wait(1).to({x:-20},0).to({_off:true},1).wait(354).to({_off:false,skewY:0,x:87.8},0).wait(1).to({x:90},0).wait(1).to({x:92.2},0).wait(1).to({x:94.4},0).wait(1).to({x:96.6},0).wait(1).to({x:98.8},0).wait(1).to({x:101},0).wait(1).to({x:103.2},0).wait(1).to({x:105.4},0).wait(1).to({x:107.6},0).wait(1).to({x:109.8},0).wait(1).to({x:112},0).wait(1).to({x:114.2},0).wait(1).to({x:116.4},0).wait(1).to({x:118.6},0).wait(1).to({x:120.8},0).wait(1).to({x:122.9},0).wait(1).to({x:125.1},0).wait(1).to({x:127.3},0).wait(1).to({x:129.5},0).wait(1).to({x:131.7},0).wait(1).to({x:133.9},0).wait(1).to({x:136.1},0).wait(1).to({x:138.3},0).wait(1).to({x:140.5},0).wait(1).to({x:142.7},0).wait(1).to({x:144.9},0).wait(1).to({x:147.1},0).wait(1).to({x:149.3},0).wait(1).to({x:151.5},0).wait(1).to({x:153.7},0).wait(1).to({x:155.9},0).wait(1).to({x:158.1},0).wait(1).to({x:160.3},0).wait(1).to({x:162.5},0).wait(1).to({x:164.7},0).wait(1).to({x:166.9},0).wait(1).to({x:169},0).wait(1).to({x:171.2},0).wait(1).to({x:173.4},0).wait(1).to({x:175.6},0).wait(1).to({x:177.8},0).wait(1).to({x:180},0).wait(1).to({x:182.2},0).wait(1).to({x:184.4},0).wait(1).to({x:186.6},0).wait(1).to({x:188.8},0).wait(1).to({x:191},0).wait(1).to({x:193.2},0).wait(1).to({x:195.4},0).wait(1).to({x:197.6},0).wait(1).to({x:199.8},0).wait(1).to({x:202},0).wait(1).to({x:204.2},0).wait(1).to({x:206.4},0).wait(1).to({x:208.6},0).wait(1).to({x:210.8},0).wait(1).to({x:213},0).wait(1).to({x:215.1},0).wait(1).to({x:217.3},0).wait(1).to({x:219.5},0).wait(1).to({x:221.7},0).wait(1).to({x:223.9},0).wait(1).to({x:226.1},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(459).to({_off:false},0).wait(1).to({x:-8.8},0).wait(1).to({x:-7.6},0).wait(1).to({x:-6.4},0).wait(1).to({x:-5.2},0).wait(1).to({x:-4},0).wait(1).to({x:-2.8},0).wait(1).to({x:-1.6},0).wait(1).to({x:-0.4},0).wait(1).to({x:0.8},0).wait(1).to({x:1.9},0).wait(1).to({x:3.1},0).wait(1).to({x:4.3},0).wait(1).to({x:5.5},0).wait(1).to({x:6.7},0).wait(1).to({x:7.9},0).wait(1).to({x:9.1},0).wait(1).to({x:10.3},0).wait(1).to({x:11.5},0).wait(1).to({x:12.7},0).wait(1).to({x:13.9},0).wait(1).to({x:15.1},0).wait(1).to({x:16.3},0).wait(1).to({x:17.4},0).wait(1).to({x:18.6},0).wait(1).to({x:19.8},0).wait(1).to({x:21},0).wait(1).to({x:22.2},0).wait(1).to({x:23.4},0).wait(1).to({x:24.6},0).wait(1).to({x:25.8},0).wait(1).to({x:27},0).wait(1).to({x:28.2},0).wait(1).to({x:29.4},0).wait(1).to({x:30.6},0).wait(1).to({x:31.8},0).wait(1).to({x:32.9},0).wait(1).to({x:34.1},0).wait(1).to({x:35.3},0).wait(1).to({x:36.5},0).wait(1).to({x:37.7},0).wait(1).to({x:38.9},0).wait(1).to({x:40.1},0).wait(1).to({x:41.3},0).wait(1).to({x:42.5},0).wait(1).to({x:43.7},0).wait(1).to({x:44.9},0).wait(1).to({x:46.1},0).wait(1).to({x:47.3},0).wait(1).to({x:48.4},0).wait(1).to({x:49.6},0).wait(1).to({x:50.8},0).wait(1).to({x:52},0).wait(1).to({x:53.2},0).wait(1).to({x:54.4},0).wait(1).to({x:55.6},0).wait(1).to({x:56.8},0).wait(1).to({x:58},0).wait(1).to({x:59.2},0).wait(1).to({x:60.4},0).wait(1).to({x:61.6},0).wait(1).to({x:62.8},0).wait(1).to({x:63.9},0).wait(1).to({x:65.1},0).wait(1).to({x:66.3},0).wait(1).to({x:67.5},0).to({_off:true},1).wait(152));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(210.1,6.5,60.1,54.9);


// stage content:
(lib.FDog5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Symbol69复制2();
	this.instance.parent = this;
	this.instance.setTransform(-336,611,1.538,1.534,0,0,0,-0.1,0.1);

	this.instance_1 = new lib.Symbol69复制();
	this.instance_1.parent = this;
	this.instance_1.setTransform(127.3,643.9,1.548,1.547,0,0,0,-0.1,-0.2);

	this.instance_2 = new lib.Symbol69();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-175.3,428,1.759,1.751);

	this.instance_3 = new lib.Symbol10_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(642.8,338.2,0.018,0.012,0,0,0,2.7,0);

	this.instance_4 = new lib.Symbol28_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(642.3,338.9,0.018,0.012,0,0,0,2.7,0);

	this.instance_5 = new lib.Symbol55_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(354.7,113.8,1.833,1.826,0,0,0,-0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(725.8,500.9,791.8,601.1);
// library properties:
lib.properties = {
	width: 1334,
	height: 750,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;