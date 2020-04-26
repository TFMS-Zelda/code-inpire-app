<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">
                            Users System
                        </h3>
                        <div class="card-tools">
                            <!-- Button Add User -->
                            <button
                                type="button"
                                class="btn btn-success"
                                data-toggle="modal"
                                data-target="#addUserModal"
                            >
                                Add New
                                <i
                                    class="fa fa-user-plus"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Type</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>183</td>
                                    <td>John Doe</td>
                                    <td>11-7-2014</td>
                                    <td>
                                        <span class="tag tag-success"
                                            >Approved</span
                                        >
                                    </td>
                                    <td>
                                        <a href="">
                                            <i
                                                class="fa fa-edit teal"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                        |
                                        <a href="">
                                            <i
                                                class="fa fa-eye purple"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                        |
                                        <a href="">
                                            <i
                                                class="fa fa-trash red"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                    <!-- Modal -->
                    <div
                        class="modal fade"
                        id="addUserModal"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="addUserModal"
                        aria-hidden="true"
                    >
                        <div
                            class="modal-dialog modal-dialog-centered"
                            role="document"
                        >
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="addUserModal">
                                        Modal title
                                    </h5>
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- close modal -->
                    </div>
                </div>
                <!-- /.card -->
            </div>
        </div>
    </div>
</template>
