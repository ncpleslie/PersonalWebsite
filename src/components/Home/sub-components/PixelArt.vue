<template>
  <div class="canvas"></div>
</template>

<script>
export default {
  // https://www.pixelartcss.com/
  data() {
    return {
      tableHeight: 50,
      tableWidth: 50,
    };
  },
};
</script>

<style lang="scss" scoped>
.canvas {
  box-shadow: 120px 20px 0 0 rgba(63, 81, 181, 1),
    130px 20px 0 0 rgba(63, 81, 181, 1), 140px 20px 0 0 rgba(63, 81, 181, 1),
    100px 30px 0 0 rgba(63, 81, 181, 1), 110px 30px 0 0 rgba(255, 255, 255, 1),
    120px 30px 0 0 rgba(63, 81, 181, 1), 130px 30px 0 0 rgba(255, 255, 255, 1),
    140px 30px 0 0 rgba(63, 81, 181, 1), 150px 30px 0 0 rgba(255, 255, 255, 1),
    160px 30px 0 0 rgba(63, 81, 181, 1), 90px 40px 0 0 rgba(63, 81, 181, 1),
    100px 40px 0 0 rgba(63, 81, 181, 1), 110px 40px 0 0 rgba(63, 81, 181, 1),
    120px 40px 0 0 rgba(255, 255, 255, 1), 130px 40px 0 0 rgba(255, 255, 255, 1),
    140px 40px 0 0 rgba(255, 255, 255, 1), 150px 40px 0 0 rgba(63, 81, 181, 1),
    160px 40px 0 0 rgba(63, 81, 181, 1), 170px 40px 0 0 rgba(63, 81, 181, 1),
    80px 50px 0 0 rgba(63, 81, 181, 1), 90px 50px 0 0 rgba(63, 81, 181, 1),
    100px 50px 0 0 rgba(63, 81, 181, 1), 110px 50px 0 0 rgba(63, 81, 181, 1),
    120px 50px 0 0 rgba(255, 255, 255, 1), 130px 50px 0 0 rgba(63, 81, 181, 1),
    140px 50px 0 0 rgba(255, 255, 255, 1), 150px 50px 0 0 rgba(63, 81, 181, 1),
    160px 50px 0 0 rgba(63, 81, 181, 1), 170px 50px 0 0 rgba(63, 81, 181, 1),
    180px 50px 0 0 rgba(63, 81, 181, 1), 20px 60px 0 0 rgba(63, 81, 181, 1),
    30px 60px 0 0 rgba(63, 81, 181, 1), 40px 60px 0 0 rgba(63, 81, 181, 1),
    50px 60px 0 0 rgba(63, 81, 181, 1), 60px 60px 0 0 rgba(63, 81, 181, 1),
    70px 60px 0 0 rgba(63, 81, 181, 1), 80px 60px 0 0 rgba(63, 81, 181, 1),
    90px 60px 0 0 rgba(63, 81, 181, 1), 100px 60px 0 0 rgba(63, 81, 181, 1),
    110px 60px 0 0 rgba(63, 81, 181, 1), 120px 60px 0 0 rgba(63, 81, 181, 1),
    130px 60px 0 0 rgba(63, 81, 181, 1), 140px 60px 0 0 rgba(63, 81, 181, 1),
    150px 60px 0 0 rgba(63, 81, 181, 1), 160px 60px 0 0 rgba(63, 81, 181, 1),
    170px 60px 0 0 rgba(63, 81, 181, 1), 180px 60px 0 0 rgba(63, 81, 181, 1),
    190px 60px 0 0 rgba(63, 81, 181, 1), 70px 70px 0 0 rgba(255, 235, 59, 1),
    80px 70px 0 0 rgba(255, 235, 59, 1), 90px 70px 0 0 rgba(255, 235, 59, 1),
    100px 70px 0 0 rgba(255, 235, 59, 1), 110px 70px 0 0 rgba(255, 235, 59, 1),
    120px 70px 0 0 rgba(255, 235, 59, 1), 130px 70px 0 0 rgba(255, 235, 59, 1),
    140px 70px 0 0 rgba(255, 235, 59, 1), 150px 70px 0 0 rgba(255, 235, 59, 1),
    160px 70px 0 0 rgba(255, 235, 59, 1), 170px 70px 0 0 rgba(255, 235, 59, 1),
    180px 70px 0 0 rgba(255, 235, 59, 1), 190px 70px 0 0 rgba(255, 235, 59, 1),
    60px 80px 0 0 rgba(121, 85, 72, 1), 70px 80px 0 0 rgba(255, 235, 59, 1),
    80px 80px 0 0 rgba(255, 235, 59, 1), 90px 80px 0 0 rgba(121, 85, 72, 1),
    100px 80px 0 0 rgba(121, 85, 72, 1), 110px 80px 0 0 rgba(121, 85, 72, 1),
    120px 80px 0 0 rgba(255, 235, 59, 1), 130px 80px 0 0 rgba(255, 235, 59, 1),
    140px 80px 0 0 rgba(255, 235, 59, 1), 150px 80px 0 0 rgba(121, 85, 72, 1),
    160px 80px 0 0 rgba(121, 85, 72, 1), 170px 80px 0 0 rgba(121, 85, 72, 1),
    180px 80px 0 0 rgba(255, 235, 59, 1), 190px 80px 0 0 rgba(255, 235, 59, 1),
    200px 80px 0 0 rgba(121, 85, 72, 1), 60px 90px 0 0 rgba(255, 235, 59, 1),
    70px 90px 0 0 rgba(121, 85, 72, 1), 80px 90px 0 0 rgba(121, 85, 72, 1),
    90px 90px 0 0 rgba(255, 255, 255, 1), 100px 90px 0 0 rgba(3, 169, 244, 1),
    110px 90px 0 0 rgba(255, 255, 255, 1), 120px 90px 0 0 rgba(121, 85, 72, 1),
    130px 90px 0 0 rgba(121, 85, 72, 1), 140px 90px 0 0 rgba(121, 85, 72, 1),
    150px 90px 0 0 rgba(255, 255, 255, 1), 160px 90px 0 0 rgba(3, 169, 244, 1),
    170px 90px 0 0 rgba(255, 255, 255, 1), 180px 90px 0 0 rgba(121, 85, 72, 1),
    190px 90px 0 0 rgba(121, 85, 72, 1), 200px 90px 0 0 rgba(255, 235, 59, 1),
    60px 100px 0 0 rgba(255, 235, 59, 1), 70px 100px 0 0 rgba(255, 235, 59, 1),
    80px 100px 0 0 rgba(121, 85, 72, 1), 90px 100px 0 0 rgba(3, 169, 244, 1),
    100px 100px 0 0 rgba(0, 0, 0, 1), 110px 100px 0 0 rgba(3, 169, 244, 1),
    120px 100px 0 0 rgba(121, 85, 72, 1), 130px 100px 0 0 rgba(255, 235, 59, 1),
    140px 100px 0 0 rgba(121, 85, 72, 1), 150px 100px 0 0 rgba(3, 169, 244, 1),
    160px 100px 0 0 rgba(0, 0, 0, 1), 170px 100px 0 0 rgba(3, 169, 244, 1),
    180px 100px 0 0 rgba(121, 85, 72, 1), 190px 100px 0 0 rgba(255, 235, 59, 1),
    200px 100px 0 0 rgba(255, 235, 59, 1), 60px 110px 0 0 rgba(255, 235, 59, 1),
    70px 110px 0 0 rgba(255, 235, 59, 1), 80px 110px 0 0 rgba(255, 235, 59, 1),
    90px 110px 0 0 rgba(121, 85, 72, 1), 100px 110px 0 0 rgba(121, 85, 72, 1),
    110px 110px 0 0 rgba(121, 85, 72, 1), 120px 110px 0 0 rgba(255, 193, 7, 1),
    130px 110px 0 0 rgba(255, 235, 59, 1), 140px 110px 0 0 rgba(255, 193, 7, 1),
    150px 110px 0 0 rgba(121, 85, 72, 1), 160px 110px 0 0 rgba(121, 85, 72, 1),
    170px 110px 0 0 rgba(121, 85, 72, 1), 180px 110px 0 0 rgba(255, 235, 59, 1),
    190px 110px 0 0 rgba(255, 235, 59, 1), 200px 110px 0 0 rgba(255, 235, 59, 1),
    70px 120px 0 0 rgba(255, 235, 59, 1), 80px 120px 0 0 rgba(255, 235, 59, 1),
    90px 120px 0 0 rgba(255, 235, 59, 1), 100px 120px 0 0 rgba(255, 235, 59, 1),
    110px 120px 0 0 rgba(255, 235, 59, 1), 120px 120px 0 0 rgba(255, 193, 7, 1),
    130px 120px 0 0 rgba(255, 193, 7, 1), 140px 120px 0 0 rgba(255, 193, 7, 1),
    150px 120px 0 0 rgba(255, 235, 59, 1), 160px 120px 0 0 rgba(255, 235, 59, 1),
    170px 120px 0 0 rgba(255, 235, 59, 1), 180px 120px 0 0 rgba(255, 235, 59, 1),
    190px 120px 0 0 rgba(255, 235, 59, 1), 70px 130px 0 0 rgba(255, 235, 59, 1),
    80px 130px 0 0 rgba(255, 235, 59, 1), 90px 130px 0 0 rgba(255, 235, 59, 1),
    100px 130px 0 0 rgba(255, 235, 59, 1), 110px 130px 0 0 rgba(255, 235, 59, 1),
    120px 130px 0 0 rgba(255, 235, 59, 1), 130px 130px 0 0 rgba(255, 193, 7, 1),
    140px 130px 0 0 rgba(255, 235, 59, 1), 150px 130px 0 0 rgba(255, 235, 59, 1),
    160px 130px 0 0 rgba(255, 235, 59, 1), 170px 130px 0 0 rgba(255, 235, 59, 1),
    180px 130px 0 0 rgba(255, 235, 59, 1), 190px 130px 0 0 rgba(255, 235, 59, 1),
    70px 140px 0 0 rgba(255, 235, 59, 1), 80px 140px 0 0 rgba(255, 235, 59, 1),
    90px 140px 0 0 rgba(255, 235, 59, 1), 100px 140px 0 0 rgba(255, 235, 59, 1),
    110px 140px 0 0 rgba(255, 235, 59, 1), 120px 140px 0 0 rgba(255, 235, 59, 1),
    130px 140px 0 0 rgba(255, 235, 59, 1), 140px 140px 0 0 rgba(255, 235, 59, 1),
    150px 140px 0 0 rgba(255, 235, 59, 1), 160px 140px 0 0 rgba(255, 235, 59, 1),
    170px 140px 0 0 rgba(255, 235, 59, 1), 180px 140px 0 0 rgba(255, 235, 59, 1),
    190px 140px 0 0 rgba(255, 235, 59, 1), 70px 150px 0 0 rgba(255, 235, 59, 1),
    80px 150px 0 0 rgba(255, 235, 59, 1), 90px 150px 0 0 rgba(255, 235, 59, 1),
    100px 150px 0 0 rgba(255, 87, 34, 1), 110px 150px 0 0 rgba(255, 87, 34, 1),
    120px 150px 0 0 rgba(255, 87, 34, 1), 130px 150px 0 0 rgba(255, 87, 34, 1),
    140px 150px 0 0 rgba(255, 87, 34, 1), 150px 150px 0 0 rgba(255, 87, 34, 1),
    160px 150px 0 0 rgba(255, 87, 34, 1), 170px 150px 0 0 rgba(255, 235, 59, 1),
    180px 150px 0 0 rgba(255, 235, 59, 1), 190px 150px 0 0 rgba(255, 235, 59, 1),
    80px 160px 0 0 rgba(255, 235, 59, 1), 90px 160px 0 0 rgba(255, 235, 59, 1),
    100px 160px 0 0 rgba(255, 235, 59, 1), 110px 160px 0 0 rgba(255, 87, 34, 1),
    120px 160px 0 0 rgba(255, 255, 255, 1),
    130px 160px 0 0 rgba(255, 255, 255, 1),
    140px 160px 0 0 rgba(255, 255, 255, 1), 150px 160px 0 0 rgba(255, 87, 34, 1),
    160px 160px 0 0 rgba(255, 235, 59, 1), 170px 160px 0 0 rgba(255, 235, 59, 1),
    180px 160px 0 0 rgba(255, 235, 59, 1), 90px 170px 0 0 rgba(255, 235, 59, 1),
    100px 170px 0 0 rgba(255, 235, 59, 1), 110px 170px 0 0 rgba(255, 235, 59, 1),
    120px 170px 0 0 rgba(255, 87, 34, 1), 130px 170px 0 0 rgba(255, 87, 34, 1),
    140px 170px 0 0 rgba(255, 87, 34, 1), 150px 170px 0 0 rgba(255, 235, 59, 1),
    160px 170px 0 0 rgba(255, 235, 59, 1), 170px 170px 0 0 rgba(255, 235, 59, 1),
    100px 180px 0 0 rgba(255, 235, 59, 1), 110px 180px 0 0 rgba(255, 235, 59, 1),
    120px 180px 0 0 rgba(255, 235, 59, 1), 130px 180px 0 0 rgba(255, 235, 59, 1),
    140px 180px 0 0 rgba(255, 235, 59, 1), 150px 180px 0 0 rgba(255, 235, 59, 1),
    160px 180px 0 0 rgba(255, 235, 59, 1), 120px 190px 0 0 rgba(255, 235, 59, 1),
    130px 190px 0 0 rgba(255, 235, 59, 1), 140px 190px 0 0 rgba(255, 235, 59, 1);
  height: 10px;
  width: 10px;
}
</style>