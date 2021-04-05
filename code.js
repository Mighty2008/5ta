var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1073cfe0-57cc-4e74-aa8e-e8888e913e61","e0f3b37e-c01e-4f27-9070-61cd92f03076","6f59a402-3ec3-4b76-b09c-181a599e9567","dba4e814-5907-46c3-835f-c4194a67a550","2747a41f-2772-4365-bb9c-2394e3f465b4","75d8c9b2-fe03-4654-b8b7-4e12470a419b","530d68ad-12ec-42d4-b6a9-f3ca5289f08b","46b80a10-a7d1-4f25-b8fc-49b05b8ed56c","f27fa199-d87d-4dfb-96b5-5a14bdb742cb","33b927a1-de7a-4303-89e1-48774212ff6e","ea83c2be-af21-4482-962a-34b3b4772f86","e8f5e1ba-f86f-4e1c-85d3-83b72419e2ce","5a42f896-8405-4f43-93cd-3126463e36ac"],"propsByKey":{"1073cfe0-57cc-4e74-aa8e-e8888e913e61":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":64,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"HE_Zz0zkiF5KAdnEz_6361Uqx8MG2cC.","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":200},"rootRelativePath":"assets/1073cfe0-57cc-4e74-aa8e-e8888e913e61.png"},"e0f3b37e-c01e-4f27-9070-61cd92f03076":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":21,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"t9tkuJQtBwEYLrKzZ.8SU0h3LKetQ1fy","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":59},"rootRelativePath":"assets/e0f3b37e-c01e-4f27-9070-61cd92f03076.png"},"6f59a402-3ec3-4b76-b09c-181a599e9567":{"name":"cj8_odoI.jpg_1","sourceUrl":null,"frameSize":{"x":290,"y":290},"frameCount":1,"looping":true,"frameDelay":12,"version":"mULm_DtrxdDJ0JHE0aZQLegIDk57F0Lc","loadedFromSource":true,"saved":true,"sourceSize":{"x":290,"y":290},"rootRelativePath":"assets/6f59a402-3ec3-4b76-b09c-181a599e9567.png"},"dba4e814-5907-46c3-835f-c4194a67a550":{"name":"animation_3","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"2747a41f-2772-4365-bb9c-2394e3f465b4":{"name":"cj8_odoI.jpg_2","sourceUrl":null,"frameSize":{"x":240,"y":240},"frameCount":1,"looping":true,"frameDelay":12,"version":"jAi6EfV0GSJc4XJAkpBgePgo845wFeoR","loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":240},"rootRelativePath":"assets/2747a41f-2772-4365-bb9c-2394e3f465b4.png"},"75d8c9b2-fe03-4654-b8b7-4e12470a419b":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":36,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"sRgvhgS6UzQ6r99gu.x5.y3d7LYgCoic","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":60},"rootRelativePath":"assets/75d8c9b2-fe03-4654-b8b7-4e12470a419b.png"},"530d68ad-12ec-42d4-b6a9-f3ca5289f08b":{"name":"animation_5","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"EBvDHeNgj0GbWndCwE9qgoYy7YkecjM0","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/530d68ad-12ec-42d4-b6a9-f3ca5289f08b.png"},"46b80a10-a7d1-4f25-b8fc-49b05b8ed56c":{"name":"animation_5_copy_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"zFzPZ0_QJbUB6cWvWzE5Wx6hzrPNhIJL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/46b80a10-a7d1-4f25-b8fc-49b05b8ed56c.png"},"f27fa199-d87d-4dfb-96b5-5a14bdb742cb":{"name":"an2","sourceUrl":null,"frameSize":{"x":56,"y":57},"frameCount":1,"looping":true,"frameDelay":12,"version":"hXV.EFoOYEr0l6hIfikoSnq5VwvoQlfq","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":57},"rootRelativePath":"assets/f27fa199-d87d-4dfb-96b5-5a14bdb742cb.png"},"33b927a1-de7a-4303-89e1-48774212ff6e":{"name":"a1","sourceUrl":null,"frameSize":{"x":56,"y":57},"frameCount":1,"looping":true,"frameDelay":12,"version":"XUdMl_kglT8f6Fg27xFKZGfdYC9USb.O","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":57},"rootRelativePath":"assets/33b927a1-de7a-4303-89e1-48774212ff6e.png"},"ea83c2be-af21-4482-962a-34b3b4772f86":{"name":"d2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"gPlzI.0PQRbvwk8.sjNUbOvKRweErwUf","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ea83c2be-af21-4482-962a-34b3b4772f86.png"},"e8f5e1ba-f86f-4e1c-85d3-83b72419e2ce":{"name":"d1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"qT4.0Z8FTWyi4kn7wE5d0lWGuMxPDHt7","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/e8f5e1ba-f86f-4e1c-85d3-83b72419e2ce.png"},"5a42f896-8405-4f43-93cd-3126463e36ac":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":97,"y":98},"frameCount":1,"looping":true,"frameDelay":12,"version":"dCEl4EMfA.FZponR.SOfRn3cWidvV1vI","loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":98},"rootRelativePath":"assets/5a42f896-8405-4f43-93cd-3126463e36ac.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

