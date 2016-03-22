---
layout: post
title:  "innerloopers"
date:   2016-02-09 13:49:48 -0600
featuredImg: images/innerloopers.png
---
#### About
[http://milena.io/innerloopers/]

I grew up in Houston and it always amazed me how there was never anyone on the streets downtown. I get that it's a car city and that it gets hot as hell outside in the summer, but come on. We're from Texas, we've been groomed to handle heat. 

I got real #symbolic here and mapped walking loops from coffee shops in the city. Things got pretty crazy -- I used the Google Maps and Locations APIs to pinpoint my locations and then randomized paths according to randomly generated waypoints. For example: 

{% highlight ruby %}
for (var i=0; i < polygon.getPath().getLength(); i++) {
        bounds.extend(polygon.getPath().getAt(i));
    }

    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    for (var i = 0; i < 1; i++) {
       var ptLat = Math.random() * (ne.lat() - sw.lat()) + sw.lat();
       var ptLng = Math.random() * (ne.lng() - sw.lng()) + sw.lng();
       var point = new google.maps.LatLng(ptLat,ptLng);
       console.log(point);
       points.push({
          location: point,
          stopover: false
        });
{% endhighlight %}
Ironically, in order to get the paths to be loops, I had to set the travelMode to driving. 



[http://milena.io/innerloopers/]: http://milena.io/innerloopers/