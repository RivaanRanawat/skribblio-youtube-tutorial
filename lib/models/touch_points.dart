import 'package:flutter/material.dart';

class TouchPoints {
  Paint paint;
  Offset points;
  TouchPoints({required this.points,required this.paint});

  Map<String, dynamic> toJson() {
    return {
      'point': {'dx': '${points.dx}', "dy": "${points.dy}"}
    };
  }
}