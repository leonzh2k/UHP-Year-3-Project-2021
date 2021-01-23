//strat: keep context menus in dom but hidden, make them show up only when called
export function createGraphAreaContextMenu() {
    var $graphAreaContextMenu =  $( "<div id='graph-area-background-context-menu' class='graph-area-context-menu'></div>" )
    var $createNodeLabel =  $( 
        `
            <div id='create-node-label' style='color:white; font-size:24px; cursor:pointer;'>
                <img src='../images/plus-svgrepo-com.svg' height=50px width=50px />
            </div>" 
        `
    )
    $createNodeLabel.appendTo($graphAreaContextMenu);
    $graphAreaContextMenu.appendTo( "#graph-area" );
    $graphAreaContextMenu.hide();
    // $contextMenu.css('top', mouseY);
    // $contextMenu.css('left', mouseX);
    return $graphAreaContextMenu;
    
}

export function createNodeContextMenu() {
    var $nodeContextMenu =  $( 
        `
            <div id='node-context-menu' class='graph-area-context-menu'>
                <img id='rename-node-label' height=25px width=25px src="../images/pencil-svgrepo-com.svg" style='color:white; font-size:18px; cursor:pointer;'/>
                <img id='delete-node-label' height=25px width=25px src="../images/trash-bin-svgrepo-com.svg" style='color:white; font-size:18px; cursor:pointer;'/>
                
            </div>
        ` 
    )
    // $deleteNodeLabel.appendTo($nodeContextMenu);
    // $renameNodeLabel.appendTo($nodeContextMenu);
    $nodeContextMenu.appendTo( "#graph-area" );
    $nodeContextMenu.hide();
    // $contextMenu.css('top', mouseY);
    // $contextMenu.css('left', mouseX);
    return $nodeContextMenu;
}

export function showGraphAreaContextMenu($graphAreaContextMenu, mouseX, mouseY) {
    $graphAreaContextMenu.css('top', mouseY - 25);
    $graphAreaContextMenu.css('left', mouseX - 25);
    $graphAreaContextMenu.show();
    return $graphAreaContextMenu;
}

export function showNodeContextMenu($nodeContextMenu, mouseX, mouseY) {
    $nodeContextMenu.css('top', mouseY);
    $nodeContextMenu.css('left', mouseX);
    $nodeContextMenu.show();
    return $nodeContextMenu;
}

export function hideContextMenus() {
    $(".graph-area-context-menu").hide();
}