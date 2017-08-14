import React, { Component } from 'react';

class RowPacientes extends Component {
	render() {
		return (

					
            <div class="col-lg-12">
              <section class="box ">
                  <header class="panel_header">
                      <h2 class="title pull-left">Hover Table</h2>
                  </header>
                  <div class="content-body">    <div class="row">
                          <div class="col-md-12 col-sm-12 col-xs-12">

                              <table class="table table-hover">
                                  <thead>
                                      <tr>
                                          <th>#</th>
                                          <th>First Name</th>
                                          <th>Last Name</th>
                                          <th>Username</th>
                                      </tr>
                                  </thead>
                              </table>

                          </div>
                      </div>
                  </div>
              </section>
          </div>
		);
	}
}
export default RowPacientes
