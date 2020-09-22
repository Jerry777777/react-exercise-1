import React from 'react';

class Education extends React.Component {
  render() {
    return (
      <div className="education">
        <h3>EDUCATION</h3>
        <ul>
          <li>
            <p className="year">1990</p>
            <section>
              <p>
                <strong>I was born in Katowice</strong>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, exercitationem, totam, dolores iste dolores est aut
                modi.
              </p>
            </section>
          </li>

          <li>
            <p className="year">2005</p>
            <section>
              <p>
                <strong>Secondary school specializing in artistic</strong>
              </p>
              <p>
                Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur
                ipsum ducimus quibusdam quis voluptatibus.
              </p>
            </section>
          </li>

          <li>
            <p className="year">2009</p>
            <section>
              <p>
                <strong>First level graduation in Graphic Design</strong>
              </p>
              <p>
                Aspernatur, mollitia, quos maxime eius suscipit sed beatae
                ducimus quaerat quibusdam perferendis? Iusto, quibusdam
                asperiores unde repellat.
              </p>
            </section>
          </li>

          <li>
            <p className="year">2012</p>
            <section>
              <p>
                <strong>Secondary level graduation in Graphic Design</strong>
              </p>
              <p>Ducimus, aliquam tempore autem itaque et accusantium!</p>
            </section>
          </li>
        </ul>
      </div>
    );
  }
}

export default Education;
