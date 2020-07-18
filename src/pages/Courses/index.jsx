import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "redux/store";
import { getAllCourses } from "redux/actions.Creators";
import Card from "components/Organisms/Card";
import Banner from "components/Organisms/Banner";

const Courses = ({ courses }) => {
  useEffect(() => {
    store.dispatch(getAllCourses());
  }, []);

  return (
    <>
      <Banner
        color="dark-color"
        image={{
          src:
            "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2017-11/banner-equipo.jpg",
          alt: "Banner Especialidades",
        }}
        title="Nuestros cursos"
        subtitle="Comienza desde cero hoy mismo en tu camino a dominar la tecnología"
      />
      {courses && (
        <main className="ed-grid m-grid-5">
          {courses.map((c) => (
            <Card
              path="cursos"
              picture={c.picture}
              name={c.name}
              key={c.id}
              card={c.id}
            />
          ))}
        </main>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  courses: state.courseReducer.courses,
});
export default connect(mapStateToProps, {})(Courses);