/*var s1=createSprite(380,65,48,350)
s1.shapeColor=rgb(36,37,41)

var s2=createSprite(20,65,48,350)
s2.shapeColor=rgb(36,37,41)

var s=createSprite(200,120)
s.setAnimation("cj8_odoI.jpg_2")
s.scale=1.3*/
var wk1=createSprite(25,318,50,190)
wk1.setAnimation("animation_1");
wk1.scale=0.8

var wk2=createSprite(76,318,50,190)
wk2.setAnimation("animation_1")
wk2.scale=0.8

var wk3=createSprite(126,318,50,190)
wk3.setAnimation("animation_1")
wk3.scale=0.8

var wk4=createSprite(176,318,50,190)
wk4.setAnimation("animation_1")
wk4.scale=0.8

var wk5=createSprite(226,318,50,190)
wk5.setAnimation("animation_1")
wk5.scale=0.8

var wk6=createSprite(276,318,50,190)
wk6.setAnimation("animation_1")
wk6.scale=0.8

var wk7=createSprite(326,318,50,190)
wk7.setAnimation("animation_1")
wk7.scale=0.8

var wk8=createSprite(376,318,50,190)
wk8.setAnimation("animation_1")
wk8.scale=0.8

var bk1=createSprite(40,277,50,190)
bk1.setAnimation("animation_2")
bk1.scale=1.3

var bk2=createSprite(90,277,50,190)
bk2.setAnimation("animation_2")
bk2.scale=1.3

var bk3=createSprite(190,277,50,190)
bk3.setAnimation("animation_2")
bk3.scale=1.3

var bk4=createSprite(240,277,50,190)
bk4.setAnimation("animation_2")
bk4.scale=1.3

var bk5=createSprite(290,277,50,190)
bk5.setAnimation("animation_2")
bk5.scale=1.3

var bk6=createSprite(390,277,50,190)
bk6.setAnimation("animation_2")
bk6.scale=1.3

var d1=createSprite(55,70)
d1.setAnimation("d1")
d1.scale=1.2

var d2=createSprite(350,70)
d2.setAnimation("d2");
d2.scale=1.2

var d3=createSprite(160,70)
d3.setAnimation("a1");
d3.scale=1.3

var d4=createSprite(245,70)
d4.setAnimation("an2");
d4.scale=1.3

var d5=createSprite(310,185)
d5.setAnimation("a1");
d5.scale=1.6

var d6=createSprite(90,185)
d6.setAnimation("an2");
d6.scale=1.6

var d7=createSprite(200,180)
d7.setAnimation("an2");
d7.scale=1.9


function draw() {
  background("black")
  if(mousePressedOver(wk1)){
  playSound("assets/c1.mp3", false);
  }
  
   if(mousePressedOver(wk2)){
  playSound("assets/d.mp3", false);
  }
  
  if(mousePressedOver(wk3)){
  playSound("assets/e.mp3", false);
  }
  
   if(mousePressedOver(wk4)){
  playSound("assets/f.mp3", false);
  }
  
  
  if(mousePressedOver(wk5)){
  playSound("assets/g6.mp3", false);
  }
  
  if(mousePressedOver(wk6)){
  playSound("assets/a.mp3", false);
  }
  
   if(mousePressedOver(wk7)){
  playSound("assets/b1.mp3", false);
  }
  
  if(mousePressedOver(wk8)){
  playSound("assets/c10.mp3", false);
  }
  
  if(mousePressedOver(bk1)){
  playSound("assets/c12.mp3", false);
  stopSound("assets/c1.mp3");
  }
  
   if(mousePressedOver(bk2)){
  playSound("assets/d1.mp3", false);
  stopSound("assets/d.mp3");
  }
  
  if(mousePressedOver(bk3)){
  playSound("assets/f1.mp3", false);
  stopSound("assets/f.mp3");
  }
  
   if(mousePressedOver(bk4)){
  playSound("assets/gr.mp3", false);
  stopSound("assets/g6.mp3");
  }
  
  
  if(mousePressedOver(bk5)){
  playSound("assets/yt.mp3", false);
  stopSound("assets/a.mp3");
  }
  
  if(mousePressedOver(bk6)){
  playSound("assets/uky.mp3", false);
  stopSound("assets/c10.mp3");
  }
  
  //part-2
  if(mousePressedOver(d1)){
  playSound("assets/db1.mp3", false);
  }
  
   if(mousePressedOver(d2)){
  playSound("assets/db2.mp3", false);
  }
  
  if(mousePressedOver(d3)){
  playSound("assets/db3.mp3", false);
  }
  
   if(mousePressedOver(d4)){
  playSound("assets/db4.mp3", false);
  
   }
  
  if(mousePressedOver(d5)){
  playSound("assets/db5.mp3", false);
  } else {
    
  }
  
  if(mousePressedOver(d6)){
  playSound("assets/db8.mp3", false);
  }
  
  if(mousePressedOver(d7)){
  playSound("assets/db6.mp3", false);
  }
  
 drawSprites();
 textSize(30) 
 fill("red")
 text("C",20,350)
 text("D",67,350)
 text("E",120,350)
 text("F",170,350)
 text("G",217,350)
 text("A",267,350)
 text("B",317,350)
 text("C",367,350)
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
