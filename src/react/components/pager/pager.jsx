var Pager = React.createClass({
    mixins: [gearz],
    render: function () {
        var page = this.get("page");
        var pageCount = this.props.count / this.props.pageSize,
            children = [];

        for (var it = 0; it < pageCount; it++) {
            var setter = this.setter("page", it + 1);
            children.push(
                <div
                    className={[page - 1 == it ? "current" : "", "item"].join(' ')}
                    onMouseDown={setter}
                    key={"pg-" + it + 1}>{it}</div>);
        }

        return (
            <div className="pager">{children}</div>
        );
    }
});
