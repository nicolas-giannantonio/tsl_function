const blackAndWhite = Fn(([color]) => {
    const gray = color.x.add(color.y).add(color.z).div(3);
    return vec3(gray, gray, gray);
});