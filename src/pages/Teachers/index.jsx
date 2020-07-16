import React, { useEffect } from "react";
import Banner from "components/Organisms/Banner/index";
import { getAllTeachers } from "redux/actions.Creators";
import store from "redux/store";
import { connect } from "react-redux";

const Teachers = ({ match, teachers }) => {
  useEffect(() => {
    store.dispatch(getAllTeachers());
  }, [match]);
  return (
    <>
      <Banner
        color="first-color"
        image={{
          src:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAtgMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYDBwj/xABHEAABAwIEAgUIBQkGBwAAAAABAAIDBBEFEiExBkETUVJhoQcUInGBk7HRFiMyM5EVJDRCU1WDksEXRFRi0vFDcoKUouHw/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAEEAgMFBgf/xAA3EQACAgEBBgIIBQMFAQAAAAAAAQIDEQQFEhMhMVEjQQYUIlJhcYGhFTI0kbFCwfAzY9Hh8ST/2gAMAwEAAhEDEQA/APcUAIAQAgBACAEAIAQAgBACAEAiAVACAEAIAQAgECAVAIgFQCFAKgBAcqmQwwPkAuWi6lLLMZvdjkr48RnMrWuZHlJA0vf4rY61grq+TeC1C1FoEAICFXVb6UsLYw5p3KzhHeNNtjhjkdKKofUQ53tDSTpbmFElh4Mq5uUcskFwG5WJsEDgdiE5kZFKElT57U9GJM9OAXWynf1rbuLOCq7Z4zlE6hmdPTNkfa5J22WElh4N1UnKOWdy9o3IUYM8nN029gp3THeEjky3BuVLiFIe2Vrh1LFpolSTHhQZCoAQAgBAMc9oF7gqcEZBsjTzRoJjnAOaQQCDyKgNZOQp4WuuImA9YaFOWRuR7HW4UGQt0Awu120CEA5rJG2c0OaeRCZwGk0Nc5sbLNFuoKUskNpHEkuNys+hhnIm2qkge2U6Ai/esWuxkpHI4dA9zXZQOsDYpvtGLpg3kkQsbG3o2gAN6li3k2RSXJHQ5VBkI8xxtL5CGtG5KASJ8Urc0Tmub1hAOyhAKEAqAEAIBjnN2cR7ShDEbkcbANPqU8xyHZG9kJljCF2Cgk4PkJOhsFmka3IyXE/EVVhFW4Mk+rAbYZQ43KrSdjt3IFLU6l0vJSfT+r7TvdNWXC1HdFP8U+IDj+qF9Xa7/UtThajuifxX4h/aBV8nO901OFqO6H4p8RPp7Unm73QU8PU90Y/ia7h9PKnv9y1OHqe6H4mu408dVB3zHu6FqcPU90PxNdxfp5U9bvctTh6nuh+JruObx/VjYu901RwtR3RK2ou4o4/qs27rnT7oKOFqO6J/FOzOnGvGFfhvB4lhANbV1Pm8cgAAj0Lr257W9q2aPNqzLyOlC2UoZ8zxyuxDFWB1PiUtUGvOZ0csr2hx67Xt4K/Bwl+XBE4WQeJ5RpfJxxtUcPYiyjLXPw+rlYx0T3E5CfRDm9XIHlb1LCytSXIVzaeD6Gjdnja4AgOAOqqFsegBACACgKvEG2qukkgMsXR2uOW62wfLCZWtXt5ayhMJie2YvMRY0s39qTawRRFqTZaEgblai0c3FxBsLDrKlEPoR7dZPs0Ww0nnnlF0qHb/APD+BVaH6n6HK2l0f0MarpwgQAgBANa8Oc9o3YbH4pgycWkn3HIYggBAA3UPoyV1Nbj2CvxnAaFkcrIzT4i2Y576tANxoufTcqqXldco9ns+iVzSXk8k98EL/tQxuHe0LnKTXQ9W+fUoa3hyTFuMcBDKf8xgf0k77gDQ5g3vvl8V0dDbGEZJvmzk7TrlNxklyXX7HsQIsDdWDni3QAgFQAgEIBFigENmi/UgGtF/SO/wQhIWQ2Ye9Suob5EZbDUed+Ub9If/AA/gVWh+pfyOTtLo/oY1XThAgBACAhvd0WKt7M8WX/qabjwJ/BT5FlLe077p/ZkxQVgQAgDmofQldT1bh+njqsLlilFxn36lz6IKyrDPYaK2VSUosrKiJ1PM+KUgOZvqufODg3Fnq67FZBSXmXWC0LGxRVzn5nOGZgGwB2PrV/TadYU2cnXauTk6l0LfEGSmnYI82/pAHUq5BrPM5dyk4rdOFBT1DJw54c1ltbuvdZTawYVQmpZZaDZai0CAVACAY/8AVvtfVCGKXBoRLIbwR3vLz3LYlg1t5GqSDzvyjfpDv4f9VWh+pfyOVtLo/oY3mrpwQQAgBAV+NXjp46huroJWv9Y2I8VlEuaPDk63/UieCHAFpuCLrEqNYeBUIBABIGrjYDcphy5IldTQ0vF9dTNYKNrI4RJnILQXPHVrtdW9LsxV1Ym8s6Etp2Qe7Domb19Fh+MPixKKdhp5GB7jbq7+XeuJdo3xeZ7DTbSSoW59DMY5xk+mrmU2B9CKSm9G7mZhIe7u+K7mm2fFV+11/g8xrdrzd3h80vuabhTiqnx9roXNEFbELvhJuCO008x8FS1GnlS/gdLSayGojy5M0gsq5dFQAgBACARwu0g80BGLi7noti6GtszmJcSCF09PTxHOwlokc4WHIkBU7dVjKiirPUYykP4bxR9Q10FbPnnJvHm3I5hTprt72ZMUWNrEnzMz5Rv0h38P+qzh+pfyKO0uj+hjeaunCBACAEAhpTWg0o3m9AdxPNQ5KC3n5FjSxlO+EYdW0W0uCzUmD0ge+N01LCGSiPZwBPpC6pU6pStcfJvken2xseXAV1fWPVf3/wCSpBBFxsrzWOTPICoCLUSZjlH2R4q9RVurefU3QjjmSmizW+oLpR6FaXUeHvDCwOcGk6tB0PsUYWc4Ck0sZEt1LIg5QVs+G4nFWUb8s8JDmne/ce47KrdFTzF+Zd005V4nHqe7YJicOL4bBXU59CVty2+rTzafUVwZwcJOLPWVWq2CmvMnrE2AgBACAjV9dTUFOZ6udkMYIGZ5sLoYWWQrjvTeEQsSrWUtBJVxFsoa0ObldcG5AB9WqTnuQbNVk0lvLmYGd5llMjjd0jiXHa99VyU8ttnOk8lzwtBHLiBkkf6UTczGjS52v7FY0sU55N9Ecyyyq8o/6Q/+H/VWo/qfoVtpdH9DGq6cEEAIAQDo3ujkY9mjmuDh6wsZJSWGZ1zcJqa6rmdKzEMQq/OWyyx9FLkAYxuUgNvzvzv4BRp6aqpqWDsanbeo1NW5Plnrj/P3Ktj3RnT2grqzrjNczmNJnV9ReOzRqVohp3GXMwUMM4tBc4NG5VqUt1ZfkbCxc3I4sOuU2v6lag04popy5NkmikpYS51VSOqewBMYwPXYXK5O0tXbRNKPRnsfRnYum2jVOdnWL+2PmiScWp4/usJw1gHOZrpT/wCTreC5EtdfLzPZVejWhr57v2S/tn7i4vUvr+HBM+KnY+nrQ0CGFsYDHMOlgOtpVvZ9kpWe0zhek+jhp6Uq1y6/fH9yz8luNupMTfhcz7QVXpR3/VkHzHwCu6yrMd5eR5nZt+7Phvo/5PWRsuYdwVAIgFQGJ8prax+GwOhANJHJmnI3Dtm+zU/iFnA5G1uI61u/l8/7GDwquOGVJkbEHslidHIy9tD39xsUnHeg4nGou4Ms+TReN1dcHTLce1cZ8jrIt+H5aekndU1DpC4DKwNHXuV0NBp3ZmcfI2V2QrlmRC4thdjEpdSFoByfbNtldjorVdv/AAK2rmruUTJ+YS+bSVF2ZI7X113srE6JwWWcjce65EVaTAEGQQZBBkEGTlLC2TUaFb67pQ69DKM8EcxSA2y/grSur7mzfj3JFPDkcHOsXEhVb7d9Yj0MHPLJM/30n/OfiutV/px+SNU/zMWGPpXZC9jL6Xe6wXI21H2Iz7M9v6Eajcuur7pP9n/2c6rDPNHWqY7X1BLrg+pcCCc3iKyz6HLV0wrc5ySS7nVlfStwyupJRI4zGN0ZZsHNzWvfl6S7Gi0l1ct6XI8P6R7Y0Wrr4VMt5rPNLl5d/kV1JLLDVQzU9+mjka6O2+YEW8V1pJOLTPF1tqaceuT6KiLnRMc4ZXEAkdRXBPWLoOQkVACApuI8LONYPPRtm6NznZg7cEtOx7tFKeGVtVRx6XBM8ZGoILSHEbfFbfM8l5YNDh0sk9KHuABHo3HO3UuTqIqM8I62nk5w5lNNWYk+sLm9LDDa2Rt/jzK3VxuhH2c8z6FodNsmilRnKMn5t4F87rgfvqn8XLP/AOn4lvGx+0PsRpX1Qbka6UMcbOBvY6/7qWtTLk8sx3dirqq/saDF6nh3ATRw4rNI2eelZOBHTdJobjcd4KzjpbJLO8zwt+k0/Flu4xl4I1HjnCNZUNp4J5zI4OIzUZA9FpcfAFY2aadcHOU3hf8AhhHRVSeEWuFs4dxWihq6KsY6OV5js6DK5hHNwOw21PWtnqduWt5mE9PRDDZZwcP4TUTCKGspnynUR5QCfUsHpbI9ZMxjTppPCaJY4Mpz+tH7sKOBL32bfUayHhnD+GYpTuqKGeKWJrywuEYtmG4UvTzX9bIWjr81j5rBM+htP2o/dhRwJ++yfUqg+htPf7cfuwnq8vfY9SrPOKpuSpmZe+V7hf1FesrWIJfBHl7VibRYYFWwUk0nnAs1w0fa9iFyds0TsqU4+R6T0WvjDVOnHOa5fQfxFiNPiFG2npy4u6QOLiLCwv8ANcPQW+rW78j2209i36yjhxaXPPMh8O8OyYxXCB75I47XdI2O43Gl9trrrraG88KP7nmNR6MvTV79lyfwXX/PoeocP8GYPgz2zxROnqW/ZmmNy31DYfFardROzkzXRo6quaWWaQbLQWxUAIAQHPXM4H1oQedca4HfEmT4RBCOU0bNDmve9tvwVeW0NNXJwnLDRy9bsq+ySsohyfUh4LQ1OHUss1VRPqXMf9VSh4GbvJOmXrVW3XaOc1LeLOytkX5cbvZXlnn/AAdpfKTPEy7sGp9NCBOdNbdlXlfW+56hbAvf9cfucf7UZf3NF/3B/wBKnjw+JL9H7/fj9yurePpqnApMMnomvzxGN9S993kc3Wtv1G+m62vU1Rt3op4K1fo3rJ0KNk4qTXPqy0x/gnC66jpaqsmqXSwUlmlsrWNsXOfzaebit07W4ykuRxNLQqtRCmXNJ/uYOClgpZWSwUdpA3R7D2gQfAlcud1k04yfI99HZWji8qtIvuGabzfDs8UQY15L2MBsDf8A+Gq7tSljL5nyrac1LVTUVhdh7Gz4jIZcwglhcMpaNQd997rDDs6nLW9N56NGuxvH8UocN4frqcsLZasQVeZhN7hwv+IWtQSk4s9FXZKdKnnmNwKvAo6PDw1rmTPdJUl1xZotbb1fDrVCtt4ij0+0aYJ2XT5JYS+Zq21uZocylqnNIuDkGvitvFXY4XN9EKKs/wCDqv5R804vwY59jxvENcQqdCPrn6H1lenqfsL5HjL+VkvmyONCk4Rmt2SyhTdZRYrK3hrzF2WuOnqh+WK/Ys27S1l3+pbJ/Vnonk0nz4ZWQE6xzB1u4j/0Vz9fHE00jq7Jscq5JvozcQ/YXNl1OzHodFBkCARACAa8W9IbhCDPY1EOnbI0lue+a3Mheb21TGFkZxX5joaGblFp+RCp2xslElTKRBGC+QuOgaBckqjs+lX6mMMcixqbOHVKWSPJ/Z+TZ4wckHXNGN/wXulVelhJnC9bq85/cbbye9nBfdt+Snh6jsx63V7/ANzhiA4L8xm/JDcN/KGX826BgD+k/Vtp1+zrUxruz7S5GM9VXu+zPn8yo4nxzEYuMKLCoZrUtRRl72CMude79i3UbBRZFcOQ0T3tRFsy8R+rZ6guMz6e+pa4JU5YnU0pAEQu15NgW32J5EXXb0l6sjjzPmnpFsuWnt40ej5fYtKeKJ9YGNfGJKggAB4131+Ktcllnm40ts7eUZzouC2UrNGsni9JuhJBvf8AFaqoqVmWdJzddaivIqPJ9iNRUuxOSpd0nRQNcAABvmvy7h+Cm3S1143FjJts2jqNUsWyykaiPjeeKJkfmsJDWgAlxvoq3qklyUkYR1tmPyDvpzUH+6Q/zu+aeqy95E+u2e4eK4hjeIOxGrcJyA6eQgZQbXcdNlejbOKSyaZaSib3nHmyMcYxD/En+VvyWXHs7kepaf3f5EOLYgf70/2AfJRxp9yfU6PdPSvIdX1E+JYzFUzOeDBE8ZuVnOH9VV1EnLGS1p6q687iwezRfdiypvqXo9BygkVAIgBAQqiOte89C9jGDbrPgs1u+ZpmrG/ZZFqqCsqGtzuiJB3uudtTSvVVxVfVMs6OyVUm5+ZXV3D9bU07o2Pia7fVx+Sr7K0Nml1HFtx0J2lP1mnh190WkFPNHCxhw2nBa0CzZRb2eiuy2m+pVipJY3UP6GX93Re9HyUcu5l7XuiPglcxzRh8IJFr9KPkpWM9TGSbWN0xHE3A+MYjxPRYpS+ZPhgp+icyaQgk3ceye0FnOxODiZ6SHCujOXRMit8nuNBoBkpNBb7x3yXP4Ej1/wCOabsyZQ8HcQ4dHVPopqNlTLF0bHueSG+kLnbqBVjSxVc8z6HI21rq9bRGurKaeeZ04V4U4mwmqkbW1NFLSTPfJI1p9ISONy4eiOfJdCy+qS5LmeZjpbU+bJvGXCuI41gvmdG6AS9K193vIFh7FjVfGEssmemnJYKfhfgDGcMgxKOpnpmOqoWsjfHI45SCd9B1qdVqIWw3Ym7QUvT3xsmspPODR4FgU2G4ZHS1OD0M8rCbyiQHPrubtvdc6EcLDR3NXqo33OyM2k/Lt9yf5gP3FSfzs/0rLHwK+/8A7j+//J858XwGl4qxaExiPLVP9Buzbm9vFdGt5gjk2/nZULM1ggPRvIlBJUY1ibIyB+atOp/zharZKOMmUYOaaR7bh1NLTNe2RwINiLFVZyTfIsUwlBYZNWBuBACAEAIAQDQRe1wgHIAQAgBACAEAIAQAgBAIdkB4nxz5OeIsW4vxPEMNpYX0lRIx8bnTtafu2g6H/MCrNd0VHDK9lbk8orMK8lnFEWLUElXR04pmVUTpj5w0+gHgu056XWUr445ERplnmRneSfiwOLWUkDmA2aTUt1HJSr4YMXTLJtvJRwbjnDONVdRi1PFHDNT9G0slDjmzA8lqusjJLBtqg45yeprQbgQAgKPiNmNu82/Ijsts3S6t12t9r2rbVw+e+VtQruXCKXouNf2vjEt2dOVd3W9/4DouNf2vjEmdOTjW9/4DouNf2vjEmdORu63v/AzAW4h+WpRNm85yu6QnbNpfuWdjr3F2K+nV3HeepqMuI9rxC0eEdHF4ZcR7XiE8IYvDLiPa8QnhDF4ZcR7XiE8IYvDLiPa8QnhDF4ZcR7XiE8IYvDLiPa8QnhDF4ZcR7XiE8IYvDLiPa8QnhDF4ZcR7XiE8IYvDLiPa8QnhDF4mTEevxCeEMXhkxHr8QnhDF4uTEevxCeEMXhkxHr8QnhDF4ZMR7XiE8IYvDJiPa8QnhDFxPbcAX3WgtIcUAiAEAqATmiJFQgEAIAQAgBACAEAIAQAgBACAEAIAQAgBAf/Z",
          alt: "Banner  profesores",
        }}
        title="Nuestros Profesores"
        subtitle="Este plantel docente esta altamente calificado para guiarte en tu
              educacion"
      />
      {teachers && (
        <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
          {teachers.map((t) => {
            return (
              <article key={t.id}>
                <div className="s-px-4">
                  <div className="img-container circle s-mb-2">
                    <img src={t.picture} alt={t.id} />
                  </div>
                </div>
                <div className="s-center">
                  <p className="t3 s-mb-1">{t.name}</p>
                  <p>{t.country}</p>
                </div>
              </article>
            );
          })}
        </main>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  teachers: state.teacherReducer.teachers,
});
export default connect(mapStateToProps, {})(Teachers);
