---
title: "LaravelでStorageを使ったファイルおよびディレクトリの操作をまとめてみた"
date: "2019-07-04"
thumbnail: "/images/thumbnail02.jpg"
---

# はじめに
Laravelでファイルを取り扱った個人開発を行っている際にファイル保存の方法を調べた際に気になったため、調べてまとめました。
駅に貼られているチラシを見るように流し見していただければ幸いです。

# Storageとは？
LaravelではFlysystem PHPパッケージによって提供されているファイルシステムを抽象化させたものを使えるように設定されている。
設定ファイルは`conofig/filesystems.php`にあり、環境によって保存先のディレクトリが分けられている。らしい。　(引用：参考文献1)

今回はそんな`Storage`を使ったファイルおよびディレクトリの操作方法をまとめてみる。

# 基本的な書式
`Storage`は`Facades`を拡張して使われるもの。
なので書式は基本的に

```php
 Storage::◯◯('hoge', 'fuga');
```
になる。
# ファイル関連
## ファイル保存
#### Storage::put
```php
Storage::put('file_name', $file);
```
で`$fileを'file_name'という名前で保存`することができます。

#### Storage::putFile
```php
Storage::putFile('dir', $file);
```
で`$fileを'dir'に保存`することができます。`Storage::putFile`では
ファイル名は自動で設定されます。
また、

```php
Storage::putFile('dir', $file, 'public');
```
とすることで`$fileを一般公開したい`という意思を伝えることができます。

#### Storage::putFileAs
```php
Storage::putFileAs('dir', $file, 'file_name');
```
で`$fileを'dir'に'file_name'という名前で保存`することができます。`Storage::putFileAs`では自分でファイル名は設定することができます。

## ファイル書き込み
#### Storage::prepend
```php
Storage::prepend('file_name', 'hogegeeeee');
```
で`file_nameの先頭にhogegeeeeeを書き込む`ことができます。

#### Storage::append
```php
Storage::append('file_name', 'fugagaaaaaa');
```
で`file_nameの末尾にfugagaaaaaaを書き込む`ことができます。

## ファイルのコピー
#### Storage::copy
```php
Storage::copy('old dir/file_name', 'new dir/file_name');
```
で`old dirにあるfile_nameをnew dirにコピー`することができます。

## ファイルの移動
#### Storage::move

```php
Storage::move('old dir/file_name', 'new dir/file_name');
```

で`old dirにあるfile_nameをnew dirに移動`することができます。
また、

```php
Storage::move('file_name', 'new_file_name');
```

で`file_nameの名前をnew_file_nameに変更`できます。

## ファイル削除

#### Storage::move

```php
Storage::delete('file_name');
```

で`file_nameを削除`することができます。
また、

```php
Storage::delete(['file_name', 'file_name2']);
```
で`file_nameとfile_name2を削除`することができます。

#ディレクトリ関連
## ディレクトリ内の全ファイルを取得
#### Storage::files

```php
Storage::files('dir');
```
で`dirの中の全ファイルを配列で返す`ことができます。

#### Storage::allFiles

```php
Storage::allFiles('dir');
```
で`dirの中のサブディレクトリの中も含めた全ファイルを配列で返す`ことができます。


## ディレクトリ内の全ディレクトリを取得
#### Storage::directories

```php
Storage::directories('dir');
```
で`dirの中の全ディレクトリを配列で返す`ことができます。

#### Storage::allFiles

```php
Storage:: allDirectories('dir');
```
で`dirの中のサブディレクトリの中も含めた全ディレクトリを配列で返す`ことができます。

## ディレクトリ作成
#### Storage:makeDirectory 
```php
Storage:makeDirectory('dir');
```
で`dirという名前のディレクトリを作成する`ことができます。

## ディレクトリ削除
#### Storage:deleteDirectory 
```php
Storage:deleteDirectory('dir');
```
で`dirという名前のディレクトリを削除する`ことができます。
# 終わりに
今回はStorageを使ったファイルおよびディレクトリ操作についてまとめてみました。
完全に自己満の記事ですが、何かの役に立てれば幸いです。
それでは、またどこかで。笑

#参考文献
1. [Laravel 5.5 ファイルストレージ](https://readouble.com/laravel/5.5/ja/filesystem.html)

