@extends('admin.layouts.master')
@section("title") Edit Item - Dashboard
@endsection
@section('content')
<div class="page-header">
    <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
            <h4><i class="icon-circle-right2 mr-2"></i>
                <span class="font-weight-bold mr-2">Editing</span>
                <span class="badge badge-primary badge-pill animated flipInX">"{{ $item->name }} -> {{ $item->restaurant->name }}"</span>
            </h4>
            <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
        </div>
    </div>
</div>
<div class="content">
    <div class="col-md-8">
        <div class="card">
            <div class="card-body">
                <form action="{{ route('admin.updateItem') }}" method="POST" enctype="multipart/form-data">
                    <legend class="font-weight-semibold text-uppercase font-size-sm">
                        <i class="icon-address-book mr-2"></i> Item Details
                    </legend>
                    <input type="hidden" name="id" value="{{ $item->id }}">
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>Item Name:</label>
                        <div class="col-lg-9">
                            <input value="{{ $item->name }}" type="text" class="form-control form-control-lg" name="name"
                                placeholder="Item Name" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">Item Description:</label>
                        <div class="col-lg-9">
                            <textarea class="summernote-editor" name="desc" placeholder="Item Description" rows="6">{{ $item->desc }}</textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>Price:</label>
                        <div class="col-lg-9">
                            <input value="{{ $item->price }}" type="text" class="form-control form-control-lg price" name="price"
                                placeholder="Item Price in {{ config('settings.currencyFormat') }}" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>Item's Restaurant:</label>
                        <div class="col-lg-9">
                            <select class="form-control select-search" name="restaurant_id" required>
                            @foreach ($restaurants as $restaurant)
                            <option value="{{ $restaurant->id }}" class="text-capitalize" @if($item->restaurant_id == $restaurant->id) selected="selected" @endif>{{ $restaurant->name }}</option>
                            @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>Item's Category:</label>
                        <div class="col-lg-9">
                            <select class="form-control select-search" name="item_category_id" required>
                            @foreach ($itemCategories as $itemCategory)
                            <option value="{{ $itemCategory->id }}" class="text-capitalize" @if($item->item_category_id == $itemCategory->id) selected="selected" @endif>{{ $itemCategory->name }}</option>
                            @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">Item's Addons:</label>
                        <div class="col-lg-9">
                            @foreach($item->addon_categories as $addonCategory)
                            <span class="badge badge-flat border-grey-800" style="font-size: 0.9rem;">{{ $addonCategory->name }}
                            </span>
                            @endforeach
                            <select multiple="multiple" class="form-control select" data-fouc name="addon_category_item[]">
                        @foreach($addonCategories as $addonCategory)
                        <option value="{{ $addonCategory->id }}" class="text-capitalize">{{ $addonCategory->name }}</option>
                        @endforeach
                    </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">Image:</label>
                        <div class="col-lg-9">
                            <img src="{{ substr(url("/"), 0, strrpos(url("/"), '/')) }}{{ $item->image }}" alt="Image" width="160" style="border-radius: 0.275rem;">
                            <img class="slider-preview-image hidden" style="border-radius: 0.275rem;" />
                            <div class="uploader">
                                <input type="hidden" name="old_image" value="{{ $item->image }}">
                                <input type="file" class="form-control-lg form-control-uniform" name="image" accept="image/x-png,image/gif,image/jpeg" onchange="readURL(this);">
                                <span class="help-text text-muted">Image sizes: 162x118 or 324x237 or 486x355 and so on.</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">Is Recommended?</label>
                        <div class="col-lg-9">
                            <div class="checkbox checkbox-switchery mt-2">
                                <label>
                                <input value="true" type="checkbox" class="switchery-primary recommendeditem" @if($item->is_recommended) checked="checked" @endif name="is_recommended">
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">Is Popular?</label>
                        <div class="col-lg-9">
                            <div class="checkbox checkbox-switchery mt-2">
                                <label>
                                <input value="true" type="checkbox" class="switchery-primary popularitem" @if($item->is_popular) checked="checked" @endif name="is_popular">
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">Is New?</label>
                        <div class="col-lg-9">
                            <div class="checkbox checkbox-switchery mt-2">
                                <label>
                                <input value="true" type="checkbox" class="switchery-primary newitem" @if($item->is_new) checked="checked" @endif name="is_new">
                                </label>
                            </div>
                        </div>
                    </div>
                    @csrf
                    <div class="text-left">
                        <div class="btn-group btn-group-justified" style="width: 225px">
                            @if($item->is_active)
                            <a class="btn btn-primary" href="{{ route('admin.disableItem', $item->id) }}">
                            DISABLE
                            <i class="icon-switch2 ml-1"></i>
                            </a>
                            @else
                            <a class="btn btn-danger" href="{{ route('admin.disableItem', $item->id) }}">
                            ENABLE
                            <i class="icon-switch2 ml-1"></i>
                            </a>
                            @endif 
                        </div>
                    </div>
                    <div class="text-right">
                        <button type="submit" class="btn btn-primary">
                        UPDATE
                        <i class="icon-database-insert ml-1"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<script>
    function readURL(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                $('.slider-preview-image')
                    .removeClass('hidden')
                    .attr('src', e.target.result)
                    .width(120)
                    .height(120);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(function () {
        $('.summernote-editor').summernote({
                   height: 200,
                   popover: {
                       image: [],
                       link: [],
                       air: []
                     }
            });
        $('.select').select2({
            minimumResultsForSearch: Infinity,
        });
    
         var recommendeditem = document.querySelector('.recommendeditem');
        new Switchery(recommendeditem, { color: '#f44336' });
    
        var popularitem = document.querySelector('.popularitem');
        new Switchery(popularitem, { color: '#8360c3' });
    
        var newitem = document.querySelector('.newitem');
        new Switchery(newitem, { color: '#333' });
        
        $('.form-control-uniform').uniform();
        $('.price').numeric({allowThouSep:false, maxDecimalPlaces: 2 });
    });
</script>
@endsection