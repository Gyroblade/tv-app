import React, { useEffect, useState } from "react";
import "./Style.css";

function Tv( props) {
  const [data, setData] = useState([]);
  const PAGE_SIZE = 50;

  //get data
  useEffect(() => {
    fetch("http://api.tvmaze.com/shows?page=1".trim())
      .then((it) => it.json())
      .then((result) => setData(result))
      .catch(() => "not found");
  }, []);

  // set pages count
  useEffect(() => {
    props.setPagesCount(Math.ceil(data.length / PAGE_SIZE));
  });

  return (
    <div>
      <table className="table table-striped">
        <thead id="header">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Обложка</th>
            <th scope="col">Название</th>
            <th scope="col">Жанр</th>
            <th scope="col">Страна</th>
            <th scope="col">Длительность</th>
            <th scope="col">Рейтинг</th>
          </tr>
        </thead>
        <tbody>
          {
            data
              .map((it0: object, index0) => {
                return (it0 = { ...it0, num: index0 + 1 }); // add numeration
              })
              .slice(
                (props.currentPageNumber - 1) * PAGE_SIZE,
                props.currentPageNumber * PAGE_SIZE
              )
              .map((it: any, index) => {
                return (
                  <tr key={it.id}>
                    <td>{it.num}</td>
                    <td>
                      <img src={it.image.medium} alt={it.name} />
                    </td>
                    <td>{it.name || "-"}</td>
                    <td>{it.genres?.join(", ") || "-"}</td>
                    <td>{it.network?.country.name || "-"}</td>
                    <td>{`${it.averageRuntime} min` || "-"}</td>
                    <td>{it.rating?.average || "-"}</td>
                  </tr>
                );
              })
          }
        </tbody>
      </table>
    </div>
  );
}
export default Tv;
