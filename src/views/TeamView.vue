<script setup>
import JumbotronComponent from '@/components/JumbotronComponent.vue'
import TableComponent from '@/components/TableComponent.vue'
</script>

<template>
  <div id="app">
    <JumbotronComponent Title="Our Team" Description="Meet the members of Team 8297, the WIHI Robowolves!" />

    <div class="about-us">
      <TableComponent RowCount="1" ColumnCount="1" Title="About Us"
        Text="We are the Washtenaw International High School Robowolves, a registered FIRST Robotics team (#8297). Founded in the 2021-2022 season, we have served to impart STEM knowledge to the passionate kids who make up our team and to give them an outlet to showcase their creativity and engineering skills, as well as other skills like marketing and artistic design." />

      <TableComponent RowCount="1" ColumnCount="1" Title="Our Mission"
        Text="Our mission is to foster STEM skills in our members while providing a space for them to display their creativity and engineering capabilities. We have been succeeding in this since the inception of our program, as we have passed down knowledge for three years as of 2026." />

      <TableComponent RowCount="2" ColumnCount="1" Title="Our History"
        Text="After starting our team in the fall of 2022, we’ve gone to Berrien Springs, Kentwood, Jackson, and more locations for our competitions. While we originally had a small roster of around 5-10 members, we have expanded over the last few years into a roster of 35 for the 2026 REBUILT competition season.; In the REEFSCAPE competition during our 2025 season, we earned the Rising All-Stars Award for upcoming teams. This is the culmination of hours upon hours of our team studying and using their creativity to make a spectacular final product in spite of funding issues during that year. " />
    </div>
  </div>
</template>

<style>
.about-us {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.scale-100 img {
  scale: 1;
  object-fit: contain;
}

.scale-90 img {
  scale: 0.9;
  object-fit: contain;
}

.scale-80 img {
  scale: 0.8;
  object-fit: contain;
}

.scale-70 img {
  scale: 0.7;
  object-fit: contain;
}

.scale-60 img {
  scale: 0.6;
  object-fit: contain;
}

.scale-50 img {
  scale: 0.5;
  object-fit: contain;
}

.scale-40 img {
  scale: 0.4;
  object-fit: contain;
}

.scale-30 img {
  scale: 0.3;
  object-fit: contain;
}

.scale-20 img {
  scale: 0.2;
  object-fit: contain;
}

.scale-10 img {
  scale: 0.1;
  object-fit: contain;
}
</style>
